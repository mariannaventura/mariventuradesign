import type { IconType } from "react-icons";

type ToolBadgeProps = {
  nome: string;
  sigla?: string;
  icone?: IconType;
  cor: string;
  corTexto?: string;
};

export function ToolBadge({ nome, sigla, icone: Icone, cor, corTexto = "#ffffff" }: ToolBadgeProps) {
  return (
    <div className="flex flex-col items-center gap-2 w-16">
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-semibold shadow-sm transition-transform duration-300 hover:scale-105 hover:-rotate-3"
        style={{ backgroundColor: cor, color: corTexto }}
      >
        {Icone ? <Icone className="h-6 w-6" /> : sigla}
      </div>
      <span className="text-center text-xs leading-tight text-muted-foreground">{nome}</span>
    </div>
  );
}
