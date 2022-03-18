export default function page() {
  return `
  <header>
    <h1>Edge Handler examples</h1>
    <h2>Transform response</h2>
  </header>
  <main>
    <p>
      Dynamically transform any page into uppercase
    </p>
    <ul>
      <li>the EH code in the repo: <a href="">transform.js</a></li>
      <li><a href="/hello?method=transform">Transform the /hello response</a></li>
    </p>
    <h2>code looks like</h2>
    <code>
      ...
    </code>
  </main>
`;
}