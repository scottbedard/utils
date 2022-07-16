# `@bedard/utils`

[![Build status](https://img.shields.io/github/workflow/status/scottbedard/utils/Test)](https://github.com/scottbedard/utils/actions)
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
- [`rotateMatrix`](#rotateMatrix)
- [`rotateVector`](#rotateVector)
- [`rows`](#rows)
- [`scale`](#scale)
- [`slope`](#slope)

### Utility

- [`deepEqual`](#deepEqual)
- [`parse`](#parse)
- [`stringify`](#stringify)
- [`toKeyedObjects`](#toKeyedObjects)

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

#### `deepEqual`

Deep object comparison.

```js
import { deepEqual } from '@bedard/utils'

deepEqual({ foo: { bar: 1 }}, { foo: { bar: 1 }}) // true
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

#### `parse`

A type-safe wrapper around `JSON.parse`. This utility is complimented by [`stringify`](#stringify), [`Json`](#jsont), and [`UnwrapJson`](#unwrapjsont).

```js
import { stringify } from '@bedard/utils'

stringify({ foo: 'bar' }) // '{"foo":"bar"}' as Json<{ foo: string }>
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

#### `stringify`

A type-safe wrapper around `JSON.stringify`. This utility is complimented by [`parse`](#parse), [`Json`](#jsont), and [`UnwrapJson`](#unwrapjsont)

```ts
import { parse, stringify } from '@bedard/utils'

const json = stringify({ foo: 'bar' })

const obj = parse(json) // { foo: 'bar' } as { foo: number }
```

#### `stringifyColor`

Convert `[red, green, blue, alpha?]` values to string using [hexadecimal notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_colors).

```js
import { stringifyColor } from '@bedard/utils'

stringifyColor([255, 0, 0]) // #ff0000
```

#### `toKeyedObjects`

Create keyed objects from an array.

```js
import { toKeyedObjects } from '@bedard/utils'

toKeyedObjects([1, 2], 'foo') // [{ foo: 1 }, { foo: 2 }]
```

## Types

- [`AllEqual<Sources, Value>`](#allequalsources-value)
- [`BreakWords<T>`](#breakwordst)
- [`CamelCase<T>`](#camelcaset)
- [`CamelCaseKeys<T>`](#camelcasekeyst)
- [`CamelCaseKeysDeep<T>`](#camelcasekeysdeept)
- [`Difference<A, B>`](#differencea-b)
- [`Equal<A, B>`](#equala-b)
- [`Expect<T>`](#expectt)
- [`First<T>`](#firstt)
- [`Intersection<A, B>`](#intersectiona-b)
- [`Join<Parts, Delimeter>`](#joinparts-delimeter)
- [`Json<T>`](#jsont)
- [`KebabCase<T>`](#kebabcaset)
- [`KebabCaseKeys<T>`](#kebabcasekeyst)
- [`KebabCaseKeysDeep<T>`](#kebabcasekeysdeept)
- [`Last<T>`](#lastt)
- [`MapCapitalize<T>`](#mapcapitalizet)
- [`MapLowercase<T>`](#maplowercaset)
- [`MapUppercase<T>`](#mapuppercaset)
- [`Methods<T>`](#methodst)
- [`Not<T>`](#nott)
- [`OmitStartsWith<T, U>`](#omitstartswitht-u)
- [`OmitType<T, U>`](#omittypet-u)
- [`Opaque<T, Token>`](#opaquet-token)
- [`OptionalKeys<T, U>`](#optionalkeyst-u)
- [`PascalCase<T>`](#pascalcaset)
- [`PascalCaseKeys<T>`](#pascalcasekeyst)
- [`PascalCaseKeysDeep<T>`](#pascalcasekeysdeept)
- [`PickStartsWith<T, U>`](#pickstartswitht-u)
- [`PickType<T, U>`](#picktypet-u)
- [`Pop<T>`](#popt)
- [`Properties<T>`](#propertiest)
- [`RequiredKeys<T, U>`](#requiredkeyst-u)
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
- [`Transparent<T>`](#transparentt)
- [`UnwrapJson<T>`](#unwrapjsont)
- [`ValueOf<T>`](#valueoft)
- [`Without<A, B>`](#withouta-b)
- [`XOR<A, B>`](#xora-b)

#### `AllEqual<Sources, Value>`

Types `true` if all `Sources` equal `Value`.

```ts
import { AllEqual } from '@bedard/utils'

type Good = AllEqual<[1, 1], 1> // true
type Bad = AllEqual<[1, 2], 1> // false
```

#### `BreakWords<T>`

Explode a string by common word breaks. This currently includes spaces, hyphens, underscores, and casing changes.

```ts
import { BreakWords } from '@bedard/utils'

type Words = BreakWords<'one twoThree-four'> // ['one', 'two', 'Three', 'four']
```

#### `CamelCase<T>`

Convert a string to camel case.

```ts
import { CamelCase } from '@bedard/utils'

type Str = CamelCase<'foo-bar'> // 'fooBar'
```

#### `CamelCaseKeys<T>`

Camel case object keys.

```ts
import { CamelCaseKeys } from '@bedard/utils'

type Obj = CamelCaseKeys<{ foo_bar: any }> // { fooBar: any }
```

#### `CamelCaseKeysDeep<T>`

Deeply camel case object keys.

```ts
import { CamelCaseKeysDeep } from '@bedard/utils'

type Obj = CamelCaseKeysDeep<{ foo_bar: { one_two: any }}> // { fooBar: { oneTwo: any }}
```

#### `Difference<A, B>`

Elements of `A` that are not elements of `B`. For unions, this is the same as the [`Exclude`](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludetype-excludedunion) utility.

```ts
import { Difference } from '@bedard/utils'

type Left = Difference<{ a: any, b: any }, { b: any, c: any }> // { a: any }
```

#### `Equal<A, B>`

Types `true` if `A` and `B` are equal. This is mainly used with [`Expect`](#expectt) to verify that types are working as expected. See [`NotEqual`](#notequala-b) for the inverse of this type.

```ts
import { Expect, Equal } from '@bedard/utils'

type Test = Expect<Equal<number, number>>
```

#### `Expect<T>`

Verify that `T` is `true`. This allows for assertions to be made using the type system. See [`Equal`](#equala-b) and [`NotEqual`](#notequala-b) for more usage examples.

```ts
import { Expect } from '@bedard/utils'

type Test = Expect<true>
```

#### `First<T>`

Extract the first element of a string or array.

```ts
import { First } from '@bedard/utils'

type FirstChar = First<'abc'> // 'a'
type FirstItem = First<[1, 2, 3]>, // 1
```

#### `Intersection<A, B>`

The [intersection](https://en.wikipedia.org/wiki/Intersection_(set_theory)) of `A` and `B`, giving preference to `A`.

```ts
import { Intersection } from '@bedard/utils'

type Shared = Intersection<{ a: any, b: number }, { c: string, d: any }> // { b: number }
```

#### `Join<Parts, Delimeter>`

Join `Parts` by `Delimeter`. This type is the opposite of [`Split`](#splitsource-delimeter).

```ts
import { Join } from '@bedard/utils'

type Str = Join<['a', 'b', 'c']> // 'abc'

type Parts = Join<['a', 'b', 'c'], '.'> // 'a.b.c'
```

#### `Json<T>`

Encodes a JSON string with underlying type information. This utility is complimented by [`parse`](#parse), [`stringify`](#stringify), and [`UnwrapJson`](#unwrapjsont).

```ts
import { Json } from '@bedard/utils'

type UserJson = Json<{ foo: 'bar' }> // string
```

#### `KebabCase<T>`

Convert a string to kebab case.

```ts
import { KebabCase } from '@bedard/utils'

type Str = KebabCase<'fooBar'> // 'foo-bar'
```

#### `KebabCaseKeys<T>`

Kebab case object keys.

```ts
import { KebabCaseKeys } from '@bedard/utils'

type Obj = KebabCaseKeys<{ foo_bar: any }> // { 'foo-bar': any }
```

#### `KebabCaseKeysDeep<T>`

Deeply kebab case object keys.

```ts
import { KebabCaseKeysDeep } from '@bedard/utils'

type Obj = KebabCaseKeysDeep<{ foo_bar: { one_two: any }}> // { 'foo-bar': { 'one-two': any }}
```

#### `Last<T>`

Extract the last element of a string or array.

```ts
import { Last } from '@bedard/utils'

type LastChar = Last<'abc'> // 'c'
type LastItem = Last<[1, 2, 3]>, // 3
```

#### `MapCapitalize<T>`

Capitalize the first letter of each string.

```ts
import { MapCapitalize } from '@bedard/utils'

type Capitalized = MapLowercase<['foo', 'bar']> // ['Foo', 'Bar']
```

#### `MapLowercase<T>`

Map strings to lowercase.

```ts
import { MapLowercase } from '@bedard/utils'

type Lower = MapLowercase<['A', 'B']> // ['a', 'b']
```

#### `MapUppercase<T>`

Map strings to uppercase.

```ts
import { MapUppercase } from '@bedard/utils'

type Upper = MapUppercase<['a', 'b']> // ['A', 'B']
```

#### `Methods<T>`

Create a string union of methods from `T`. This is the inverse of [`Properties<T>`](#propertiest)

```ts
import { Methods } from '@bedard/utils'

type Foo = Methods<{ foo: string, bar(): any }> // 'bar'
```

#### `Not<T>`

Reverse the boolean value of `T`.

```ts
import { Not } from '@bedard/utils'

type Test = Not<true> // false
```

#### `OmitStartsWith<T, U>`

Omit keys of `T` that start with `U`.

```ts
import { OmitStartsWith } from '@bedard/utils'

type Foo = OmitStartsWith<{ FooOne: void; FooTwo: void; BarThree: void }, 'Bar'> // { FooOne: void; FooTwo: void }
```

#### `OmitType<T, U>`

Omit keys of `T` that extend `U`. This is the inverse of [`PickType<T, U>`](#picktypet-u).

```ts
import { OmitType } from '@bedard/utils'

type Foo = OmitType<{ foo: string, bar: number }, string> // { bar: number }
```

#### `Opaque<T, Token>`

[Opaque type](https://en.wikipedia.org/wiki/Opaque_data_type) `T` with an optional `Token`. For more on opaque types, [this article](https://codemix.com/opaque-types-in-javascript) is a great place to start.

```ts
import { Opaque } from '@bedard/utils'

type USD = Opaque<number, 'usd'>

const dollars = 5 as USD
```

#### `OptionalKeys<T, U>`

Get optional keys from `T`, or make keys `U` of `T` optional.

```ts
import { OptionalKeys } from '@bedard/utils'

type Keys = OptionalKeys<{ foo?: any, bar: any }> // 'foo'

type Obj = OptionalKeys<{ foo: any, bar: any }, 'foo'> // { foo?: any, bar: any }
```

#### `PascalCase<T>`

Convert a string to pascal case.

```ts
import { PascalCase } from '@bedard/utils'

type Str = PascalCase<'foo-bar'> // 'FooBar'
```

#### `PascalCaseKeys<T>`

Kebab case object keys.

```ts
import { PascalCaseKeys } from '@bedard/utils'

type Obj = PascalCaseKeys<{ foo_bar: any }> // { 'foo-bar': any }
```

#### `PascalCaseKeysDeep<T>`

Deeply pascal case object keys.

```ts
import { PascalCaseKeysDeep } from '@bedard/utils'

type Obj = PascalCaseKeysDeep<{ foo_bar: { one_two: any }}> // { FooBar: { OneTwo: any }}
```

#### `PickStartsWith<T, U>`

Pick keys of `T` that start with `U`.

```ts
import { PickStartsWith } from '@bedard/utils'

type Obj = PickStartsWith<{ FooOne: void; FooTwo: void ; Bar: void }, 'Foo'> // { FooOne: void; FooTwo: void }
```

#### `PickType<T, U>`

Pick keys of `T` that extend `U`. This is the inverse of [`OmitType<T, U>`](#omittypet-u).

```ts
import { PickType } from '@bedard/utils'

type Obj = PickType<{ foo: string, bar: number }, string> // { foo: string }
```

#### `Pop<T>`

Remove the last element of `T`.

```ts
import { Pop } from '@bedard/utils'

type Items = Pop<['foo', 'bar', 'baz']> // ['foo', 'bar']
```

#### `Properties<T>`

Create a string union of properties from `T`. This is the inverse of [`Methods<T>`](#methodst).

```ts
import { Properties } from '@bedard/utils'

type Foo = Properties<{ foo: string, bar(): any }> // 'foo'
```

#### `RequiredKeys<T, U>`

Get required keys from `T`, or make keys `U` of `T` required.

```ts
import { RequiredKeys } from '@bedard/utils'

type Keys = RequiredKeys<{ foo: any, bar?: any }> // 'foo'

type Obj = RequiredKeys<{ foo?: any, bar?: any }, 'foo'> // { foo: any, bar?: any }
```

#### `ScreamingSnakeCase<T>`

Convert a string to screaming snake case.

```ts
import { ScreamingSnakeCase } from '@bedard/utils'

type Str = ScreamingSnakeCase<'fooBar'> // 'FOO_BAR'
```

#### `ScreamingSnakeCaseKeys<T>`

Screaming snake case object keys.

```ts
import { ScreamingSnakeCaseKeys } from '@bedard/utils'

type Obj = ScreamingSnakeCaseKeys<{ foo_bar: any }> // { FOO_BAR: any }
```

#### `ScreamingSnakeCaseKeysDeep<T>`

Deeply screaming snake case object keys.

```ts
import { ScreamingSnakeCaseKeysDeep } from '@bedard/utils'

type Obj = ScreamingSnakeCaseKeysDeep<{ foo_bar: { one_two: any }}> // { FOO_BAR: { ONE_TWO: any }}
```

#### `Shift<T>`

Remove the first element of `T`.

```ts
import { Shift } from '@bedard/utils'

type Items = Shift<['foo', 'bar', 'baz']> // ['bar', 'baz']
```

#### `SnakeCase<T>`

Convert a string to snake case.

```ts
import { SnakeCase } from '@bedard/utils'

type Str = SnakeCase<'fooBar'> // 'foo_bar'
```

#### `SnakeCaseKeys<T>`

Snake case object keys.

```ts
import { SnakeCaseKeys } from '@bedard/utils'

type Obj = SnakeCaseKeys<{ fooBar: any }> // { foo_bar: any }
```

#### `SnakeCaseKeysDeep<T>`

Deeply snake case object keys.

```ts
import { SnakeCaseKeysDeep } from '@bedard/utils'

type Obj = SnakeCaseKeysDeep<{ fooBar: { oneTwo: any }}> // { foo_bar: { one_two: any }}
```

#### `Split<Source, Delimeter>`

Split `Source` by `Delimeter`. This type is the opposite of [`Join`](#joinparts-delimeter). Note that to split by multiple delimeters the second argument must be a `string[]`, as unions will create a [distributive conditional type](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types).

```ts
import { Split } from '@bedard/utils'

type Characters = Split<'abc'> // ['a', 'b', 'c']

type SingleDelimeter = Split<'a.b.c', '.'> // ['a', 'b', 'c']

type MultipleDelimeters = Split<'a.b-c', ['.', '-']> // ['a', 'b', 'c']
```

#### `StartsWith<T, U>`

Types `true` if `T` starts with `U`.

```ts
import { StartsWith } from '@bedard/utils'

type Foo = StartsWith<'FooBar', 'Foo'> // true
```

#### `SymmetricDifference<A, B>`

The [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference) of `A` and `B`.

```ts
import { SymmetricDifference } from '@bedard/utils'

type OuterSet = SymmetricDifference<'a' | 'b', 'b' | 'c'> // 'a' | 'c'

type OuterObj= SymmetricDifference<{ a: any, b: any }, { b: any, c: any }> // { a: any, c: any }
```

#### `Transparent<T>`

A type that does not encode any additional data. This is the inverse of [`Opaque<T>`](#opaquet-token).

```ts
import { Transparent } from '@bedard/utils'

type NonOpaqueString = Transparent<string>
```

#### `UnwrapJson<T>`

Decodes type information from a [`Json<T>`](#jsont) string.

```ts
import { Json, UnwrapJson } from '@bedard/utils'

type UserJson = Json<{ email: string }> // string

type User = UnwrapJson<UserJson> // { email: string }
```

#### `ValueOf<T>`

Generate a union from the values of `T`.

```ts
import { ValueOf } from '@bedard/utils'

type ArrayValues = ValueOf<Array<string>> // string

type ObjectValues = ValueOf<{ foo: number, bar: string }> // number | string
```

#### `Without<A, B>`

Prohibit properties of `A` and omit properties of `B`.

```ts
import { Without } from '@bedard/utils'

type FooWithoutBar = Without<{ foo: any, bar: any }, { bar: any }> // { foo?: never }
```

#### `XOR<A, B>`

Create an [exclusive or](https://en.wikipedia.org/wiki/Exclusive_or) between two types. Note that for objects, this differs from a union type in that keys are strictly matched.

```ts
import { XOR } from '@bedard/utils'

type FooOrBar = XOR<{ foo: any }, { bar: any }>

const a: FooOrBar = { foo } // pass
const b: FooOrBar = { bar } // pass
const c: FooOrBar = { foo, bar } // fail
```

## License

[MIT](https://github.com/scottbedard/utils/blob/main/LICENSE)

Copyright (c) 2021-present, Scott Bedard
