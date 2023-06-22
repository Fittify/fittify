export function getDateTimeReadable(dateTime) {
    const dateAndTime = String(dateTime).split('T');
    return dateAndTime[0] + " | " + dateAndTime[1];
}

export function getIconSource(sport) {
    return "/sport_icons/" + String(sport).toLowerCase() + "_icon.png";
}