import { config } from '@/landing.config';
import { FeatureCard } from '@/app/_components/FeatureCard';
import { SubscribeForm } from '@/app/_components/SubscribeForm';

export default function Home() {
  const { title, description, cta, contents } = config;

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
          <SubscribeForm />
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
