import {
  BitwiseAND,
  BitwiseOR,
  BitwiseXOR,
  Equal,
  Expect,
  IsFloat,
  IsNegative,
  IsPositive,
  Not,
} from '../index'

describe('Math', () => {
  describe('BitwiseAND<T, U>', () => {
    it('1 & 1', () => {
      type Test = Expect<Equal<1, BitwiseAND<1, 1>>>
    })

    it('1 & 0', () => {
      type Test = Expect<Equal<0, BitwiseAND<1, 0>>>
    })

    it('0 & 1', () => {
      type Test = Expect<Equal<0, BitwiseAND<0, 1>>>
    })

    it('0 & 0', () => {
      type Test = Expect<Equal<0, BitwiseAND<0, 0>>>
    })
  })

  describe('BitwiseOR<T, U>', () => {
    it('1 | 1', () => {
      type Test = Expect<Equal<1, BitwiseOR<1, 1>>>
    })

    it('1 | 0', () => {
      type Test = Expect<Equal<1, BitwiseOR<1, 0>>>
    })

    it('0 | 1', () => {
      type Test = Expect<Equal<1, BitwiseOR<0, 1>>>
    })

    it('0 | 0', () => {
      type Test = Expect<Equal<0, BitwiseOR<0, 0>>>
    })
  })

  describe('BitwiseXOR<T, U>', () => {
    it('1 ^ 1', () => {
      type Test = Expect<Equal<0, BitwiseXOR<1, 1>>>
    })

    it('1 ^ 0', () => {
      type Test = Expect<Equal<1, BitwiseXOR<1, 0>>>
    })

    it('0 ^ 1', () => {
      type Test = Expect<Equal<1, BitwiseXOR<0, 1>>>
    })

    it('0 ^ 0', () => {
      type Test = Expect<Equal<0, BitwiseXOR<0, 0>>>
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
})
