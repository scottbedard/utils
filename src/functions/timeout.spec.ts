import { timeout } from '..'

describe('timeout', () => {
  it('should wait for the specified amount of time to resolve', async () => {
    const start = Date.now()

    await timeout(100)
    
    expect(Date.now() - start).toBeGreaterThanOrEqual(100)
  })
})
