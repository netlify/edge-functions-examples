const CleanCSS = require("clean-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // pass through static assets
  // ADD YOUR EXAMPLE FOLDERS HERE
  eleventyConfig.addPassthroughCopy({ "src/hello-world/assets": "hello-world" });
  eleventyConfig.addPassthroughCopy({ "src/edge-includes/assets": "edge-includes" });
  // eleventyConfig.addPassthroughCopy({ "src/MY-NEW-EXAMPLE-FOLDER/assets": "MY-NEW-EXAMPLE-FOLDER" });

  eleventyConfig.ignores.add("/src/**/assets/README.md");

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    dir: {
      input: "src",
      output: "examples",
    },
  };
};