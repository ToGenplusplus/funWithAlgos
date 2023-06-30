/**
 * Given:
 * - X - a non negative integer
 *
 * Return: s where s represents the square root of X rounded down to the nearest integer.
 *
 * Ex:
 * X | S
 * 4 | 2
 * 16 | 4
 * 8 | 3
 * 11 | 3
 * 44 | 6
 * 142 | 11
 *
 * if X is 0 or 1 we can return X
 * now the square root of X will be between the sqaure of two whole numbers so we just need to find the
 * whole numbers whoses squares its between and choose the smallest whole number
 *
 * Ex X = 23:
 * Iter | a | b | a2 | b2|
 * 0 | 1 | 2| 1 | 4 |
 * 1 | 2 | 3 | 4 | 9 |
 * 2 | 3 | 4| 9 | 16
 * 3 | 4 | 5 | 16 | 25 -> yes 23 is between 16 and 25 so the answer is 4
 *
 * Time complexity is O(sqrt(x))
 * Space complexity is O(1)
 */

export function mySqrt(x: number): number {
  if (x === 0 || x === 1) {
    return x;
  }

  let lower = 1;
  let upper = 2;

  while (true) {
    let lowerSquared = lower * lower;
    let upperSquared = upper * upper;

    if (x >= lowerSquared && x < upperSquared) {
      return lower;
    }
    lower++;
    upper++;
  }
}
