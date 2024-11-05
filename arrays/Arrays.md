# Array:

- enables storing data in sequential blocks of memory
- O(1) retrieval of items if item location is known.
- O(n) for traversal, insert, deletion, operations.
- O(n logn) for sorting
- Use case:
  - require data stored together in memory (cache friendlyness)
  - items are known ahead of time
  - represent multiple items of the same type in a single variable

## Problem solving:

Clarification questions:

- can the array be empty
- does the array contain distinct elements
- Is the array sorted?
- what type of numbers are in the array (intergers, floating point)
- are numbers all positive?

Techniques:

- can a solution be found by iterating through the array from the end?
  - e.g if we needed to find the elements in an array that are greater than all the elements to the right of itself (the leaders).
- [two pointer](https://www.geeksforgeeks.org/two-pointers-technique/)
  - usecases
    - for finding pairs
    - keeping track of elements that need to be changed
- prefix sum
- [sliding window](https://www.geeksforgeeks.org/window-sliding-technique/)
