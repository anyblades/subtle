import baseConfig from "@anyblades/eleventy-blades/base-config";
import { readFileSync } from "node:fs";
import pkg from "./package.json" with { type: "json" };

export default function (eleventyConfig) {
  baseConfig(eleventyConfig);

  eleventyConfig.setIncludesDirectory("./.subtle/_includes/");
  eleventyConfig.addPassthroughCopy({ "./.subtle/_public/": "." });
  eleventyConfig.addPassthroughCopy("../**/*.png");
  eleventyConfig.addGlobalData("site", pkg.site);

  //TODO: move to 11ty-blades?
  for (const line of readFileSync("./.gitignore", "utf8").split("\n"))
    if (line && !line.startsWith("#"))
      eleventyConfig.watchIgnores.add(`../.subtle/${line}`);
}
