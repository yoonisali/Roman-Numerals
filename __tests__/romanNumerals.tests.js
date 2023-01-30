import { convertToRomanNumerals } from "../src/romanNumerals.js";

describe('convertToRomanNumerals', () => {

  test('should return a an empty string if input is not a number', () => {
    expect(convertToRomanNumerals()).toEqual("");
  });

  test('should return I if number is 1', () => {
    expect(convertToRomanNumerals(1)).toEqual("I");
  });

  test('should return V if number is 5', () => {
    expect(convertToRomanNumerals(5)).toEqual("V");
  });

  test('should return X if number is 10', () => {
    expect(convertToRomanNumerals(10)).toEqual("X");
  });

}); 