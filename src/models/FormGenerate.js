import generatePassword from './Generators';

const passwordGenerated = document.querySelector('.password-generated');
const inputNumber = document.querySelector('.input-number');
const chkNumbers = document.querySelector('.chk-numbers');
const chkUpercase = document.querySelector('.chk-upercase');
const chkLowercase = document.querySelector('.chk-lowercase');
const chkSymbols = document.querySelector('.chk-symbols');
const generate = document.querySelector('.generate');

function generator() {
  const password = generatePassword(
    inputNumber.value,
    chkNumbers.checked,
    chkUpercase.checked,
    chkLowercase.checked,
    chkSymbols.checked
  );

  return password || 'Nada selecionado';
}

export default () => {
  generate.addEventListener('click', () => {
    passwordGenerated.innerHTML = generator();
  });
};
