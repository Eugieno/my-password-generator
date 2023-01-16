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

// Function to generate password with user input
function generatePassword() {
  // initialisations
    // passlenhth
  
    // optArray
  
    
    ArrofGenPass = [] // An empty string to hold the characters randomly selected

    // Get password options from user 
      // call getpassword function
    
      result = getPasswordOptions()

      // Initialisation
      let passwordL = result.userPassLength
      let optOfchar = result.charOptions

      console.log(passwordL, optOfchar)
    // Random selecion of characters and appending based on user options 
      // conditional logic 
      // for loop 

  // - Call different scenarios 
  // if TTTT - Use the 4 arrays
  if ((optOfchar[0] == true && optOfchar[1] == true && optOfchar[2] == true && optOfchar[3] == true)) {
    var arrRandom = [1,2,3,4]
    for (var i = 1; i <= passwordL; i++) {
      // This block of code ensures there is at least one of each of the 4 characters in the randomly generated character
      
      var randSelector = getRandom(arrRandom)
        if ((randSelector == 1 && i === 1 || randSelector == 1 && i === 2 || randSelector == 1 && i === 3 || randSelector == 1 && i === 4)) {
          ArrofGenPass.push(getRandom(specialCharacters));
          arrRandom.pop(1);
        } else if ((randSelector == 2 && i === 1 || randSelector == 2 && i === 2 || randSelector == 2 && i === 3 || randSelector == 2 && i === 4)) {
          ArrofGenPass.push(getRandom(numericCharacters));
          arrRandom.pop(2);
        } else if ((randSelector == 3 && i === 1 || randSelector == 3 && i === 2 || randSelector == 3 && i === 3 || randSelector == 3 && i === 4)) {
          ArrofGenPass.push(getRandom(lowerCasedCharacters));
          arrRandom.pop(3);
        } else if ((randSelector == 4 && i === 1 || randSelector == 4 && i === 2 || randSelector == 4 && i === 3 || randSelector == 4 && i === 4)){
          ArrofGenPass.push(getRandom(upperCasedCharacters));
          arrRandom.pop(4);
        } else {
          ArrofGenPass.push(getRandom(spNumLowAndUpperXter));
        }
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if TTTF - Use special, number, lowercase
  } else if ((optOfchar[0] == true && optOfchar[1] == true && optOfchar[2] == true && optOfchar[3] == false)) {
    for (var i = 1; i <= passwordL; i++) {
      // This block of code ensures there is at least one of each of the 3 characters in the randomly generated character
      var arrRandom = [1,2,3]  
      var randSelector = getRandom(arrRandom)
        if ((randSelector == 1 && i === 1 || i === 2 || i === 3)) {
          ArrofGenPass.push(getRandom(specialCharacters));
          arrRandom.pop(1);
        } else if ((randSelector == 2 && i === 1 || i === 2 || i === 3)) {
          ArrofGenPass.push(getRandom(numericCharacters));
          arrRandom.pop(2);
        } else if ((randSelector == 3 && i === 1 || i === 2 || i === 3)) {
          ArrofGenPass.push(getRandom(lowerCasedCharacters));
          arrRandom.pop(3);
        } else {
          ArrofGenPass.push(getRandom(spNumAndLowerXter));
        }
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if TFTT - Use special, lowercase, upprcase
  } else if ((optOfchar[0] == true && optOfchar[1] == false && optOfchar[2] == true && optOfchar[3] == true)) {
    for (var i = 1; i <= passwordL; i++) {
      // This block of code ensures there is at least one of each of the 3 characters in the randomly generated character
      var arrRandom = [1,2,3]  
      var randSelector = getRandom(arrRandom)
        if ((randSelector == 1 && i === 1 || i === 2 || i === 3)) {
          ArrofGenPass.push(getRandom(specialCharacters));
          arrRandom.pop(1);
        } else if ((randSelector == 2 && i === 1 || i === 2 || i === 3)) {
          ArrofGenPass.push(getRandom(lowerCasedCharacters));
          arrRandom.pop(2);
        } else if ((randSelector == 3 && i === 1 || i === 2 || i === 3)){
          ArrofGenPass.push(getRandom(upperCasedCharacters));
          arrRandom.pop(3);
        } else {
          ArrofGenPass.push(getRandom(spLowerAndUpperXter));
        }
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if FTTT - Use number, lowercase, uppercase
  } else if ((optOfchar[0] == false && optOfchar[1] == true && optOfchar[2] == true && optOfchar[3] == true)) {
    for (var i = 1; i <= passwordL; i++) {
      // This block of code ensures there is at least one of each of the 3 characters in the randomly generated character
      var arrRandom = [1,2,3]  
      var randSelector = getRandom(arrRandom)
        if ((randSelector == 1 && i === 1 || i === 2 || i === 3)) {
          ArrofGenPass.push(getRandom(numericCharacters));
          arrRandom.pop(1);
        } else if ((randSelector == 2 && i === 1 || i === 2 || i === 3)) {
          ArrofGenPass.push(getRandom(lowerCasedCharacters));
          arrRandom.pop(2);
        } else if ((randSelector == 3 && i === 1 || i === 2 || i === 3)){
          ArrofGenPass.push(getRandom(upperCasedCharacters));
          arrRandom.pop(3);
        } else {
          ArrofGenPass.push(getRandom(numLowAndUpperXter));
        }
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if TTFT - Use special, number, uppercase
  } else if ((optOfchar[0] == true && optOfchar[1] == true && optOfchar[2] == false && optOfchar[3] == true)) {
    for (var i = 1; i <= passwordL; i++) {
      // This block of code ensures there is at least one of each of the 3 characters in the randomly generated character
      var arrRandom = [1,2,3]  
      var randSelector = getRandom(arrRandom)
        if ((randSelector == 1 && i === 1 || i === 2 || i === 3)) {
          ArrofGenPass.push(getRandom(specialCharacters));
          arrRandom.pop(1);
        } else if ((randSelector == 2 && i === 1 || i === 2 || i === 3)) {
          ArrofGenPass.push(getRandom(numericCharacters));
          arrRandom.pop(2);
        } else if ((randSelector == 3 && i === 1 || i === 2 || i === 3)){
          ArrofGenPass.push(getRandom(upperCasedCharacters));
          arrRandom.pop(3);
        } else {
          ArrofGenPass.push(getRandom(spNumAndUpperXter));
        }
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if TTFF - Use special, number 
  } else if ((optOfchar[0] == true && optOfchar[1] == true && optOfchar[2] == false && optOfchar[3] == false)) {
    for (var i = 1; i <= passwordL; i++) {
      // This block of code ensures there is at least one of each of the 2 characters in the randomly generated character
      var arrRandom = [1,2]  
      var randSelector = getRandom(arrRandom)
        if ((randSelector == 1 && i === 1 || i === 2)) {
          ArrofGenPass.push(getRandom(specialCharacters));
          arrRandom.pop(1);
        } else if ((randSelector == 2 && i === 1 || i === 2)) {
          ArrofGenPass.push(getRandom(numericCharacters));
          arrRandom.pop(2);
        } else {
          ArrofGenPass.push(getRandom(spAndNumXter));
        }
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if TFTF - Use special, lowercase
  } else if ((optOfchar[0] == true && optOfchar[1] == false && optOfchar[2] == true && optOfchar[3] == false)) {
    for (var i = 1; i <= passwordL; i++) {
      // This block of code ensures there is at least one of each of the 2 characters in the randomly generated character
      var arrRandom = [1,2]  
      var randSelector = getRandom(arrRandom)
        if ((randSelector == 1 && i === 1 || i === 2)) {
          ArrofGenPass.push(getRandom(specialCharacters));
          arrRandom.pop(1);
        } else if ((randSelector == 2 && i === 1 || i === 2)) {
          ArrofGenPass.push(getRandom(lowerCasedCharacters));
          arrRandom.pop(2);
        } else {
          ArrofGenPass.push(getRandom(spAndLowXter));
        }
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if TFFT - Use special, uppercase
  } else if ((optOfchar[0] == true && optOfchar[1] == false && optOfchar[2] == false && optOfchar[3] == true)) {
    for (var i = 1; i <= passwordL; i++) {
      // This block of code ensures there is at least one of each of the 2 characters in the randomly generated character
      var arrRandom = [1,2]  
      var randSelector = getRandom(arrRandom)
        if ((randSelector == 1 && i === 1 || i === 2)) {
          ArrofGenPass.push(getRandom(specialCharacters));
          arrRandom.pop(1);
        } else if ((randSelector == 2 && i === 1 || i === 2)){
          ArrofGenPass.push(getRandom(upperCasedCharacters));
          arrRandom.pop(2);
        } else {
          ArrofGenPass.push(getRandom(spAndUpperXter));
        }
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if FTTF - Use number, lowercase 
  } else if ((optOfchar[0] == false && optOfchar[1] == true && optOfchar[2] == true && optOfchar[3] == false)) {
    for (var i = 1; i <= passwordL; i++) {
      // This block of code ensures there is at least one of each of the 2 characters in the randomly generated character
      var arrRandom = [1,2]  
      var randSelector = getRandom(arrRandom)
        if ((randSelector == 1 && i === 1 || i === 2)) {
          ArrofGenPass.push(getRandom(numericCharacters));
          arrRandom.pop(1);
        } else if ((randSelector == 2 && i === 1 || i === 2)) {
          ArrofGenPass.push(getRandom(lowerCasedCharacters));
          arrRandom.pop(2);
        } else {
          ArrofGenPass.push(getRandom(numAndLowXter));
        }
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if FTFT - Use number, uppercase 
  } else if ((optOfchar[0] == false && optOfchar[1] == true && optOfchar[2] == false && optOfchar[3] == true)) {
    for (var i = 1; i <= passwordL; i++) {
      // This block of code ensures there is at least one of each of the 2 characters in the randomly generated character
      var arrRandom = [1,2]  
      var randSelector = getRandom(arrRandom)
        if ((randSelector == 1 && i === 1 || i === 2)) {
          ArrofGenPass.push(getRandom(numericCharacters));
          arrRandom.pop(1);
        } else if ((randSelector == 2 && i === 1 || i === 2)){
          ArrofGenPass.push(getRandom(upperCasedCharacters));
          arrRandom.pop(2);
        } else {
          ArrofGenPass.push(getRandom(numAndUpperXter));
        }
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if FFTT - Use lowercase, uppercase 
  } else if ((optOfchar[0] == false && optOfchar[1] == false && optOfchar[2] == true && optOfchar[3] == true)) {
    for (var i = 1; i <= passwordL; i++) {
      // This block of code ensures there is at least one of each of the 2 characters in the randomly generated character
      var arrRandom = [1,2]  
      var randSelector = getRandom(arrRandom)
        if ((randSelector == 1 && i === 1 || i === 2)) {
          ArrofGenPass.push(getRandom(lowerCasedCharacters));
          arrRandom.pop(1);
        } else if ((randSelector == 2 && i === 1 || i === 2)){
          ArrofGenPass.push(getRandom(upperCasedCharacters));
          arrRandom.pop(2);
        } else {
          ArrofGenPass.push(getRandom(lowAndUpperXter));
        } 
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if TFFF - Use special only
  } else if ((optOfchar[0] == true && optOfchar[1] == false && optOfchar[2] == false && optOfchar[3] == false)) {
    for (var i = 1; i <= passwordL; i++) {
      ArrofGenPass.push(getRandom(specialCharacters));
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if FTFF - Use numbers only 
  } else if ((optOfchar[0] == false && optOfchar[1] == true && optOfchar[2] == false && optOfchar[3] == false)) {
    for (var i = 1; i <= passwordL; i++) {
      ArrofGenPass.push(getRandom(numericCharacters));
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if FFTF - Use lowercase only 
  } else if ((optOfchar[0] == false && optOfchar[1] == false && optOfchar[2] == true && optOfchar[3] == false)) {
    for (var i = 1; i <= passwordL; i++) {
      ArrofGenPass.push(getRandom(lowerCasedCharacters));
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
    // if FFFT - Use uppercase only 
  } else if ((optOfchar[0] == false && optOfchar[1] == false && optOfchar[2] == false && optOfchar[3] == true)) {
    for (var i = 1; i <= passwordL; i++) {
      ArrofGenPass.push(getRandom(upperCasedCharacters));
    }
    console.log(ArrofGenPass.join(''))
    return ArrofGenPass.join('')
  } else if ((optOfchar[0] == false && optOfchar[1] == false && optOfchar[2] == false && optOfchar[3] == false)) {
    alert("Oops! You have not selected any of the character options")
    startAgain()
  } else {
      return "----------"  
  }
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