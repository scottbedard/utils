# `@bedard/utils`

[![Build status](https://img.shields.io/github/workflow/status/scottbedard/utils/Test)](https://github.com/scottbedard/utils/actions)
[![Codecov](https://img.shields.io/codecov/c/github/scottbedard/utils)](https://codecov.io/gh/scottbedard/utils)
[![Dependencies](https://img.shields.io/david/scottbedard/utils)](https://david-dm.org/scottbedard/utils)
[![Dev dependencies](https://img.shields.io/david/dev/scottbedard/utils)](https://david-dm.org/scottbedard/utils?type=dev)
[![NPM](https://img.shields.io/npm/v/@bedard/utils)](https://www.npmjs.com/package/@bedard/utils)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@bedard/utils?label=gzipped)](https://bundlephobia.com/result?p=@bedard/utils)
[![License](https://img.shields.io/github/license/scottbedard/utils?color=blue)](https://github.com/scottbedard/utils/blob/main/LICENSE)

I like to think of this library as my own personal lodash. It contains a number of utility functions that I found myself duplicating between projects. I do not anticipate breaking changes, but I'm also not ruling it out. Upgrade with caution.

## Installation

The recommended installation method is via NPM.

```bash
npm install @bedard/utils
```

Alternatively, these functions maybe be accessed via a CDN. When using a CDN, the library will be exposed globally as `BedardUtils`.

```html
<script src="https://unpkg.com/@bedard/utils"></script>
```

## Functions

### Animation

- [`createEasingFunction`](#createEasingFunction)
- [`easeInSine`](#easeInSine)
- [`easeOutSine`](#easeOutSine)
- [`easeInOutSine`](#easeInOutSine)
- [`easeInQuad`](#easeInQuad)
- [`easeOutQuad`](#easeOutQuad)
- [`easeInOutQuad`](#easeInOutQuad)
- [`easeInCubic`](#easeInCubic)
- [`easeOutCubic`](#easeOutCubic)
- [`easeInOutCubic`](#easeInOutCubic)
- [`easeInQuart`](#easeInQuart)
- [`easeOutQuart`](#easeOutQuart)
- [`easeInOutQuart`](#easeInOutQuart)
- [`easeInQuint`](#easeInQuint)
- [`easeOutQuint`](#easeOutQuint)
- [`easeInOutQuint`](#easeInOutQuint)
- [`easeInExpo`](#easeInExpo)
- [`easeOutExpo`](#easeOutExpo)
- [`easeInOutExpo`](#easeInOutExpo)
- [`easeInCirc`](#easeInCirc)
- [`easeOutCirc`](#easeOutCirc)
- [`easeInOutCirc`](#easeInOutCirc)
- [`easeInBack`](#easeInBack)
- [`easeOutBack`](#easeOutBack)
- [`easeInOutBack`](#easeInOutBack)
- [`easeInElastic`](#easeInElastic)
- [`easeOutElastic`](#easeOutElastic)
- [`easeInOutElastic`](#easeInOutElastic)
- [`easeInBounce`](#easeInBounce)
- [`easeOutBounce`](#easeOutBounce)
- [`easeInOutBounce`](#easeInOutBounce)

### Color

- [`hslToRgb`](#hslToRgb)
- [`lerpColors`](#lerpColors)
- [`parseColor`](#parseColor)
- [`rgbToHsl`](#rgbToHsl)
- [`stringifyColor`](#stringifyColor)

### Math

= [`addVectors`](#addVectors)
- [`angleFrom`](#angleFrom)
- [`bilerp`](#bilerp)
- [`cols`](#cols)
- [`degreesToRadians`](#degreesToRadians)
- [`flattenCols`](#flattenCols)
- [`flattenRows`](#flattenRows)
- [`flip`](#flip)
- [`intersect`](#intersect)
- [`isEven`](#isEven)
- [`lerp`](#lerp)
- [`lerpVectors`](#lerpVectors)
- [`measure`](#measure)
- [`polygon`](#polygon)
- [`radiansToDegrees`](#radiansToDegrees)
- [`rotateMatrix`](#rotateMatrix)
- [`rotateVector`](#rotateVector)
- [`rows`](#rows)
- [`scale`](#scale)
- [`slope`](#slope)

#### `addVectors`

Add vectors together.

```js
import { addVectors } from '@bedard/utils'

addVectors([1, 2], [3, 4]) // [4, 6]
```

#### `angleFrom`

Calculate angled distance from a vector. An angle of `0` degrees will track along the X axis, with positive angles rotating counter-clockwise.

```js
import { angleFrom } from '@bedard/utils'

angleFrom([0, 0], 90, 1) // [0, 1] (approximate)
```

#### `bilerp`

Bi-linear interpolation between vectors.

```js
import { bilerp } from '@bedard/utils'

bilerp([0, 0], [10, 10], 0.5) // [5, 5]
```

#### `cols`

Chunk a square matrix into columns. Note that the source matrix must be provided in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order).

```js
import { cols } from '@bedard/utils'

cols([
  0, 1, 2,
  3, 4, 5,
  6, 7, 8,
]) // [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
```

#### `createEasingFunction`

Create an [easing function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function) from cubic-bezier points. Note that the included easing functions do not use this utility. They are simpler mathematical functions, and do not produce quite the same results as easing functions created using this utility.

```js
import { createEasingFunction } from '@bedard/utils'

const linear = createEasingFunction(0, 0, 1, 1)

linear(0.5) // 0.5
```

#### `degreesToRadians`

Convert degrees to radians.

```js
import { degreesToRadians } from '@bedard/utils'

degreesToRadians(180) // 3.141592653589793
```

#### `easeInSine`

Easing function that follows [this curve](https://cubic-bezier.com/#.12,0,.39,0).

```js
import { easeInSine } from '@bedard/utils'

easeInSine(0.5) // 0.2928932188134524
```

#### `easeOutSine`

Easing function that follows [this curve](http://cubic-bezier.com/#0.61,1,0.88,1).

```js
import { easeOutSine } from '@bedard/utils'

easeOutSine(0.5) // 0.7071067811865475
```

#### `easeInOutSine`

Easing function that follows [this curve](http://cubic-bezier.com/#0.37,0,0.63,1).

```js
import { easeInOutSine } from '@bedard/utils'

easeInOutSine(0.5) // 0.49999999999999994
```

#### `easeInQuad`

Easing function that follows [this curve](http://cubic-bezier.com/#0.11,0,0.5,0).

```js
import { easeInQuad } from '@bedard/utils'

easeInQuad(0.5) // 0.25
```

#### `easeOutQuad`

Easing function that follows [this curve](http://cubic-bezier.com/#0.5,1,0.89,1).

```js
import { easeOutQuad } from '@bedard/utils'

easeOutQuad(0.5) // 0.75
```

#### `easeInOutQuad`

Easing function that follows [this curve](http://cubic-bezier.com/#0.45,0,0.55,1).

```js
import { easeInOutQuad } from '@bedard/utils'

easeInOutQuad(0.5) // 0.5
```

#### `easeInCubic`

Easing function that follows [this curve](http://cubic-bezier.com/#0.32,0,0.67,0).

```js
import { easeInCubic } from '@bedard/utils'

easeInCubic(0.5) // 0.125
```

#### `easeOutCubic`

Easing function that follows [this curve](http://cubic-bezier.com/#0.33,1,0.68,1).

```js
import { easeOutCubic } from '@bedard/utils'

easeOutCubic(0.5) // 0.875
```

#### `easeInOutCubic`

Easing function that follows [this curve](http://cubic-bezier.com/#0.65,0,0.35,1).

```js
import { easeInOutCubic } from '@bedard/utils'

easeInOutCubic(0.5) // 0.5
```

#### `easeInQuart`

Easing function that follows [this curve](http://cubic-bezier.com/#0.5,0,0.75,0).

```js
import { easeInQuart } from '@bedard/utils'

easeInQuart(0.5) // 0.0625
```

#### `easeOutQuart`

Easing function that follows [this curve](http://cubic-bezier.com/#0.25,1,0.5,1).

```js
import { easeOutQuart } from '@bedard/utils'

easeOutQuart(0.5) // 0.9375
```

#### `easeInOutQuart`

Easing function that follows [this curve](http://cubic-bezier.com/#0.76,0,0.24,1).

```js
import { easeInOutQuart } from '@bedard/utils'

easeInOutQuart(0.5) // 0.5
```

#### `easeInQuint`

Easing function that follows [this curve](http://cubic-bezier.com/#0.64,0,0.78,0).

```js
import { easeInQuint } from '@bedard/utils'

easeInQuint(0.5) // 0.03125
```

#### `easeOutQuint`

Easing function that follows [this curve](http://cubic-bezier.com/#0.22,1,0.36,1).

```js
import { easeOutQuint } from '@bedard/utils'

easeOutQuint(0.5) // 0.96875
```

#### `easeInOutQuint`

Easing function that follows [this curve](http://cubic-bezier.com/#0.83,0,0.17,1).

```js
import { easeInOutQuint } from '@bedard/utils'

easeInOutQuint(0.5) // 0.5
```

#### `easeInExpo`

Easing function that follows [this curve](http://cubic-bezier.com/#0.7,0,0.84,0).

```js
import { easeInExpo } from '@bedard/utils'

easeInExpo(0.5) // 0.03125
```

#### `easeOutExpo`

Easing function that follows [this curve](http://cubic-bezier.com/#0.16,1,0.3,1).

```js
import { easeOutExpo } from '@bedard/utils'

easeOutExpo(0.5) // 0.96875
```

#### `easeInOutExpo`

Easing function that follows [this curve](http://cubic-bezier.com/#0.87,0,0.13,1).

```js
import { easeInOutExpo } from '@bedard/utils'

easeInOutExpo(0.5) // 0.5
```

#### `easeInCirc`

Easing function that follows [this curve](http://cubic-bezier.com/#0.55,0,1,0.45).

```js
import { easeInCirc } from '@bedard/utils'

easeInCirc(0.5) // 0.1339745962155614
```

#### `easeOutCirc`

Easing function that follows [this curve](http://cubic-bezier.com/#0,0.55,0.45,1).

```js
import { easeOutCirc } from '@bedard/utils'

easeOutCirc(0.5) // 0.8660254037844386
```

#### `easeInOutCirc`

Easing function that follows [this curve](http://cubic-bezier.com/#0.85,0,0.15,1).

```js
import { easeInOutCirc } from '@bedard/utils'

easeInOutCirc(0.5) // 0.5
```

#### `easeInBack`

Easing function that follows [this curve](http://cubic-bezier.com/#0.36,0,0.66,-0.56).

```js
import { easeInBack } from '@bedard/utils'

easeInBack(0.5) // -0.08769750000000004
```

#### `easeOutBack`

Easing function that follows [this curve](http://cubic-bezier.com/#0.34,1.56,0.64,1).

```js
import { easeOutBack } from '@bedard/utils'

easeOutBack(0.5) // 1.0876975
```

#### `easeInOutBack`

Easing function that follows [this curve](http://cubic-bezier.com/#0.68,-0.6,0.32,1.6).

```js
import { easeInOutBack } from '@bedard/utils'

easeInOutBack(0.5) // 0.5
```

#### `easeInElastic`

Easing function that creates an elastic-in effect.

```js
import { easeInElastic } from '@bedard/utils'

easeInElastic(0.5) // -0.015625000000000045
```

#### `easeOutElastic`

Easing function that creates an elastic-out effect.

```js
import { easeOutElastic } from '@bedard/utils'

easeOutElastic(0.5) // 1.015625
```

#### `easeInOutElastic`

Easing function that creates an elastic-in-out effect.

```js
import { easeInOutElastic } from '@bedard/utils'

easeInOutElastic(0.5) // 0.5
```

#### `easeInBounce`

Easing function that creates a bounce-in effect.

```js
import { easeInBounce } from '@bedard/utils'

easeInBounce(0.5) // 0.234375
```

#### `easeOutBounce`

Easing function that creates a bounce-out effect.

```js
import { easeOutBounce } from '@bedard/utils'

easeOutBounce(0.5) // 0.765625
```

#### `easeInOutBounce`

Easing function that creates a bounce-in-out effect.

```js
import { easeInOutBounce } from '@bedard/utils'

easeInOutBounce(0.5) // 0.5
```

#### `flattenCols`

Flatten an array of columns to a matrix in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order).

```js
import { flattenCols } from '@bedard/utils'

flattenCols([
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
]) // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

#### `flattenRows`

Flatten an array of rows to a matrix in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order).

```js
import { flattenRows } from '@bedard/utils'

flattenRows([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
]) // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

#### `flip`

Convert between rows and columns. A good way to visualize this operation is holding a card by the top-left and bottom-right corners and flipping it over.

```js
import { flip } from '@bedard/utils'

flip([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
]) // [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
```

#### `hslToRgb`

Convert `[hue, saturation, lightness, alpha?]` to `[red, green, blue, alpha]` values.

```js
import { hslToRgb } from '@bedard/utils'

hslToRgb([0, 1, 0.5]) // [255, 0, 0, 1]
```

#### `intersect`

Intersect two-dimensional lines. Returns `undefined` if lines are parellel.

```js
import { intersect } from '@bedard/utils'

intersect([[-1, 0], [1, 0]], [[0, 1], [0, -1]]) // [0, 0]
```

#### `isEven`

Test if a number is even.

```js
import { isEven } from '@bedard/utils'

isEven(2) // true
```

#### `lerp`

Linear interpolation between numbers.

```js
import { lerp } from '@bedard/utils'

lerp(0, 10, 0.5) // 5
```

#### `lerpColors`

Linear interpolation between colors.

```js
import { lerpColors } from '@bedard/utils'

lerpColors('#000000', '#ffffff') // '#808080'
```

#### `lerpVectors`

Linear interpolation between two vectors. This function is similar to [`bilerp`](#bilerp), but for vectors of any size, or even vectors of different sizes.

```js
import { lerpVectors } from '@bedard/utils'

lerpVectors([0, 0, 0], [1, 2, 3], 0.5) // [0.5, 1, 1.5]
```

#### `measure`

Measure the distance between two vectors.

```js
import { measure } from '@bedard/utils'

// arguments can be provided as a pair of vectors
measure([0, 0], [3, 4]) // 5

// or as a single line argument
measure([[0, 0], [3, 4]]) // 5
```

#### `parseColor`

Parse an [RGB string](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_colors) to `[red, green, blue, alpha]` values. An error will be thrown if the value is not valid.

```js
import { parseColor } from '@bedard/utils'

parseColor('#123456') // [18, 52, 86, 0]
```

#### `polygon`

Create a regular polygon. The first argument defines the number of points, with the second defining the circumradius. Points start from the 12 o'clock position, and rotate counter-clockwise around the origin.

```js
import { polygon } from '@bedard/utils'

polygon(4, 1) // [[0, 1], [-1, 0], [0, -1], [1, 0]] (approximate)
```

#### `radiansToDegrees`

Convert radians to degrees.

```js
import { radiansToDegrees } from '@bedard/utils'

radiansToDegrees(Math.PI) // 180
```

#### `rgbToHsl`

Convert `[red, green, blue, alpha?]` to `[hue, saturation, lightness, alpha]` values.

```js
import { rgbToHsl } from '@bedard/utils'

rgbToHsl([255, 0, 0]) // [0, 1, 0.5, 1]
```

#### `rotateMatrix`

Rotate a square matrix. Positive values apply clockwise rotations.

```js
import { rotateMatrix } from '@bedard/utils'

rotateMatrix([
  0, 1, 2,
  3, 4, 5,
  6, 7, 8,
], 1) // [6, 3, 0, 7, 4, 1, 8, 5, 2]
```

#### `rotateVector`

Rotate a vector counter-clockwise around the origin.

```js
import { rotateVector } from '@bedard/utils'

rotateVector([0, 1], 90) // [-1, 0] (approximate)
```

#### `rows`

Chunk a square matrix into rows. Note that the source matrix must be provided in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order).

```js
import { rows } from '@bedard/utils'

rows([
  0, 1, 2,
  3, 4, 5,
  6, 7, 8,
]) // [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
```

#### `scale`

Multiple a vector by a number.

```js
import { scale } from '@bedard/utils'

scale([1, 2], 2) // [2, 4]
```

#### `slope`

Calculate the slope of a line.

```js
import { slope } from '@bedard/utils'

// arguments can be provided as a pair of vectors
slope([0, 0], [1, 1]) // 1

// or as a single line argument
slope([[0, 0], [1, 1]]) // 1
```

#### `stringifyColor`

Convert `[red, green, blue, alpha?]` values to string using [hexadecimal notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_colors).

```js
import { stringifyColor } from '@bedard/utils'

stringifyColor([255, 0, 0]) // #ff0000
```

## License

[MIT](https://github.com/scottbedard/utils/blob/main/LICENSE)

Copyright (c) 2021-present, Scott Bedard
