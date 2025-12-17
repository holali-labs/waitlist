import { config } from '../landing.config';
import { FeatureCard } from './_components/FeatureCard';

export default function Home() {
  const { title, description, cta, theme, contents } = config;

  return (
    <main
      className="min-h-screen"
      style={{ background: 'var(--bg-gradient)', color: 'var(--text-primary)' }}
    >
      <div className="mx-auto max-w-5xl px-6 py-32 text-center">
        {/* Hero */}
        <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl">{title}</h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {description}
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="
                flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm
                focus:outline-none focus:ring-2
                dark:border-slate-700 dark:bg-slate-900
              "
            />
            <button
              type="submit"
              className="rounded-lg px-5 py-3 text-sm font-medium text-white transition"
              style={{ backgroundColor: theme.primary_color }}
            >
              {cta.button_text}
            </button>
          </form>
        </div>

        <p className="mt-4 text-sm opacity-70">{cta.headline}</p>

        {/* Features */}
        <section className="mt-32">
          <div className="grid gap-6 sm:grid-cols-3">
            {contents.map(({ id, title, description }) => (
              <FeatureCard key={id} title={title} description={description} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
