/**
 * Remove duplicates from sorted array
 * Given a sorted array arr[] of size N, the task is to remove the duplicate elements from the array. 
 * We need keep order of the remaining distinct elements as it was in the original array.
 *  Input: arr[] = {2, 2, 2, 2, 2}
    Output: arr[] = {2}
    Explanation: All the elements are 2, So only keep one instance of 2.

    Input: arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
    Output: arr[] = {1, 2, 3, 4, 5}

    Input: arr[] = {1, 2, 3}
    Output : arr[] = {1, 2, 3}
    Explanation : No change as all elements are distinct

    One solution is to iterate through the array and append the first seen distinct element to an output array
    This wil be an O(n) time and space solution. Need n space to store output array.

    Another solution is to use the 2 pointer technique
    one pointer is used to track the next distinct element
    another pointer is used to track where the next distinct element should be moved to.
 */

export const removeDuplicatesFromSortedArray = (arr, n) => {
  if (n < 2) return n;
  let forwardIndex = 1;
  let trackingIndex = 0;

  while (forwardIndex < n) {
    if (arr[forwardIndex] !== arr[trackingIndex]) {
      trackingIndex++;
      arr[trackingIndex] = arr[forwardIndex];
    }
    forwardIndex++;
  }
  return arr.slice(0, trackingIndex + 1);
};

type reverseInput = number | string;
export const arrayReverseIterative = (arr: reverseInput[]) => {
  if (arr.length < 2) return arr;

  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};
