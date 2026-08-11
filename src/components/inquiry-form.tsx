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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const WEB3FORMS_ACCESS_KEY = "200bb56e-09fd-4c79-8e6b-89f12377c52c";

/** Prazo prometido na página. Só mude junto com o texto que aparece em Contato. */
export const PRAZO_RESPOSTA = "até 2 dias úteis";

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

type InquiryFormProps = {
  /** Vai no assunto do e-mail: diz de onde a pessoa saiu. */
  contexto: string;
  /** Quando o assunto já é livre (Contato), a mensagem sai de dentro do opcional. */
  mensagemEmDestaque?: boolean;
  textoBotao?: string;
  /** Deixa quem envolve o formulário reagir ao sucesso (fechar diálogo, por ex.). */
  aoEnviar?: () => void;
};

export function InquiryForm({
  contexto,
  mensagemEmDestaque = false,
  textoBotao = "Enviar interesse",
  aoEnviar,
}: InquiryFormProps) {
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
      // Sem timeout a promessa fica pendurada para sempre num celular que perdeu
      // sinal, e o botão continua em "Enviando…" sem nunca resolver.
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 15000);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Novo interesse — ${contexto}`,
          from_name: "Site Mari Ventura",
          contexto,
          nome: values.nome,
          email: values.email,
          telefone: values.telefone || "não informado",
          empresa: values.empresa || "não informado",
          localizacao: localizacao || "não informado",
          mensagem: values.mensagem || "não informado",
        }),
      });
      window.clearTimeout(timeout);
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Falha ao enviar.");
      setStatus("success");
      aoEnviar?.();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center gap-3 py-8 text-center"
        // Leitor de tela precisa ser avisado da troca; ela acontece sem recarregar.
        role="status"
      >
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <p className="font-display text-2xl font-semibold">Mensagem enviada!</p>
        <p className="max-w-sm text-muted-foreground">
          Obrigada pelo contato. Respondo em {PRAZO_RESPOSTA} — se não chegar nada, vale
          conferir a caixa de spam.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      {/* noValidate desliga o balão nativo do navegador, que sequestrava o envio e
          escondia as mensagens de erro escritas em português. */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" autoComplete="name" {...field} />
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
                  <Input
                    type="email"
                    placeholder="voce@empresa.com"
                    autoComplete="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {mensagemEmDestaque && (
          <FormField
            control={form.control}
            name="mensagem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>O que você precisa</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    placeholder="Conte um pouco do projeto — tipo de peça, prazo, e uma ideia de orçamento se já tiver."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <button
          type="button"
          onClick={() => setShowMore((v) => !v)}
          className="flex cursor-pointer items-center gap-1.5 text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          aria-expanded={showMore}
          aria-controls="detalhes-opcionais"
        >
          <ChevronDown className={cn("h-4 w-4 transition-transform", showMore && "rotate-180")} />
          {showMore ? "Ocultar detalhes" : "Adicionar mais detalhes (opcional)"}
        </button>

        {showMore && (
          <div id="detalhes-opcionais" className="space-y-4 border-l-2 border-border pl-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="(00) 00000-0000" autoComplete="tel" {...field} />
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

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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

            {!mensagemEmDestaque && (
              <FormField
                control={form.control}
                name="mensagem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conte um pouco sobre a empresa e o que você precisa</FormLabel>
                    <FormControl>
                      <Textarea rows={3} placeholder="Fale um pouco do seu negócio..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        )}

        {status === "error" && (
          // role="alert" faz o leitor de tela anunciar na hora; antes o erro aparecia
          // só para quem estava olhando.
          <p role="alert" className="text-sm font-medium text-destructive">
            Não foi possível enviar agora. Tenta de novo, ou escreva direto para
            mariannaventura08@hotmail.com.
          </p>
        )}

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-sky text-sky-foreground transition-opacity hover:opacity-90"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Enviando...
            </>
          ) : (
            textoBotao
          )}
        </Button>
      </form>
    </Form>
  );
}
