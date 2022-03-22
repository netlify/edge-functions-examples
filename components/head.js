export default function head({ title, description }) {
  return `
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description} />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;900&display=swap" rel="stylesheet" />

    <meta name="theme-color" content="#ffffff" />
    <link rel="icon" href="/favicon.svg" />
    <link rel="mask-icon" href="/mask-icon.svg" color="#000000" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="stylesheet" href="/styles.css" />

    <script src="/lib/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
  </head>
  `;
}
