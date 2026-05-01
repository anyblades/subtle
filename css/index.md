---
permalink: /css/
eleventyNavigation:
  key: css
  title: Docs
  order: 0
title: <em>Bl</em>ades <small>CSS</small>
eleventyComputed:
  summary: |-
    {{ 'https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/README.md'
     | if: site.prod | default: '../../blades/README.md' | fetch | section: 'summary' | strip_tag: 'big' | markdownify }}

includes:
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/README.md
    section: install
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/blades.theme.css
    section: code
  - text: |-
      ---
      ## Layout
  - teaser: /css/breakout/
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/_layout.css
    section: docs
  - text: |-
      ---
      ## Content
  - teaser: /css/link-icon/
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/content/_typography.css
    section: docs
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/content/_code.css
    section: docs
  - text: |-
      ---
      ## Table
  - teaser: /css/responsive-table/
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/content/_table.css
    section: docs
  - text: |-
      ---
      ## Forms
  - teaser: /css/float-label/
  - text: |-
      ---
      ## Utilities
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/_utilities.css
    section: docs
  - text: |-
      ---
      ## More
  - teaser: /css/pico/
  - teaser: /html/
  - teaser: /jekyll/
  - text: |-
      ---
      See also: <!--A-Z-->
      - https://blades.ninja/css/frameworks/ trends <small>2026-2040</small>
      - https://blog.frankmtaylor.com/2026/03/05/you-dont-know-html-tables/
      - https://buildexcellentwebsit.es/
      - https://github.com/anyblades/float-label-css
      - https://github.com/anyblades/pico
      - https://github.com/dbohdan/classless-css
      - https://micah.torcellini.org/2026/03/17/simple-timeline/

      {.unlist .columns}

revised: 2026-04-14
---
