const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateUpercase = () => String.fromCharCode(rand(65, 91));
const generateLowercase = () => String.fromCharCode(rand(97, 123));
const generateNumbers = () => String.fromCharCode(rand(48, 58));
const symbols = ',.;-^$#=@%&!';
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(
  amount,
  numbers,
  upercase,
  lowercase,
  symbol
) {
  const passwordArray = [];
  amount = Number(amount);

  for (let i = 0; i < amount; i++) {
    if (numbers && passwordArray.push(generateNumbers()));
    if (upercase && passwordArray.push(generateUpercase()));
    if (lowercase && passwordArray.push(generateLowercase()));
    if (symbol && passwordArray.push(generateSymbol()));
  }

  return passwordArray.join('').slice(0, amount);
}
