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
  // Ask User Length of password and validates input 
  passLength = false
  optArray = [] 
  while (passLength == false) {
      passLength = parseInt(prompt("How many characters do you want in your password? (Enter a number between 10-64)")) 
      if (isNaN(passLength)) {
          alert("Sorry! Your input is not a number!")
          passLength = false
      } else if (!isNaN(passLength)) {
          if (passLength < 10 || passLength > 64) {
              alert("Invalid input! Check that you have entered a number between 10 and 64")
              passLength = false
          } else {
              var confirmChoice = confirm(`Click OK to confirm that your password should be ${passLength} characters long`)
              if (confirmChoice == true) {
                  console.log(`Your password will be created with ${passLength} characters`)
                  /// Special character 
                  var optSpecialxter = confirm("Click OK if you want special characters in your password")
                  optArray.push(optSpecialxter)
                  // Numeric option 
                  var optNumbers = confirm("Click OK if you want numeric characters in your password")
                  optArray.push(optNumbers)

                  // Lowercase option
                  var optLowerCase = confirm("Click OK if you want lower case characters in your password")
                  optArray.push(optLowerCase)
                  // Uppercase option
                  var optUpperCase = confirm("Click OK if you want upper case characters in your password")
                  optArray.push(optUpperCase)
              } else {
                  startAgain()
                  // earlyExit = confirm("Click OK to exit this App")
                  // if (earlyExit == true) {
                  //   alert("Thanks for using this App")
                  // } else {
                  //   passLength = false
                  // }
              }
          
          }
      }
   
  }
  return {
    userPassLength: passLength,
    charOptions: optArray
  }
  passLength = true
}

// result = getPasswordOptions()

// let passwordL = result.userPassLength
// let optOfchar = result.charOptions

// console.log(passwordL, optOfchar)




// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random()*arr.length)
  var randElem = arr[randIndex]
  return randElem

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