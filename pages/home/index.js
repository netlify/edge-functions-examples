export default function page() {
  return `
  <section>
    <h1>Edge Functions on Netlify</h1>
    <p>Explore a library of reference examples for exploring and learning about Edge Functions on Netlify.</p>
    <ul>
      <li><a href="/example/hello">Static Hello World page</a></li>
      <li><a href="/example/transform">Transform HTTP responses</a></li>
      <li><a href="/example/include">Dynamically include content with edge includes</a></li>

      <!--
      <li><a href="/rewrite">Deno rewrite to hello world</a></li>
      <li><a href="/hello?method=transform">Hello world transformed at the edge</a></li>
      <li><a href="/rewrite?method=transform">Chaining transform and rewrite handlers</a></li>
      <li><a href="/admin/">Edge authenticated admin area</a></li>
      <li><a href="/stream">Streaming the contents of the next handler</a></li>
      <li><a href="/json">Terminating response with JSON payload</a></li>
      <li><a href="/hello">Adding headers to the request</a></li>
      <li><a href="/cookies">Reading and writing cookies</a></li>
      -->
    </ul>
  </section>
`;
}
