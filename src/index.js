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
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
    'l_shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ar_up', 'r_shift',
    'l_ctrl', 'win', 'l_alt', 'Space', 'r_alt', 'r_ctrl', 'ar_left', 'ar_down', 'ar_right', 'del'],

  'eng_shift': ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter',
    'l_shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ar_up', 'r_shift',
    'l_ctrl', 'win', 'l_alt', 'Space', 'r_alt', 'r_ctrl', 'ar_left', 'ar_down', 'ar_right', 'del'],

  'ru': ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
    'l_shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ar_up', 'r_shift',
    'l_ctrl', 'win', 'l_alt', 'Space', 'r_alt', 'r_ctrl', 'ar_left', 'ar_down', 'ar_right', 'del'],

  'ru_shift': ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/',
    'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter',
    'l_shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', , 'ar_up', 'r_shift',
    'l_ctrl', 'win', 'l_alt', 'Space', 'r_alt', 'r_ctrl', 'ar_down', 'ar_right', 'del'],
};

let leng = 'eng';

function backspace() {
  textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
  textarea.focus();
}

function del() {
  textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
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

function arrowleft() {
  textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd - 1, 'end');
  //если позиция меньше нуля - прервись!!!
  textarea.focus();
}

function arrowright() {
  textarea.setRangeText('', textarea.selectionStart + 1, textarea.selectionEnd + 1, 'end');
  //если позиция больше END - прервись!!!
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

    if (keys[leng][i].length > 1 && keys[leng][i] !== 'Space') {
      key.classList.add('key', 'key_service');
    } else if (keys[leng][i] === 'Space') {
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

    if (keys[leng][i] !== 'CapsLock') {
      key.addEventListener('mousedown', focusButton);
      key.addEventListener('mouseup', blurButton);
    }

    switch (keys[leng][i]) {
      case 'Space':
        key.addEventListener('click', space);
        key.addEventListener('keydown', space);
        break;
      case 'Tab':
        key.addEventListener('click', tab);
        break;
      case 'enter':
        key.addEventListener('click', enter);
        break;
      case 'backspace':
        key.addEventListener('click', backspace);
        break;
      case 'CapsLock':
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
      case 'ar_left':
        key.addEventListener('click', arrowleft);
        break;
      case 'ar_right':
        key.addEventListener('click', arrowright);
        break;
      case 'del':
        key.addEventListener('click', del);
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

function ChangeLeng(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', function (event) {
    pressed.add(event.code);
    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });

}

ChangeLeng(
  () => {
    if (leng === 'eng') {
      const collection = document.getElementsByClassName('key');
      for (let i = 0; i < collection.length; i += 1) {
        collection[i].textContent = keys.ru[i];
        leng = 'ru';
      }
    } else {
      const collection = document.getElementsByClassName('key');
      for (let i = 0; i < collection.length; i += 1) {
        collection[i].textContent = keys.eng[i];
        leng = 'eng';
      }
    }
  },
  'AltLeft',
  'ShiftLeft',
);
