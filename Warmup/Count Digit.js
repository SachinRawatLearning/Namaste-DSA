//Write a function that returns the count of digits in a number
function countDigits(num) {
  if (num === 0) return 1;
  let digits = 0;

  num = Math.abs(num);
  while (num) {
    num = Math.floor(num / 10);
    digits++;
  }
  return digits;
}
