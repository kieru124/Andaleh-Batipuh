module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addCollection("berita", (api) =>
    api.getFilteredByGlob("src/berita/posts/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("tanggal", (d) =>
    new Date(d).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );

  eleventyConfig.addFilter("ringkas", (str, n = 160) => {
    const teks = String(str || "").replace(/<[^>]*>/g, "").trim();
    return teks.length > n ? teks.slice(0, n).trim() + "…" : teks;
  });

  eleventyConfig.addGlobalData("tahun", () => new Date().getFullYear());

  return {
    dir: { input: "src", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
