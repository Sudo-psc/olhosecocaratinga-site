/**
 * Test Result API Endpoint
 * POST /api/test-result
 *
 * Clinic is closed: no scheduling, no transactional email, no WhatsApp.
 */

import type { APIRoute } from "astro";

export const prerender = false;

const closedPayload = {
  success: false,
  error: "A unidade de Caratinga está encerrada. Não há agendamento de consultas.",
};

function corsHeaders() {
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": import.meta.env.PROD
      ? "https://olhosecocaratinga.com.br"
      : "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export const POST: APIRoute = async () => {
  return new Response(JSON.stringify(closedPayload), {
    status: 410,
    headers: corsHeaders(),
  });
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      ...corsHeaders(),
      "Access-Control-Max-Age": "86400",
    },
  });
};
