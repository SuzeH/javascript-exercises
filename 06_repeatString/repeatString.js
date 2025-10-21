const repeatString = function (string, num) {
if (num < 0) {
    return 'ERROR';
  } else {
    let joinedString = "";
    for (let i = 0; i < num; i++) {
        joinedString += string;
    }
  return joinedString;
}
};

repeatString('hey', 3) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;
