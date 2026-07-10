import { Link, useRouterState } from "@tanstack/react-router";

export function Nav() {
  const links = [
    { to: "/", label: "Início" },
    { to: "/trabalhos", label: "Trabalhos" },
    { to: "/servicos", label: "Serviços" },
    { to: "/sobre", label: "Sobre" },
    { to: "/contato", label: "Contato" },
  ] as const;

  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Rotas com fundo escuro (degrade) usam texto branco + hover azul claro.
  // Demais rotas usam texto preto + hover roxo escuro.
  const darkBgRoutes = ["/"];
  const isDarkBg = darkBgRoutes.includes(pathname);

  const baseText = isDarkBg ? "text-white" : "text-black";
  const hoverText = isDarkBg ? "hover:text-[#73C7E6]" : "hover:text-[#590066]";
  const activeColor = isDarkBg ? "text-[#73C7E6]" : "text-[#590066]";

  // Efeito de vidro para melhorar leitura quando a barra sobrepõe conteúdo.
  const glass = isDarkBg
    ? "backdrop-blur-md bg-black/20 border-b border-white/10"
    : "backdrop-blur-md bg-white/40 border-b border-black/10";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${glass}`}>
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className={`font-display text-lg font-semibold tracking-tight ${baseText} ${hoverText} transition-colors`}
        >
          Portfólio
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
