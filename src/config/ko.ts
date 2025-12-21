import type { Config } from "./type";

export const config = {
  product_key: "writing-buddy",
  title: "Writing Buddy",
  description:
    "AI가 글을 대신 쓰지 않고, 필요한 만큼만 개입해 글쓰기를 돕습니다.",
  cta: {
    headline: "출시 알림을 받아보세요",
    button_text: "이메일 등록",
  },
  seo: {
    og_image: "/opengraph-image",
    site_name: "AI Resume Review",
    twitter_card: "summary",
  },
  theme: {
    primary_color: "#6366f1",
    layout: "centered",
  },
  contents: [
    {
      id: 1,
      title: "과도한 개입 없는 AI",
      description:
        "AI는 문장을 대신 작성하지 않고, 질문과 힌트로만 사고를 자극합니다.",
    },
    {
      id: 2,
      title: "사용자 주도 글쓰기",
      description:
        "사용자가 직접 입력해야만 AI가 반응하며, 글쓰기의 주도권은 항상 사용자에게 있습니다.",
    },
    {
      id: 3,
      title: "사고를 남기는 피드백",
      description:
        "완성된 답 대신, 다음 문장을 고민하게 만드는 구조적 피드백을 제공합니다.",
    },
  ],
} satisfies Config;
