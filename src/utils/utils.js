/**
 * Capitalize first letter of sentence
 * 
 * @param {string} sentence
 * @returns {string} Sentence with first letter capitalazed
 */
export function capitalizeFirstLetter(sentence) {

    let letter = sentence[0];

    letter = letter.toUpperCase();

    let segment = sentence.substring(1);

    return letter + segment;
}

/**
 * @param {number} tempCelsius from API
 * @returns {string} Processed temp from API
 */
export function getProcessedTemp(tempCelsius) {
    let temp = Math.round(tempCelsius);

    temp = concatenatePlus(temp);

    return temp;
}

/**
 * Concatenates "+" to temp (if temp > 0).
 * 
 * @param {number} temp
 * @returns {string} Temperature with sign
 */
function concatenatePlus(temp) {

    if (temp > 0) {

        // concatenating with plus
        return "+" + temp;
    }
    else {
        // API returns negative temp with "-" by default
        return `${temp}`;
    }
}

/**
 * Get time in format HH:MM
 * 
 * @param {number} dateSecs
 * @param {timezone} timezone
 * @returns {string} Time in format HH:MM
 */
export function getTime(dateSecs, timezone = 0) {

    // Get date with shift in seconds from timezone offset
    let localDate = dateSecs + timezone;

    // Convert date in secs to millisecs
    localDate *= 1000;

    let localDateObject = new Date(localDate);

    let hours = localDateObject.getUTCHours();
    let mins = localDateObject.getUTCMinutes();

    // If value < 10 then we return "0" + value
    hours = (hours % 10 === hours ? "0" + hours : hours);
    mins = (mins % 10 === mins ? "0" + mins : mins);

    // Return date in format HH:MM
    return hours + ":" + mins;
}

/**
 * @param {number} dateSecs
 * @param {timezone} timezone
 * @returns {string} Day of the week
 */
export function getDayOfWeek(dateSecs, timezone = 0) {

    // Get date with shift in seconds from timezone offset
    let localDate = dateSecs + timezone;

    // Convert date in secs to millisecs
    localDate *= 1000;

    let localDateObject = new Date(localDate);

    // Return day index in UTC (0 - 6, where 0 - sunday)
    let day = localDateObject.getUTCDay();

    // Start with sunday because it's the first day of the week in JS
    let days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

    return days[day];
}

/**
 * @returns {string[]} List of towns.
 */
export function getTowns() {
    const towns = [
        "Москва", "Санкт-Петербург", "Новосибирск",
        "Екатеринбург", "Казань", "Нижний Новгород",
        "Красноярск", "Челябинск", "Самара", "Уфа",
        "Ростов-на-Дону", "Краснодар", "Омск",
        "Воронеж", "Пермь", "Волгоград",
    ];
    return towns;
}

/**
 * @param {number} value Decimal value
 * @returns {number} Value in percents 
 */
export function getAsPercents(value) {
    // Remove floating-point arithmetical error
    return Math.trunc(value * 100);
}
