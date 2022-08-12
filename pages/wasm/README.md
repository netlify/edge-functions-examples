![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# WebAssembly with Netlify Edge Functions

Using WebAssembly, you can speed up key components of your server logic. Using Netlify Edge Functions, you can bring that to the edge. This allows developers to build more calculation intensive logic in languages such as C, C++, and Rust that gets pushed even closer to users. 


## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

```ts
// inlined Rust compiled code that prints "42"
const wasmCode = new Uint8Array([
  0,97,115,109,1,0,0,0,1,133,128,128,128,0,1,96,0,1,127,
  3,130,128,128,128,0,1,0,4,132,128,128,128,0,1,112,0,0,
  5,131,128,128,128,0,1,0,1,6,129,128,128,128,0,0,7,145,
  128,128,128,0,2,6,109,101,109,111,114,121,2,0,4,109,97,
  105,110,0,0,10,138,128,128,128,0,1,132,128,128,128,0,0,
  65,42,11
]);

const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const main = wasmInstance.exports.main as CallableFunction;

export default async () => {
  return new Response(`The answer is: ${main().toString()}`);
}
```

- [Explore the code for this Edge Function](../../netlify/edge-functions/wasm.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/wasm

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples&utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Deploy%20Edge%20Functions%20Examples%20to%20Netlify)
