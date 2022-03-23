import repoLink from "../../components/repo-link.js";

export default {
  title: "Managing cookies",
  description: "Manipulate HTTP cookies",
  page: function() {
    return `
    <section>
      <h1>Managing cookies</h1>
      <p>Use an Edge Function to control cookies</p>
      <pre><code>
import type { Context } from "netlify:edge";

export default async (req: Request, { next, cookies }: Context) => {
  
  // set a cookie    
  cookies.set({
    name: "My cookie",
    value: "hello",
  });

  // Delete a cookie
  cookies.delete("My cookie");

  // Read the value of a cookie
  const value = cookies.get("My cookie");

};
</code></pre>

      <ul>
        <li><a href="/cookies?action=set">Set a cookie</a></li>
        <li><a href="/cookies">Read the value of a cookie</a></li>
        <li><a href="/cookies?action=clear">Delete a cookie</a></li>
        <li>${repoLink("cookies.ts")}</li>
      </ul>
    </section>
  `
  }
};