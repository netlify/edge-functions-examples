export default function page() {
  return `
    <h1>Edge Handler examples</h1>
    <h2>Transform response</h2>
    <p>
      Dynamically transform any page into uppercase
    </p>
    <ul>
      <li>the EH code in the repo: <a href="">transform.js</a></li>
      <li><a href="/transform">the result</a></li>
    </p>
    <h2>code looks like</h2>
    <code>
      export default () => new Response("Hello world!!!");
    </code>
`;
}
