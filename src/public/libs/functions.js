const isInteger = num => {
  return (num ^ 0) === num;
}
export const calcPercent = topic => {
  const { start, finish, current } = topic
  const percent = 100 / (finish - start) * current
  return (isInteger(percent)) ? percent : percent.toFixed(2);
};
