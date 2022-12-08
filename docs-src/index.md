---
layout: page.11ty.cjs
title: <medium-feed> ⌲ Home
---

# &lt;medium-feed>

`<medium-feed>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<medium-feed>` is just an HTML element. You can it anywhere you can use HTML!

```html
<medium-feed></medium-feed>
```

  </div>
  <div>

<medium-feed></medium-feed>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<medium-feed>` can be configured with attributed in plain HTML.

```html
<medium-feed name="HTML"></medium-feed>
```

  </div>
  <div>

<medium-feed name="HTML"></medium-feed>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<medium-feed>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;medium-feed&gt;</h2>
    <medium-feed .name=${name}></medium-feed>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;medium-feed&gt;</h2>
<medium-feed name="lit-html"></medium-feed>

  </div>
</section>
