# Changelog

# 0.33.0

- [`timeout`](https://github.com/scottbedard/utils#timeout)

# 0.32.0

- [`MaybeArray<T>`](https://github.com/scottbedard/utils#maybearrayt)

# 0.31.0

#### Breaking
- `XOR<T, U>` renamed to [`Either<T, U>`](https://github.com/scottbedard/utils#eithert-u) to differentiate from logic gates
- `Vector<T>` renamed to [`Vec<T>`](https://github.com/scottbedard/utils#vect)

#### Types
- [`AddDigits<T, U>`](https://github.com/scottbedard/utils#adddigitst-u)
- [`AND<T, U>`](https://github.com/scottbedard/utils#andt-u)
- [`Bit`](https://github.com/scottbedard/utils#bit)
- [`Decimal`](https://github.com/scottbedard/utils#decimal)
- [`Digits<T>`](https://github.com/scottbedard/utils#digitst)
- [`IsFloat<T>`](https://github.com/scottbedard/utils#isfloatt)
- [`IsInteger<T>`](https://github.com/scottbedard/utils#isintegert)
- [`IsNegative<T>`](https://github.com/scottbedard/utils#isnegativet)
- [`IsPositive<T>`](https://github.com/scottbedard/utils#ispositivet)
- [`LastDigit<T>`](https://github.com/scottbedard/utils#lastdigitt)
- [`MUX<T, U, S>`](https://github.com/scottbedard/utils#muxt-u-s)
- [`NAND<T, U>`](https://github.com/scottbedard/utils#nandt-u)
- [`Negate<T>`](https://github.com/scottbedard/utils#negatet)
- [`NOR<T, U>`](https://github.com/scottbedard/utils#nort-u)
- [`NOT<T, U>`](https://github.com/scottbedard/utils#nott)
- [`OR<T, U>`](https://github.com/scottbedard/utils#ort-u)
- [`PadDigits<T, U>`](https://github.com/scottbedard/utils#paddigitst-u)
- [`ToNumber<T>`](https://github.com/scottbedard/utils#tonumbert)
- [`XNOR<T, U>`](https://github.com/scottbedard/utils#xnort-u)
- [`XOR<T, U>`](https://github.com/scottbedard/utils#xort-u)

# 0.30.0

- [`Byte`](https://github.com/scottbedard/utils#byte)
- [`Hex`](https://github.com/scottbedard/utils#hex)
- [`HexColor<T>`](https://github.com/scottbedard/utils#hexcolort)
- [`RgbColor<T>`](https://github.com/scottbedard/utils#rgbcolort)
- [`Trim<T>`](https://github.com/scottbedard/utils#trimt)

# 0.29.0

- [`isEmail`](https://github.com/scottbedard/utils#isemail)

# 0.28.0

- [`XOR<[...]>`](https://github.com/scottbedard/utils#xora-b) syntax added for chained exclusive or

# 0.27.0

- [`Vector<T, U>`](https://github.com/scottbedard/utils#vectort) now supports non-numeric values

## 0.26.0

- [`Line<T>`](https://github.com/scottbedard/utils#linet)

## 0.25.0

- [`Vector<T>`](https://github.com/scottbedard/utils#vectort)

## 0.24.0

- [`entries`](https://github.com/scottbedard/utils#entries)
- [`keys`](https://github.com/scottbedard/utils#keys)

## 0.23.0

- [`UnwrapOpaque<T>`](https://github.com/scottbedard/utils#unwrapopaquet)

## 0.22.0

- [`parse`](https://github.com/scottbedard/utils#parse)
- [`stringify`](https://github.com/scottbedard/utils#stringify)
- [`roll`](https://github.com/scottbedard/utils#roll)
- [`Json<T>`](https://github.com/scottbedard/utils#jsont)
- [`UnwrapJson<T>`](https://github.com/scottbedard/utils#unwrapjsont)

## 0.21.0

- [`Methods<T>`](https://github.com/scottbedard/utils#methodst)
- [`OmitType<T, U>`](https://github.com/scottbedard/utils#omittypet-u)
- [`Properties<T>`](https://github.com/scottbedard/utils#propertiest)

## 0.20.0

- [`OptionalKeys<T, U>`](https://github.com/scottbedard/utils#optionalkeyst-u)
- [`RequiredKeys<T, U>`](https://github.com/scottbedard/utils#requiredkeyst-u)

## 0.19.0

- [`OmitStartsWith<T, U>`](https://github.com/scottbedard/utils#omitstartswitht-u)
- [`PickStartsWith<T, U>`](https://github.com/scottbedard/utils#pickstartswitht-u)
- [`StartsWith<T, U>`](https://github.com/scottbedard/utils#startswitht-u)

## 0.18.0

- [`PickType<T, U>`](https://github.com/scottbedard/utils#picktypet-u)

## 0.17.1

- [`ValueOf<T>`](https://github.com/scottbedard/utils#valueoft) now supports `ReadonlyArray<T>`

## 0.17.0

- [`toKeyedObjects`](https://github.com/scottbedard/utils#toKeyedObjects)

## 0.16.1

- [`rgbToHsl`](https://github.com/scottbedard/utils#rgbToHsl) now accepts string inputs

## 0.16.0

- Types from `@bedard/types` are now included in this library, and that library is now deprecated.

## 0.15.0

- [`deepEqual`](https://github.com/scottbedard/utils#deepEqual)

## 0.14.0

- [`addVectors`](https://github.com/scottbedard/utils#addVectors)
- [`createEasingFunction`](https://github.com/scottbedard/utils#createEasingFunction)
- [`scale`](https://github.com/scottbedard/utils#scale)

## 0.13.0

- [`easeInSine`](https://github.com/scottbedard/utils#easeInSine)
- [`easeOutSine`](https://github.com/scottbedard/utils#easeOutSine)
- [`easeInOutSine`](https://github.com/scottbedard/utils#easeInOutSine)
- [`easeInQuad`](https://github.com/scottbedard/utils#easeInQuad)
- [`easeOutQuad`](https://github.com/scottbedard/utils#easeOutQuad)
- [`easeInOutQuad`](https://github.com/scottbedard/utils#easeInOutQuad)
- [`easeInCubic`](https://github.com/scottbedard/utils#easeInCubic)
- [`easeOutCubic`](https://github.com/scottbedard/utils#easeOutCubic)
- [`easeInOutCubic`](https://github.com/scottbedard/utils#easeInOutCubic)
- [`easeInQuart`](https://github.com/scottbedard/utils#easeInQuart)
- [`easeOutQuart`](https://github.com/scottbedard/utils#easeOutQuart)
- [`easeInOutQuart`](https://github.com/scottbedard/utils#easeInOutQuart)
- [`easeInQuint`](https://github.com/scottbedard/utils#easeInQuint)
- [`easeOutQuint`](https://github.com/scottbedard/utils#easeOutQuint)
- [`easeInOutQuint`](https://github.com/scottbedard/utils#easeInOutQuint)
- [`easeInExpo`](https://github.com/scottbedard/utils#easeInExpo)
- [`easeOutExpo`](https://github.com/scottbedard/utils#easeOutExpo)
- [`easeInOutExpo`](https://github.com/scottbedard/utils#easeInOutExpo)
- [`easeInCirc`](https://github.com/scottbedard/utils#easeInCirc)
- [`easeOutCirc`](https://github.com/scottbedard/utils#easeOutCirc)
- [`easeInOutCirc`](https://github.com/scottbedard/utils#easeInOutCirc)
- [`easeInBack`](https://github.com/scottbedard/utils#easeInBack)
- [`easeOutBack`](https://github.com/scottbedard/utils#easeOutBack)
- [`easeInOutBack`](https://github.com/scottbedard/utils#easeInOutBack)
- [`easeInElastic`](https://github.com/scottbedard/utils#easeInElastic)
- [`easeOutElastic`](https://github.com/scottbedard/utils#easeOutElastic)
- [`easeInOutElastic`](https://github.com/scottbedard/utils#easeInOutElastic)
- [`easeInBounce`](https://github.com/scottbedard/utils#easeInBounce)
- [`easeOutBounce`](https://github.com/scottbedard/utils#easeOutBounce)
- [`easeInOutBounce`](https://github.com/scottbedard/utils#easeInOutBounce)

## 0.12.0

- [`lerpColors`](https://github.com/scottbedard/utils#lerpColors)
- [`parseColor`](https://github.com/scottbedard/utils#parseColor) added support for [three-digit hexadecimal notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_colors)
- [`stringifyColor`](https://github.com/scottbedard/utils#stringifyColor)

## 0.11.0

- [`lerpVectors`](https://github.com/scottbedard/utils#lerpVectors)

## 0.10.0

- [`hslToRgb`](https://github.com/scottbedard/utils#hslToRgb)
- [`parseColor`](https://github.com/scottbedard/utils#parseColor)
- [`rgbToHsl`](https://github.com/scottbedard/utils#rgbToHsl)
## 0.9.0

- Renamed package to `@bedard/utils`

## 0.8.0

- [`rotateMatrix`](https://github.com/scottbedard/utils#rotateMatrix)
- `rotate` -> [`rotateVector`](https://github.com/scottbedard/utils#rotateVector)

## 0.7.0

- [`cols`](https://github.com/scottbedard/utils#cols)
- [`flattenCols`](https://github.com/scottbedard/utils#flattenCols)
- [`flattenRows`](https://github.com/scottbedard/utils#flattenRows)
- [`flip`](https://github.com/scottbedard/utils#flip)
- [`rows`](https://github.com/scottbedard/utils#rows)

## 0.6.0

- [`polygon`](https://github.com/scottbedard/utils#polygon)

## 0.5.0

- [`rotate`](https://github.com/scottbedard/utils#rotate)

## 0.4.0

- [`intersect`](https://github.com/scottbedard/utils#intersect)
- [`slope`](https://github.com/scottbedard/utils#slope)
## 0.3.0

- [`angleFrom`](https://github.com/scottbedard/utils#angleFrom)
- [`degreesToRadians`](https://github.com/scottbedard/utils#degreesToRadians)
- [`isEven`](https://github.com/scottbedard/utils#isEven)
- [`measure`](https://github.com/scottbedard/utils#measure)
- [`radiansToDegrees`](https://github.com/scottbedard/utils#radiansToDegrees)
## 0.2.0

- [`bilerp`](https://github.com/scottbedard/utils#bilerp)

## 0.1.0

- [`lerp`](https://github.com/scottbedard/utils#lerp)
