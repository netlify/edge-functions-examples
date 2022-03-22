import { Context } from "netlify:edge";

export default async (req: Request, { next }: Context) => {
  console.log(next);

  const resp = await next();


  //raw endpoint to return text/html to browser with geo data
  return new Response("test", resp);
};
