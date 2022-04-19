![Netlify examples](https://user-images.githubusercontent.com/5865/159468750-df1c2783-39b2-40da-9c0f-971f72a7ea3f.png)

# A/B Test with Netlify Edge Functions

A/B tests are a great way to test new features on your site. A basic A/B test works by assigning visitors to a
particular test "bucket" the first time they visit a site, usually using a random number between 0 and 1.

Visitors can then be redirected to different pages, depending on the bucket and cookie they were assigned.

You could even use A/B testing in combination with Geolocation at The Edge!

## Code example

Edge Functions are files held in the `netlify/edge-functions` directory.

- [Explore the code for this Edge Function](../../netlify/edge-functions/abtest.ts)

## View this example on the web

- https://edge-functions-examples.netlify.app/example/abtest

## Deploy to Netlify

You can deploy this and all the other examples in this repo as a site of your own to explore and experiment with, by
clicking this button.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/edge-functions-examples)
