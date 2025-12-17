'use client';

import { useState } from 'react';
import { config } from '@/landing.config';

export function SubscribeForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const email = new FormData(form).get('email');

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_SUBSCRIBE_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          product_key: config.product_key,
        }),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      setDone(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError('잠시 후 다시 시도해주세요');
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return <p className="mt-6 text-sm text-green-600">등록되었습니다. 출시되면 알려드릴게요.</p>;
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 flex flex-col w-full max-w-md gap-2">
      <div className="mt-10 flex w-full max-w-md gap-2">
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="flex-1 rounded-lg border px-4 py-3 text-sm"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg px-5 py-3 text-sm font-medium text-white"
          style={{ backgroundColor: config.theme.primary_color }}
        >
          {loading ? '등록 중…' : config.cta.button_text}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </form>
  );
}
