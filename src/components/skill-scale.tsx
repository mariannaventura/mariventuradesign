type SkillScaleProps = {
  nome: string;
  nivel: number;
  max?: number;
};

export function SkillScale({ nome, nivel, max = 5 }: SkillScaleProps) {
  return (
    <div>
      <p className="text-sm font-medium text-foreground">{nome}</p>
      <div className="mt-1.5 flex gap-1.5">
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i < nivel ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
}
