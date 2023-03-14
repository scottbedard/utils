import {
  Hex,
} from '../index'

describe('Hex', () => {
  it('hex character', () => {
    const good1: Hex = '0'
    const good2: Hex = '9'
    const good3: Hex = 'a'
    const good4: Hex = 'f'
    
    // @ts-expect-error
    const bad1: Hex = 0

    // @ts-expect-error
    const bad2: Hex = 'g'
  })
})
