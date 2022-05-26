/* Given three ints, a b c, one of them is small, one is medium and one is large. Return true if
 * the three values are evenly spaced, so the difference between small and medium is the
 * same as the difference between medium and large.
 */

function evenlySpaced(a, b, c) {
    var test;

    if (a > b) {
        test = a;
        a = b;
        b = test;
    }
    if (b > c) {
        test = b;
        b = c;
        c = test;
    }
    if (a > b) {
        test = a;
        a = b;
        b = test;
    } else {
        return b - a == c - b;
    }
}