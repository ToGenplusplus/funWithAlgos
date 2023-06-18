/**
 * Given:
 *  sorted array of integers, and a target integer
 *  disctinct intergers
 *  ascending order
 * Return:
 *  number representing the index of the target if found or where targert would be
 *
 * Ex
 * nums: [1,3,5,6]
 * target | return val
 * 5 | 2
 * 2 | 1
 * 7 | 4
 *
 * We can leverage a modified version of binary search since the array
 * contains distinct sorted integers
 *
 * we are either gonna return the mid position or start or end position
 *
 * if end - start == 0, return start
 * if end - start == 1
 *  mid =  floor(end + start divided by 2)
 *  if integer in num at mid === target return mid
 *  if interger in num at mid > t target return start
 *  else return end
 * if there are 2 or more characters to search
 *  mid = floor( end + start /2)
 * if target === num at mid return mid
 * if interger in num at mid > t target recursively call on the left side
 * else recursively call on the right side
 */
