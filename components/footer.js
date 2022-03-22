export default function footer() {
  const date = new Date();
  const year = date.getFullYear();
  return `
    <footer class="footer">
      <p class="footer__copyright">© ${year} Netlify</p>
    </footer>
  `;
}
