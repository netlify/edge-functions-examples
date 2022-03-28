export default function repoLink(file) {
  const root = "https://github.com/netlify/edge-functions-examples/tree/main/netlify/edge-functions";
  return `The Edge Function code: <a href="${root}/${file}" target="_BLANK" rel="noopener">${file}</a>`;
}
