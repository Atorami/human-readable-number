module.exports = function toReadable (number) {
    let numbersArr = {
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
    };
    
    let numbersPronounceArr = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };
    
    function tens(number) {
        return number < 20 ? numbersArr[number] :
            numbersPronounceArr[Math.floor(number / 10)] + (number % 10 ? ' ' + numbersArr[number % 10] : '');
    }

    function hundreds(number) {
        return numbersArr[Math.floor(number / 100)] + ' hundred' + (number % 100 > 0 ? ' ' + tens(number % 100) : '');
    }

    function thousands(number) {
        return numbersArr[Math.floor(number / 1000)] + ' thousand' + (number % 1000 > 0 ? ' ' + (number % 1000 < 100 ? tens(number % 1000) : hundreds(number % 1000)) : '');
    }
    
    function makeReadable(number) {
        return number === 0 ? 'zero' : number < 100 ? tens(number): number < 1000 ? hundreds(number): thousands(number);
    }

    return makeReadable(number)
}
