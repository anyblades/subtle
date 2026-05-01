### Nunjucks <small>tricks</small> {#njk}

- https://mozilla.github.io/nunjucks/templating.html
- https://mozilla.github.io/nunjucks/templating.html#builtin-filters

##### Syntax highlighting <sub>in [VS Code~editors](/tricks/antigravity/)</sub> {#njk-vscode}

- 🧩 Install https://github.com/edheltzel/better-nunjucks-for-visual-studio-code

This is a modern fork of the original extension. It is specifically designed to solve the "11ty problem" where you mix Nunjucks and HTML.

**Why it's better:** It injects Nunjucks grammar directly into the standard HTML grammar. This means you get full Nunjucks highlighting and the editor still knows it's an HTML file, giving you better Emmet and CSS autocompletion.

**No Config:** It works out of the box without needing to manually map file associations in your settings.

##### Auto-formatting <sub>in [VS Code~editors](/tricks/antigravity/)</sub>

1. 🧩 Install https://github.com/prettier/prettier-vscode (if not yet)

2. Install a compatible Prettier plugin for your project, for example:

```sh
npm i -D prettier-plugin-jinja-template
```

3. It might be tricky to find a well-maintained Nunjucks plugin, but `jinja-template` works just fine with `.njk` via `.html` override:

```json {data-caption=.prettierrc.json}
{
  "plugins": ["prettier-plugin-jinja-template"],
  "overrides": [
    {
      "files": ["*.njk", "*.html"],
      "options": {
        "parser": "jinja-template"
      }
    }
  ]
}
```

`PRO TIP:` If you already use https://github.com/anyblades/blades, it’s even easier. You can simply:

```sh
ln -s ./node_modules/@anyblades/blades/.prettierrc.json
```

##### Sort array by attribute

Per official `.njk` documentation:

> **sort(arr, reverse, caseSens, attr)**  
> Sort arr with JavaScript's arr.sort function. If reverse is true, result will be reversed. Sort is case-insensitive by default, but setting caseSens to true makes it case-sensitive. If attr is passed, will compare attr from each item.

But you can actually do this trick:

```jinja2 {data-caption=.njk}
{% for item in array | sort(attribute='weight') %}
  ...
{% endfor %}
```
