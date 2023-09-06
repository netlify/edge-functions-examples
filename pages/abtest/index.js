import repoLink from "../../components/repo-link.js";

export default {
  title: "Set up an AB Test",
  metaDescription: "Use cookies to power an A/B test at The Edge.",
  page: function() {
    return `
    <section>
      <h1>Set up an A/B Test at The Edge</h1>
      <p>A/B tests are a great way to test new features on your site. A basic A/B test works by assigning visitors to a particular test "bucket" the first time they visit a site, usually using a random number between 0 and 1.</p>
      <p>Visitors can then be redirected to different pages, depending on the bucket and cookie they were assigned.</p> 
      <p>You could even use A/B testing in combination with Geolocation at The Edge!</p>

      <pre><code>import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  // look for existing "test_bucket" cookie
  const bucketName = "test_bucket";
  const bucket = context.cookies.get(bucketName);

  // return here if we find a cookie
  if (bucket) {
    return new Response(&grave;&dollar;{bucketName} &dollar;{bucket} already assigned!&grave;);
  }

  // if no "test_bucket" cookie is found, assign the user to a bucket
  // in this example we're using two buckets (a, b) with an equal weighting of 50/50
  const weighting = 0.5;

  // get a random number between (0-1)
  // this is a basic example and you may want to experiment
  const random = Math.random();
  const newBucketValue = random <= weighting ? "a" : "b";

  // set the new "test_bucket" cookie
  context.cookies.set({
    name: bucketName,
    value: newBucketValue,
  });

  return new Response(
    &grave;You have been assigned &dollar;{bucketName} &dollar;{newBucketValue}.&grave;,
  );
};
</code></pre>

      <h2>See this in action</h2>
      <ul>
        <li><a href="/abtest">Run the A/B test code, and see which bucket you were assigned!</a></li>
        <li>${repoLink("abtest.ts")}</li>
      </ul>
      <h2>Related</h2>
      <ul>
        <li><a href="/example/cookies-set">Read more about managing cookies at The Edge</a></li>
        <li><a href="/example/geolocation">Read more about Geolocation at The Edge</a></li>
      </ul>
    </section>
  `;
  },
};
