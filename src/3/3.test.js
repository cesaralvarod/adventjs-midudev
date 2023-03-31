import { describe, it, expect } from 'vitest'
import distributeGifts from './3'

describe('countHours', () => {
  it('should be a function', () => {
    expect(typeof distributeGifts).toBe('function')
  })

  it('should throw if first parameter is missing', () => {
    expect(() => distributeGifts()).toThrow()
  })

  it('should throw if first parameter is not an array', () => {
    expect(() => distributeGifts(55)).toThrow()
  })

  it('should throw if second parameter is missing', () => {
    expect(() => distributeGifts(['book'])).toThrow()
  })

  it('should throw if first parameter is not an array', () => {
    expect(() => distributeGifts(['book'], 44)).toThrow()
  })

  it('should throw if at least one gift is empty', () => {
    expect(() => distributeGifts([''], ['reindeers'])).toThrow()
  })

  it('should throw if at least one reindeer is empty', () => {
    expect(() => distributeGifts(['gift'], [''])).toThrow()
  })

  it('should throw if at least one gift or one reindeer is empty', () => {
    expect(() => distributeGifts(['', 'gift'], ['reindeer', ''])).toThrow()
  })

  it('should return a number', () => {
    expect(typeof distributeGifts(['gift'], ['reindeeer'])).toBe('number')
  })

  it('should return the maximum gift that reindeers can carry', () => {
    expect(
      distributeGifts(['book', 'dool', 'ball'], ['dasher', 'dancer'])
    ).toBe(2)
    expect(distributeGifts(['videogames', 'console'], ['midu'])).toBe(0)
    expect(
      distributeGifts(
        ['game', 'videoconsole', 'computer'],
        [
          'midudev',
          'pheralb',
          'codingwithdani',
          'carlosble',
          'blasco',
          'facundocapua',
          'madeval',
          'memxd',
        ]
      )
    ).toBe(5)
    expect(
      distributeGifts(
        ['music'],
        [
          'midudev',
          'pheralb',
          'codingwithdani',
          'carlosble',
          'blasco',
          'facundocapua',
          'madeval',
          'memxd',
        ]
      )
    ).toBe(26)
  })
})
