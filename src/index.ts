import { strStr, strStrv2 } from "./easy/FirstOccurenceOfString";

const needle = "issip";
const haystack = "mississippi";

console.log(
  `index of first orccurence of ${needle} in ${haystack} is ${strStrv2(
    haystack,
    needle
  )}`
);
