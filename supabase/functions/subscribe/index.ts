// supabase/functions/subscribe/index.ts
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("DB_PROJECT_URL")!,
  Deno.env.get("DB_PROJECT_SERVICE_ROLE_KEY")!,
);

const corsHeaders = {
  "Access-Control-Allow-Origin": Deno.env.get("SITE_URL")!,
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

export default async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: corsHeaders,
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400, headers: corsHeaders });
  }

  const { email, product_key } = body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return new Response("Invalid email", { status: 400, headers: corsHeaders });
  }

  if (!product_key || typeof product_key !== "string") {
    return new Response("Invalid product key", {
      status: 400,
      headers: corsHeaders,
    });
  }

  const { error } = await supabase.from("waitlist").insert({
    email,
    product_key,
  });

  if (error) {
    return new Response(error.message, { status: 500, headers: corsHeaders });
  }

  return new Response(
    JSON.stringify({ ok: true }),
    {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    },
  );
};
