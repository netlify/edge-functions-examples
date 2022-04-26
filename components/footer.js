export default function footer() {
  const date = new Date();
  const year = date.getFullYear();
  return `
    <footer class="footer">
      <p class="footer__copyright">© ${year} <a href="https://netlify.com/?utm_campaign=devex&utm_source=edge-functions-examples&utm_medium=web&utm_content=Netlify%20Home" target="_blank" rel="noopener">Netlify</a></p>
      <p class="footer__source"><a href="https://github.com/netlify/edge-functions-examples/" target="_blank" rel="noopener">View source code on GitHub</a></p>
    </footer>
  `;
}
