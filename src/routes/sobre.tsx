import { createFileRoute } from "@tanstack/react-router";
import { FadeIn, Stagger, StaggerItem } from "../components/motion-primitives";
import fotoAsset from "@/assets/marianna-foto.jpg.asset.json";

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
          <img
            src={fotoAsset.url}
            alt="Marianna Ventura"
            className="w-full aspect-[3/4] object-cover rounded-lg sticky top-28 shadow-lg"
          />
        </FadeIn>

        <div>
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-display font-semibold">
              Marianna Ventura
            </h1>
            <p className="mt-2 text-lg text-[#46037c] font-medium">
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
              Nova Iguaçu – RJ · (21) 97998-9082 ·
              mariannaventura08@hotmail.com
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-10">
            <h2 className="font-display text-2xl font-semibold border-b border-border pb-2">
              Experiência
            </h2>
            <Stagger className="mt-4 space-y-6">
              <StaggerItem>
                <div>
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
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
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
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
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
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
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
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
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
                </div>
              </StaggerItem>

              <StaggerItem>
                <div>
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
                </div>
              </StaggerItem>
            </Stagger>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-10">
            <h2 className="font-display text-2xl font-semibold border-b border-border pb-2">
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
            <h2 className="font-display text-2xl font-semibold border-b border-border pb-2">
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
            <h2 className="font-display text-2xl font-semibold border-b border-border pb-2">
              Competências
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Identidade visual",
                "Social media",
                "Key visuals e campanhas",
                "Materiais institucionais",
                "Apresentações",
                "Layouts digitais",
                "PDV e offline",
                "E-mail marketing",
                "Fechamento para impressão",
                "Photoshop",
                "Illustrator",
                "InDesign",
                "Figma",
                "Canva",
                "CapCut",
                "VTEX",
                "Connectif",
                "Meta Business Suite",
                "IA aplicada ao design",
              ].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
