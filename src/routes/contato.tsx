import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy, ExternalLink, FileText } from "lucide-react";

import { FadeIn } from "../components/motion-primitives";
import { InquiryForm, PRAZO_RESPOSTA } from "../components/inquiry-form";

const EMAIL = "mariannaventura08@hotmail.com";
const LINKEDIN = "https://www.linkedin.com/in/mariannaventura/";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Mari Ventura" },
      {
        name: "description",
        content:
          "Fale comigo sobre identidade visual, campanhas e conteúdo digital. Respondo em até 2 dias úteis.",
      },
    ],
  }),
  component: ContatoPage,
});

/**
 * O endereço vinha dentro de um link mailto:. Quem não tem programa de e-mail
 * configurado clicava e nada acontecia — e, por estar dentro de um link, arrastar
 * para selecionar arrastava o link em vez de marcar o texto: não dava nem para
 * copiar. Aqui o texto é selecionável e o botão copia de fato.
 */
function EmailCopiavel() {
  const [copiado, setCopiado] = React.useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiado(true);
      window.setTimeout(() => setCopiado(false), 2000);
    } catch {
      // Navegador sem permissão de área de transferência: seleciona o texto para
      // que a pessoa copie manualmente, em vez de não fazer nada.
      const alvo = document.getElementById("endereco-email");
      if (alvo) {
        const range = document.createRange();
        range.selectNodeContents(alvo);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-dashed border-border p-4">
      <span id="endereco-email" className="text-sm font-medium break-all select-all">
        {EMAIL}
      </span>
      <button
        type="button"
        onClick={copiar}
        className="ml-auto inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border border-accent px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {copiado ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copiado ? "Copiado!" : "Copiar"}
      </button>
      {/* Anúncio para leitor de tela: a troca do rótulo é visual. */}
      <span role="status" className="sr-only">
        {copiado ? "Endereço copiado para a área de transferência." : ""}
      </span>
    </div>
  );
}

function ContatoPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-32 pb-20">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-14">
        {/* Coluna do convite: tira as dúvidas que travam o envio antes de pedir os
            dados. */}
        <FadeIn>
          <p className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            Respondo em {PRAZO_RESPOSTA}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Vamos conversar
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Estou aberta a novos projetos, colaborações e uma boa conversa sobre design.
            Não precisa estar tudo definido para me escrever.
          </p>

          <h2 className="mt-8 font-display text-lg font-semibold">O que ajuda saber</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <li>Que tipo de peça você precisa</li>
            <li>Para quando</li>
            <li>Uma ideia de orçamento, se já tiver</li>
          </ul>

          <h2 className="mt-8 font-display text-lg font-semibold">Prefere e-mail direto?</h2>
          <div className="mt-3">
            <EmailCopiavel />
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              LinkedIn
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              {/* O link abre noutra aba; sem este aviso a mudança pega de surpresa
                  quem usa leitor de tela. */}
              <span className="sr-only">(abre em nova aba)</span>
            </a>
            <Link
              to="/sobre"
              className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <FileText className="h-3.5 w-3.5" aria-hidden />
              Currículo e trajetória
            </Link>
          </div>
        </FadeIn>

        {/* O formulário é o mesmo de Serviços. Ele já funcionava — só não estava na
            página que o site inteiro aponta como destino. */}
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h2 className="sr-only">Formulário de contato</h2>
            <InquiryForm
              contexto="Contato — site"
              mensagemEmDestaque
              textoBotao="Enviar mensagem"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
