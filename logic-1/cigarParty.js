function cigarParty(cigars, isWeekend) {
    if (isWeekend && cigars >= 40) {
        return true;
    }
    if (!isWeekend && cigars >= 40 && cigars <= 60) {
        return true;
    } else {
        return false;
    }
}

// optimize version

function cigarParty2(cigars, isWeekend) {
    return cigars >= 40 && (isWeekend || cigars <= 60);
}