/* Given two ints, each in the range 10..99, return true if there is a digit that appears in both
 * numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit
 * while the % "mod" n%10 gives the right digit.)
 */

function shareDigit(a, b) {
    var az = a / 10;
    var ad = a % 10;
    var bz = b / 10;
    var bd = b % 10;

    return az == bz || az == bd || ad == bz || ad == bd;
}