import { describe, it, expect } from 'vitest'
import { fitsInOneBox } from './4'

describe('fitsInOneBox', () => {
  it('should be a function', () => {
    expect(typeof fitsInOneBox).toBe('function')
  })

  it('should throw if first parameter is missing', () => {
    expect(() => fitsInOneBox()).toThrow()
  })

  it('should throw if first parameter is not array', () => {
    expect(() => fitsInOneBox(12)).toThrow()
  })

  it('should return a boolean', () => {
    expect(typeof fitsInOneBox([{ l: 1, w: 1, h: 1 }])).toBe('boolean')
  })

  it('should return true if first box is smaller than theme second box', () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
      ])
    ).toBe(true)
  })

  it('shoudl return false if it is impossible to pack all boxes in one', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ]
    expect(fitsInOneBox(boxes)).toBe(false)
  })

  it('shoudl return false if it is impossible to pack all boxes in one. the smallest box fits into the middle box, but the middle box does not fit into the largest box', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ]
    expect(fitsInOneBox(boxes)).toBe(true)
  })
})
