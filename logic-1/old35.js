/* Return true if the given non-negative number is a multiple of 3 or 5, but not both.
 * Use the % "mod" operator
 */

function old35(n) {
    return (n % 3 == 0) != (n % 5 == 0);
}