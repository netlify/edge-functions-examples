// Rust compiled code that prints "42"
const { instance } = await WebAssembly.instantiateStreaming(
  fetch(import.meta.resolve("./fourty-two.wasm"))
);
const main = instance.exports.main as CallableFunction;

export default () => {
  return new Response(`The answer is ${main().toString()}`);
};
