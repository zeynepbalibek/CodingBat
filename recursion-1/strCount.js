/* Given a string and a non-empty substring sub, compute recursively the number of times
 * that sub appears in the string, without the sub strings overlapping.
 */


function strCount(str, sub) {
    if (str.length() < sub.length()) {
        return 0;
    }
    if (str.substring(0, sub.length()).equals(sub)) {
        return 1 + strCount(str.substring(sub.length()), sub);
    } else {
        return strCount(str.substring(1), sub);
    }
}