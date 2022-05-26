/* Given 3 int values, a b c, return their sum. However, if one of the values is the same as
 * another of the values, it does not count towards the sum.
 */

function lonSum(a, b, c) {
    if (a == b && a == c && b == c) {
        return 0;
    }
    if (a == b) {
        return c;
    }
    if (a == c) {
        return b;
    }
    if (b == c) {
        return a;
    } else {
        return a + b + c;
    }
}

//optimize version

function lonSum(a, b, c) {
    var sum = 0;

    if (a != b && a != c) {
        return sum += a;
    }
    if (b != a && b != c) {
        return sum += b;
    }
    if (c != a && c != b) {
        return sum += c;
    } else {
        return sum;
    }
}