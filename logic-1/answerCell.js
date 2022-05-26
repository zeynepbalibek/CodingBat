/* Your cell phone rings. Return true if you should answer it.
 * Normally you answer, except in the morning you only answer if it is your mom calling.
 * In all cases, if you are asleep, you do not answer.
 */

function answerCell(isMom, isMorning, isAsleep) {
    if (isAsleep) {
        return false;
    }
    if (isMorning && !isMom) {
        return false;
    } else {
        return true;
    }
}