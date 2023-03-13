const sumAll = function(first, last) {
    let sum = 0;
    if (first < last && first>0 && last>0 && typeof first == 'number' && typeof last == 'number'){
        for (i=first; i<=last; i++){
            sum = sum + i;
        }
        return sum;
    } else if (first > last && first>0 && last>0 && typeof first == 'number' && typeof last == 'number') {
        for (i=first; i>=last; i--){
            sum = sum + i;
        }
        return sum;
    } else {
        return "ERROR";
    }
       
   
};

// Do not edit below this line
module.exports = sumAll;
