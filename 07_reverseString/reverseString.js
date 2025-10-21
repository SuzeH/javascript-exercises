const reverseString = function(string) {
    const letterArray = string.split('');
    const reversedArray = letterArray.reverse();
    const reversedString = reversedArray.join('');
    
    return reversedString;
};
// HA. or more succinctly:
// const reverseString = string => string.split('').reverse().join('');

reverseString('hello there') // returns 'ereht olleh'
// Do not edit below this line
module.exports = reverseString;
