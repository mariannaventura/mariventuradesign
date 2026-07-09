import { Link } from "@tanstack/react-router";

export function Nav() {
  const links = [
    { to: "/", label: "Início" },
    { to: "/trabalhos", label: "Trabalhos" },
    { to: "/servicos", label: "Serviços" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight">
          Portfólio
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
