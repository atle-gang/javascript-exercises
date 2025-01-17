

const convertToCelsius = function(temp) {
  let celsius;
  // °C = (°F - 32) × 5/9
  celsius = (temp - 32) * 5 / 9
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit;
  // F = (9/5 × °C) + 32
  fahrenheit = (9 / 5 * temp) + 32;
  return Math.round(fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// console.log(convertToFahrenheit(0))