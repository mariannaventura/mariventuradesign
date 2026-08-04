import { createFileRoute, Link } from "@tanstack/react-router";
import { FadeIn, Stagger, StaggerItem } from "../components/motion-primitives";
import { ServiceInquiryDialog } from "../components/service-inquiry-dialog";
import { cn } from "@/lib/utils";

type Pacote = {
  nome: string;
  preco: string;
  itens: string[];
  destaque?: boolean;
};

type Servico = {
  titulo: string;
  descricao: string;
  pacotes: Pacote[];
};

const SERVICOS: Servico[] = [
  {
    titulo: "Identidade Visual & Branding",
    descricao:
      "Uma marca que se sustenta sozinha — do logotipo ao manual de aplicação, em três níveis de profundidade.",
    pacotes: [
      {
        nome: "Essencial",
        preco: "a partir de R$600",
        itens: ["Logotipo", "Paleta de cores", "Tipografia", "Manual básico de aplicação"],
      },
      {
        nome: "Completo",
        preco: "a partir de R$950",
        destaque: true,
        itens: [
          "Tudo do Essencial",
          "Aplicações (cartão de visita, papel timbrado)",
          "Kit para redes sociais (posts de destaque, stories)",
        ],
      },
      {
        nome: "Estratégico",
        preco: "a partir de R$1.500",
        itens: [
          "Tudo do Completo",
          "Portfólio editável no Canva",
          "Calendário editorial de lançamento",
        ],
      },
    ],
  },
  {
    titulo: "Redes Sociais",
    descricao:
      "Presença consistente nas redes, com ou sem planejamento estratégico por trás.",
    pacotes: [
      {
        nome: "Avulso",
        preco: "a partir de R$320/mês",
        itens: ["8 artes por mês", "Sem planejamento estratégico"],
      },
      {
        nome: "Com Planejamento",
        preco: "a partir de R$650/mês",
        destaque: true,
        itens: ["Calendário editorial", "12 posts por mês", "Stories"],
      },
      {
        nome: "Gestão Completa",
        preco: "a partir de R$950/mês",
        itens: ["Planejamento estratégico", "Produção completa", "Relatório mensal de desempenho"],
      },
    ],
  },
  {
    titulo: "Criação de Sites",
    descricao:
      "Sites profissionais, do portfólio simples ao institucional completo.",
    pacotes: [
      {
        nome: "One Page",
        preco: "a partir de R$500",
        itens: ["Site de uma página", "Ideal para portfólio ou landing simples"],
      },
      {
        nome: "Institucional",
        preco: "a partir de R$900",
        destaque: true,
        itens: ["De 3 a 5 páginas", "Estrutura de navegação completa"],
      },
      {
        nome: "Completo",
        preco: "a partir de R$1.500",
        itens: ["Múltiplas páginas", "Formulário de contato", "Funcionalidades extras sob medida"],
      },
    ],
  },
];

const ADDON = {
  titulo: "Portfólio Editável no Canva",
  descricao:
    "Um template de portfólio pronto, personalizado com sua marca — editável por você sempre que quiser atualizar.",
  preco: "a partir de R$200",
};

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Portfólio" },
      {
        name: "description",
        content:
          "Identidade visual, redes sociais e criação de sites, em pacotes pensados para cada momento do seu negócio.",
      },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <article className="max-w-5xl mx-auto px-6 pt-32 pb-20">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-display font-semibold">Serviços</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Identidade visual, redes sociais e sites — cada um em pacotes pensados para caber
          no seu momento, do primeiro passo ao projeto mais completo.
        </p>
      </FadeIn>

      {SERVICOS.map((servico, i) => (
        <FadeIn key={servico.titulo} delay={0.1} className={i === 0 ? "mt-16" : "mt-24"}>
          <h2 className="font-display text-2xl md:text-3xl font-semibold">{servico.titulo}</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">{servico.descricao}</p>

          <Stagger className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {servico.pacotes.map((pacote) => (
              <StaggerItem key={pacote.nome}>
                <div
                  className={cn(
                    "relative h-full flex flex-col p-6 rounded-2xl border bg-card hover:shadow-md transition-all",
                    pacote.destaque
                      ? "border-accent shadow-sm"
                      : "border-border hover:border-accent",
                  )}
                >
                  {pacote.destaque && (
                    <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      Mais popular
                    </span>
                  )}
                  <h3 className="font-display text-xl font-semibold">{pacote.nome}</h3>
                  <p className="mt-1 text-primary font-medium">{pacote.preco}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside flex-1">
                    {pacote.itens.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <ServiceInquiryDialog servico={`${servico.titulo} — ${pacote.nome}`}>
                    <button className="mt-6 inline-flex items-center justify-center rounded-full border border-accent text-accent px-5 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                      Quero esse pacote
                    </button>
                  </ServiceInquiryDialog>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </FadeIn>
      ))}

      <FadeIn delay={0.1} className="mt-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 md:p-8 rounded-2xl border border-border bg-muted">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Extra</p>
            <h2 className="mt-2 font-display text-xl md:text-2xl font-semibold">{ADDON.titulo}</h2>
            <p className="mt-2 text-muted-foreground max-w-xl">{ADDON.descricao}</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <p className="text-primary font-medium">{ADDON.preco}</p>
            <ServiceInquiryDialog servico={ADDON.titulo} title="Quero esse extra">
              <button className="inline-flex items-center justify-center rounded-full border border-accent text-accent px-5 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
                Quero esse extra
              </button>
            </ServiceInquiryDialog>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-20 border-t border-border pt-10 text-center">
        <p className="text-muted-foreground">Não sabe qual pacote é ideal pro seu momento?</p>
        <Link
          to="/contato"
          className="mt-3 inline-block font-display text-2xl underline underline-offset-4 hover:text-accent transition-colors"
        >
          Vamos conversar →
        </Link>
      </FadeIn>
    </article>
  );
}
