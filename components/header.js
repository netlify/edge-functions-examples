export default function header({ title }) {
  return `
    <header class="header">
      <a href="https://www.netlify.com" class="header__logo icon" aria-label="Deployed with Netlify">							
        <svg role="img" aria-hidden="true" focusable="false" class="icon netlify-logo">
          <use xlink:href="/img/icons.svg#netlify-logo-full-small"></use>
        </svg>
      </a>  
      <span class="header__title"><a href="/">Edge Functions Examples</a> / ${title}</span>
    </header>
  `;
}
