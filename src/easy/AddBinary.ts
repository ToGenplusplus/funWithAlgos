/**
 * Given:
 *  Two strings a, and b where a and b are binary representation of integers
 *  no leading 0's in a and b, except for 0
 *  at least one char in a and b.
 * Return
 *  a string represnting a binary representation of a + b
 *
 * Ex: a: 0 , b: 1 -> 1
 * Ex: a: 10, b: 10 -> 100
 *
 * Ex: a: 1111 b: 1 -> 10000
 * Iter | a | b | co | result
 * 0 | 1 | 1| 0 |
 * 1| 1| |1 | 0
 * 2| 1 | | 1 | 00
 * 3 | 1 ||1|000
 * 4| 1||1|0000
 * 5|||1|00001 -> 10000
 *
 *
 * Ex: a: 111, b:11 -> 1010
 * Ex: a: 111, b:01 -> 1000
 *  Iter | a | b | co | result
 *  0 | 1 | 1 | 0 |
 *  1 | 1 | 0 | 1 |0
 *  2| 1 | | 1 | 00
 * 3|
 *
 *
 *
 *
 *
 * Ex: a: 101, b:01 -> 110
 * Ex: a: 101, b:11 -> 1000
 * Ex: a: 1010 b: 1011 -> 10101
 *
 * 0 + 1 = 1
 * 1 + 1 = 0 (carry over 1)
 * 0 + 0 = 0
 *
 * Need to iterate over both a and b, a and b can be different lengths**
 * we break iteration if there is no carry over
 * store the result in a string, and we would return the revers of the string
 *
 * Possible solution algorithm:
 * set carryOver to 0
 * iterate over both a and b starting at the last character
 *  add carryOver to a
 *      add 1 to a
 *
 *
 *
 *
 */
