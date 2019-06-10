const isInteger = num => {
  return (num ^ 0) === num;
}
export const calcPercent = topic => {
  const { start, finish, current } = topic
  if (current >= finish) {
    return 100;
  }
  const percent = Number(100 / (finish - start) * (current - start));
  return percent.toFixed(2);
};
