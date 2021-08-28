# `@bedard/math`

[![Build status](https://img.shields.io/github/workflow/status/scottbedard/math/Test)](https://github.com/scottbedard/math/actions)
[![Codecov](https://img.shields.io/codecov/c/github/scottbedard/math)](https://codecov.io/gh/scottbedard/math)
[![Dependencies](https://img.shields.io/david/scottbedard/math)](https://david-dm.org/scottbedard/math)
[![Dev dependencies](https://img.shields.io/david/dev/scottbedard/math)](https://david-dm.org/scottbedard/math?type=dev)
[![NPM](https://img.shields.io/npm/v/@bedard/math)](https://www.npmjs.com/package/@bedard/math)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/@bedard/math?label=gzipped)](https://bundlephobia.com/result?p=@bedard/math)
[![License](https://img.shields.io/github/license/scottbedard/math?color=blue)](https://github.com/scottbedard/math/blob/main/LICENSE)

This library exists to help me avoid duplicate code between projects. My goal is to expose small, well tested, and tree-shakeable utility functions. Given the simplicity of these, I do not anticipate breaking changes. But be warned, this project is not following semantic versioning.

## Installation

The recommended installation method is via NPM.

```bash
npm install @bedard/math
```

Alternatively, these functions maybe be accessed via a CDN. When using a CDN, the library will be exposed globally as `BedardMath`.

```html
<script src="https://unpkg.com/@bedard/math"></script>
```

## Functions

- [`bilerp`](#bilerp)
- [`degreesToRadians`](#degreesToRadians)
- [`isEven`](#isEven)
- [`lerp`](#lerp)
- [`measure`](#measure)
- [`radiansToDegrees`](#radiansToDegrees)

### `bilerp`

Bi-linear interpolation between vectors.

```js
import { bilerp } from '@bedard/math'

bilerp([0, 0], [10, 10], 0.5) // [5, 5]
```

### `degreesToRadians`

Convert degrees to radians.

```js
import { degreesToRadians } from '@bedard/math'

degreesToRadians(180) // 3.141592653589793
```

### `isEven`

Test if a number is even.

```js
import { isEven } from '@bedard/math'

isEven(2) // true
```

### `lerp`

Linear interpolation between numbers.

```js
import { lerp } from '@bedard/math'

lerp(0, 10, 0.5) // 5
```

### `measure`

Measure the distance between two vectors.

```js
import { measure } from '@bedard/math'

lerp([0, 0], [3, 4]) // 5
```

### `radiansToDegrees`

Convert radians to degrees.

```js
radiansToDegrees(Math.PI) // 180
```

## License

[MIT](https://github.com/scottbedard/math/blob/main/LICENSE)

Copyright (c) 2021-present, Scott Bedard
