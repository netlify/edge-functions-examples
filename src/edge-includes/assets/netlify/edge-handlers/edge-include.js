export default () => {
  console.log("includes transform");

  new Response("Hello world!");
}


// import { Context } from "https://dinosaurs:are-the-future!@edge-bootstrap.netlify.app/context.ts";

// export default async (req: Request, { next }: Context) => {
//   const url = new URL(req.url);
//   if (url.searchParams.get("method") !== "transform") {
//     return next();
//   }

//   const resp = await next();
//   if (resp.status === 304) {
//     return resp;
//   }
//   const text = await resp.text();

//   return new Response(text.toUpperCase(), resp);
// };