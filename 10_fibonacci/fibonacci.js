const fibonacci = function(x) {
    // googles the formula for getting the nth term in the fibonnaci sequence
    // [phi^n - (1 - phi)^n] / sqrt(5)
    if (x>0){
        const pi = 1.61803398875;
    let fib = (item) =>{
       return (Math.pow(pi, item)-Math.pow(1-pi, item))/Math.sqrt(5);
    }
    return Math.floor(fib(x));
    }
    else{
        return "OOPS";
    }
    
}



// Do not edit below this line
module.exports = fibonacci;
