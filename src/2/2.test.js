import { describe, it, expect } from 'vitest'
import { countHours } from './2'

describe('countHours', () => {
  // Redundat
  /* it('should be a function', () => {
    expect(typeof countHours).toBe('function')
  }) */

  it('should throw if first parameter is missing', () => {
    expect(() => countHours()).toThrow()
  })

  it('should throw if first parameter is not a number', () => {
    expect(() => countHours('year')).toThrow()
  })

  it('should throw if second parameter is missing', () => {
    expect(() => countHours(2022)).toThrow()
  })

  it('should throw if second parameter is not an array', () => {
    expect(() => countHours('year', 'holidays')).toThrow()
  })

  it('should return a number', () => {
    expect(typeof countHours(2023, ['03/31'])).toBe('number')
  })

  it('should verify if holiday is wrong', () => {
    expect(() => countHours(2022, ['04,32'])).toThrow()
  })

  it('should count extra hours', () => {
    expect(countHours(2022, ['01/06', '04/01', '12/25'])).toBe(4)
    expect(countHours(2022, ['01/06', '04/01', '12/25', '12/30'])).toBe(6)
  })

  it('should count extra hours of 12/31 in the same year', () => {
    expect(countHours(2022, ['01/06', '04/01', '12/25', '12/31'])).toBe(4)
  })
})
