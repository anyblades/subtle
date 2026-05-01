---
permalink: /
site:
  inline_styles:
    - |-
      h1 {
        margin-block-start: 0;
        @media (max-width: 767px) { font-size: 1.75em }
      }

      th, td {
        padding-inline: 1rem !important;
        min-width: 10ch;
        &:first-child { text-align: right; border-right: 2px dotted silver }
        &:not(:first-child) { width: 16% }
      }
      th { font-size: larger }
      td big { font-weight: bold }

      .fa-tailwind-css  { color: deepskyblue }
      .fa-bootstrap     { color: blueviolet }

      #showcase + article {
        padding-inline: 1.5rem;
        p {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.5rem;
          margin: 0;
          font-size: 125%;
          @media (min-width: 768px) { justify-content: center }
        }
        a { overflow: visible }
      }
eleventyComputed:
  #TODO: add to tricks
  summary: |-
    {{ 'https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/README.md'
     | if: site.prod | default: '../../blades/README.md' | fetch | section: 'summary' | markdownify }}
  site.title: "{{ site.title }} | {{ summary | split: '</hgroup>' | first | strip_html }}"
  hero: "<br>{{ summary | replace: 'hgroup>', 'h1>' | replace: '<wbr>', '<br>' }}<br>"

includes:
  - text: |-
      ## [Documentation <i><small>→</small></i>](/css/)
  - path: https://blades.ninja/css/
    section: toc
  - path: _why.md
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/README.md
    section: info
  # - path: README.md
  #   section: tricks
---
