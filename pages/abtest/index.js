import repoLink from "../../components/repo-link.js";

export default {
  title: "Set up an A/B Test",
  description: "Use cookies to power an A/B test at the Edge.",
  page: function () {
    return `
    <section>
      <h1>Set up an A/B Test at the Edge</h1>
      <p>A/B tests are a great way to test new features on your site. A basic A/B test works by assigning visitors to a particular test "bucket" the first time they visit a site, usually using a random number between 0 and 1.</p>
      <p>Visitors can then be redirected to different pages, depending on the bucket and cookie they were assigned.</p> 
      <ul>
        <li><a href=/example/cookes">Read more about managing cookies at the Edge</a></li>
        <li><a href="/abtest">Run the A/B test code, and see which bucket you were assigned!</a></li>
        <li>${repoLink("abtest.js")}</li>
      </ul>
    </section>
  `;
  },
};
