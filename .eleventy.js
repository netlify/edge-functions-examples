module.exports = function(eleventyConfig) {

  // pass through static assets
  // ADD YOUR EXAMPLE FOLDERS HERE
  eleventyConfig.addPassthroughCopy({ "src/hello-world/assets": "hello-world" });
  // eleventyConfig.addPassthroughCopy({ "src/MY-NEW-EXAMPLE-FOLDER/assets": "MY-NEW-EXAMPLE-FOLDER" });

  eleventyConfig.ignores.add("/src/**/assets/README.md");

  return {
    dir: {
      input: "src",
      output: "examples"
    }
  }
};