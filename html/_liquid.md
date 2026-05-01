### Liquid <small>tricks</small> {#liquid}

- https://shopify.github.io/liquid/basics/introduction/
- https://shopify.github.io/liquid/#filters-section

##### Syntax highlighting & auto-formatting <sub>in [VS Code~editors](/tricks/antigravity/)</sub> {#liquid-vscode}

1. 🧩 Install https://github.com/prettier/prettier-vscode (if not yet)
2. 🧩 Install https://shopify.dev/docs/storefronts/themes/tools/shopify-liquid-vscode  
   (2-in-1 extension for highlighting & formatting)

This is a huge advantage for `.liquid` over `.njk` so far.

##### Create array

```liquid {data-caption=.liquid}
{% capture _new_array %}
1
2
3
{% endcapture %}
{% assign _new_array = _new_array | strip | split: '\n' %}
```

##### Beware: False Positives <small>in `.liquid`</small>

- https://liquidjs.com/tutorials/truthy-and-falsy.html
- https://www.11ty.dev/docs/languages/liquid/#java-script-truthiness-in-liquid

❌ Wrong:

```liquid
{% if my_string %} This will always show if the string exists, even if empty. {% endif %}
```

✅ Right (Checking for content):

```liquid
{% if my_string != blank %} This only shows if there is actual text. {% endif %}
```

✅ Right (Checking arrays/strings by size):

```liquid
{% if my_array.size > 0 %} This ensures the list isn't empty. {% endif %}
```
