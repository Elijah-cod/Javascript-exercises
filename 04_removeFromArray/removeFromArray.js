const removeFromArray = function(...args) {
    //passed the first argument which is the array that we are checking
    let arr = args[0];
    let newArr = [];
    //loop through the array capturing all the items that were not passed as arguments
    arr.forEach(item => {
        if (!args.includes(item)){
            newArr.push(item);
        }
    });
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
