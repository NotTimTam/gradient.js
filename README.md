# gradient.js

Create colorful gradient arrays in a single line of code.

## Installation

Download the Github repo or run:

```
npm i gradient.js
```

## Usage

```js
const { Gradient } = require("gradient.js");

Gradient.create(500, "rgb(255, 209, 209)", "#FBFFDE");
```

![example](example.png)

### `Gradient.create(resolution, ...colors);`

`Gradient.create()` takes in a resolution, which determines how many colors to create in between each provided color. It is **always** the first argument. It is followed by the colors you want the gradient to move between. An unlimited number of colors, in any (CSS) accepted format can be used. An array of `rgba(r, g, b, a);` colors are returned.

### `Gradient.colorKeyMap`

`Gradient.colorKeyMap` is an array of every CSS color name and its corrosponding RGBA value.

```js
black: [0, 0, 0, 1],
silver: [192, 192, 192, 1],
```

### `Gradient.convertToRGBA(color)`

`Gradient.convertToRGBA()` takes in any CSS accepted color and turns it into an RGBA array.
`[r, g, b, a]`

### `Gradient.rgbaStyler(rgba)`

`Gradient.rgbaStyler()` creates a formatted CSS-compatible string from an array.
i.e.: `[0, 0, 0, 0]` becomes `"rgba(0, 0, 0, 0)"`.
