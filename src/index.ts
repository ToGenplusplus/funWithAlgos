import { searchInsert } from "./easy/SearchInsertPosition";

const nums = [1, 3, 5, 7, 10, 22, 33, 36, 49];
const target = 37;

console.log(`index of ${target} in ${nums} is ${searchInsert(nums, target)}`);
