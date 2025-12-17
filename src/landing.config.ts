export const config = {
  product_key: 'ai-resume-review',
  title: 'AI Resume Reviewer',
  description: '이력서를 AI가 대신 리뷰해줍니다',
  cta: {
    headline: '출시 알림을 받아보세요',
    button_text: '이메일 등록',
  },
  seo: {
    og_image: '/opengraph-image',
    site_name: 'AI Resume Review',
    twitter_card: 'summary',
  },
  theme: {
    primary_color: '#6366f1',
    layout: 'centered',
  },
  contents: [
    {
      id: 1,
      title: 'AI 자동분석',
      description: '수백 개의 합격 이력서를 학습한 AI가 문장을 조목조목 분석합니다.',
    },
    {
      id: 2,
      title: '합격 확률 예측',
      description: '지원 포지션 기준으로 현재 이력서의 경쟁력을 수치로 보여줍니다.',
    },
    {
      id: 3,
      title: '즉시 개선 포인트',
      description: '어떤 문장을 어떻게 고치면 좋은지 바로 적용 가능한 피드백을 제공합니다.',
    },
  ],
} satisfies {
  product_key: string;
  title: string;
  description: string;
  cta: {
    headline: string;
    button_text: string;
  };
  seo: {
    og_image: string;
    site_name: string;
    twitter_card: 'summary' | 'summary_large_image';
  };
  theme: {
    primary_color: string;
    layout: string;
  };
  contents: Array<{
    id: number;
    title: string;
    description: string;
  }>;
};
