import { config } from '@/landing.config';

type Content = Omit<(typeof config.contents)[number], 'id'>;

export function FeatureCard({ title, description }: Content) {
  return (
    <div
      className="rounded-2xl border border-slate-200 p-6 text-left shadow-sm backdrop-blur"
      style={{ backgroundColor: 'var(--card-bg)' }}
    >
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {description}
      </p>
    </div>
  );
}
