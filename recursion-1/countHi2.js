/* Given a string, compute recursively the number of times lowercase "hi" appears in the
 * string, however do not count "hi" that have an 'x' immedately before them.
 */

function countHi2(str) {
    return countHi2(str, 0);
}

function countHi2(str, start) {
    var start = str.indexOf("hi", start);

    if (start == -1) {
        return 0;
    }

    var count = 0;
    if (start == 0 || str.charAt(start - 1) != "x") {
        count++;
    } else {
        return count + countHi2(str, start + 2);
    }
}