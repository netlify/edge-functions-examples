export default {
  title: "Includes at the Edge",
  metaDescription: "Dynamically include content into templates at the edge.",
  openGraphImageName: "include",
  page: function() {
    return `
    <p>
    Include content into templates at the edge
    </p>
    <ul>
    <li>the EH code in the repo: <a href="">include.js</a></li>
    <li><a href="/some-content-page">Just some template</a></li>
    <li><a href="/some-content-page?include=pricing">Page with pricing data included at the edge</a></li>
    </p>
  `
  }
};