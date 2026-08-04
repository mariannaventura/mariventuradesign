import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const WEB3FORMS_ACCESS_KEY = "200bb56e-09fd-4c79-8e6b-89f12377c52c";

const inquirySchema = z.object({
  nome: z.string().min(2, "Conta seu nome completo."),
  email: z.string().email("E-mail inválido."),
  telefone: z.string().optional(),
  empresa: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().optional(),
  pais: z.string().optional(),
  mensagem: z.string().optional(),
});

type InquiryValues = z.infer<typeof inquirySchema>;

type Status = "idle" | "submitting" | "success" | "error";

export function ServiceInquiryDialog({
  servico,
  title = "Quero esse pacote",
  children,
}: {
  servico: string;
  title?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<Status>("idle");
  const [showMore, setShowMore] = React.useState(false);

  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      cidade: "",
      estado: "",
      pais: "",
      mensagem: "",
    },
  });

  async function onSubmit(values: InquiryValues) {
    setStatus("submitting");
    const localizacao = [values.cidade, values.estado, values.pais]
      .map((v) => v?.trim())
      .filter(Boolean)
      .join(", ");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Novo interesse — ${servico}`,
          from_name: "Site Mari Ventura",
          servico,
          nome: values.nome,
          email: values.email,
          telefone: values.telefone || "não informado",
          empresa: values.empresa || "não informado",
          localizacao: localizacao || "não informado",
          mensagem: values.mensagem || "não informado",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Falha ao enviar.");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) {
      window.setTimeout(() => {
        setStatus("idle");
        setShowMore(false);
        form.reset();
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl">
        {status === "success" ? (
          <div className="flex flex-col items-center text-center gap-4 py-8">
            <CheckCircle2 className="h-12 w-12 text-accent" />
            <div>
              <DialogTitle className="font-display text-2xl">Interesse enviado!</DialogTitle>
              <DialogDescription className="mt-2">
                Obrigada pelo interesse. Vou ler com calma e volto a falar com você em breve.
              </DialogDescription>
            </div>
            <Button variant="outline" className="rounded-full mt-2" onClick={() => setOpen(false)}>
              Fechar
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-xl">{title}</DialogTitle>
              <DialogDescription>
                <span className="text-accent font-medium">{servico}</span> — me conta o básico
                e te retorno assim que possível.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="voce@empresa.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setShowMore((v) => !v)}
                  className="flex items-center gap-1.5 text-sm font-medium text-accent hover:underline underline-offset-4 cursor-pointer"
                  aria-expanded={showMore}
                >
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", showMore && "rotate-180")}
                  />
                  {showMore ? "Ocultar detalhes" : "Adicionar mais detalhes (opcional)"}
                </button>

                {showMore && (
                  <div className="space-y-4 border-l-2 border-border pl-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="telefone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefone</FormLabel>
                            <FormControl>
                              <Input placeholder="(00) 00000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="empresa"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Empresa</FormLabel>
                            <FormControl>
                              <Input placeholder="Nome da empresa (se tiver)" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="cidade"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cidade</FormLabel>
                            <FormControl>
                              <Input placeholder="Cidade" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="estado"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Estado</FormLabel>
                            <FormControl>
                              <Input placeholder="Estado" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pais"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>País</FormLabel>
                            <FormControl>
                              <Input placeholder="País" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="mensagem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Conte um pouco sobre a empresa e o que você precisa</FormLabel>
                          <FormControl>
                            <Textarea
                              rows={3}
                              placeholder="Fale um pouco do seu negócio..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {status === "error" && (
                  <p className="text-sm font-medium text-destructive">
                    Não foi possível enviar agora. Tenta de novo em instantes.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className={cn(
                    "w-full rounded-full bg-sky text-sky-foreground hover:opacity-90 transition-opacity",
                  )}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
                    </>
                  ) : (
                    "Enviar interesse"
                  )}
                </Button>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
