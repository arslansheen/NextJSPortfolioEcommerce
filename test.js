function cal(n) {
  if (n <= 1) return n;
  return cal(n - 1) + cal(n - 2);
}
console.log(cal(3));
