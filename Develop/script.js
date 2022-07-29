// Assignment code here
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "%", "^", "&", "*", "(", ")"];
var string = [];
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
 
function generatePassword() {
 
 // button click confirmation
 console.log("Button has been clicked");
 
 // 1. Prompting user to chose password criteria 
 var lowercase = confirm("Would you like to use lowercase letters?");
 var uppercase = confirm("Would you like to use uppercase letters?");
 var num = confirm("Would you like to use numbers?");
 var specialChar = confirm("Would you like to use special characters?");
 var length = prompt("Please insert how long you would like your password to be. It must be between 8 and 128 characters.");
 var userPassword = ("");

 
 // 3. Validate input
 
 // Making sure length is correct
 if (length < 8 || length > 128) {
   alert("Your password is not between 8 and 128 characters, please try again.")
   var length = prompt("Please insert how long you would like your password to be. It must be between 8 and 128 characters.");
 }
 
 // Making sure at least one criteria is used
  else if (lowercase === false && uppercase === false && num === false && specialChar === false) {
   window.alert("You must choose at least one password criteria");
   var lowercase = confirm("Would you like to use lowercase letters?");
   var uppercase = confirm("Would you like to use uppercase letters?");
   var num = confirm("Would you like to use numbers?");
   var specialChar = confirm("Would you like to use special characters?");
  }

 // 4. Generate password based on criteria
 if (lowercase) {
    string = string.concat(lowercaseAlphabet);
 }

 if (uppercase) {
    string = string.concat(uppercaseAlphabet);
 }

 if (num) {
   string = string.concat(numbers);
 }

 if (specialChar) {
   string = string.concat(specialCharacters);
 }

 console.log (string);

 for (var i = 0; i < length; i++) {
  // Continues to select a random character value until it is the desired length
  userPassword += string [Math.floor(Math.random() * string.length)];
  }

  return userPassword;
}

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 
 passwordText.value = password;

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
