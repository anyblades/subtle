---
permalink: /
eleventyNavigation: { key: Home, order: 1 }
---

# 🥷 *S*ubtle

![](https://img.shields.io/github/v/release/anyblades/subtle?label=&color=darkslategray&style=for-the-badge)
[![](https://img.shields.io/badge/Demo-blue?logo=netlify&logoColor=white&style=for-the-badge)](https://subtle.blades.ninja/)
[![](https://img.shields.io/badge/Code-gainsboro?logo=github&logoColor=black&style=for-the-badge)](https://github.com/anyblades/subtle)
[![](https://img.shields.io/github/stars/anyblades/subtle?label=Star&labelColor=gainsboro&color=silver&style=for-the-badge)](https://github.com/anyblades/subtle)

<big>The most subtle Eleventy v4 [micro-starter](//11ty.blades.ninja/starters/) for content-first sites.</big>  
Powered by [Eleventy *Bl*ades](//11ty.blades.ninja/)

---

## Feel the difference

By [literally] hiding inside `.11ty` subfolder, it declutters the project root for your content:

<table class="borderless">
<tr>
  <th><a href="https://github.com/anyblades/subtle">subtle</a></th>
  <th>vs.</th>
  <th><a href="https://github.com/11ty/eleventy-base-blog">eleventy-base-blog</a></th>
</tr>
<tr><td><!-- $ tree -L 1 -a -F --dirsfirst -I '.git' --noreport | pbcopy -->

```treeview
├── .11ty/
├── blog/
├── media/
├── LICENSE.md
├── README.md
└── netlify.toml
```

</td><td></td><td>
  
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

</td></tr></table>

---

## Local development

```sh {data-caption="As simple as:"}
cd .11ty/
npm install    # dependencies
npm start      # development
npm run stage  # serve production version locally
               # ready to deploy! 🚀
```

---

Featured by:

https://11tybundle.dev/starters/,
https://11ty.blades.ninja/starters/,
https://www.11ty.dev/docs/starter/,
[awesome-11ty](https://github.com/anyblades/awesome-11ty-buildawesome)
