const result = document.querySelector('.result');
const AC = document.querySelector('#ac');
const wrapper = document.querySelector('.wrapper');
let func = '';
let firstNum = '';
let secondNum = '';
let outcome = '';

function reset() {
  func = '';
  firstNum = '';
  secondNum = '';
  outcome = '';
}

wrapper.addEventListener('click', (e) => {
  if (func === '' && e.target.classList.contains('num')) {
    result.innerText = '';
    firstNum += e.target.innerText;
    result.innerText = firstNum;
  }

  if (e.target.classList.contains('func')) {
    func = e.target.innerText;
  }

  if (func !== '' && e.target.classList.contains('num')) {
    secondNum += e.target.innerText;
    result.innerText = secondNum;
  }

  if (e.target.Id === 'equal') {
    switch (func) {
      case '+': {
        outcome = Number(firstNum) + Number(secondNum);
        result.innerText = outcome;
        reset();
        break;
      }

      case '-': {
        outcome = Number(firstNum) - Number(secondNum);
        result.innerText = outcome;
        reset();
        break;
      }

      default: {
        break;
      }
    }
  }
});

AC.addEventListener('click', () => {
  result.innerText = 0;
  reset();
});
