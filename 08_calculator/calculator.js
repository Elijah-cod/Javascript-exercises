const add = function(x,y) {
  return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
	let sum = 0;
  for (let i=0; i<arr.length; i++){
    sum = sum + arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let mult = 1;
  for (let i=0; i<arr.length; i++){
    mult = mult * arr[i];
  }
  return mult;
};

const power = function(x,y) {
	return Math.pow(x, y);
};

const factorial = function(x) {
	if (x>0){
    let fact =1;
    for (let i=x; i>0; i--){
      fact = fact*i;
    }
    return fact;
  }else{
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
