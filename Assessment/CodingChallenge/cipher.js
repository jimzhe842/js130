// Parse the string into an array
// Check each individual character if it's actually a letter
// Check upper case and lower case
// Separate handlers for both cases
// Shift the letter by 13 characters
// Convert the letter back to uppercase if it was
// Rejoin the string

// Modified linebreak-style in .eslintrc.yml to ["error", "windows"]


"use strict";

// const CHAR_CODES = {
//   a: 97,
//   z: 122,
//   A: 65,
//   Z: 90
// };

const LOWER_CASE_FOURTEENTH_LETTER = 'n';
const UPPER_CASE_FOURTEENTH_LETTER = 'N';

const CHAR_CODE_LOWER_A = 97;
const CHAR_CODE_LOWER_Z = 122;
const CHAR_CODE_UPPER_A = 65;
const CHAR_CODE_UPPER_Z = 90;

const ENCODING_SHIFT = 13;


function isLowerCaseLetter(char) {
  return (char >= 'a' && char <= 'z');
}

function isUpperCaseLetter(char) {
  return (char >= 'A' && char <= 'Z');
}

// function encodeLowerCaseLetter(char) {
//   let charCode = char.charCodeAt();
//   if (char < LOWER_CASE_FOURTEENTH_LETTER) {
//     charCode += ENCODING_SHIFT;
//   } else {
//     let overflow = (charCode + ENCODING_SHIFT) - CHAR_CODE_LOWER_Z;
//     charCode = CHAR_CODE_LOWER_A + (overflow - 1);
//   }
//   return String.fromCharCode(charCode);
// }

// function encodeUpperCaseLetter(char) {
//   let charCode = char.charCodeAt();
//   if (char < UPPER_CASE_FOURTEENTH_LETTER) {
//     charCode += ENCODING_SHIFT;
//   } else {
//     let overflow = (charCode + ENCODING_SHIFT) - CHAR_CODE_UPPER_Z;
//     charCode = CHAR_CODE_UPPER_A + (overflow - 1);
//   }
//   return String.fromCharCode(charCode);
// }

function encodeLetter(char, isLowerCase) {
  let charCode = char.charCodeAt();
  let [ thresholdLetter, letterA, letterZ ] = [ LOWER_CASE_FOURTEENTH_LETTER, CHAR_CODE_LOWER_A, CHAR_CODE_LOWER_Z ];
  if (!isLowerCase) {

    [ thresholdLetter, letterA, letterZ ] = [ UPPER_CASE_FOURTEENTH_LETTER, CHAR_CODE_UPPER_A, CHAR_CODE_UPPER_Z ];
  }
  if (char < thresholdLetter) {
    charCode += ENCODING_SHIFT;
  } else {
    let overflow = (charCode + ENCODING_SHIFT) - letterZ;
    charCode = letterA + (overflow - 1);
  }
  return String.fromCharCode(charCode);
}

function encode(string) {
  let charArr = string.split('');
  let encodedArr = charArr.map(char => {
    if (isLowerCaseLetter(char)) {
      return encodeLetter(char, true);
      // return encodeLowerCaseLetter(char);
    } else if (isUpperCaseLetter(char)) {
      return encodeLetter(char, false);
      // return encodeUpperCaseLetter(char);
    } else {
      return char;
    }
  });

  return encodedArr.join('');
}

module.exports = { encode };