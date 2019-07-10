export const numberWithCommas = x =>{ 
    if (!x) return "0"
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const calcWidth = (ratio, pledgeGoal) => {
    let width;
    if (pledgeGoal > 0 && ratio > 1) {
        return width = 100;
    } else if (pledgeGoal <= 0) {
        return width = 0;
    } else {
        return width = Math.floor(ratio * 100);
    }
}

export const calcTimeDiff = endDate => {
    let start = new Date();
    let finish = new Date(endDate);

    let diff = finish - start;
    if (diff < 0) return { timeleft: 'This has ended', inc: "" }
    let converted = diff / 1000 / 60 / 60 / 24
    let days = Math.floor(converted);
    converted = converted % 1;
    let hours = Math.floor(converted * 24);
    converted = converted % 1;
    let minutes = Math.floor(converted * 60);
    converted = converted % 1;
    let seconds = Math.floor(converted * 60);

    if (days > 0) {
        return { timeleft: `${days}`, inc: 'days to go' }
    } else if (hours > 0) {
        return { timeleft: `${hours}`, inc: 'hours to go' }
    } else {
        return { timeleft: `${minutes}`, inc: 'minutes to go' }
    }
}

export const fundPercent = (pledgeAmount, pledgeGoal) => {
    if (pledgeGoal === 0) return 0
    return Math.floor(pledgeAmount/pledgeGoal * 100)
}