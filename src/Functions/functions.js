export const shortenNumber = (number) => {
    const absNumber = Math.abs(number);
    if (absNumber < 1000) {
        return number + '';
    } else if (absNumber < 1000000) {
        return Math.floor(number / 1000) + 'k';
    } else if (absNumber < 1000000000) {
        return Math.floor(number / 1000000) + 'm';
    } else {
        return '???';
    }
}

export const getTimeDiff = (newDate, oldDate) => {
    const yearDiff = newDate.getFullYear() - oldDate.getFullYear();
    const monthDiff = newDate.getMonth() - oldDate.getMonth();
    const dayDiff = newDate.getDate() - oldDate.getDate();
    const hourDiff = newDate.getHours() - oldDate.getHours();
    const minDiff = newDate.getMinutes() - oldDate.getMinutes();

    if (yearDiff > 0) {
        if (yearDiff > 1) {
            return yearDiff + ' years ago';
        } else {
            return yearDiff + ' year ago';
        }
    } else if (monthDiff > 0) {
        if (monthDiff > 1) {
            return monthDiff + ' months ago';
        } else {
            return monthDiff + ' month ago';
        }
    } else if (dayDiff > 0) {
        if (dayDiff > 1) {
            return dayDiff + ' days ago';
        } else {
            return dayDiff + ' day ago';
        }
    } else if (hourDiff > 0) {
        if (hourDiff > 1) {
            return hourDiff + ' hours ago';
        } else {
            return hourDiff + ' hour ago';
        }
    } else if (minDiff > 0) {
        if (minDiff > 1) {
            return minDiff + ' minutes ago';
        } else {
            return minDiff + ' minute ago';
        }
    } else {
        return 'just now';
    }
}