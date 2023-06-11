import { isValidParenthesesis } from "./easy/ValidParentheses";

const s = "[[[]";

console.log(
  `True or false, ${s} is a set of valid parentheses: ${isValidParenthesesis(
    s
  )}`
);
