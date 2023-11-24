import type { Context, Config } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  let index = 0
  const encoder = new TextEncoder();
  const body = new ReadableStream({
    start(controller) {
      setInterval(() => {
        controller.enqueue(encoder.encode(`data: Hello ${index++}\n\n`));
      }, 1000);
    },
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/event-stream",
    },
  });
};

export const config: Config = {
  path: "/sse",
};