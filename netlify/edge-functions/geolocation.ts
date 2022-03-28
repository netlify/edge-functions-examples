import { Context } from "netlify:edge";

export default async (req: Request, context: Context) => {
  console.log(context.geo);

  const response = {
    message: "Data not available yet!",
  };

  return new Response(JSON.stringify(response), {
    headers: { "content-type": "application/json" },
  });
};
