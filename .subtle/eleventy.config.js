import baseConfig from "@anyblades/eleventy-blades/base-config";
import { readFileSync } from "node:fs";

export default function (eleventyConfig) {
  eleventyConfig.setIncludesDirectory(".subtle/_includes/");
  baseConfig(eleventyConfig);

  eleventyConfig.addPassthroughCopy("../**/*.png");

  //TODO: move to 11ty-blades?
  for (const line of readFileSync("./.gitignore", "utf8").split("\n"))
    if (line && !line.startsWith("#"))
      eleventyConfig.watchIgnores.add(`../.subtle/${line}`);
}
