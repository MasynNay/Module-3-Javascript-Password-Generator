// The password generator will provide a password with 8-128 characters based on criteria the user specifies.
var generateBtn = document.querySelector("#generate");

// Variable Declaration
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;
var userChoices;

// Variable for Lower
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Variable for Upper 
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

// Variable for Numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Variable for Special Characters
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to Generate Button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must create a password between 8-128 characters!");
    console.log("Password length " + passwordLength);
  
  } else { 
    confirmLower = confirm("Click OK to confirm if you would like to include lowercase letters.");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Click OK to confirm if you would like to include uppercase letters.");
    console.log("Upper case " + confirmUpper);
    confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters.");
    console.log("Number " + confirmNumeric);
    confirmSpecial = confirm("Click OK to confirm if you would like to include special characters.");
    console.log("Special Character " + confirmSpecial);

  };

  // No answer then
  if (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    userChoices = alert("You must meet the given criteria(s). Please try again.");
  // Four true options
  } else if (confirmLower && confirmUpper && confirmNumeric && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }
  // Three true options
  else if (confirmLower && confirmUpper && confirmNumeric) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumeric && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumeric && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  // Two true options
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumeric) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumeric) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmNumeric && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  // One true option
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumeric) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  };

  // Empty variable for the password length
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Password is: " + password);
  return password;
}