const isInteger = num => {
  return (num ^ 0) === num;
}
export const calcPercent = topic => {
  const { start, finish, current } = topic
  if (current === finish || current > finish) {
    return 100;
  }
  const percent = (100 / (finish - start) * current) - start
  return (isInteger(percent)) ? percent : percent.toFixed(2);
};
