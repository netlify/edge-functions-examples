module.exports = function(eleventyConfig) {

  //pass through static assets
  eleventyConfig.addPassthroughCopy({ "src/hello-world/assets": "hello-world" });


  return {
    dir: {
      input: "src",
      output: "examples"
    }
  }
};