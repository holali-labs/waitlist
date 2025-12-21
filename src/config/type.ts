export type Config = {
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
    twitter_card: "summary" | "summary_large_image";
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
