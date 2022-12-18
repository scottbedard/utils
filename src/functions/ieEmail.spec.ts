import { isEmail } from '../index'

describe('isEmail', () => {
  describe('good', () => [
    'alice@example.com',
    'bob@subdomain.example.com',
  ].forEach(str => it(str, () => expect(isEmail(str)).toBe(true))))

  describe('bad', () => [
    'not an email',
    'foo@bar',
    'one@two@three.com',
    'missing@dot',
  ].forEach(str => it(str, () => expect(isEmail(str)).toBe(false))))
})
