export function wrapping(gifts) {
  if (gifts === undefined) throw new Error('gifts parameters is required')
  if (!Array.isArray(gifts)) throw new Error('gifts must be an array')

  const wrappedGifts = gifts.map(gift => {
    if (typeof gift !== 'string')
      throw new Error("gifts' element must be a string")

    let chars = Array.from(gift)

    chars.unshift('*')
    chars.push('*')

    const savedLengthChars = chars.length

    chars.forEach(() => {
      chars.unshift('*')
      chars.push('*')
    })

    chars.splice(savedLengthChars, 0, '\n')
    chars.splice(savedLengthChars * 2 + 1, 0, '\n')

    return chars.join('')
  })

  return wrappedGifts
}
