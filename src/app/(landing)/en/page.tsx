import { config } from '@/config/en';
import LandingPage from '@/app/_components/LandingPage';

export const metadata = {
  title: config.title,
  description: config.description,
  alternates: {
    canonical: '/en',
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
