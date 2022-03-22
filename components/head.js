export default function head({ title, metaDescription, url, openGraphImage }) {
  return `
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Meta -->
    <title>${title} | Edge Functions on Netlify</title>
    <meta name="description" content="${metaDescription}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;900&display=swap" rel="stylesheet" />

    <!-- Favicons -->
    <meta name="theme-color" content="#ffffff" />
    <link rel="icon" href="/favicon.svg" />
    <link rel="mask-icon" href="/mask-icon.svg" color="#000000" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="stylesheet" href="/styles.css" />

    <!-- Open Graph -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@netlify" />
    <meta name="twitter:creator" content="@netlify" />

    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${metaDescription}" />
    <meta property="og:locale" content="en_US" />

    <meta property="og:image" content="https://edge-functions-examples.netlify.app/img/${openGraphImageName}.png" />
    <meta property="og:image:alt" content="A Netlify branded open graph image representing ${title}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="Edge Functions on Netlify" />

    <script src="/lib/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
  </head>
  `;
}
