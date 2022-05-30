/* Given a string, compute recursively (no loops) a new string where all appearances of "pi"
 * have been replaced by "3.14".
 */

function changePi(str) {
    if (str.length() <= 1) {
        return str;
    }
    if (str.substring(0, 2).equals("pi")) {
        return "3.14" + changePi(str.substring(2));
    } else {
        return str.charAt(0) + changePi(str.substring(1));
    }
}