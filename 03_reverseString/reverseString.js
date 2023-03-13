const reverseString = function(str) {
    splitStr = str.split("");
    let newStr = [];
    for (i=splitStr.length; i>=0; i--){
        newStr.push(splitStr[i]);
    }
    return newStr.join("");

};

// Do not edit below this line
module.exports = reverseString;
