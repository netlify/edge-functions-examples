export default function page() {
  return `
    <h1>Edge Function examples</h1>
    <h2>Hello world!</h2>
    <p>
      Let's get started by just returning something from an Edge Function.
    </p>
    <ul>
      <li>the EH code in the repo: <a href="">hello.js</a></li>
      <li><a href="/hello">the result</a></li>
    </p>
    <h2>code looks like</h2>
    <pre><code>export default () => new Response("Hello world!!!");</code></pre>
`;
}
