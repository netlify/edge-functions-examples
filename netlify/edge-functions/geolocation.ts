import { Context } from "netlify:edge";

export default async (req: Request, context: Context) => {
  // Here's what's available on Context.geo

  // Context: {
  //   geo: {
  //     city?: string;
  //     country?: {
  //       code?: string;
  //       name?: string;
  //     },
  //     subdivision?: {
  //       code?: string;
  //       name?: string;
  //     },
  //   }
  // }

  return context.json({
    geo: context.geo,
    header: req.headers.get("x-nf-geo"),
  });
};
