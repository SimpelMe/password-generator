// Object of all the function names that we will use to create random letters of password
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Random more secure value
function secureMathRandom() {
  return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
}

// Generator Functions
// All the functions that are responsible to return a random value that we will use to create password.
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '+!#$_:?><;.,';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// The Viewbox where the result will be shown
const resultEl = document.getElementById("result");
// The input slider, will use to change the length of the password
const lengthEl = document.getElementById("slider");

// Checkboxes representing the options that is responsible to create differnt type of password based on user
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");

// Button to copy the text
const copyBtn = document.getElementById("copy-btn");

// Copy Password in clipboard
copyBtn.addEventListener("click", () => {
  const textarea = document.querySelector("#result");
  navigator.clipboard.writeText(textarea.value);
});

// When Generate is clicked Password id generated.
function triggerGenerator() {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;
  generatedPassword = true;
  resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
};

// Function responsible to generate password and then returning it.
function generatePassword(length, lower, upper, number, symbol) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{
    lower
  }, {
    upper
  }, {
    number
  }, {
    symbol
  }].filter(item => Object.values(item)[0]);
  if (typesCount === 0) {
    return "";
  }
  for (let i = 0; i < (length / typesCount); i++) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  generatedPassword = generatedPassword.slice(0, length);
  return shufflePassword(generatedPassword);
}

// Shuffle that straight generated password a bit
function shufflePassword(password) {
  // Create a copy of the original string to be randomized
  let shuffle = [...password];
  // Defining function returning random value from i to N
  const getRandomValue = (i, N) => Math.floor(Math.random() * (N - i) + i);
  // Shuffle a pair of two elements at random position j (Fisher-Yates)
  shuffle.forEach((elem, i, arr, j = getRandomValue(i, arr.length)) => [arr[i], arr[j]] = [arr[j], arr[i]]);
  // Transforming array to string
  shuffle = shuffle.join('');
	return shuffle;
}

// function that handles the checkboxes state, so at least one needs to be selected. The last checkbox will be disabled.
function disableOnlyCheckbox() {
  let totalChecked = [uppercaseEl, lowercaseEl, numberEl, symbolEl].filter(el => el.checked)
  totalChecked.forEach(el => {
    if (totalChecked.length == 1) {
      el.disabled = true;
    } else {
      el.disabled = false;
    }
  })
}

[uppercaseEl, lowercaseEl, numberEl, symbolEl].forEach(el => {
  el.addEventListener('click', () => {
    disableOnlyCheckbox()
  })
})
