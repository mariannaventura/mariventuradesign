// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, componentTagger (dev-only),
//     VITE_* env injection, @ path alias, React/TanStack dedupe, error logger plugins,
//     and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

import { PROJETOS } from "./src/lib/projetos";

export default defineConfig({
  // Static build for Firebase Hosting (Spark plan — no server runtime available).
  // `nitro: false` skips exactly one plugin: nitro targets a server runtime (default
  // preset cloudflare-module) and runs its OWN prerenderer against a server that has
  // no TanStack routes mounted, which made every route 404.
  // Output: dist/client (deploy this) + dist/server (build-time only, consumed by the
  // prerenderer's preview server, never deployed).
  nitro: false,

  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error
    // wrapper). This matches what default resolution would pick anyway.
    server: { entry: "server" },

    // TanStack's own prerenderer — nitro is not involved. It boots vite.preview(),
    // which serves real SSR from dist/server/server.js, then fetches every page below
    // and writes the HTML into dist/client.
    // `enabled` MUST be explicit: prerendering defaults to off when `pages` is empty.
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
      failOnError: true,
      // No retryCount on purpose: the retry is deduped away by the crawler's `seen`
      // set, which would downgrade a hard failure into a silently missing file.
    },

    // Explicit page list. crawlLinks can only fail silently (an undiscovered page is
    // just absent from the output); a page listed here fails loudly via failOnError.
    // Derived from PROJETOS so it cannot drift when a 12th project is added.
    pages: [
      { path: "/" },
      { path: "/projetos" },
      { path: "/servicos" },
      { path: "/sobre" },
      { path: "/contato" },
      ...PROJETOS.map((projeto) => ({ path: `/projetos/${projeto.id}` })),
    ],

    // No `sitemap` key on purpose — public/sitemap.xml is hand-maintained and the
    // generated one would overwrite it.
    // No `spa` key on purpose — every real route is prerendered, so leftover URLs
    // should return a genuine 404 rather than a 200 shell.
  },
});
