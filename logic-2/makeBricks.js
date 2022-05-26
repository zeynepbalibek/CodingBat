/* We want to make a row of bricks that is goal inches long. We have a number of small
 * bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the
 * goal by choosing from the given bricks. This is a little harder than it looks and can be done
 * without any loops.
 */

function makeBricks(small, big, goal) {
    if (small + 5 * big >= goal) {
        return true;
    } else {
        return false;
    }
}

// test solution?

function makeBricks(small, big, goal) {
    var test = goal >= (5 * big) + small
}