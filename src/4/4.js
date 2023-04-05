export function fitsInOneBox(boxes) {
  if (boxes === undefined) throw new Error('boxes parameter is required')
  if (!Array.isArray(boxes))
    throw new Error('boxes parameter must be an Object')

  return boxes
    .sort((a, b) => a.l + a.w + a.h - (b.l + b.w + b.h))
    .every((box, index) => {
      if (index === 0) return true
      return (
        box.l > boxes[index - 1].l &&
        box.w > boxes[index - 1].w &&
        box.h > boxes[index - 1].h
      )
    })
}
