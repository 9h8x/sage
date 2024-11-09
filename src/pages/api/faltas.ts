import type { APIRoute } from "astro";

export const GET: APIRoute = async ({
  locals,
  request,
  url,
}): Promise<Response> => {
  const id = url.searchParams.get("id");
  const response = await fetch(
    "https://sageapi2.jns.net.ar/api/faltas?id=" + id
  );

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
};