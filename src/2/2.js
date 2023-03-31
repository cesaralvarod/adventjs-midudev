export function countHours(year, holidays) {
  if (year === undefined) throw new Error('year parameter is required')
  if (typeof year !== 'number')
    throw new Error('year parameter must be a number')

  if (holidays === undefined) throw new Error('holidays parameter is required')
  if (!Array.isArray(holidays))
    throw new Error('holidays parameter must be an array')

  return (
    holidays
      .map(hd => {
        const date = new Date(`${hd}/${year}`)

        if (isNaN(date.getDay())) throw new Error("holiday doesn't exist")

        return [1, 2, 3, 4, 5].includes(date.getDay())
      })
      .reduce((count, extraHours) => count + extraHours) * 2
  )
}
