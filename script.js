// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Concatenated Arrays 

// if TTTT - use ALL 4 characters
spNumLowAndUpperXter = specialCharacters.concat(numericCharacters,lowerCasedCharacters,upperCasedCharacters)
// if TTFT - Use special, number, uppercase
spNumAndUpperXter = specialCharacters.concat(numericCharacters,upperCasedCharacters)
// if TTTF - Use special, number, lowercase
spNumAndLowerXter = specialCharacters.concat(numericCharacters,lowerCasedCharacters)
// if TFTT - Use special, lowercase, upprcase
spLowerAndUpperXter = specialCharacters.concat(lowerCasedCharacters,upperCasedCharacters)
// if FTTT - Use number, lowercase, uppercase
numLowAndUpperXter = numericCharacters.concat(lowerCasedCharacters,upperCasedCharacters)
// if TTFF - Use special, number 
spAndNumXter = specialCharacters.concat(numericCharacters)
// if TFTF - Use special, lowercase
spAndLowXter = specialCharacters.concat(lowerCasedCharacters)
// if TFFT - Use special, uppercase
spAndUpperXter = specialCharacters.concat(upperCasedCharacters)
// if FTTF - Use number, lowercase
numAndLowXter = numericCharacters.concat(lowerCasedCharacters)
// if FTFT - Use number, uppercase
numAndUpperXter = numericCharacters.concat(upperCasedCharacters)
// if FFTT - Use lowercase, uppercase
lowAndUpperXter = lowerCasedCharacters.concat(upperCasedCharacters)

// function to ask user to restart 
function startAgain() {
  var restart = confirm("Click OK to Restart");
  if (restart == true) {
    getPasswordOptions()
  } else {
    alert("Thanks for using this App!")
  }
}


// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);