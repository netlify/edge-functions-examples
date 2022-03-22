import head from "./head.js";
import header from "./header.js";
import footer from "./footer.js";

export default function layout(data) {
  return `
<!DOCTYPE html>
<html lang="en">
  ${head({ title: data.title, description: "TO DO!!!!!" })}
  <body>
  ${header({ title: data.title })}
  <main class="main">
    <section>  
    ${data.content}
    </section>

    <hr />
    
    <section>
      <h2>What are Edge Functions?</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
      <a href="/" target="_blank">Explore more examples</a>
      <h3>Deploy this site to Netlify</h3>
      <p>lorem ipsum</p>
      <a href="https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples">Deploy to Netlify</a>
    </section>
  </main>
  ${footer()}
  </body>
</html>
`;
}
