import type { Context, Config } from "@netlify/edge-functions";

function doSomethingSlow(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("You waited a minute for this response");
    }, 60000);
  });
}

export default (request: Request, context: Context) => {
  const body = new ReadableStream({
    async start(controller) {
      const response = await doSomethingSlow();
      controller.enqueue(new TextEncoder().encode(response));
      controller.close()
    }
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};

export const config: Config = {
  path: "/long-running",
};