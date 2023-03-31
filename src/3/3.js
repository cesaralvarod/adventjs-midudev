export default function distributeGifts(packOfGifts, reindeers) {
  if (packOfGifts === undefined)
    throw new Error('packOfGifts parameter is required')
  if (!Array.isArray(packOfGifts))
    throw new Error('packOfGifts must be an array')

  if (reindeers === undefined)
    throw new Error('reindeers parameter is required')
  if (!Array.isArray(reindeers)) throw new Error('reindeers must be an array')

  packOfGifts.forEach(gift => {
    if (gift.trim().length === 0) throw new Error('gift cannot be empty')
  })

  reindeers.forEach(reindeer => {
    if (reindeer.trim().length === 0)
      throw new Error('reindeer cannot be empty')
  })

  const reindeersWeight = reindeers.join('').length * 2
  const giftsWeight = packOfGifts.join('').length

  return Math.trunc(reindeersWeight / giftsWeight)
}
