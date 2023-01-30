export const convertToRomanNumerals = (num) => {
  let sum = '';
  const numerals = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9, 
    'V': 5,
    'IV': 4, 
    'I': 1, 
  };
  const romanNumerals = (int) => {
    if (isNaN(num)) {
      return "Not a number";
    } else if (int === 0) {
      return sum;
    } else {
      for (let key in numerals) {
        if (int - numerals[key] >= 0) {
          sum += key;
          int = int - numerals[key];
          return romanNumerals(int);
        }
      }
    }
  }
  romanNumerals(num);
  return sum;
}

console.log(convertToRomanNumerals(109));

