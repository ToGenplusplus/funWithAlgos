/**
 * Giving: a number n - where n represents a # of stairs
 *  1 <= n <= 45
 *  Return: a number x - where x represents the # of ways to reach n either taking 1 or 2 steps at a time
 *
 * Ex
 * n | x
 * 1 | 1
 * 2 | 2 (1 + 1 or 2)
 * 3 | 3
 * 4 | 5
 * 5 | 8
 * 6 | 13
 *
 * Looks like the number of ways to reach n steps is = to # of ways to reach n- 1 steps + # of ways to reach n - 2 steps for n > 2.
 */
