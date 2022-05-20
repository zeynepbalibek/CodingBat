/* Given a non-negative number "num", return true 
 * if num is within 2 of a multiple of 10.
 * Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.
 */

function nearTen(num) {
    if (num % 10 < 3 || num % 10 >= 8) {
        return true;
    } else {
        return false;
    }
}