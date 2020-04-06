import './style.scss';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.querySelector('body').prepend(wrapper);

const text = document.createElement('textarea');
text.classList.add('screen');
document.querySelector('.wrapper').append(text);
const textarea = document.querySelector('textarea');
textarea.focus();

const wrapperForKeyboard = document.createElement('div');
wrapperForKeyboard.classList.add('wrapper-for-keyboard');
document.querySelector('.wrapper').append(wrapperForKeyboard);

const WrapKeys = document.querySelector('.wrapper-for-keyboard');

const keys = {
  'eng': ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
    'l_shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'r_shift',
    'l_ctrl', 'win', 'l_alt', 'space', 'r_alt', 'r_ctrl'],

  'eng_shift': ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace',
    'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
    'capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter',
    'l_shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'r_shift',
    'l_ctrl', 'win', 'l_alt', 'space', 'r_alt', 'r_ctrl'],

  'ru': ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
    'capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
    'l_shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'r_shift',
    'l_ctrl', 'win', 'l_alt', 'space', 'r_alt', 'r_ctrl'],

  'ru_shift': ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace',
    'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/',
    'capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter',
    'l_shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'r_shift',
    'l_ctrl', 'win', 'l_alt', 'space', 'r_alt', 'r_ctrl'],
};

let leng = 'eng';

function backspace() {
  textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
  textarea.focus();
}

function capslock() {
  const collection = document.getElementsByClassName('key');

  for (const item of collection) {
    if (item.textContent.length === 1) {
      if (this.classList.contains('key_down')) {
        item.textContent = item.textContent.toLowerCase();
      } else {
        item.textContent = item.textContent.toUpperCase();
      }
    }
  }

  this.classList.toggle('key_down');
}

function shiftDown() {
  const collection = document.getElementsByClassName('key');
  for (let i = 0; i < collection.length; i += 1) {
    if (this.classList.contains('key_down')) {
      collection[i].textContent = keys.eng_shift[i];
    }
  }
}

function shiftUp() {
  const collection = document.getElementsByClassName('key');
  for (let i = 0; i < collection.length; i += 1) {
    if (!this.classList.contains('key_down')) {
      collection[i].textContent = keys.eng[i];
    }
  }
}

function enter() {
  textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
  textarea.focus();
}

function space() {
  textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
  textarea.focus();
}

function tab() {
  textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
  textarea.focus();
}

function focusButton() {
  this.classList.add('key_down');
}

function blurButton() {
  this.classList.remove('key_down');
}

function printLetter() {
  document.querySelector('.screen').value += this.textContent;
}

function CreateKeys() {
  for (let i = 0; i < keys[leng].length; i += 1) {
    const key = document.createElement('div');
    key.innerHTML = `${keys[leng][i]}`;

    if (keys[leng][i].length > 1 && keys[leng][i] !== 'space') {
      key.classList.add('key', 'key_service');
    } else if (keys[leng][i] === 'space') {
      key.classList.add('key', 'key_space');
    } else {
      key.classList.add('key');
    }

    WrapKeys.append(key);

    if (keys[leng][i] === '\\' || keys[leng][i] === 'enter' || keys[leng][i] === 'right shift' || keys[leng][i] === 'backspace') {
      const LineBreak = document.createElement('div');
      LineBreak.classList.add('break');
      WrapKeys.append(LineBreak);
    }

    if (keys[leng][i] !== 'capslock') {
      key.addEventListener('mousedown', focusButton);
      key.addEventListener('mouseup', blurButton);
    }

    switch (keys[leng][i]) {
      case 'space':
        key.addEventListener('click', space);
        break;
      case 'tab':
        key.addEventListener('click', tab);
        break;
      case 'enter':
        key.addEventListener('click', enter);
        break;
      case 'backspace':
        key.addEventListener('click', backspace);
        break;
      case 'capslock':
        key.addEventListener('click', capslock);
        break;
      case 'l_shift':
      case 'r_shift':
        key.addEventListener('mousedown', shiftDown);
        key.addEventListener('mouseup', shiftUp);
        break;
      case 'l_alt':
      case 'r_alt':
        break;
      case 'win':
        break;
      default:
        key.addEventListener('click', printLetter);
    }
  }
}

CreateKeys();

document.querySelector('.screen').addEventListener('keydown', (event) => {
  for (let i = 0; i < WrapKeys.childElementCount; i += 1) {
    if (WrapKeys.children[i].textContent === event.key) {
      WrapKeys.children[i].classList.add('key_down');
      break;
    }
  }
});

document.querySelector('.screen').addEventListener('keyup', (event) => {
  for (let i = 0; i < WrapKeys.childElementCount; i += 1) {
    if (WrapKeys.children[i].textContent === event.key) {
      WrapKeys.children[i].classList.remove('key_down');
      break;
    }
  }
});
