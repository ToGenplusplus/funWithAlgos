import { arrayReverseIterative } from "../arrays";

const input = [];
for (let i = 0; i < 100; i++) {
  input.push(i);
}
console.log("------------BEFORE REVERSE------");
console.log(input);
arrayReverseIterative(input);
console.log("------------AFTER REVERSE------");
console.log(input);
