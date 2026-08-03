import { Link, useRouterState } from "@tanstack/react-router";

export function Nav() {
  const links = [
    { to: "/", label: "Início" },
    { to: "/projetos", label: "Projetos" },
    { to: "/servicos", label: "Serviços" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ] as const;

  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Rotas com fundo escuro (degrade) usam texto branco + hover azul claro.
  // Demais rotas usam texto preto + hover roxo primário.
  const darkBgRoutes = ["/"];
  const isDarkBg = darkBgRoutes.includes(pathname);

  const baseText = isDarkBg ? "text-white" : "text-black";
  const hoverText = isDarkBg ? "hover:text-sky" : "hover:text-primary";
  const activeColor = isDarkBg ? "text-sky" : "text-primary";

  // Efeito de vidro para melhorar leitura quando a barra sobrepõe conteúdo.
  const glass = isDarkBg
    ? "backdrop-blur-md bg-black/20 border-b border-white/10"
    : "backdrop-blur-md bg-white/40 border-b border-black/10";

  const brandLogo = isDarkBg ? "/images/wordmark-white.png" : "/images/wordmark-purple.png";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${glass}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center transition-opacity hover:opacity-80"
          aria-label="Mari Ventura — Início"
        >
          <img
            src={brandLogo}
            alt="Mari Ventura"
            className="h-9 md:h-10 w-auto object-contain"
          />
        </Link>
        <ul className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`${baseText} ${hoverText} transition-colors`}
                activeProps={{ className: `${activeColor} font-medium` }}
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
