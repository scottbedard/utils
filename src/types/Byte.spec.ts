import {
  Byte,
  Equal,
  Expect,
} from '../index'

describe('Byte', () => {
  it('holds values between 0 and 255', () => {
    const good1: Byte = 0
    const good2: Byte = 255
    
    // @ts-expect-error
    const bad1: Byte = -1

    // @ts-expect-error
    const bad2: Byte = 256
  })
})
