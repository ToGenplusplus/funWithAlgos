// my solution (without converting to string)
// O(n) time and O(n) space
export function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x >= 0 && x < 10) return true;

  let divisor = x;
  const numberArr = [];
  while (divisor > 10) {
    numberArr.push(divisor % 10);
    divisor = Math.floor(divisor / 10);
  }
  numberArr.push(divisor);

  let isPalindrome = true;
  let front = 0;
  let back = numberArr.length - 1;

  while (front < back) {
    if (numberArr[front] !== numberArr[back]) {
      isPalindrome = false;
      break;
    }
    front++;
    back--;
  }
  return isPalindrome;
}

// better solution (per leetcode)
// only one interation through the number O(n) time and o(1) space
function isPalindromeBetter(x: number): boolean {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  let copy = x;
  let reversed = 0;
  while (copy > 0) {
    reversed = reversed * 10 + (copy % 10);
    copy = Math.floor(copy / 10);
  }
  return reversed === x;
}
