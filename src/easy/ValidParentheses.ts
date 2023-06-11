/**
 * S has list one character
 * Example inputs for s
 * {]} - false
 * {{{([])}}} - true
 * [()({})[]] - true
 * (){([])}() - true
 * [)({}) - false
 * ([)] - false
 *
 * since we know each open parenthesis needs a corresponding closed parenthesis
 * for it to be valid, number of chars in s must be even
 *
 * continuing from above statemnt, for each type of open parenthesis, there needs to be the same number of closed
 * parenthesis
 *
 * open brackets must be closed in the correct order
 *
 * Ex 1 (valid): [()]()
 * 1. Number of characters in s is 6 which is an even number
 * 2.
 * [ - count: 1,
 * ] - count: 1,
 * ( - count: 2,
 * ) - count: 2
 *
 * 3.
 * We can use a stack to keep track of the correct order, if char is an open parenthesis, push in stack,
 * if its closed, pop from stack and verify the char poped from stack is the correct open parenthesis
 *
 * After:
 * Iter | stack
 * 0 | [
 * 1 | [(
 * 2 | [
 * 3 |
 * 4 | (
 * 5 |
 *
 * the stack is empty and each closed parenthesis had an open parenthis in the correct order
 * All three conditions are satisfied, therefore:
 * [()]() - valid
 *
 * Ex 2(not valid): ([)]
 * 1. number of chars in s is 4 which is even - satisfied
 * 2. Every closed parenthesis has a corresponding open paren of the same type - satisfied
 * 3.
 *
 * After:
 * Iter | stack
 * 0 | (
 * 1 | ([
 * 2 - current char is ) but char popped from stack is [, since they don't match, condition is not satisfied
 * therefore:
 * ([)] - not valid.
 *
 *
 */

const isValidParenthesesis = (s: string): boolean => {
  return true;
};
