module.exports = function toReadable (number) {
    const numbers = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    const hundreds = Math.trunc(number / 100);
    const dozens = Math.trunc((number - hundreds * 100) / 10);
    const digits = number % 10;

    if (number === 0) return 'zero';
    if (number <= 20) return numbers[number];
    if (number < 100) return `${numbers[dozens * 10]} ${numbers[digits]}`.trim();
    if ((dozens * 10) < 20) return `${numbers[hundreds]} hundred ${numbers[(dozens * 10) + digits]}`.trim();
    return `${numbers[hundreds]} hundred ${numbers[dozens * 10]} ${numbers[digits]}`.trim();
};

