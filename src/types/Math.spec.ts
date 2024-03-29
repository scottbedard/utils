import {
  Abs,
  AND,
  DecimalAdd,
  Digits,
  Equal,
  Expect,
  IsFloat,
  IsInteger,
  IsNegative,
  IsNegativeFloat,
  IsNegativeInteger,
  IsPositive,
  IsPositiveFloat,
  IsPositiveInteger,
  MUX,
  NAND,
  Negate,
  NOR,
  Not,
  NOT,
  OR,
  PadDigits,
  ToNumber,
  XNOR,
  XOR,
} from '../index'

describe('math', () => {
  describe('logic gates', () => {
    it('AND<T, U>', () => {
      type T00 = Expect<Equal<AND<0, 0>, 0>>
      type T01 = Expect<Equal<AND<0, 1>, 0>>
      type T10 = Expect<Equal<AND<1, 0>, 0>>
      type T11 = Expect<Equal<AND<1, 1>, 1>>
    })

    it('MUX<T, U, S>', () => {
      type T000 = Expect<Equal<MUX<0, 0, 0>, 0>>
      type T001 = Expect<Equal<MUX<0, 0, 1>, 0>>
      type T010 = Expect<Equal<MUX<0, 1, 0>, 0>>
      type T011 = Expect<Equal<MUX<0, 1, 1>, 1>>
      type T100 = Expect<Equal<MUX<1, 0, 0>, 1>>
      type T101 = Expect<Equal<MUX<1, 0, 1>, 0>>
      type T110 = Expect<Equal<MUX<1, 1, 0>, 1>>
      type T111 = Expect<Equal<MUX<1, 1, 1>, 1>>
    })

    it('OR<T, U>', () => {
      type T00 = Expect<Equal<OR<0, 0>, 0>>
      type T01 = Expect<Equal<OR<0, 1>, 1>>
      type T10 = Expect<Equal<OR<1, 0>, 1>>
      type T11 = Expect<Equal<OR<1, 1>, 1>>
    })

    it('NAND<T, U>', () => {
      type T00 = Expect<Equal<NAND<0, 0>, 1>>
      type T01 = Expect<Equal<NAND<0, 1>, 1>>
      type T10 = Expect<Equal<NAND<1, 0>, 1>>
      type T11 = Expect<Equal<NAND<1, 1>, 0>>
    })

    it('NOR<T, U>', () => {
      type T00 = Expect<Equal<NOR<0, 0>, 1>>
      type T01 = Expect<Equal<NOR<0, 1>, 0>>
      type T10 = Expect<Equal<NOR<1, 0>, 0>>
      type T11 = Expect<Equal<NOR<1, 1>, 0>>
    })

    it('NOT<T>', () => {
      type T0 = Expect<Equal<NOT<0>, 1>>
      type T1 = Expect<Equal<NOT<1>, 0>>
    })

    it('XOR<T, U>', () => {
      type T00 = Expect<Equal<XOR<0, 0>, 0>>
      type T01 = Expect<Equal<XOR<0, 1>, 1>>
      type T10 = Expect<Equal<XOR<1, 0>, 1>>
      type T11 = Expect<Equal<XOR<1, 1>, 0>>
    })

    it('XNOR<T, U>', () => {
      type T00 = Expect<Equal<XNOR<0, 0>, 1>>
      type T01 = Expect<Equal<XNOR<0, 1>, 0>>
      type T10 = Expect<Equal<XNOR<1, 0>, 0>>
      type T11 = Expect<Equal<XNOR<1, 1>, 1>>
    })
  })

  // describe('DecimalAdd<T, U>', () => {
  //   it('0 + 0', () => {
  //     type Test = Expect<Equal<0, DecimalAdd<0, 0>>>
  //   })

  //   it('0 + 1', () => {
  //     type Test = Expect<Equal<1, DecimalAdd<0, 1>>>
  //   })

  //   it('1 + 0', () => {
  //     type Test = Expect<Equal<1, DecimalAdd<1, 0>>>
  //   })

  //   it('3 + 5', () => {
  //     type Test = Expect<Equal<8, DecimalAdd<3, 5>>>
  //   })

  //   it('9 + 9', () => {
  //     type Test = Expect<Equal<18, DecimalAdd<9, 9>>>
  //   })
  // })

  // describe('DecimalSubtract<T, U>', () => {
  //   it('0 - 0', () => {
  //     type Test = Expect<Equal<0, DecimalSubtract<0, 0>>>
  //   })

  //   it('0 - 1', () => {
  //     // type Test = Expect<Equal<-1, DecimalSubtract<0, 1>>>
  //   })
  // })

  describe('Abs<T>', () => {
    it('positive integer', () => {
      type Test = Expect<Equal<1, Abs<1>>>
    })

    it('negative integer', () => {
      type Test = Expect<Equal<1, Abs<-1>>>
    })

    it('positive float', () => {
      type Test = Expect<Equal<1.5, Abs<1.5>>>
    })

    it('negative float', () => {
      type Test = Expect<Equal<1.5, Abs<-1.5>>>
    })

    it('zero', () => {
      type Test = Expect<Equal<0, Abs<0>>>
    })
  })

  describe('Digits<T>', () => {
    it('positive integer', () => {
      type Test = Expect<Equal<[1, 2, 3], Digits<123>>>
    })

    it('negative integer', () => {
      type Test = Expect<Equal<never, Digits<-123>>>
    })

    it('positive float', () => {
      type Test = Expect<Equal<never, Digits<123.456>>>
    })

    it('negative float', () => {
      type Test = Expect<Equal<never, Digits<-123.456>>>
    })

    it('zero', () => {
      type Test = Expect<Equal<[0], Digits<0>>>
    })
  })

  describe('IsFloat<T>', () => {
    it('positive integer', () => {
      type Test = Expect<Not<IsFloat<1>>>
    })

    it('negative integer', () => {
      type Test = Expect<Not<IsFloat<-1>>>
    })

    it('positive float', () => {
      type Test = Expect<IsFloat<1.5>>
    })

    it('negative float', () => {
      type Test = Expect<IsFloat<-1.5>>
    })
    
    it('zero', () => {
      type Test = Expect<Not<IsFloat<0>>>
    })
  })

  describe('IsInteger<T>', () => {
    it('positive integer', () => {
      type Test = Expect<IsInteger<1>>
    })

    it('negative integer', () => {
      type Test = Expect<IsInteger<-1>>
    })

    it('positive float', () => {
      type Test = Expect<Not<IsInteger<1.5>>>
    })

    it('negative float', () => {
      type Test = Expect<Not<IsInteger<-1.5>>>
    })

    it('zero', () => {
      type Test = Expect<IsInteger<0>>
    })
  })

  describe('IsNegative<T>', () => {
    it('positive integer', () => {
      type Test = Expect<Not<IsNegative<1>>>
    })

    it('negative integer', () => {
      type Test = Expect<IsNegative<-1>>
    })

    it('positive float', () => {
      type Test = Expect<Not<IsNegative<1.5>>>
    })
  
    it('negative float', () => {
      type Test = Expect<IsNegative<-1.5>>
    })
  
    it('zero', () => {
      type Test = Expect<Not<IsNegative<0>>>
    })
  })

  describe('IsNegativeFloat<T>', () => {
    it('positive integer', () => {
      type Test = Expect<Not<IsNegativeFloat<1>>>
    })

    it('negative integer', () => {
      type Test = Expect<Not<IsNegativeFloat<-1>>>
    })

    it('positive float', () => {
      type Test = Expect<Not<IsNegativeFloat<1.5>>>
    })
  
    it('negative float', () => {
      type Test = Expect<IsNegativeFloat<-1.5>>
    })
  
    it('zero', () => {
      type Test = Expect<Not<IsNegativeFloat<0>>>
    })
  })

  describe('IsNegativeInteger<T>', () => {
    it('positive integer', () => {
      type Test = Expect<Not<IsNegativeInteger<1>>>
    })

    it('negative integer', () => {
      type Test = Expect<IsNegativeInteger<-1>>
    })

    it('positive float', () => {
      type Test = Expect<Not<IsNegativeInteger<1.5>>>
    })
  
    it('negative float', () => {
      type Test = Expect<Not<IsNegativeInteger<-1.5>>>
    })
  
    it('zero', () => {
      type Test = Expect<Not<IsNegativeInteger<0>>>
    })
  })

  describe('IsPositive<T>', () => {
    it('positive integer', () => {
      type Test = Expect<IsPositive<1>>
    })

    it('negative integer', () => {
      type Test = Expect<Not<IsPositive<-1>>>
    })
  
    it('positive float', () => {
      type Test = Expect<IsPositive<1.5>>
    })
  
    it('negative integer', () => {
      type Test = Expect<Not<IsPositive<-1>>>
    })
  
    it('zero', () => {
      type Test = Expect<Not<IsPositive<0>>>
    })
  })

  describe('IsPositiveFloat<T>', () => {
    it('positive integer', () => {
      type Test = Expect<Not<IsPositiveFloat<1>>>
    })

    it('negative integer', () => {
      type Test = Expect<Not<IsPositiveFloat<-1>>>
    })
  
    it('positive float', () => {
      type Test = Expect<IsPositiveFloat<1.5>>
    })
  
    it('negative integer', () => {
      type Test = Expect<Not<IsPositiveFloat<-1>>>
    })
  
    it('zero', () => {
      type Test = Expect<Not<IsPositiveFloat<0>>>
    })
  })

  describe('IsPositiveInteger<T>', () => {
    it('positive integer', () => {
      type Test = Expect<IsPositiveInteger<1>>
    })

    it('negative integer', () => {
      type Test = Expect<Not<IsPositiveInteger<-1>>>
    })
  
    it('positive float', () => {
      type Test = Expect<Not<IsPositiveInteger<1.5>>>
    })
  
    it('negative integer', () => {
      type Test = Expect<Not<IsPositiveInteger<-1>>>
    })
  
    it('zero', () => {
      type Test = Expect<Not<IsPositiveInteger<0>>>
    })
  })

  describe('Negate<T>', () => {
    it('positive integer', () => {
      type Test = Expect<Equal<-1, Negate<1>>>
    })

    it('negative integer', () => {
      type Test = Expect<Equal<1, Negate<-1>>>
    })

    it('positive float', () => {
      type Test = Expect<Equal<-1.5, Negate<1.5>>>
    })

    it('negative float', () => {
      type Test = Expect<Equal<1.5, Negate<-1.5>>>
    })

    it('zero', () => {
      type Test = Expect<Equal<0, Negate<0>>>
    })
  })

  describe('PadDigits<T, U>', () => {
    it('equal length', () => {
      type Test = Expect<Equal<[[1], [2]], PadDigits<[1], [2]>>>
    })

    it('first shorter', () => {
      type Test = Expect<Equal<[[0, 1], [2, 3]], PadDigits<[1], [2, 3]>>>
    })

    it('second shorter', () => {
      type Test = Expect<Equal<[[1, 2], [0, 3]], PadDigits<[1, 2], [3]>>>
    })
  })

  describe('ToNumber<T>', () => {
    it('positive integer', () => {
      type Test = Expect<Equal<123, ToNumber<'123'>>>
    })

    it('negative integer', () => {
      type Test = Expect<Equal<-123, ToNumber<'-123'>>>
    })

    it('positive float', () => {
      type Test = Expect<Equal<123.456, ToNumber<'123.456'>>>
    })

    it('negative float', () => {
      type Test = Expect<Equal<-123.456, ToNumber<'-123.456'>>>
    })

    it('zero', () => {
      type Test = Expect<Equal<0, ToNumber<'0'>>>
    })
  })
})
