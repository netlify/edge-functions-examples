import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  console.log("here");
  console.log(context.rewrite);

  return context.rewrite("/hello");
};
