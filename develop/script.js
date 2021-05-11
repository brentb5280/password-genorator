// Assignment code here


// Arm's Tutoring version 

const lower = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const symbol = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']

  // function that gets the password options
  function getPasswordOptions() {
      var length = parseInt(prompt('What number of characters do you want your password to be?')
      )
      // we want to do a few checks regarding the password length, so we're going to use conditional statements
      if (Number.isNaN(length)) {
          alert("IT MUST BE A NUMBER!")
          return null;
      }
      if (length > 128) {
        alert("password needs to be shorter than 128")
        return null;
    }
      if (length < 8) {
          alert("password needs to be longer than 8")
          return null;
      }
      // a boolean (true or false)
    var hasNumber = confirm("Select ok if you want numbers in your password");
    var hasLower = confirm("Select ok if you want Lower case in your password");
    var hasUpper = confirm("Select ok if you want Upper case in your password");
    var hasSymbol = confirm("Select ok if you want symbols in your password");
// using the boolean here to make sure at least one of these options is selected
if (
    hasNumber === false && hasLower === false && hasSymbol === false && hasUpper === false
) {
    alert("select at least one character type!")
    return null;

}

// need some kind of storage so we can access later
// object 
var passwordResponse = {
    length: length,
    hasNumber: hasNumber,
    hasLower: hasLower,
    hasUpper: hasUpper,
    hasSymbol: hasSymbol,
}

return passwordResponse;
  }

  //a function to get the random elements 
  function randomGenerator(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      var randomChar = arr[randIndex];

      return randomChar;
  }
  // function to generate the password when the user inputs it

  function userPassword() {
    var results = [];
    var characters = [];
    var actualCharacters = [];

    var selections = getPasswordOptions();
    if (selections.hasNumber) {
        // concatatenation means adding
        characters = characters.concat(number)
        actualCharacters.push(randomGenerator(number))
    }
    if (selections.hasSymbol) {
            characters = characters.concat(symbol)
            actualCharacters.push(randomGenerator(symbol))
    }
    if (selections.hasLower) {
                characters = characters.concat(lower)
                actualCharacters.push(randomGenerator(lower))
    }
    if (selections.hasUpper) {
                    characters = characters.concat(upper)
                    actualCharacters.push(randomGenerator(upper))
    }
    // do this conditional for all of them 

   

    for ( var i=0; i < selections.length; i++) {
        var character = getRandom(character);
        results.push(character);
    }

    for (var i=0; i < actualCharacters.length; i++) {
        result[i] = actualCharacters[i];
    }
    return results.join('')


  }





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
    
