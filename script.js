// The Password generator will provide a password with 8-75 characters based on criteria the user specifies.

//Event Listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);

// Arrays 
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var character = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmCharacter;
var confirmNumeric;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to be?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 76) {vfgbgbgbaqqqqqqqqqqqqqqqTGF45FR
      alert("Password length must be between 8-75 characters.");
      var confirmLength = (prompt("How many characters would you like your password to be? *8-75 characters*"));
      } 

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine parameters of password 
    var confirmCharacter = confirm("Click OK to confirm if you would like to include special characters.");
    var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters.");    
    var confirmLower = confirm("Click OK to confirm if you would like to include lowercase characters.");
    var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters.");
      // Loop if answer is outside the parameters 
      while(confirmUpper === false && confirmLower === false && confirmCharacter === false && confirmNumeric === false) {
        alert("You must choose at least one parameter");
        var confirmCharacter = confirm("Click OK to confirm if you would like to include special characters.");
        var confirmNumeric = confirm("Click OK to confirm if you would like to include numeric characters.");    
        var confirmLower = confirm("Click OK to confirm if you would like to include lowercase characters.");
        var confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters.");   
    } 

      // Assign an action to the password parameters
      var passwordCharacters = []
      
    if (confirmCharacter) {
      passwordCharacters = passwordCharacters.concat(character)
    }
    if (confirmNumeric) {
      passwordCharacters = passwordCharacters.concat(numeric)
    }
    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(lower)
    }
    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(upper)
    }
      console.log(passwordCharacters)

      // Empty string to be filled based on for loop
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}