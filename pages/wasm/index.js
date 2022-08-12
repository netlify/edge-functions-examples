import repoLink from "../../components/repo-link.js";

export default {
  title: "WebAssembly",
  metaDescription: "Run WebAssembly with Edge Functions.",
  page: function () {
    return `
    <section>
      <h1>WebAssembly</h1>
      <p>You can use Edge Functions to return a JSON response by returning <code>context.json()</code> with a JavaScript object — no need to <code>JSON.stringify</code>!</p>
      <p>In this example, we return a JSON object containing <code>hello: "world"</code>.</p>

      <pre><code>// inlined Rust compiled code that prints "42"
const wasmCode = new Uint8Array([
  0, 97, 115, 109, 1, 0, 0, 0, 1, 133, 128, 128, 128, 0, 1, 96, 0, 1, 127,
  3, 130, 128, 128, 128, 0, 1, 0, 4, 132, 128, 128, 128, 0, 1, 112, 0, 0,
  5, 131, 128, 128, 128, 0, 1, 0, 1, 6, 129, 128, 128, 128, 0, 0, 7, 145,
  128, 128, 128, 0, 2, 6, 109, 101, 109, 111, 114, 121, 2, 0, 4, 109, 97,
  105, 110, 0, 0, 10, 138, 128, 128, 128, 0, 1, 132, 128, 128, 128, 0, 0,
  65, 42, 11
]);

const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const main = wasmInstance.exports.main as CallableFunction;

export default () => new Response(\`The answer is: \${main().toString()}\`);
</code></pre>
      <h2>See this in action</h2>
      <ul>
        <li><a href="/wasm">View the response from the Edge Function</a></li>
        <li>${repoLink("wasm.ts")}</li>
      </ul>
    </section>
  `;
  },
};
