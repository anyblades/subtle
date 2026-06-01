---
permalink: /
---

# 🥷 *S*ubtle

<big>The most subtle Eleventy v4 micro-starter for content-first sites.</big>  
Powered by [Eleventy Blades](//11ty.blades.ninja/)

![](https://img.shields.io/github/v/release/anyblades/subtle?label=&color=darkslategray&style=for-the-badge)
[![](https://img.shields.io/netlify/346efcff-c92c-4f1c-bf3c-047049fc6a8c?label=Demo&labelColor=darkslategray&style=for-the-badge)](https://subtle.blades.ninja/)
[![](https://img.shields.io/badge/Code-gainsboro?logo=github&logoColor=black&style=for-the-badge)](https://github.com/anyblades/subtle)
[![](https://img.shields.io/github/stars/anyblades/subtle?label=Star&labelColor=gainsboro&color=silver&style=for-the-badge)](https://github.com/anyblades/subtle)

---

By [literally] hiding inside `.11ty` subfolder, it declutters the project root for your content.

Feel the difference:

<table class="borderless">
<tr>
  <th><a href="https://github.com/11ty/eleventy-base-blog">eleventy-base-blog</a></th>
  <th>vs.</th>
  <th><a href="https://github.com/anyblades/subtle">subtle</a></th>
</tr>
<tr><td><!-- $ tree -L 1 -a -F --dirsfirst -I '.git' --noreport | pbcopy -->

```treeview
├── .github/
├── _config/
├── _data/
├── _includes/
├── content/
├── css/
├── public/
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .nojekyll
├── .nvmrc
├── LICENSE
├── README.md
├── eleventy.config.js
├── netlify.toml
├── package-lock.json
├── package.json
└── vercel.json
```

</td><td></td><td>

```treeview
├── .11ty/
├── blog/
├── LICENSE.md
├── README.md
└── netlify.toml
```

</td></tr></table>
