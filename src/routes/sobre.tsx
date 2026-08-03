import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
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
    <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
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
            <p className="mt-2 text-lg text-primary font-medium">
              Designer Gráfica · Identidade Visual & Criação Digital e Offline
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Designer gráfica com formação em Design e experiência em criação
              e desdobramento de peças para campanhas, redes sociais, materiais
              institucionais, PDV e e-commerce. Tenho vivência em manter
              consistência de identidade visual em múltiplos canais e lidar com
              demandas simultâneas em ambiente de varejo. Domínio do Pacote
              Adobe (Photoshop, Illustrator, InDesign), Figma e Canva. Noções
              de UX/UI e ferramentas de IA aplicadas ao design.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Nova Iguaçu – RJ · mariannaventura08@hotmail.com
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10">
            <h2 className="font-display text-2xl font-semibold">
              Experiência
            </h2>
            <Stagger className="mt-6 relative border-l-2 border-border pl-6 space-y-8">
              <StaggerItem className="relative">
                <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-medium">
                    Estrategista de Marca e Conteúdo
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    Jun/2025 — Mai/2026 (prev.)
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Festival Afrontosas · Projeto colaborativo · Remoto
                </p>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1 text-foreground/80">
                  <li>
                    Direção de arte e criação de peças para Instagram (feed,
                    carrossel e stories), mantendo consistência visual da
                    marca.
                  </li>
                  <li>
                    Gestão de calendário editorial e execução de 3 a 4
                    publicações semanais, com publicação diária no pré-evento.
                  </li>
                  <li>
                    Edição de vídeos curtos e apoio à comunicação de
                    parcerias com marcas.
                  </li>
                </ul>
              </StaggerItem>

              <StaggerItem className="relative">
                <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-muted-foreground/40 ring-4 ring-background" />
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-medium">Designer Gráfica Júnior</h3>
                  <span className="text-sm text-muted-foreground">
                    Jul/2025 — Out/2025
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Clima Rio — Marketing & Varejo · Rio de Janeiro, RJ
                </p>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1 text-foreground/80">
                  <li>
                    Desenvolvimento de peças de campanha institucionais e
                    promocionais para canais digitais e offline.
                  </li>
                  <li>
                    Criação para redes sociais, e-mail marketing, PDV,
                    endomarketing e mais de 12 eventos.
                  </li>
                  <li>
                    Finalização e fechamento de arquivos para impressão,
                    incluindo o catálogo 2025/2026.
                  </li>
                  <li>
                    Padronização visual de mais de 10 lojas físicas.
                  </li>
                  <li>
                    Apoio ao e-commerce na VTEX e fluxos automatizados de
                    e-mail na Connectif.
                  </li>
                </ul>
              </StaggerItem>

              <StaggerItem className="relative">
                <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-muted-foreground/40 ring-4 ring-background" />
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-medium">Assistente de Design Gráfico</h3>
                  <span className="text-sm text-muted-foreground">
                    Fev/2024 — Jul/2025
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Clima Rio — Marketing & Varejo · Rio de Janeiro, RJ
                </p>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1 text-foreground/80">
                  <li>
                    Criação de peças para redes sociais, e-mail marketing e
                    campanhas internas e comerciais.
                  </li>
                  <li>
                    Materiais de comunicação para PDV alinhados aos objetivos
                    da marca.
                  </li>
                  <li>
                    Gestão de demandas simultâneas e cumprimento de prazos.
                  </li>
                </ul>
              </StaggerItem>

              <StaggerItem className="relative">
                <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-muted-foreground/40 ring-4 ring-background" />
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-medium">Auxiliar de Design</h3>
                  <span className="text-sm text-muted-foreground">
                    Out/2023 — Fev/2024
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Clima Rio — Marketing & Varejo · Rio de Janeiro, RJ
                </p>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1 text-foreground/80">
                  <li>
                    Apoio à criação e adaptação de peças para e-mail
                    marketing, redes sociais, mídia paga e endomarketing.
                  </li>
                  <li>
                    Finalização de materiais para diferentes formatos
                    digitais e offline.
                  </li>
                </ul>
              </StaggerItem>

              <StaggerItem className="relative">
                <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-muted-foreground/40 ring-4 ring-background" />
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-medium">
                    Estagiária de Design Gráfico
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    Dez/2022 — Set/2023
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Clima Rio — Marketing & Varejo · Rio de Janeiro, RJ
                </p>
                <p className="mt-2 text-sm text-foreground/80">
                  Criação de artes para e-mail marketing, mídias sociais e
                  campanhas de mídia paga em ambiente de varejo.
                </p>
              </StaggerItem>

              <StaggerItem className="relative">
                <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-muted-foreground/40 ring-4 ring-background" />
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-medium">Assistente de Trade Marketing</h3>
                  <span className="text-sm text-muted-foreground">
                    Fev/2021 — Mar/2022
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Lojas Caçula · Rio de Janeiro, RJ
                </p>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1 text-foreground/80">
                  <li>
                    Edição, finalização e fechamento de arquivos para PDV e
                    catálogos.
                  </li>
                  <li>
                    Tratamento e padronização de imagens para e-commerce e
                    decorações sazonais em loja.
                  </li>
                </ul>
              </StaggerItem>
            </Stagger>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-10">
            <h2 className="font-display text-2xl font-semibold">
              Formação
            </h2>
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
          </FadeIn>

          <FadeIn delay={0.3} className="mt-10">
            <h2 className="font-display text-2xl font-semibold">
              Cursos relevantes
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80 list-disc list-inside">
              <li>Branding e Construção de Marcas — Tera (2025)</li>
              <li>UX/UI Design com Figma + IA — Udemy (2024)</li>
              <li>Design Thinking na Prática — Udemy (2021)</li>
              <li>Design Gráfico — ZION (2021)</li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.35} className="mt-10">
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

          <FadeIn delay={0.45} className="mt-10">
            <h2 className="font-display text-2xl font-semibold">
              Soft skills
            </h2>
            <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {SOFT_SKILLS.map((skill) => (
                <SkillScale key={skill.nome} nome={skill.nome} nivel={skill.nivel} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
