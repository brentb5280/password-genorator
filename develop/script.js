// Assignment code here

//DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');



const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};




//generate password function
function generatePasword(lower, upper, number, symbol, length) {

  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  //console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
  (
    item => Object.values(item) [0]
  );

  //console.log( 'typesArr:', typesArr);

  if(typesCount ===0) {
    return '';
  }

    for(let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
       const funcName = Object.keys(type) [0];

       generatedPassword += randomFunc[funcName]();
      });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}
// Assignment code here
//generate password function
//generate funtions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) +128);
}

function getRandomSymbol() {
  const Symbols = '!@#$%^&*":'
  return symbols[Math.floor(Math.random() * symbols.length)];
}




function generatePassword(length, lower, upper, number, symbol) {
	let generatedPassword = "";
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
	if (typesCount === 0) {
		return "";
	}
	for (let i = 0; i < length; i++) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	return generatedPassword.slice(0, length)
									.split('').sort(() => Math.random() - 0.5)
									.join('');
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
generateBtn.addEventListener("click", () => {
	const length = +lengthEl;
	const hasLower = lowercaseEl;
	const hasUpper = uppercaseEl;
	const hasNumber = numbersEl;
	const hasSymbol = symbolsEl;
	generatedPassword = true;
	resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
	
});
