const palindromes = function (x) {
    const specialChar = ["!",",", ".", " "];
    const splitXString = x.split("");
    let newXArray = [];
    // Looped through the split x string checking for special characters and removing them
    splitXString.forEach(item => {
        if (!specialChar.includes(item)){
            newXArray.push(item);
        }
    });
    const newXString = newXArray.join("");
    // We will now work with the new string without special characters
    let comparisonString = [];
    for (i=newXArray.length; i>=0; i--){
        comparisonString.push(newXArray[i]);
    }
    const newComparisonString = comparisonString.join("");

    if (newXString.toLowerCase() === newComparisonString.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
