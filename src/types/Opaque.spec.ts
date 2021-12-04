import {
  Opaque,
} from '../index'

describe('Opaque', () => {
  it('adds semantic data to types', () => {
    // create a pair of tagged opaque types. since these are tagged,
    // they will not be compatible with one another.
    type EUR = Opaque<number, 'USD'>
    type USD = Opaque<number, 'EUR'>

    // now we'll create a function that only accepts USD
    const pay = (amount: USD) => {
      // ...
    }

    const dollars = 1 as USD
    const euros = 1 as EUR
    const transparentNumber = 1

    pay(dollars)

    // @ts-expect-error
    pay(euros)

    // @ts-expect-error
    pay(transparentNumber)

    // and opaque types should still be compatible with their underlying type
    const double = (x: number) => x * 2

    double(dollars)
  })
})