import type { Config } from "./type";

export const config = {
  product_key: "writing-buddy",
  title: "Writing Buddy",
  description:
    "An AI writing assistant that doesn’t write for you — it supports your thinking, only when you need it.",
  cta: {
    headline: "Get notified when we launch",
    button_text: "Join the waitlist",
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
      title: "No Overstepping AI",
      description:
        "Writing Buddy never writes sentences for you. It nudges your thinking with questions and subtle hints.",
    },
    {
      id: 2,
      title: "You Stay in Control",
      description:
        "The AI only responds after you write. The flow and direction of the writing always stay with you.",
    },
    {
      id: 3,
      title: "Feedback That Makes You Think",
      description:
        "Instead of polished answers, you get structured feedback that helps you figure out what to write next.",
    },
  ],
} satisfies Config;
