const convertToCelsius = function(far) {
  let cel = (far - 32) * 5/9;
  const roundedNumber = Math.round(cel * 10)/10;
  return roundedNumber;
};

const convertToFahrenheit = function(cel) {
  const far = (cel * 1.8) + 32;
  const roundedNumber = Math.round(far * 10)/10;
  return roundedNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
