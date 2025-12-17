// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

type Payload = {
  email: string;
  product_key: string;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type",
};

Deno.serve(async (req: Request) => {
  // --- CORS preflight ---
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

  let payload: Payload;

  try {
    payload = await req.json();
  } catch {
    return new Response("Invalid JSON", {
      status: 400,
      headers: corsHeaders,
    });
  }

  const { email, product_key } = payload;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return new Response("Invalid email", {
      status: 400,
      headers: corsHeaders,
    });
  }

  if (!product_key || typeof product_key !== "string") {
    return new Response("Invalid product key", {
      status: 400,
      headers: corsHeaders,
    });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Missing Supabase env vars");
    return new Response("Server misconfigured", {
      status: 500,
      headers: corsHeaders,
    });
  }

  const supabase = createClient(
    supabaseUrl,
    serviceRoleKey,
  );

  try {
    const { error } = await supabase
      .from("waitlist")
      .insert({ email, product_key });

    if (error) {
      // unique constraint (email, product_key) 대응
      if (error.code === "23505") {
        return new Response(
          JSON.stringify({ ok: true }),
          {
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
            status: 200,
          },
        );
      }

      throw error;
    }

    return new Response(
      JSON.stringify({ ok: true }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 200,
      },
    );
  } catch (err: any) {
    console.error("Insert failed:", err);

    return new Response(
      JSON.stringify({ message: err?.message ?? "Internal error" }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
        status: 500,
      },
    );
  }
});
