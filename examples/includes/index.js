export default function page() {
  return `
  <header>
    <h1>Edge Handler examples</h1>
    <h2>Edge includes</h2>
  </header>
  <main>
    <p>
      Include content into templates at the edge
    </p>
    <ul>
      <li>the EH code in the repo: <a href="">include.js</a></li>
      <li><a href="/some-content-page">Just some template</a></li>
      <li><a href="/some-content-page?include=pricing">Page with pricing data included at the edge</a></li>
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