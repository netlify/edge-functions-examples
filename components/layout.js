import head from "./head.js";
import header from "./header.js";
import footer from "./footer.js";
import deployButton from "./deploy-button.js";

export default function layout(data) {
  return `
<!DOCTYPE html>
<html lang="en">
  ${head({
    title: data.title,
    metaDescription: data.metaDescription,
    url: data.url,
    openGraphImageName: data.openGraphImageName,
  })}
  <body>
  ${header({ title: data.title })}
  <main class="main">
    <section>  
    ${data.content}
    </section>

    <hr />
    
    <section>
      <h2>What are Edge Functions?</h2>

      <p>Netlify Edge Functions connects our powerful web development workflow with an open runtime standard at the network edge, making it easy for developers to build fast, personalized web experiences with existing development tools.<p>
      
      <p>Using Javascript and Typescript, Netlify Edge Functions give you the power to modify network requests to localize content, serve relevant ads, authenticate visitors, A/B test content, and much more! And this all happens at the <strong>Edge</strong> — directly from the worldwide location closest to each user.</p>

      <a href="/" target="_blank">Explore more examples</a>
    </section>

    <hr />

    <section>
      <h3>Deploy this site to Netlify</h3>
      <p>Try out Edge Functions on Netlify today! Click the button below to deploy this site to your Netlify account.</p>
      ${deployButton()}
    </section>

  </main>
  ${footer()}
  </body>
</html>
`;
}
