import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Download } from "lucide-react";
import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobeIndesign,
  TbBrandFigma,
  TbBrandMeta,
} from "react-icons/tb";
import { SiVtex } from "react-icons/si";
import { FadeIn, Stagger, StaggerItem } from "../components/motion-primitives";
import { ToolBadge } from "../components/tool-badge";
import { SkillScale } from "../components/skill-scale";
import { PROJETOS } from "../lib/projetos";

const FERRAMENTAS = [
  { nome: "Photoshop", icone: TbBrandAdobePhotoshop, cor: "#001E36" },
  { nome: "Illustrator", icone: TbBrandAdobeIllustrator, cor: "#FF9A00", corTexto: "#1a0a00" },
  { nome: "InDesign", icone: TbBrandAdobeIndesign, cor: "#FF3366" },
  { nome: "Figma", icone: TbBrandFigma, cor: "#1E1E1E" },
  { nome: "Canva", sigla: "Ca", cor: "#7D2AE8" },
  { nome: "CapCut", sigla: "CC", cor: "#0a0a0a" },
  { nome: "VTEX", icone: SiVtex, cor: "#ED125F" },
  { nome: "Connectif", sigla: "Cn", cor: "#4A5568" },
  { nome: "Meta Business", icone: TbBrandMeta, cor: "#0866FF" },
];

const SOFT_SKILLS = [
  { nome: "Gestão de prazos e demandas simultâneas", nivel: 5 },
  { nome: "Consistência de marca em múltiplos canais", nivel: 5 },
  { nome: "Organização e planejamento editorial", nivel: 4 },
  { nome: "Comunicação com marcas parceiras", nivel: 4 },
  { nome: "Colaboração em projetos remotos", nivel: 4 },
  { nome: "Adaptabilidade a diferentes contextos de marca", nivel: 5 },
];

const ESPECIALIDADES = [
  { s: "Identidade visual", c: "bg-primary/10 text-primary" },
  { s: "Social media", c: "bg-sky/20 text-foreground" },
  { s: "Key visuals e campanhas", c: "bg-lilac/20 text-foreground" },
  { s: "Materiais institucionais", c: "bg-muted text-muted-foreground" },
  { s: "Apresentações", c: "bg-sky/20 text-foreground" },
  { s: "Layouts digitais", c: "bg-primary/10 text-primary" },
  { s: "PDV e offline", c: "bg-muted text-muted-foreground" },
  { s: "E-mail marketing", c: "bg-lilac/20 text-foreground" },
  { s: "Fechamento para impressão", c: "bg-muted text-muted-foreground" },
];

const FORMACAO = [
  { curso: "Bacharelado em Design Gráfico", instituicao: "Centro Universitário UniCarioca", ano: "2024" },
  { curso: "Informática para Web", instituicao: "FAETEC", ano: "2018" },
];

const CURSOS = [
  "Branding e Construção de Marcas — Tera (2025)",
  "UX/UI Design com Figma + IA — Udemy (2024)",
  "Design Thinking na Prática — Udemy (2021)",
  "Design Gráfico — ZION (2021)",
];

// `atividades` alimenta só a versão impressa do currículo; a tela mostra apenas
// cargo + empresa + período para não abrir a página com um muro de texto.
const EXPERIENCIA = [
  {
    cargo: "Estrategista de Marca e Conteúdo",
    empresa: "Festival Afrontosas",
    local: "Projeto colaborativo · Remoto",
    quando: "Jun/2025 — Mai/2026",
    atividades: [
      "Direção de arte e criação de peças para Instagram (feed, carrossel e stories), mantendo consistência visual da marca.",
      "Gestão de calendário editorial e execução de 3 a 4 publicações semanais, com publicação diária no pré-evento.",
      "Edição de vídeos curtos e apoio à comunicação de parcerias com marcas.",
    ],
  },
  {
    cargo: "Designer Gráfica Júnior",
    empresa: "Clima Rio — Marketing & Varejo",
    local: "Rio de Janeiro, RJ",
    quando: "Jul/2025 — Out/2025",
    atividades: [
      "Desenvolvimento de peças de campanha institucionais e promocionais para canais digitais e offline.",
      "Criação para redes sociais, e-mail marketing, PDV, endomarketing e mais de 12 eventos.",
      "Finalização e fechamento de arquivos para impressão, incluindo o catálogo 2025/2026.",
      "Padronização visual de mais de 10 lojas físicas.",
      "Apoio ao e-commerce na VTEX e fluxos automatizados de e-mail na Connectif.",
    ],
  },
  {
    cargo: "Assistente de Design Gráfico",
    empresa: "Clima Rio — Marketing & Varejo",
    local: "Rio de Janeiro, RJ",
    quando: "Fev/2024 — Jul/2025",
    atividades: [
      "Criação de peças para redes sociais, e-mail marketing e campanhas internas e comerciais.",
      "Materiais de comunicação para PDV alinhados aos objetivos da marca.",
      "Gestão de demandas simultâneas e cumprimento de prazos.",
    ],
  },
  {
    cargo: "Auxiliar de Design",
    empresa: "Clima Rio — Marketing & Varejo",
    local: "Rio de Janeiro, RJ",
    quando: "Out/2023 — Fev/2024",
    atividades: [
      "Apoio à criação e adaptação de peças para e-mail marketing, redes sociais, mídia paga e endomarketing.",
      "Finalização de materiais para diferentes formatos digitais e offline.",
    ],
  },
  {
    cargo: "Estagiária de Design Gráfico",
    empresa: "Clima Rio — Marketing & Varejo",
    local: "Rio de Janeiro, RJ",
    quando: "Dez/2022 — Set/2023",
    atividades: [
      "Criação de artes para e-mail marketing, mídias sociais e campanhas de mídia paga em ambiente de varejo.",
    ],
  },
  {
    cargo: "Assistente de Trade Marketing",
    empresa: "Lojas Caçula",
    local: "Rio de Janeiro, RJ",
    quando: "Fev/2021 — Mar/2022",
    atividades: [
      "Edição, finalização e fechamento de arquivos para PDV e catálogos.",
      "Tratamento e padronização de imagens para e-commerce e decorações sazonais em loja.",
    ],
  },
];

const RESUMO =
  "Designer gráfica com formação em Design e experiência em criação e desdobramento de peças para campanhas, redes sociais, materiais institucionais, PDV e e-commerce. Tenho vivência em manter consistência de identidade visual em múltiplos canais e lidar com demandas simultâneas em ambiente de varejo. Domínio do Pacote Adobe (Photoshop, Illustrator, InDesign), Figma e Canva. Noções de UX/UI e ferramentas de IA aplicadas ao design.";

const CONTATO = "Nova Iguaçu – RJ · mariannaventura08@hotmail.com";
const CARGO_TITULO = "Designer Gráfica · Identidade Visual & Criação Digital e Offline";

const DESTAQUES = [
  { numero: String(PROJETOS.length), label: "projetos no portfólio" },
  { numero: "100+", label: "leads gerados no quiz da Febrava" },
  { numero: "12+", label: "eventos com peças de campanha" },
];

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Marianna Ventura" },
      {
        name: "description",
        content:
          "Designer gráfica com formação em Design, especializada em identidade visual, campanhas e criação digital & offline.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <VersaoTela />
      <CurriculoImpresso />
    </>
  );
}

/** O que o visitante vê no site: perfil primeiro, currículo resumido. */
function VersaoTela() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-32 pb-20 print:hidden">
      <div className="grid md:grid-cols-[280px_1fr] gap-10">
        <FadeIn>
          <div className="overflow-hidden rounded-lg shadow-lg sticky top-28">
            <img
              src="/images/marianna-foto.jpg"
              alt="Marianna Ventura"
              className="w-full aspect-[3/4] object-cover object-top scale-110"
            />
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-display font-semibold">
              Marianna Ventura
            </h1>
            <p className="mt-2 text-lg text-primary font-medium">{CARGO_TITULO}</p>
            <p className="mt-4 border-l-2 border-sky pl-4 font-display italic text-xl leading-relaxed">
              Design gráfico com propósito e sensibilidade.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{CONTATO}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {DESTAQUES.map((d) => (
                <div key={d.label} className="min-w-[132px] rounded-xl bg-muted px-4 py-3">
                  <p className="font-display text-2xl font-semibold text-primary">{d.numero}</p>
                  <p className="mt-0.5 text-xs leading-tight text-muted-foreground">{d.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10">
            <h2 className="font-display text-2xl font-semibold">Experiência</h2>
            <Stagger className="mt-4 border-t border-border">
              {EXPERIENCIA.map((e) => (
                <StaggerItem key={e.cargo + e.quando}>
                  <div className="flex justify-between items-baseline gap-4 py-3 border-b border-border">
                    <p className="text-sm">
                      <span className="font-medium">{e.cargo}</span>
                      <span className="text-muted-foreground"> · {e.empresa}</span>
                    </p>
                    <span className="shrink-0 text-xs text-muted-foreground">{e.quando}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-muted p-5">
              <p className="max-w-sm text-sm text-muted-foreground">
                Cada cargo tem mais detalhe no currículo completo — aqui fica só o essencial.
              </p>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-accent text-accent px-5 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
              >
                <Download className="h-4 w-4" />
                Currículo completo (PDF)
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold">Formação</h2>
              <Stagger className="mt-4 space-y-4">
                {FORMACAO.map((f) => (
                  <StaggerItem key={f.curso}>
                    <div className="flex justify-between items-baseline flex-wrap gap-2">
                      <div>
                        <h3 className="font-medium">{f.curso}</h3>
                        <p className="text-sm text-muted-foreground">{f.instituicao}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{f.ano}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Cursos relevantes</h2>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80 list-disc list-inside">
                {CURSOS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-10">
            <h2 className="font-display text-2xl font-semibold">Ferramentas</h2>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-5">
              {FERRAMENTAS.map((f) => (
                <ToolBadge
                  key={f.nome}
                  nome={f.nome}
                  sigla={f.sigla}
                  icone={f.icone}
                  cor={f.cor}
                  corTexto={f.corTexto}
                />
              ))}
              <div className="flex flex-col items-center gap-2 w-16">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-lilac text-white shadow-sm transition-transform duration-300 hover:scale-105 hover:-rotate-3">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="text-center text-xs leading-tight text-muted-foreground">
                  IA aplicada
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.45} className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold">Especialidades</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {ESPECIALIDADES.map(({ s, c }) => (
                  <span key={s} className={`px-3 py-1 rounded-full text-sm font-medium ${c}`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">Soft skills</h2>
              <div className="mt-4 space-y-4">
                {SOFT_SKILLS.map((skill) => (
                  <SkillScale key={skill.nome} nome={skill.nome} nivel={skill.nivel} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/**
 * O PDF que sai do botão "Currículo completo": versão detalhada, sem foto e sem
 * os elementos de site (destaques, CTA). Só existe no @media print — os
 * componentes coloridos da tela não sobrevivem à impressão, já que navegador
 * não imprime fundo por padrão.
 */
function CurriculoImpresso() {
  return (
    <section className="hidden print:block mx-auto max-w-3xl px-8 py-6 text-black">
      <header>
        <h1 className="font-display text-3xl font-semibold">Marianna Ventura</h1>
        <p className="mt-1 text-sm font-medium">{CARGO_TITULO}</p>
        <p className="mt-1 text-sm">{CONTATO}</p>
        <p className="mt-3 text-[11px] leading-relaxed">{RESUMO}</p>
      </header>

      <PrintSection titulo="Experiência">
        <div className="space-y-4">
          {EXPERIENCIA.map((e) => (
            <article key={e.cargo + e.quando} className="break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[13px] font-semibold">{e.cargo}</h3>
                <span className="shrink-0 text-[11px]">{e.quando}</span>
              </div>
              <p className="text-[11px] italic">
                {e.empresa} · {e.local}
              </p>
              <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[11px] leading-snug">
                {e.atividades.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </PrintSection>

      <PrintSection titulo="Formação">
        <ul className="space-y-1 text-[11px]">
          {FORMACAO.map((f) => (
            <li key={f.curso} className="flex items-baseline justify-between gap-4">
              <span>
                <strong className="font-semibold">{f.curso}</strong> — {f.instituicao}
              </span>
              <span className="shrink-0">{f.ano}</span>
            </li>
          ))}
        </ul>
      </PrintSection>

      <PrintSection titulo="Cursos relevantes">
        <ul className="list-disc space-y-0.5 pl-4 text-[11px]">
          {CURSOS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </PrintSection>

      <PrintSection titulo="Especialidades">
        <p className="text-[11px] leading-snug">{ESPECIALIDADES.map((e) => e.s).join(" · ")}</p>
      </PrintSection>

      <PrintSection titulo="Ferramentas">
        <p className="text-[11px] leading-snug">
          {FERRAMENTAS.map((f) => f.nome).join(" · ")} · IA aplicada ao design
        </p>
      </PrintSection>

      <PrintSection titulo="Soft skills">
        <ul className="list-disc space-y-0.5 pl-4 text-[11px]">
          {SOFT_SKILLS.map((s) => (
            <li key={s.nome}>{s.nome}</li>
          ))}
        </ul>
      </PrintSection>
    </section>
  );
}

function PrintSection({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mt-5 break-inside-avoid">
      <h2 className="mb-1.5 border-b border-black/30 pb-0.5 font-display text-base font-semibold">
        {titulo}
      </h2>
      {children}
    </section>
  );
}
