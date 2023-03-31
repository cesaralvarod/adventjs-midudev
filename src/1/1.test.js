import { describe, expect, it } from 'vitest'
import { wrapping } from './1'

describe('1. wrapping', () => {
  it('should be a function', () => {
    expect(typeof wrapping).toBe('function')
  })

  it('should throw if first parameter is missgin', () => {
    expect(() => wrapping()).toThrow()
  })

  it('should  throw if first parameter is not an array', () => {
    expect(() => wrapping(123)).toThrow()
  })

  it('should verify is each element of gifts is a string', () => {
    expect(() => wrapping([123, 'test', undefined])).toThrow()
  })

  it('should return an array', () => {
    expect(Array.isArray(wrapping(['test']))).toBe(true)
  })

  it('should return an empty array if gifts parameter is an empty array', () => {
    expect(wrapping([])).toStrictEqual([])
  })

  it('should return gifts wrapped', () => {
    expect(wrapping(['test'])).toStrictEqual(['******\n*test*\n******'])
    expect(wrapping(['test', 'federico'])).toStrictEqual([
      '******\n*test*\n******',
      '**********\n*federico*\n**********',
    ])
  })
})
