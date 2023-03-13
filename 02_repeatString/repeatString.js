const repeatString = function(str,num) {
    let newStr = [];
    if (num>0){
        for (i=1; i<=num; i++){
            newStr.push(str);
        }
        let joined = newStr.join("");
        return joined;
    }else if (num === 0){
        return "";
    }else {
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
