---
eleventyNavigation:
  parent: css
  key: <i class="fa-solid fa-picture-in-picture fa-flip-both"></i> Label
  order: 2
title: <em>Fl</em>oat label <small>CSS</small>
eleventyComputed:
  summary: |-
    {{ 'https://raw.githubusercontent.com/anyblades/float-label-css/refs/heads/master/README.md'
     | if: site.prod | default: '../../float-label-css/README.md' | fetch | section: 'summary' | markdownify }}

includes:
  - text: |-
      ## Demo

      Drop-in support for **Pico**'s https://picocss.com/docs/forms :

      <article>
        <!-- Sample markup from https://codepen.io/anton-staroverov/pen/JRLaKw -->
        <form>
          <fieldset>
            <legend>Demo form</legend>
            <label><span>Name</span>
              <input placeholder="First Last">
            </label>
            <label><span>Bio</span>
              <textarea placeholder="Tell your story..."></textarea>
            </label>
            <label><span>Cuisine</span>
              <select>
                <option selected disabled>Select...</option>
                <option>Italian</option>
                <option>Japanese</option>
                <option>Indian</option>
                <option>Thai</option>
                <option>French</option>
              </select>
            </label>
            <button type="button">Sign up</button>
            <button type="reset">↺</button>
          </fieldset>
        </form>
      </article>
  - path: https://raw.githubusercontent.com/anyblades/float-label-css/refs/heads/master/README.md
    section: docs-demo-install
  - text: "###### <mark>Included with</mark>"
  - teaser: /css/
    no_toc: true
  - text: "###### <mark>Included with</mark>"
  - teaser: /css/pico/
    no_toc: true
  - text: |-
      ---
      ## How it works {#how}
  - path: https://raw.githubusercontent.com/anyblades/blades/refs/heads/main/src/float-label.core.css
    section: docs

revised: 2026-04-14
---
