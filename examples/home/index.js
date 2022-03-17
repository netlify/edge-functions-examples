export default function page() {
  return `
  <header>
    <h1>Edge Handler examples</h1>
    <h2>Follow the links for different edge examples</h2>
  </header>
  <h3>Try these:</h3>
  <ul>
    <li><a href="/example/hello">Static Hello World page</a></li>

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
`;
}