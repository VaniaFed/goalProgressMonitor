export const calcPercent = topic => {
  const { start, finish, current } = topic
  const percent = 100 / (finish - start) * current
  return percent.toFixed(2)
}
