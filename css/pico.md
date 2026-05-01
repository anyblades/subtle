---
eleventyNavigation:
  key: <i>✨</i>
  order: 2
title: Pico+Blades CSS <i>✨🥷</i>
eleventyComputed:
  summary: |-
    {{ 'https://raw.githubusercontent.com/anyblades/pico/refs/heads/main/README.md'
     | if: site.prod | default: '../../pico/README.md' | fetch | section: 'summary' | markdownify }}

includes:
  - path: https://raw.githubusercontent.com/anyblades/pico/refs/heads/main/README.md
    section: docs
  - text: |-
      ---
      See also:
  - teaser: /css/
    no_toc: true
---
