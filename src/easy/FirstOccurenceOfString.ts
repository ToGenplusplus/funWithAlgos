/**
 * Given:
 *  two strings, needle and haystack.
 *  both strings are lower case
 * Return:
 * a number representing the index of the first occurence of needle in haystack or -1 if needle is not found
 *
 * numbers of chars in needle must be <= # of characters in haystack
 *
 * we can interate over haystack
 * once we find the first matching char, we keep checking the subsequent chars to see if they match
 * if we find a match, we break the loop and return the index of the first matching character
 *      we know we found a match when the difference between the last char and the first character is = to length of needle
 * if we don't find a match, we move our pointer until we find another char matching first char in needle and repeat or we reach the end of haystack.
 *
 * Ex needle: temi, haystack tetemi
 *
 *  length of temi is 4 which is <= tetemi which is 6, so we can proceed since there is a chance needle exists in haystack
 *
 *  init matchingPointer = 0
 *  init foundPointer = 0
 *  init checkPointer = 0
 *
 *  while foundPointer < haystack.length
 *      if char in needle at checkPointer does not match char in haystack at foundPointer
 *          we set matchingPointer to foundPointer if haystack char at foundPointer matches needle char at 0
 *              else we increase foundPointer by 1 and set matchingPointer to foundPointer
 *          we set checkPointer to 0
 *
 *      else
 *          if checkPointer + 1 === needle.length (return matchingPointer)
 *
 *          increase founPointer by 1
 *          increase checkPointer by 1
 *
 * return -1
 *
 * Iter | matchPointer | checkPointer | founPointer | needleChar | hayStackChar
 * 0 |0 |0 | 0 | t | t
 * 1 | 0 | 1 | 1 | e | e
 * 2 | 0 | 2 | 2| m | t
 * 3 | 2 | 0 | 2 | t | t
 * 4 | 2 | 1 | 3 |e | e
 * 5 | 2 | 2 | 4 |m |m
 * 6 | 2 | 3 | 5 | i | i
 * found a match - returning matching pointer which is 2
 *
 * Time complexity is O(len(haystack))
 * and space complexity is O(1)
 *
 *
 *
 */

export function strStr(haystack: string, needle: string): number {
  if (needle.length > haystack.length) return -1;

  let checkPointer = 0;
  let matchingPointer = 0;
  let foundPointer = 0;

  while (checkPointer < haystack.length) {
    if (needle.charAt(foundPointer) !== haystack.charAt(checkPointer)) {
      checkPointer =
        haystack.charAt(checkPointer) === needle.charAt(0)
          ? checkPointer
          : checkPointer + 1;
      matchingPointer = checkPointer;
      foundPointer = 0;
    } else {
      if (foundPointer + 1 === needle.length) return matchingPointer;
      checkPointer++;
      foundPointer++;
    }
  }

  return -1;
}
