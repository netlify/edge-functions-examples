export default function page() {
  return `
  <section>
    <p>
      Include content into templates at the edge
    </p>
    <ul>
      <li>the EH code in the repo: <a href="">include.js</a></li>
      <li><a href="/some-content-page">Just some template</a></li>
      <li><a href="/some-content-page?include=pricing">Page with pricing data included at the edge</a></li>
    </p>
    <h2>code looks like</h2>
    <pre><code>import { Context } from "netlify:edge";
    
export default async (req: Request, { next }: Context) => {
    
  const url = new URL(req.url);
  if (url.searchParams.get("include") !== "pricing") {
    return next();
  }
  
  const resp = await next();
  if (resp.status === 304) {
    return resp;
  }
  
  console.log("Including pricing content into the page");
  const page = await resp.text();
  const pricingContent = "It's expensive, but buy it anyway."
  const regex = /{{EDGE_INCLUDE}}/i;
  const updatedPage = page.replace(regex, pricingContent);

  return new Response(updatedPage, resp);
};</code></pre>
</section>
`;
}
