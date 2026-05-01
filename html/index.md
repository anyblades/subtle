---
permalink: /html/
eleventyNavigation:
  key: <i class="fa-solid fa-code"></i>
  order: 1
title: <em>Bl</em>ades <small>HTML</small>
summary: Generic Nunjucks/Liquid templates for 11ty/Build Awesome, Jekyll, Shopify, etc.

includes:
  - text: |-
      ---
      ## Base HTML {#base}
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/_includes/blades/html.njk
    section: docs,code
  - text: <div><hr></div>
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/_includes/blades/html.liquid
    section: docs,code
  - text: |-
      ---
      ## Links
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/_includes/blades/links.liquid
    section: docs,code
  - text: |-
      ---
      ## Sitemap
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/_includes/blades/sitemap.xml.njk
    section: docs,code
  - text: |-
      ---
      ## More
  - path: html/_njk.md
  - text: ---
  - path: html/_liquid.md
  - text: |-
      ---
      Part of:
  - teaser: /css/
  - text: |-
      ---
      - Featured by: <!--A-Z-->
        - https://11tybundle.dev/blog/11ty-bundle-83/
        - https://11tybundle.dev/categories/nunjucks-macros/
        - https://github.com/anyblades/awesome-11ty-build-awesome
      - See also: <!--A-Z-->
        - https://blog.jim-nielsen.com/2025/lots-of-little-html-pages/
        - https://buildexcellentwebsit.es/

      {.unlist .columns}

revised: 2026-04-15
---

## Install

###### <mark>Via npm</mark>

```sh
npm install @anyblades/blades
cd ./_includes # or where your includes dir is
ln -s ../node_modules/@anyblades/blades/_includes/blades
```

That's it! Now you can use HTML blades in your templates like this:

```jinja2 {data-caption=Nunjucks}
{% extends 'blades/*.njk' %}
{% include 'blades/*.njk' %}
```

```liquid {data-caption=Liquid}
{% include blades/*.liquid %}
{% render blades/* %}
```

###### <mark>Preconfigured</mark>

- 11ty: https://github.com/anyblades/build-awesome-starter
- Jekyll: https://github.com/anyblades/bladeswitch
