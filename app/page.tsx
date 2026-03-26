export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-5 py-6 sm:px-8 lg:px-10">
      <section className="grid gap-6 overflow-hidden rounded-[32px] border border-[var(--line)] bg-[var(--panel)] px-6 py-8 shadow-[0_30px_120px_rgba(20,33,61,0.12)] sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-10">
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              Next.js + OpenNext for Cloudflare
            </p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-7xl">
                Launch polished marketing sites from one production-ready base.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                This starter is designed for rapid iteration inside a sandboxed
                workspace. It ships with App Router, Tailwind CSS, and an
                OpenNext configuration that is already aligned with Cloudflare
                Workers deployment.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#sections"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--ink)] px-6 text-sm font-medium text-[var(--canvas)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Explore the starter
            </a>
            <a
              href="https://opennext.js.org/cloudflare/get-started"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--line-strong)] px-6 text-sm font-medium text-[var(--ink)] transition-colors duration-200 hover:bg-white/70"
              target="_blank"
              rel="noreferrer"
            >
              OpenNext guide
            </a>
          </div>
        </div>

        <div className="grid gap-4 rounded-[28px] border border-white/60 bg-white/80 p-4 backdrop-blur">
          <div className="rounded-[24px] bg-[linear-gradient(135deg,#0f172a_0%,#1d3557_45%,#e76f51_100%)] p-6 text-white">
            <p className="text-xs uppercase tracking-[0.22em] text-white/70">
              Base system
            </p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                <p className="text-sm text-white/70">Framework</p>
                <p className="mt-1 text-xl font-semibold">Next.js App Router</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                <p className="text-sm text-white/70">Styling</p>
                <p className="mt-1 text-xl font-semibold">Tailwind CSS v4</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
                <p className="text-sm text-white/70">Deploy target</p>
                <p className="mt-1 text-xl font-semibold">Cloudflare Workers</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              ["Reusable", "Stable starter structure for AI-driven edits."],
              ["Previewable", "Run locally with Next dev on port 3001."],
              ["Deployable", "OpenNext scripts are already configured."],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-[var(--line)] bg-[var(--soft)] p-4"
              >
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sections"
        className="grid gap-4 md:grid-cols-3"
      >
        {[
          {
            title: "Intentional defaults",
            body: "A grounded baseline layout, consistent spacing, and a small design language give the workspace structure before the first custom prompt lands.",
          },
          {
            title: "Cloudflare-ready workflow",
            body: "Use `npm run dev` while iterating, then `npm run preview` or `npm run deploy` when the site is ready to run in the Workers runtime.",
          },
          {
            title: "Agent-friendly context",
            body: "The repo is meant to be cloned into `/workspace/site`, edited in place, and reused across threads without re-running interactive generators.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              {item.title}
            </p>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              {item.body}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
