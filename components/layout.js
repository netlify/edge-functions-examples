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
    ${data.content}
  </main>
  ${footer()}
  </body>
</html>
`;
}
