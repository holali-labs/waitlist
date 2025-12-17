import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { config } from '@/landing.config';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: config.title,
  description: config.description,

  openGraph: {
    title: config.title,
    description: config.description,
    images: [config.seo.og_image],
    siteName: config.title,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: config.title,
    description: config.description,
    images: [config.seo.og_image],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body
        className={[geistSans.variable, geistMono.variable, 'antialiased', 'bg-transparent'].join(
          ' ',
        )}
      >
        {children}
      </body>
    </html>
  );
}
