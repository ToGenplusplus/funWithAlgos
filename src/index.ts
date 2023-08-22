import { merge } from "./easy/MergeSortedArray";

const nums1 = [-2, 0, 1];
const nums2 = [-5, -3];
const m = 3;
const n = 2;

console.log(`Result of merging ${nums1} and ${nums2} together:`);
merge(nums1, m, nums2, n);
