export default function repoLink(file, customText) {
  const text = customText || "The Edge Function code:";

  const root = "https://github.com/netlify/edge-functions-examples/tree/main/netlify/edge-functions";

  return `${text} <a href="${root}/${file}" target="_BLANK" rel="noopener">${file}</a>`;
}
