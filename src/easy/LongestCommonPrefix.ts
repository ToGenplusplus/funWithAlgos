/**
 * my solution,
 * Time is O(N * M),
 * where n is the number of strings in the array strs and M is the length of the shortest string
 * space is O(1)
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];

  let prefixedString = "";
  const shortestString = strs.reduce((a, b) => (a.length < b.length ? a : b));
  console.log(`this is the shortest string in strs: ${shortestString}`);
  if (shortestString !== "") {
    let subIndex = 1;
    let charsToMatch = shortestString.substring(0, subIndex);
    while (subIndex <= shortestString.length) {
      console.log(`subIndex ${subIndex}, charsToMatch: ${charsToMatch}`);
      let matching = true;
      for (const str of strs) {
        if (str.substring(0, subIndex) !== charsToMatch) {
          matching = false;
          break;
        }
      }
      if (!matching) {
        break;
      }
      subIndex++;
      prefixedString = charsToMatch;
      charsToMatch = shortestString.substring(0, subIndex);
    }
  }
  return prefixedString;
}
/**
 * better solution using recrusion
 * Time is O(N * log(M))  where n is the numbr os strings in strs and M is the average lenght of strings in strs
 */
function longestCommonPrefixBetter(strs: string[]): string {
  if (strs.length === 0) return "";

  const findCommonPrefix = (strs, start, end) => {
    if (start === end) {
      return strs[start];
    } else {
      const mid = Math.floor((start + end) / 2);
      const leftPrefix = findCommonPrefix(strs, start, mid);
      const rightPrefix = findCommonPrefix(strs, mid + 1, end);
      return commonPrefix(leftPrefix, rightPrefix);
    }
  };

  const commonPrefix = (str1, str2) => {
    const minLength = Math.min(str1.length, str2.length);
    let i = 0;
    while (i < minLength && str1.charAt(i) === str2.charAt(i)) {
      i++;
    }
    return str1.substring(0, i);
  };

  return findCommonPrefix(strs, 0, strs.length - 1);
}
