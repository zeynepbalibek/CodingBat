/* Given three ints, a b c, return true if one of them is 10 or more less than one of the others.
 */

function lessBy10(a, b, c) {
    var ab = Math.abs(a - b);
    var ac = Math.abs(a - c);
    var bc = Math.abs(b - c);

    if (ab >= 10 || ac >= 10 || bc >= 10) {
        return true;
    } else {
        return false;
    }
}