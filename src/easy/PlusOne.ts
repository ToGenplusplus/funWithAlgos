/**
 * Given:
 *  array of integers , where each element in array reperesents the ith integer of a larger integer value
 *  No leading zeros, no negative numbers
 * Return
 *  array of integers representing the larger integer value incremented by 1
 *
 * Ex1:
 *  Input: [1,2,3], output: [1,2,4]
 *      reasoning: 123 + 1 = 124
 * Ex2: Input: [9], output: [1,0]
 *      reasoning: 9 + 1 = 10,
 * Ex3: Input: [2,9,9], output: [3,0,0]
 *      299 + 1 = 300
 * Ex4: Input: [9,9], output: [1,0,0]
 *      99 + 1 = 100
 *
 * set a boolean carryOver to true
 * iterating through the number array starting with the last integer in the array
 *
 *      increment value by 1.
 *      If value == 10, set value to 0
 *      else set carryOver to false and break loop
 *
 *
 * if carryOver = true, insert 1 at beginning of array
 *
 * return array
 */
