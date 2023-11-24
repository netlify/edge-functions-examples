import type { Context, Config } from "@netlify/edge-functions";

// Let's serve an image of a kitten from the internet

export default async (request: Request, context: Context) => {
  // fetch() is supported natively by Deno!
  // Returning the awaited response automatically sets the
  // content-type headers!
  const kitten = await fetch("https://placekitten.com/g/300/300");
  return kitten;
};

export const config: Config = {
  path: "/image-external",
};