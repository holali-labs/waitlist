import { ImageResponse } from 'next/og';
import { config } from '@/landing.config';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: `
            radial-gradient(80% 80% at 50% -20%, ${config.theme.primary_color}55, transparent),
            #020617
          `,
        color: 'white',
      }}
    >
      <h1 style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.2 }}>{config.title}</h1>
      <p style={{ fontSize: 32, opacity: 0.8, marginTop: 24 }}>{config.description}</p>
    </div>,
  );
}
