module.exports = function reverse (number) {

    let reverseNumber = number.toString().split('')
    if (reverseNumber[0] !== '-') {
        return reverseNumber.reverse().join('')
    } else {
        return reverseNumber.reverse().splice(0, 3).join('')
    }
}
