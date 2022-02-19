// module.exports = function toReadable (number) {
function toReadable(number) {
    let resultString = '';
    const dictionary = {
        0: 'zero',
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
        90: 'ninety',
        100: 'hundred',
    }

    const array = number.toString().split('');
    console.log(array)
    if (array[2]) {
        resultString += dictionary[+array[0]] + ' ' + dictionary[100];
        console.log(resultString)
    }
    if (array[1]) {
        let num = (+array[1]) * 10;
        if (num > 19) {

            if (array[2])  resultString += ' '
            resultString += dictionary[num]
            console.log(resultString)
            if (array[0]) {
                if (array[0] != 0) {
                    if (array[1]) resultString += ' '
                    resultString += dictionary[+array[2]]
                }
            }
        } else if (num > 0) {
            if (array[2]) resultString += ' '
            resultString += dictionary[num + (+array[0])]
        } else if (array[0] && array[0] > 0) {
            if (array[1]) resultString += ' '
            resultString += dictionary[+array[0]]
        }
    } else if (array[0]) {
        if (array[1]) resultString += ' '
        resultString += dictionary[+array[0]]
    }

    return resultString
}

console.log(toReadable(997))
