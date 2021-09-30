# `@bedard/utils`

[![Build status](https://img.shields.io/github/workflow/status/scottbedard/utils/Test)](https://github.com/scottbedard/utils/actions)
[![Codecov](https://img.shields.io/codecov/c/github/scottbedard/utils)](https://codecov.io/gh/scottbedard/utils)
[![Dependencies](https://img.shields.io/david/scottbedard/utils)](https://david-dm.org/scottbedard/utils)
[![Dev dependencies](https://img.shields.io/david/dev/scottbedard/utils)](https://david-dm.org/scottbedard/utils?type=dev)
[![NPM](https://img.shields.io/npm/v/@bedard/utils)](https://www.npmjs.com/package/@bedard/utils)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@bedard/utils?label=gzipped)](https://bundlephobia.com/result?p=@bedard/utils)
[![License](https://img.shields.io/github/license/scottbedard/utils?color=blue)](https://github.com/scottbedard/utils/blob/main/LICENSE)

This library exists to help me avoid duplicate code between projects. My goal is to expose small, well tested, and tree-shakeable utility functions. Given the simplicity of these, I do not anticipate breaking changes. But be warned, this project is not following semantic versioning.

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
- [`measure`](#measure)
- [`polygon`](#polygon)
- [`radiansToDegrees`](#radiansToDegrees)
- [`rotateMatrix`](#rotateMatrix)
- [`rotateVector`](#rotateVector)
- [`rows`](#rows)
- [`slope`](#slope)

### `angleFrom`

Calculate angled distance from a vector. An angle of `0` degrees will track along the X axis, with positive angles rotating counter-clockwise.

```js
import { angleFrom } from '@bedard/utils'

angleFrom([0, 0], 90, 1) // [0, 1] (approximate)
```

### `bilerp`

Bi-linear interpolation between vectors.

```js
import { bilerp } from '@bedard/utils'

bilerp([0, 0], [10, 10], 0.5) // [5, 5]
```

### `cols`

Chunk a square matrix into columns. Note that the source matrix must be provided in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order).

```js
import { cols } from '@bedard/utils'

cols([
  0, 1, 2,
  3, 4, 5,
  6, 7, 8,
]) // [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
```

### `degreesToRadians`

Convert degrees to radians.

```js
import { degreesToRadians } from '@bedard/utils'

degreesToRadians(180) // 3.141592653589793
```

### `flattenCols`

Flatten an array of columns to a matrix in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order).

```js
import { flattenCols } from '@bedard/utils'

flattenCols([
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
]) // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

### `flattenRows`

Flatten an array of rows to a matrix in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order).

```js
import { flattenRows } from '@bedard/utils'

flattenRows([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
]) // [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

### `flip`

Convert between rows and columns. A good way to visualize this operation is holding a card by the top-left and bottom-right corners and flipping it over.

```js
import { flip } from '@bedard/utils'

flip([
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
]) // [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
```

### `intersect`

Intersect two-dimensional lines. Returns `undefined` if lines are parellel.

```js
import { intersect } from '@bedard/utils'

intersect([[-1, 0], [1, 0]], [[0, 1], [0, -1]]) // [0, 0]
```

### `isEven`

Test if a number is even.

```js
import { isEven } from '@bedard/utils'

isEven(2) // true
```

### `lerp`

Linear interpolation between numbers.

```js
import { lerp } from '@bedard/utils'

lerp(0, 10, 0.5) // 5
```

### `measure`

Measure the distance between two vectors.

```js
import { measure } from '@bedard/utils'

// arguments can be provided as a pair of vectors
measure([0, 0], [3, 4]) // 5

// or as a single line argument
measure([[0, 0], [3, 4]]) // 5
```

### `polygon`

Create a regular polygon. The first argument defines the number of points, with the second defining the circumradius. Points start from the 12 o'clock position, and rotate counter-clockwise around the origin.

```js
import { polygon } from '@bedard/utils'

polygon(4, 1) // [[0, 1], [-1, 0], [0, -1], [1, 0]] (approximate)
```

### `radiansToDegrees`

Convert radians to degrees.

```js
import { radiansToDegrees } from '@bedard/utils'

radiansToDegrees(Math.PI) // 180
```

### `rotateMatrix`

Rotate a square matrix. Positive values apply clockwise rotations.

```js
import { rotateMatrix } from '@bedard/utils'

rotateMatrix([
  0, 1, 2,
  3, 4, 5,
  6, 7, 8,
], 1) // [6, 3, 0, 7, 4, 1, 8, 5, 2]
```

### `rotateVector`

Rotate a vector counter-clockwise around the origin.

```js
import { rotateVector } from '@bedard/utils'

rotateVector([0, 1], 90) // [-1, 0] (approximate)
```

### `rows`

Chunk a square matrix into rows. Note that the source matrix must be provided in [row-major order](https://en.wikipedia.org/wiki/Row-_and_column-major_order).

```js
import { rows } from '@bedard/utils'

rows([
  0, 1, 2,
  3, 4, 5,
  6, 7, 8,
]) // [[0, 1, 2], [3, 4, 5], [6, 7, 8]]
```

### `slope`

Calculate the slope of a line.

```js
import { slope } from '@bedard/utils'

// arguments can be provided as a pair of vectors
slope([0, 0], [1, 1]) // 1

// or as a single line argument
slope([[0, 0], [1, 1]]) // 1
```

## License

[MIT](https://github.com/scottbedard/utils/blob/main/LICENSE)

Copyright (c) 2021-present, Scott Bedard
