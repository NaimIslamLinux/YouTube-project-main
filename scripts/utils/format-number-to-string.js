export function numToString(num) {
    const formater = new Intl.NumberFormat(
        'en-UK',
        {
        notation: 'compact',
        compactDisplay: 'short'
    });
    return formater.format(num).toUpperCase();
}