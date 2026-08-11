import * as React from "react";

import { InquiryForm } from "@/components/inquiry-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

/**
 * Envelope de diálogo em volta do formulário. Toda a lógica de envio vive em
 * InquiryForm, compartilhada com a página de Contato — o mesmo formulário não pode
 * existir em duas versões que divergem com o tempo.
 */
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
  // Trocar a key remonta o formulário a cada abertura, o que zera campos e estado
  // sem precisar de um efeito de limpeza.
  const [instancia, setInstancia] = React.useState(0);

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (!next) setInstancia((n) => n + 1);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[85vh] max-w-lg overflow-y-auto rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{title}</DialogTitle>
          <DialogDescription>
            <span className="font-medium text-accent">{servico}</span> — me conta o básico e
            te retorno assim que possível.
          </DialogDescription>
        </DialogHeader>

        <InquiryForm key={instancia} contexto={servico} textoBotao="Enviar interesse" />
      </DialogContent>
    </Dialog>
  );
}
