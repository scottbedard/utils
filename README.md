# `@bedard/utils`

[![Build status](https://img.shields.io/github/actions/workflow/status/scottbedard/utils/test.yml?branch=main)](https://github.com/scottbedard/utils/actions)
[![Codecov](https://img.shields.io/codecov/c/github/scottbedard/utils)](https://codecov.io/gh/scottbedard/utils)
[![NPM](https://img.shields.io/npm/v/@bedard/utils)](https://www.npmjs.com/package/@bedard/utils)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@bedard/utils?label=gzipped)](https://bundlephobia.com/result?p=@bedard/utils)
[![License](https://img.shields.io/github/license/scottbedard/utils?color=blue)](https://github.com/scottbedard/utils/blob/main/LICENSE)

This repository acts as my own personal lodash. It contains a number of utility types and functions that I found myself duplicating between projects. I do not anticipate breaking changes, but I'm also not ruling it out. Upgrade with caution.

- [Installation](#installation)
- [Functions](#functions)
- [Types](#types)
- [License](#license)

## Installation

The recommended installation method is via NPM.

```bash
npm install @bedard/utils
```

Alternatively, the functions maybe be accessed via a CDN. When using the CDN, the library will be exposed globally as `BedardUtils`.

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

- [`addVectors`](#addVectors)
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
- [`roll`](#roll)
- [`rotateMatrix`](#rotateMatrix)
- [`rotateVector`](#rotateVector)
- [`rows`](#rows)
- [`scale`](#scale)
- [`slope`](#slope)

### Utility

- [`deepEqual`](#deepEqual)
- [`entries`](#entries)
- [`isEmail`](#isemail)
- [`keys`](#keys)
- [`parse`](#parse)
- [`stringify`](#stringify)
- [`timeout`](#timeout)
- [`toKeyedObjects`](#toKeyedObjects)

#### `addVectors`

Add vectors together.

```js
import { addVectors } from '@bedard/utils'

addVectors([1, 2], [3, 4]) // [4, 6]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/addVectors.ts)

#### `angleFrom`

Calculate angled distance from a vector. An angle of `0` degrees will track along the X axis, with positive angles rotating counter-clockwise.

```js
import { angleFrom } from '@bedard/utils'

angleFrom([0, 0], 90, 1) // [0, 1] (approximate)
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/angleFrom.ts)

#### `bilerp`

Bi-linear interpolation between vectors.

```js
import { bilerp } from '@bedard/utils'

bilerp([0, 0], [10, 10], 0.5) // [5, 5]

```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/bilerp.ts)

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

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/cols.ts)

#### `createEasingFunction`

Create an [easing function](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function) from cubic-bezier points. Note that the included easing functions do not use this utility. They are simpler mathematical functions, and do not produce quite the same results as easing functions created using this utility.

```js
import { createEasingFunction } from '@bedard/utils'

const linear = createEasingFunction(0, 0, 1, 1)

linear(0.5) // 0.5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/createEasingFunction.ts)

#### `deepEqual`

Deep object comparison.

```js
import { deepEqual } from '@bedard/utils'

deepEqual({ foo: { bar: 1 }}, { foo: { bar: 1 }}) // true
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/deepEqual.ts)

#### `degreesToRadians`

Convert degrees to radians.

```js
import { degreesToRadians } from '@bedard/utils'

degreesToRadians(180) // 3.141592653589793

```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/degreesToRadians.ts)

#### `easeInSine`

Easing function that follows [this curve](https://cubic-bezier.com/#.12,0,.39,0).

```js
import { easeInSine } from '@bedard/utils'

easeInSine(0.5) // 0.2928932188134524
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeOutSine`

Easing function that follows [this curve](http://cubic-bezier.com/#0.61,1,0.88,1).

```js
import { easeOutSine } from '@bedard/utils'

easeOutSine(0.5) // 0.7071067811865475
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInOutSine`

Easing function that follows [this curve](http://cubic-bezier.com/#0.37,0,0.63,1).

```js
import { easeInOutSine } from '@bedard/utils'

easeInOutSine(0.5) // 0.49999999999999994
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInQuad`

Easing function that follows [this curve](http://cubic-bezier.com/#0.11,0,0.5,0).

```js
import { easeInQuad } from '@bedard/utils'

easeInQuad(0.5) // 0.25
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeOutQuad`

Easing function that follows [this curve](http://cubic-bezier.com/#0.5,1,0.89,1).

```js
import { easeOutQuad } from '@bedard/utils'

easeOutQuad(0.5) // 0.75
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInOutQuad`

Easing function that follows [this curve](http://cubic-bezier.com/#0.45,0,0.55,1).

```js
import { easeInOutQuad } from '@bedard/utils'

easeInOutQuad(0.5) // 0.5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInCubic`

Easing function that follows [this curve](http://cubic-bezier.com/#0.32,0,0.67,0).

```js
import { easeInCubic } from '@bedard/utils'

easeInCubic(0.5) // 0.125
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeOutCubic`

Easing function that follows [this curve](http://cubic-bezier.com/#0.33,1,0.68,1).

```js
import { easeOutCubic } from '@bedard/utils'

easeOutCubic(0.5) // 0.875
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInOutCubic`

Easing function that follows [this curve](http://cubic-bezier.com/#0.65,0,0.35,1).

```js
import { easeInOutCubic } from '@bedard/utils'

easeInOutCubic(0.5) // 0.5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInQuart`

Easing function that follows [this curve](http://cubic-bezier.com/#0.5,0,0.75,0).

```js
import { easeInQuart } from '@bedard/utils'

easeInQuart(0.5) // 0.0625
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeOutQuart`

Easing function that follows [this curve](http://cubic-bezier.com/#0.25,1,0.5,1).

```js
import { easeOutQuart } from '@bedard/utils'

easeOutQuart(0.5) // 0.9375
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInOutQuart`

Easing function that follows [this curve](http://cubic-bezier.com/#0.76,0,0.24,1).

```js
import { easeInOutQuart } from '@bedard/utils'

easeInOutQuart(0.5) // 0.5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInQuint`

Easing function that follows [this curve](http://cubic-bezier.com/#0.64,0,0.78,0).

```js
import { easeInQuint } from '@bedard/utils'

easeInQuint(0.5) // 0.03125
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeOutQuint`

Easing function that follows [this curve](http://cubic-bezier.com/#0.22,1,0.36,1).

```js
import { easeOutQuint } from '@bedard/utils'

easeOutQuint(0.5) // 0.96875
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInOutQuint`

Easing function that follows [this curve](http://cubic-bezier.com/#0.83,0,0.17,1).

```js
import { easeInOutQuint } from '@bedard/utils'

easeInOutQuint(0.5) // 0.5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInExpo`

Easing function that follows [this curve](http://cubic-bezier.com/#0.7,0,0.84,0).

```js
import { easeInExpo } from '@bedard/utils'

easeInExpo(0.5) // 0.03125
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeOutExpo`

Easing function that follows [this curve](http://cubic-bezier.com/#0.16,1,0.3,1).

```js
import { easeOutExpo } from '@bedard/utils'

easeOutExpo(0.5) // 0.96875
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInOutExpo`

Easing function that follows [this curve](http://cubic-bezier.com/#0.87,0,0.13,1).

```js
import { easeInOutExpo } from '@bedard/utils'

easeInOutExpo(0.5) // 0.5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInCirc`

Easing function that follows [this curve](http://cubic-bezier.com/#0.55,0,1,0.45).

```js
import { easeInCirc } from '@bedard/utils'

easeInCirc(0.5) // 0.1339745962155614
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeOutCirc`

Easing function that follows [this curve](http://cubic-bezier.com/#0,0.55,0.45,1).

```js
import { easeOutCirc } from '@bedard/utils'

easeOutCirc(0.5) // 0.8660254037844386
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInOutCirc`

Easing function that follows [this curve](http://cubic-bezier.com/#0.85,0,0.15,1).

```js
import { easeInOutCirc } from '@bedard/utils'

easeInOutCirc(0.5) // 0.5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInBack`

Easing function that follows [this curve](http://cubic-bezier.com/#0.36,0,0.66,-0.56).

```js
import { easeInBack } from '@bedard/utils'

easeInBack(0.5) // -0.08769750000000004
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeOutBack`

Easing function that follows [this curve](http://cubic-bezier.com/#0.34,1.56,0.64,1).

```js
import { easeOutBack } from '@bedard/utils'

easeOutBack(0.5) // 1.0876975
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInOutBack`

Easing function that follows [this curve](http://cubic-bezier.com/#0.68,-0.6,0.32,1.6).

```js
import { easeInOutBack } from '@bedard/utils'

easeInOutBack(0.5) // 0.5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInElastic`

Easing function that creates an elastic-in effect.

```js
import { easeInElastic } from '@bedard/utils'

easeInElastic(0.5) // -0.015625000000000045
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeOutElastic`

Easing function that creates an elastic-out effect.

```js
import { easeOutElastic } from '@bedard/utils'

easeOutElastic(0.5) // 1.015625
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInOutElastic`

Easing function that creates an elastic-in-out effect.

```js
import { easeInOutElastic } from '@bedard/utils'

easeInOutElastic(0.5) // 0.5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInBounce`

Easing function that creates a bounce-in effect.

```js
import { easeInBounce } from '@bedard/utils'

easeInBounce(0.5) // 0.234375
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeOutBounce`

Easing function that creates a bounce-out effect.

```js
import { easeOutBounce } from '@bedard/utils'

easeOutBounce(0.5) // 0.765625
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `easeInOutBounce`

Easing function that creates a bounce-in-out effect.

```js
import { easeInOutBounce } from '@bedard/utils'

easeInOutBounce(0.5) // 0.5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/ease.ts)

#### `entries`

Type safe wrapper around [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

```js
import { entries } from '@bedard/utils'

entries({ foo: 'bar' }) // [['foo', 'bar']]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/entries.ts)

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

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/flattenCols.ts)

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

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/flattenRows.ts)

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

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/flip.ts)

#### `hslToRgb`

Convert `[hue, saturation, lightness, alpha?]` to `[red, green, blue, alpha]` values.

```js
import { hslToRgb } from '@bedard/utils'

hslToRgb([0, 1, 0.5]) // [255, 0, 0, 1]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/hslToRgb.ts)

#### `intersect`

Intersect two-dimensional lines. Returns `undefined` if lines are parellel.

```js
import { intersect } from '@bedard/utils'

intersect([[-1, 0], [1, 0]], [[0, 1], [0, -1]]) // [0, 0]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/intersect.ts)

#### `isEmail`

A fairly permissive email test where the value must be shaped `email@domain.tld`, and contain exactly one `@` characters.

```js
import { isEmail } from '@bedard/utils'

isEmail('hello@world.com') // true
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/isEmail.ts)

#### `isEven`

Test if a number is even.

```js
import { isEven } from '@bedard/utils'

isEven(2) // true
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/isEven.ts)

#### `keys`

Type-safe wrapper around [`Object.keys`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

```js
import { keys } from '@bedard/utils'

keys({ foo: 'bar' }) // ['foo']
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/keys.ts)

#### `lerp`

Linear interpolation between numbers.

```js
import { lerp } from '@bedard/utils'

lerp(0, 10, 0.5) // 5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/lerp.ts)

#### `lerpColors`

Linear interpolation between colors.

```js
import { lerpColors } from '@bedard/utils'

lerpColors('#000000', '#ffffff') // '#808080'
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/lerpColors.ts)

#### `lerpVectors`

Linear interpolation between two vectors. This function is similar to [`bilerp`](#bilerp), but for vectors of any size, or even vectors of different sizes.

```js
import { lerpVectors } from '@bedard/utils'

lerpVectors([0, 0, 0], [1, 2, 3], 0.5) // [0.5, 1, 1.5]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/lerpVectors.ts)

#### `measure`

Measure the distance between two vectors.

```js
import { measure } from '@bedard/utils'

// arguments can be provided as a pair of vectors
measure([0, 0], [3, 4]) // 5

// or as a single line argument
measure([[0, 0], [3, 4]]) // 5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/measure.ts)

#### `parse`

A type-safe wrapper around `JSON.parse`. This utility is complimented by [`stringify`](#stringify), [`Json`](#jsont), and [`UnwrapJson`](#unwrapjsont).

```js
import { stringify } from '@bedard/utils'

stringify({ foo: 'bar' }) // '{"foo":"bar"}' as Json<{ foo: string }>
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/json.ts)

#### `parseColor`

Parse an [RGB string](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_colors) to `[red, green, blue, alpha]` values. An error will be thrown if the value is not valid.

```js
import { parseColor } from '@bedard/utils'

parseColor('#123456') // [18, 52, 86, 0]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/parseColor.ts)

#### `polygon`

Create a regular polygon. The first argument defines the number of points, with the second defining the circumradius. Points start from the 12 o'clock position, and rotate counter-clockwise around the origin.

```js
import { polygon } from '@bedard/utils'

polygon(4, 1) // [[0, 1], [-1, 0], [0, -1], [1, 0]] (approximate)
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/polygon.ts)

#### `radiansToDegrees`

Convert radians to degrees.

```js
import { radiansToDegrees } from '@bedard/utils'

radiansToDegrees(Math.PI) // 180
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/radiansToDegrees.ts)

#### `roll`

Roll the start of an array forwards or backwards.

```js
import { roll } from '@bedard/utils'

roll([0, 1, 2], 1) // [1, 2, 0]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/roll.ts)

#### `rgbToHsl`

Convert `[red, green, blue, alpha?]` to `[hue, saturation, lightness, alpha]` values.

```js
import { rgbToHsl } from '@bedard/utils'

rgbToHsl([255, 0, 0]) // [0, 1, 0.5, 1]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/rgbToHsl.ts)

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

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/rotateMatrix.ts)

#### `rotateVector`

Rotate a vector counter-clockwise around the origin.

```js
import { rotateVector } from '@bedard/utils'

rotateVector([0, 1], 90) // [-1, 0] (approximate)
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/rotateVector.ts)

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

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/rows.ts)

#### `scale`

Multiple a vector by a number.

```js
import { scale } from '@bedard/utils'

scale([1, 2], 2) // [2, 4]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/scale.ts)

#### `slope`

Calculate the slope of a line.

```js
import { slope } from '@bedard/utils'

// arguments can be provided as a pair of vectors
slope([0, 0], [1, 1]) // 1

// or as a single line argument
slope([[0, 0], [1, 1]]) // 1
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/slope.ts)

#### `stringify`

A type-safe wrapper around `JSON.stringify`. This utility is complimented by [`parse`](#parse), [`Json`](#jsont), and [`UnwrapJson`](#unwrapjsont)

```ts
import { parse, stringify } from '@bedard/utils'

const json = stringify({ foo: 'bar' })

const obj = parse(json) // { foo: string }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/json.ts)

#### `timeout`

Resolve a promise after a given duration

```ts
import { timeout } from '@bedard/utils'

await timeout(100)
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/timeout.ts)

#### `stringifyColor`

Convert `[red, green, blue, alpha?]` values to string using [hexadecimal notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_colors).

```js
import { stringifyColor } from '@bedard/utils'

stringifyColor([255, 0, 0]) // #ff0000
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/stringifyColor.ts)

#### `toKeyedObjects`

Create keyed objects from an array.

```js
import { toKeyedObjects } from '@bedard/utils'

toKeyedObjects([1, 2], 'foo') // [{ foo: 1 }, { foo: 2 }]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/functions/toKeyedObjects.ts)

## Types

- [`Abs<T>`](#abst)
- [`AddDigits<T, U>`](#adddigitst-u)
- [`AllEqual<Sources, Value>`](#allequalsources-value)
- [`AND<T, U>`](#andt-u)
- [`Bit`](#bit)
- [`BreakWords<T>`](#breakwordst)
- [`Byte`](#byte)
- [`CamelCase<T>`](#camelcaset)
- [`CamelCaseKeys<T>`](#camelcasekeyst)
- [`CamelCaseKeysDeep<T>`](#camelcasekeysdeept)
- [`Decimal`](#decimal)
- [`Difference<A, B>`](#differencea-b)
- [`Digits<T>`](#digitst)
- [`Either<T, U>`](#eithert-u)
- [`Equal<A, B>`](#equala-b)
- [`Expect<T>`](#expectt)
- [`First<T>`](#firstt)
- [`Hex`](#hex)
- [`HexColor<T>`](#hexcolor)
- [`Intersection<A, B>`](#intersectiona-b)
- [`IsFloat<T>`](#isfloatt)
- [`IsInteger<T>`](#isintegert)
- [`IsNegative<T>`](#isnegativet)
- [`IsPositive<T>`](#ispositivet)
- [`Join<Parts, Delimeter>`](#joinparts-delimeter)
- [`Json<T>`](#jsont)
- [`KebabCase<T>`](#kebabcaset)
- [`KebabCaseKeys<T>`](#kebabcasekeyst)
- [`KebabCaseKeysDeep<T>`](#kebabcasekeysdeept)
- [`Last<T>`](#lastt)
- [`LastDigit<T>`](#lastdigitt)
- [`Line<T>`](#linet)
- [`MapCapitalize<T>`](#mapcapitalizet)
- [`MapLowercase<T>`](#maplowercaset)
- [`MapUppercase<T>`](#mapuppercaset)
- [`MaybeArray<T>`](#maybearrayt)
- [`Methods<T>`](#methodst)
- [`MUX<T, U, S>`](#muxt-u-s)
- [`NAND<T, U>`](#nandt-u)
- [`Negate<T>`](#negatet)
- [`NOR<T, U>`](#nort-u)
- [`NOT<T, U>`](#nott)
- [`Not<T>`](#nott-1)
- [`OmitStartsWith<T, U>`](#omitstartswitht-u)
- [`OmitType<T, U>`](#omittypet-u)
- [`Opaque<T, Token>`](#opaquet-token)
- [`OptionalKeys<T, U>`](#optionalkeyst-u)
- [`OR<T, U>`](#ort-u)
- [`PadDigits<T, U>`](#paddigitst-u)
- [`PascalCase<T>`](#pascalcaset)
- [`PascalCaseKeys<T>`](#pascalcasekeyst)
- [`PascalCaseKeysDeep<T>`](#pascalcasekeysdeept)
- [`PickStartsWith<T, U>`](#pickstartswitht-u)
- [`PickType<T, U>`](#picktypet-u)
- [`Pop<T>`](#popt)
- [`Properties<T>`](#propertiest)
- [`RequiredKeys<T, U>`](#requiredkeyst-u)
- [`RgbColor<T>`](#rgbcolort)
- [`ScreamingSnakeCase<T>`](#screamingsnakecaset)
- [`ScreamingSnakeCaseKeys<T>`](#screamingsnakecasekeyst)
- [`ScreamingSnakeCaseKeysDeep<T>`](#screamingsnakecasekeysdeept)
- [`Shift<T>`](#shiftt)
- [`SnakeCase<T>`](#snakecaset)
- [`SnakeCaseKeys<T>`](#snakecasekeyst)
- [`SnakeCaseKeysDeep<T>`](#snakecasekeysdeept)
- [`Split<Source, Delimeter>`](#splitsource-delimeter)
- [`StartsWith<T, U>`](#startswitht-u)
- [`SymmetricDifference<A, B>`](#symmetricdifferencea-b)
- [`ToNumber<T>`](#tonumbert)
- [`Transparent<T>`](#transparentt)
- [`Trim<T>`](#trimt)
- [`UnwrapJson<T>`](#unwrapjsont)
- [`UnwrapOpaque<T>`](#unwrapopaquet)
- [`ValueOf<T>`](#valueoft)
- [`Vec<T>`](#vect)
- [`Without<A, B>`](#withouta-b)
- [`XNOR<T, U>`](#xnort-u)
- [`XOR<T, U>`](#xort-u)

#### `Abs<T>`

Type the absolute value of `T`

```ts
import { Abs } from '@bedard/utils'

type Test = Abs<-5> // 5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Abs.ts)

#### `AddDigits<T, U>`

Add two decimal digits

```ts
import { AddDigits } from '@bedard/utils'

type Test = AddDigits<1, 2> // 3
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/AddDigits.ts)

#### `AllEqual<Sources, Value>`

Types `true` if all `Sources` equal `Value`.

```ts
import { AllEqual } from '@bedard/utils'

type Test1 = AllEqual<[1, 1], 1> // true
type Test2 = AllEqual<[1, 2], 1> // false
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/AllEqual.ts)

#### `AND<T, U>`

Logical AND gate

```ts
import { AND } from '@bedard/utils'

type Test = AND<1, 1> // 1
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/AND.ts)

#### `Bit`

Union of bit values

```ts
import { Bit } from '@bedard/utils'

type Test = Bit // 0 | 1
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Bit.ts)

#### `BreakWords<T>`

Explode a string by common word breaks. This currently includes spaces, hyphens, underscores, and casing changes.

```ts
import { BreakWords } from '@bedard/utils'

type Test = BreakWords<'one twoThree-four'> // ['one', 'two', 'Three', 'four']
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/BreakWords.ts)

#### `Byte`

A union of all numbers that can be represented by a single byte (0 - 255).

```ts
import { Byte } from '@bedard/utils'

const n: Byte = 255
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Byte.ts)

#### `CamelCase<T>`

Convert a string to camel case.

```ts
import { CamelCase } from '@bedard/utils'

type Test = CamelCase<'foo-bar'> // 'fooBar'
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/CamelCase.ts)

#### `CamelCaseKeys<T>`

Camel case object keys.

```ts
import { CamelCaseKeys } from '@bedard/utils'

type Test = CamelCaseKeys<{ foo_bar: any }> // { fooBar: any }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/CamelCaseKeys.ts)

#### `CamelCaseKeysDeep<T>`

Deeply camel case object keys.

```ts
import { CamelCaseKeysDeep } from '@bedard/utils'

type Test = CamelCaseKeysDeep<{ foo_bar: { one_two: any }}> // { fooBar: { oneTwo: any }}
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/CamelCaseKeysDeep.ts)

#### `Decimal`

Union of decimal values

```ts
import { Decimal } from '@bedard/utils'

type Test = Decimal // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Decimal.ts)

#### `Digits<T>`

Explode the digits of a positive integer

```ts
import { Digits } from '@bedard/utils'

type Test = Digits<123> // [1, 2, 3]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Digits.ts)

#### `Difference<A, B>`

Elements of `A` that are not elements of `B`. For unions, this is the same as the [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion) utility.

```ts
import { Difference } from '@bedard/utils'

type Test = Difference<{ a: any, b: any }, { b: any, c: any }> // { a: any }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Difference.ts)

#### `Either<T, U>`

Create an [exclusive or](https://en.wikipedia.org/wiki/Exclusive_or) between two types. Note that for objects, this differs from a union type in that keys are strictly matched.

```ts
import { Either } from '@bedard/utils'

type Test = Either<{ foo: any }, { bar: any }>

const a: Test = { foo } // pass
const b: Test = { bar } // pass
const c: Test = { foo, bar } // fail
```

Additionally, a tuple can be provided for a chained XOR.

```ts
type Test = XOR<[1, 2, 3]>

const a: Test = 1 // pass
const b: Test = 2 // pass
const c: Test = 3 // pass
const d: Test = 4 // fail
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/XOR.ts)

#### `Equal<A, B>`

Types `true` if `A` and `B` are equal. This is mainly used with [`Expect`](#expectt) to verify that types are working as expected. See [`NotEqual`](#notequala-b) for the inverse of this type.

```ts
import { Expect, Equal } from '@bedard/utils'

type Test = Expect<Equal<number, number>>
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Equal.ts)

#### `Expect<T>`

Verify that `T` is `true`. This allows for assertions to be made using the type system. See [`Equal`](#equala-b) and [`NotEqual`](#notequala-b) for more usage examples.

```ts
import { Expect } from '@bedard/utils'

type Test = Expect<true>
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Expect.ts)

#### `First<T>`

Extract the first element of a string or array.

```ts
import { First } from '@bedard/utils'

type Test1 = First<'abc'> // 'a'
type Test2 = First<[1, 2, 3]>, // 1
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/First.ts)

#### `Hex`

A hexadecimal character

```ts
import { Hex } from '@bedard/utils'

const char: Hex = 'a'
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Hex.ts)

#### `HexColor<T>`

Validate a [hexadecimal color value](https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color)

```ts
import { HexColor } from '@bedard/utils'

const color = <T>(val: HexColor<T>) => val

color('#abc')
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/HexColor.ts)

#### `Intersection<A, B>`

The [intersection](https://en.wikipedia.org/wiki/Intersection_(set_theory)) of `A` and `B`, giving preference to `A`.

```ts
import { Intersection } from '@bedard/utils'

type Test = Intersection<{ a: any, b: number }, { c: string, d: any }> // { b: number }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Intersection.ts)

#### `IsFloat<T>`

Test if number is a float

```ts
import { IsInteger } from '@bedard/utils'

type Test = IsFloat<1.5> // true
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/IsFloat.ts)

#### `IsInteger<T>`

Test if number is an integer

```ts
import { IsInteger } from '@bedard/utils'

type Test = IsInteger<1> // true
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/IsInteger.ts)

#### `IsNegative<T>`

Test if number is less than zero

```ts
import { IsNegative } from '@bedard/utils'

type Test = IsNegative<-1> // true
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/IsNegative.ts)

#### `IsPositive<T>`

Test if number is greater than zero

```ts
import { IsPositive } from '@bedard/utils'

type Test = IsPositive<1> // true
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/IsPositive.ts)

#### `Join<Parts, Delimeter>`

Join `Parts` by `Delimeter`. This type is the opposite of [`Split`](#splitsource-delimeter).

```ts
import { Join } from '@bedard/utils'

type Test1 = Join<['a', 'b', 'c']> // 'abc'

type Test2 = Join<['a', 'b', 'c'], '.'> // 'a.b.c'
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Join.ts)

#### `Json<T>`

Encodes a JSON string with underlying type information. This utility is complimented by [`parse`](#parse), [`stringify`](#stringify), and [`UnwrapJson`](#unwrapjsont).

```ts
import { Json } from '@bedard/utils'

type Test = Json<{ foo: 'bar' }> // string
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Json.ts)

#### `KebabCase<T>`

Convert a string to kebab case.

```ts
import { KebabCase } from '@bedard/utils'

type Test = KebabCase<'fooBar'> // 'foo-bar'
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/KebabCase.ts)

#### `KebabCaseKeys<T>`

Kebab case object keys.

```ts
import { KebabCaseKeys } from '@bedard/utils'

type Test = KebabCaseKeys<{ foo_bar: any }> // { 'foo-bar': any }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/KebabCaseKeys.ts)

#### `KebabCaseKeysDeep<T>`

Deeply kebab case object keys.

```ts
import { KebabCaseKeysDeep } from '@bedard/utils'

type Test = KebabCaseKeysDeep<{ foo_bar: { one_two: any }}> // { 'foo-bar': { 'one-two': any }}
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/KebabCaseKeysDeep.ts)

#### `Last<T>`

Extract the last element of a string or array.

```ts
import { Last } from '@bedard/utils'

type Test1 = Last<'abc'> // 'c'
type Test2 = Last<[1, 2, 3]>, // 3
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Last.ts)

#### `LastDigit<T>`

Get the last digit of a number

```ts
import { LastDigit } from '@bedard/utils'

type Test1 = LastDigit<12> // 2
type Test2 = LastDigit<1.5> // 5
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/LastDigit.ts)

#### `Line<T>`

Describes a straight line between two vectors of length `T`.

```ts
import { Line } from '@bedard/utils'

type Test = Line<2> // [[number, number], [number, number]]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Line.ts)

#### `MapCapitalize<T>`

Capitalize the first letter of each string.

```ts
import { MapCapitalize } from '@bedard/utils'

type Test = MapLowercase<['foo', 'bar']> // ['Foo', 'Bar']
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/MapCapitalize.ts)

#### `MapLowercase<T>`

Map strings to lowercase.

```ts
import { MapLowercase } from '@bedard/utils'

type Test = MapLowercase<['A', 'B']> // ['a', 'b']
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/MapLowercase.ts)

#### `MapUppercase<T>`

Map strings to uppercase.

```ts
import { MapUppercase } from '@bedard/utils'

type Test = MapUppercase<['a', 'b']> // ['A', 'B']
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/MapUppercase.ts)

#### `MaybeArray<T>`

Singular or array of `T`

```ts
import { MaybeArray } from '@bedard/utils'

type Test = MaybeArray<number> // number | number[]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/MaybeArray.ts)

#### `Methods<T>`

Create a string union of methods from `T`. This is the inverse of [`Properties<T>`](#propertiest)

```ts
import { Methods } from '@bedard/utils'

type Test = Methods<{ foo: string, bar(): any }> // 'bar'
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Methods.ts)

#### `MUX<T, U, S>`

Logical MUX gate

```ts
import { MUX } from '@bedard/utils'

type Test = MUX<1, 0, 0> // 1
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/MUX.ts)

#### `NAND<T, U>`

Logical NAND gate

```ts
import { NAND } from '@bedard/utils'

type Test = NAND<0, 0> // 1
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/NAND.ts)

#### `Negate<T>`

Reverse the sign of a number

```ts
import { Negate } from '@bedard/utils'

type Test = Negate<1> // -1
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Negate.ts)

#### `NOR<T, U>`

Logical NOR gate

```ts
import { NOR } from '@bedard/utils'

type Test = NOR<0, 0> // 1
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/NOR.ts)

#### `NOT<T>`

Reverse the [`Bit`](#bit) value of `T`.

```ts
import { NOT } from '@bedard/utils'

type Test = NOT<1> // /0
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Not.ts)

#### `Not<T>`

Reverse the `boolean` value of `T`.

```ts
import { Not } from '@bedard/utils'

type Test = Not<true> // false
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Not.ts)

#### `OmitStartsWith<T, U>`

Omit keys of `T` that start with `U`.

```ts
import { OmitStartsWith } from '@bedard/utils'

type Test = OmitStartsWith<{ FooOne: void; FooTwo: void; BarThree: void }, 'Bar'> // { FooOne: void; FooTwo: void }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/OmitStartsWith.ts)

#### `OmitType<T, U>`

Omit keys of `T` that extend `U`. This is the inverse of [`PickType<T, U>`](#picktypet-u).

```ts
import { OmitType } from '@bedard/utils'

type Test = OmitType<{ foo: string, bar: number }, string> // { bar: number }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/OmitType.ts)

#### `Opaque<T, Token>`

[Opaque type](https://en.wikipedia.org/wiki/Opaque_data_type) `T` with an optional `Token`. For more on opaque types, [this article](https://codemix.com/opaque-types-in-javascript) is a great place to start.

```ts
import { Opaque } from '@bedard/utils'

type USD = Opaque<number, 'usd'>

const dollars = 5 as USD
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Opaque.ts)

#### `OptionalKeys<T, U>`

Get optional keys from `T`, or make keys `U` of `T` optional.

```ts
import { OptionalKeys } from '@bedard/utils'

type Test1 = OptionalKeys<{ foo?: any, bar: any }> // 'foo'

type Test2 = OptionalKeys<{ foo: any, bar: any }, 'foo'> // { foo?: any, bar: any }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/OptionalKeys.ts)

#### `OR<T, U>`

Logical OR gate

```ts
import { OR } from '@bedard/utils'

type Test = OR<0, 1> // 1
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/OR.ts)

#### `PadDigits<T, U>`

Pad two numeric vectors so they are the same size

```ts
import { PadVec } from '@bedard/utils'

type Test = PadDigits<[1, 2], [3]> // [ [1, 2], [0, 3] ]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/PadDigits.ts)

#### `PascalCase<T>`

Convert a string to pascal case.

```ts
import { PascalCase } from '@bedard/utils'

type Test = PascalCase<'foo-bar'> // 'FooBar'
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/PascalCase.ts)

#### `PascalCaseKeys<T>`

Kebab case object keys.

```ts
import { PascalCaseKeys } from '@bedard/utils'

type Test = PascalCaseKeys<{ foo_bar: any }> // { 'foo-bar': any }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/PascalCaseKeys.ts)

#### `PascalCaseKeysDeep<T>`

Deeply pascal case object keys.

```ts
import { PascalCaseKeysDeep } from '@bedard/utils'

type Test = PascalCaseKeysDeep<{ foo_bar: { one_two: any }}> // { FooBar: { OneTwo: any }}
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/PascalCaseKeysDeep.ts)

#### `PickStartsWith<T, U>`

Pick keys of `T` that start with `U`.

```ts
import { PickStartsWith } from '@bedard/utils'

type Test = PickStartsWith<{ FooOne: void; FooTwo: void ; Bar: void }, 'Foo'> // { FooOne: void; FooTwo: void }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/PickStartsWith.ts)

#### `PickType<T, U>`

Pick keys of `T` that extend `U`. This is the inverse of [`OmitType<T, U>`](#omittypet-u).

```ts
import { PickType } from '@bedard/utils'

type Test = PickType<{ foo: string, bar: number }, string> // { foo: string }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/PickType.ts)

#### `Pop<T>`

Remove the last element of `T`.

```ts
import { Pop } from '@bedard/utils'

type Test = Pop<['foo', 'bar', 'baz']> // ['foo', 'bar']
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Pop.ts)

#### `Properties<T>`

Create a string union of properties from `T`. This is the inverse of [`Methods<T>`](#methodst).

```ts
import { Properties } from '@bedard/utils'

type Test = Properties<{ foo: string, bar(): any }> // 'foo'
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Properties.ts)

#### `RequiredKeys<T, U>`

Get required keys from `T`, or make keys `U` of `T` required.

```ts
import { RequiredKeys } from '@bedard/utils'

type Test = RequiredKeys<{ foo: any, bar?: any }> // 'foo'

type Test = RequiredKeys<{ foo?: any, bar?: any }, 'foo'> // { foo: any, bar?: any }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/RequiredKeys.ts)

#### `RgbColor<T>`

Validate a rgb color

```ts
import { RgbColor } from '@bedard/utils'

const rgb = <T>(color: RgbColor<T>) => color

rgb('rgb(0, 0, 0)')
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/RgbColor.ts)

#### `ScreamingSnakeCase<T>`

Convert a string to screaming snake case.

```ts
import { ScreamingSnakeCase } from '@bedard/utils'

type Test = ScreamingSnakeCase<'fooBar'> // 'FOO_BAR'
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/ScreamingSnakeCase.ts)

#### `ScreamingSnakeCaseKeys<T>`

Screaming snake case object keys.

```ts
import { ScreamingSnakeCaseKeys } from '@bedard/utils'

type Test = ScreamingSnakeCaseKeys<{ foo_bar: any }> // { FOO_BAR: any }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/ScreamingSnakeCaseKeys.ts)

#### `ScreamingSnakeCaseKeysDeep<T>`

Deeply screaming snake case object keys.

```ts
import { ScreamingSnakeCaseKeysDeep } from '@bedard/utils'

type Test = ScreamingSnakeCaseKeysDeep<{ foo_bar: { one_two: any }}> // { FOO_BAR: { ONE_TWO: any }}
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/ScreamingSnakeCaseKeysDeep.ts)

#### `Shift<T>`

Remove the first element of `T`.

```ts
import { Shift } from '@bedard/utils'

type Test = Shift<['foo', 'bar', 'baz']> // ['bar', 'baz']
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Shift.ts)

#### `SnakeCase<T>`

Convert a string to snake case.

```ts
import { SnakeCase } from '@bedard/utils'

type Test = SnakeCase<'fooBar'> // 'foo_bar'
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/SnakeCase.ts)

#### `SnakeCaseKeys<T>`

Snake case object keys.

```ts
import { SnakeCaseKeys } from '@bedard/utils'

type Test = SnakeCaseKeys<{ fooBar: any }> // { foo_bar: any }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/SnakeCaseKeys.ts)

#### `SnakeCaseKeysDeep<T>`

Deeply snake case object keys.

```ts
import { SnakeCaseKeysDeep } from '@bedard/utils'

type Test = SnakeCaseKeysDeep<{ fooBar: { oneTwo: any }}> // { foo_bar: { one_two: any }}
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/SnakeCaseKeysDeep.ts)

#### `Split<Source, Delimeter>`

Split `Source` by `Delimeter`. This type is the opposite of [`Join`](#joinparts-delimeter). Note that to split by multiple delimeters the second argument must be a `string[]`, as unions will create a [distributive conditional type](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types).

```ts
import { Split } from '@bedard/utils'

type Test1 = Split<'abc'> // ['a', 'b', 'c']

type Test2 = Split<'a.b.c', '.'> // ['a', 'b', 'c']

type Test3 = Split<'a.b-c', ['.', '-']> // ['a', 'b', 'c']
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Split.ts)

#### `StartsWith<T, U>`

Types `true` if `T` starts with `U`.

```ts
import { StartsWith } from '@bedard/utils'

type Test = StartsWith<'FooBar', 'Foo'> // true
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/StartsWith.ts)

#### `SymmetricDifference<A, B>`

The [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference) of `A` and `B`.

```ts
import { SymmetricDifference } from '@bedard/utils'

type Test1 = SymmetricDifference<'a' | 'b', 'b' | 'c'> // 'a' | 'c'

type Test2 = SymmetricDifference<{ a: any, b: any }, { b: any, c: any }> // { a: any, c: any }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/SymmetricDifference.ts)

#### `ToNumber<T>`

Convert numeric `string` to `number`

```ts
import { ToNumber } from '@bedard/types'

type Test = ToNumber<'123'> // 123
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/ToNumber.ts)

#### `Transparent<T>`

A type that does not encode any additional data. This is the inverse of [`Opaque<T>`](#opaquet-token).

```ts
import { Transparent } from '@bedard/utils'

type Test = Transparent<string>
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Transparent.ts)

#### `Trim<T>`

Trim leading and trailing whitespace

```ts
import { Trim } from '@bedard/utils'

type Test = Trim<'  foo bar  '> // 'foo bar'
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Trim.ts)

#### `UnwrapOpaque<T>`

Unwrap the underlying data of an [`Opaque<T>`](#opaquet-token) type.

```ts
import { UnwrapOpaque } from '@bedard/utils'

type Test1 = Opaque<string, 'example'>

type Test2 = UnwrapOpaque<Foo> // string
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/UnwrapOpaque.ts)

#### `UnwrapJson<T>`

Decodes type information from a [`Json<T>`](#jsont) string.

```ts
import { Json, UnwrapJson } from '@bedard/utils'

type UserJson = Json<{ email: string }> // string

type User = UnwrapJson<UserJson> // { email: string }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Json.ts)

#### `ValueOf<T>`

Generate a union from the values of `T`.

```ts
import { ValueOf } from '@bedard/utils'

type Test1 = ValueOf<Array<string>> // string

type Test2 = ValueOf<{ foo: number, bar: string }> // number | string
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/ValueOf.ts)

#### `Vec<T>`

Generate a uniform tuple of length `T`, with numeric values by default.

```ts
import { Vec } from '@bedard/utils'

type Test1 = Vec<3> // [number, number, number]

type Test2 = Vec<3, Thing> // [Thing, Thing, Thing]
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Vec.ts)

#### `Without<A, B>`

Prohibit properties of `A` and omit properties of `B`.

```ts
import { Without } from '@bedard/utils'

type Test = Without<{ foo: any, bar: any }, { bar: any }> // { foo?: never }
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/Without.ts)

#### `XNOR<T, U>`

Logical XNOR gate

```ts
import { XNOR } from '@bedard/types'

type Test = XNOR<0, 0> // 1
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/XNOR.ts)

#### `XOR<T, U>`

Logical XOR gate

```ts
import { XOR } from '@bedard/utils'

type Test = XOR<0, 1> // 1
```

[View source &rarr;](https://github.com/scottbedard/utils/blob/main/src/types/XOR.ts)

## License

[MIT](https://github.com/scottbedard/utils/blob/main/LICENSE)

Copyright (c) 2021-present, Scott Bedard
