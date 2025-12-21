import { config } from '@/config/ko';
import LandingPage from '@/app/_components/LandingPage';

export const metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: '/ko',
    languages: {
      'x-default': '/en',
      en: '/en',
      ko: '/ko',
    },
  },
};

export default function Page() {
  return <LandingPage {...config} />;
}
