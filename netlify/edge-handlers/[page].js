import layout from "../../components/layout.js";

import pageHome from "../../examples/home/index.js";
import pageHello from "../../examples/hello/index.js";
import pageTransforms from "../../examples/transforms/index.js";

const pages = {
  "home": pageHome,
  "hello": pageHello,
  "transforms": pageTransforms
};

export default async(Request) => {
  const url = new URL(Request.url);
  const path = url.pathname.split("/example/")[1] || "home";



  const html = layout({
    title: url.pathname,
    url: url,
    content: pages[path]()
  });

  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
};