export default function page() {
  return `
    <h1>Edge Handler examples</h1>
    <h2>Transform response</h2>
    <p>
      Dynamically transform any page into uppercase
    </p>
    <ul>
      <li>the EH code in the repo: <a href="">transform.js</a></li>
      <li><a href="/hello?method=transform">Transform the /hello response</a></li>
    </p>
    <h2>code looks like</h2>
    <pre>
    <code>
import { Context } from "netlify:edge";
export default async (req: Request, { next }: Context) => {
  const url = new URL(req.url);
  if (url.searchParams.get("method") !== "transform") {
    return next();
  }
  const resp = await next();
  if (resp.status === 304) {
    return resp;
  }
  const text = await resp.text();
  return new Response(text.toUpperCase(), resp);
};
</code>
</pre>
  </main>
`;
}