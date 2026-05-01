---
eleventyNavigation:
  parent: css
  key: <i class="fa-solid fa-link"></i> Icon
  order: 3
title: '<em>L</em>ink <code style="padding: 0">i</code>con'
eleventyComputed:
  summary: |-
    {{ 'https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/link-icon.css'
     | if: site.prod | default: '../../blades/src/link-icon.css' | fetch | section: 'summary' | markdownify }}

includes:
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/link-icon.css
    section: docs,code
  - text: |-
      ---
      ## Install <!-- same as https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/README.md -->

      ###### <mark>Via CDN</mark>

      <!--prettier-ignore-->
      ```html
      <link rel="stylesheet" href="
        https://cdn.jsdelivr.net/npm/@anyblades/blades@0/assets/link-icon.min.css
      ">
      ```
  - text: "###### <mark>Included with</mark>"
  - teaser: /css/
    no_toc: true
  - text: "###### <mark>Included with</mark>"
  - teaser: /css/pico/
    no_toc: true

revised: 2026-04-14
---
