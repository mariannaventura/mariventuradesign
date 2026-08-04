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

const EXPERIENCIA = [
  {
    cargo: "Estrategista de Marca e Conteúdo",
    empresa: "Festival Afrontosas",
    quando: "Jun/2025 — Mai/2026",
  },
  {
    cargo: "Designer Gráfica Júnior",
    empresa: "Clima Rio",
    quando: "Jul/2025 — Out/2025",
  },
  {
    cargo: "Assistente de Design Gráfico",
    empresa: "Clima Rio",
    quando: "Fev/2024 — Jul/2025",
  },
  {
    cargo: "Auxiliar de Design",
    empresa: "Clima Rio",
    quando: "Out/2023 — Fev/2024",
  },
  {
    cargo: "Estagiária de Design Gráfico",
    empresa: "Clima Rio",
    quando: "Dez/2022 — Set/2023",
  },
  {
    cargo: "Assistente de Trade Marketing",
    empresa: "Lojas Caçula",
    quando: "Fev/2021 — Mar/2022",
  },
];

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
    <section className="max-w-5xl mx-auto px-6 pt-32 pb-20 print:pt-8 print:pb-8">
      <div className="grid md:grid-cols-[280px_1fr] gap-10">
        <FadeIn>
          <div className="overflow-hidden rounded-lg shadow-lg sticky top-28 print:static print:shadow-none">
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
            <p className="mt-2 text-lg text-primary font-medium">
              Designer Gráfica · Identidade Visual & Criação Digital e Offline
            </p>
            <p className="mt-4 border-l-2 border-sky pl-4 font-display italic text-xl leading-relaxed">
              Design gráfico com propósito e sensibilidade.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Nova Iguaçu – RJ · mariannaventura08@hotmail.com
            </p>

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
            <h2 className="font-display text-2xl font-semibold">
              Experiência
            </h2>
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
                className="print:hidden inline-flex shrink-0 items-center gap-2 rounded-full border border-accent text-accent px-5 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
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
                <StaggerItem>
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <div>
                      <h3 className="font-medium">
                        Bacharelado em Design Gráfico
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Centro Universitário UniCarioca
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">2024</span>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="flex justify-between items-baseline flex-wrap gap-2">
                    <div>
                      <h3 className="font-medium">Informática para Web</h3>
                      <p className="text-sm text-muted-foreground">FAETEC</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2018</span>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">
                Cursos relevantes
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80 list-disc list-inside">
                <li>Branding e Construção de Marcas — Tera (2025)</li>
                <li>UX/UI Design com Figma + IA — Udemy (2024)</li>
                <li>Design Thinking na Prática — Udemy (2021)</li>
                <li>Design Gráfico — ZION (2021)</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-10">
            <h2 className="font-display text-2xl font-semibold">
              Ferramentas
            </h2>
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
              <h2 className="font-display text-2xl font-semibold">
                Especialidades
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { s: "Identidade visual", c: "bg-primary/10 text-primary" },
                  { s: "Social media", c: "bg-sky/20 text-foreground" },
                  { s: "Key visuals e campanhas", c: "bg-lilac/20 text-foreground" },
                  { s: "Materiais institucionais", c: "bg-muted text-muted-foreground" },
                  { s: "Apresentações", c: "bg-sky/20 text-foreground" },
                  { s: "Layouts digitais", c: "bg-primary/10 text-primary" },
                  { s: "PDV e offline", c: "bg-muted text-muted-foreground" },
                  { s: "E-mail marketing", c: "bg-lilac/20 text-foreground" },
                  { s: "Fechamento para impressão", c: "bg-muted text-muted-foreground" },
                ].map(({ s, c }) => (
                  <span
                    key={s}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${c}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold">
                Soft skills
              </h2>
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
