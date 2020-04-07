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
  eng: [
    { key: 192, char: '`' },
    { key: 49, char: '1' },
    { key: 50, char: '2' },
    { key: 51, char: '3' },
    { key: 52, char: '4' },
    { key: 53, char: '5' },
    { key: 54, char: '6' },
    { key: 55, char: '7' },
    { key: 56, char: '8' },
    { key: 57, char: '9' },
    { key: 48, char: '0' },
    { key: 189, char: '-' },
    { key: 187, char: '=' },
    { key: 8, char: '&#8656' },
    { key: 9, char: '&#8633' },
    { key: 81, char: 'q' },
    { key: 87, char: 'w' },
    { key: 69, char: 'e' },
    { key: 82, char: 'r' },
    { key: 84, char: 't' },
    { key: 89, char: 'y' },
    { key: 85, char: 'u' },
    { key: 73, char: 'i' },
    { key: 79, char: 'o' },
    { key: 80, char: 'p' },
    { key: 219, char: '[' },
    { key: 221, char: ']' },
    { key: 220, char: '\\' },
    { key: 20, char: 'capslock' },
    { key: 65, char: 'a' },
    { key: 83, char: 's' },
    { key: 68, char: 'd' },
    { key: 70, char: 'f' },
    { key: 71, char: 'g' },
    { key: 72, char: 'h' },
    { key: 74, char: 'j' },
    { key: 75, char: 'k' },
    { key: 76, char: 'l' },
    { key: 186, char: ';' },
    { key: 222, char: '\'' },
    { key: 13, char: '&#9166' },
    { key: 16, char: 'l_shift' },
    { key: 90, char: 'z' },
    { key: 88, char: 'x' },
    { key: 67, char: 'c' },
    { key: 86, char: 'v' },
    { key: 66, char: 'b' },
    { key: 78, char: 'n' },
    { key: 77, char: 'm' },
    { key: 188, char: ',' },
    { key: 190, char: '.' },
    { key: 191, char: '/' },
    { key: 38, char: '&#8593' },
    { key: 16, char: 'r_shift' },
    { key: 17, char: 'l_ctrl' },
    { key: 18, char: 'l_alt' },
    { key: 32, char: 'space' },
    { key: 18, char: 'r_alt' },
    { key: 17, char: 'r_ctrl' },
    { key: 37, char: '&#8592' },
    { key: 40, char: '&#8595' },
    { key: 39, char: '&#8594' },
    { key: 46, char: 'del' },
  ],

  eng_shift: [
    { key: 192, char: '~' },
    { key: 49, char: '!' },
    { key: 50, char: '@' },
    { key: 51, char: '#' },
    { key: 52, char: '$' },
    { key: 53, char: '%' },
    { key: 54, char: '^' },
    { key: 55, char: '&' },
    { key: 56, char: '*' },
    { key: 57, char: '(' },
    { key: 48, char: ')' },
    { key: 189, char: '_' },
    { key: 187, char: '+' },
    { key: 8, char: '&#8656' },
    { key: 9, char: '&#8633' },
    { key: 81, char: 'Q' },
    { key: 87, char: 'W' },
    { key: 69, char: 'E' },
    { key: 82, char: 'R' },
    { key: 84, char: 'T' },
    { key: 89, char: 'Y' },
    { key: 85, char: 'U' },
    { key: 73, char: 'I' },
    { key: 79, char: 'O' },
    { key: 80, char: 'P' },
    { key: 219, char: '{' },
    { key: 221, char: '}' },
    { key: 220, char: '|' },
    { key: 20, char: 'capslock' },
    { key: 65, char: 'A' },
    { key: 83, char: 'S' },
    { key: 68, char: 'D' },
    { key: 70, char: 'F' },
    { key: 71, char: 'G' },
    { key: 72, char: 'H' },
    { key: 74, char: 'J' },
    { key: 75, char: 'K' },
    { key: 76, char: 'L' },
    { key: 186, char: ':' },
    { key: 222, char: '"' },
    { key: 13, char: '&#9166' },
    { key: 16, char: 'l_shift' },
    { key: 90, char: 'Z' },
    { key: 88, char: 'X' },
    { key: 67, char: 'C' },
    { key: 86, char: 'V' },
    { key: 66, char: 'B' },
    { key: 78, char: 'N' },
    { key: 77, char: 'M' },
    { key: 188, char: '<' },
    { key: 190, char: '>' },
    { key: 191, char: '?' },
    { key: 38, char: '&#8593' },
    { key: 16, char: 'r_shift' },
    { key: 17, char: 'l_ctrl' },
    { key: 18, char: 'l_alt' },
    { key: 32, char: 'space' },
    { key: 18, char: 'r_alt' },
    { key: 17, char: 'r_ctrl' },
    { key: 37, char: '&#8592' },
    { key: 40, char: '&#8595' },
    { key: 39, char: '&#8594' },
    { key: 46, char: 'del' },
  ],

  ru: [
    { key: 192, char: 'ё' },
    { key: 49, char: '1' },
    { key: 50, char: '2' },
    { key: 51, char: '3' },
    { key: 52, char: '4' },
    { key: 53, char: '5' },
    { key: 54, char: '6' },
    { key: 55, char: '7' },
    { key: 56, char: '8' },
    { key: 57, char: '9' },
    { key: 48, char: '0' },
    { key: 189, char: '-' },
    { key: 187, char: '=' },
    { key: 8, char: '&#8656' },
    { key: 9, char: '&#8633' },
    { key: 81, char: 'й' },
    { key: 87, char: 'ц' },
    { key: 69, char: 'у' },
    { key: 82, char: 'к' },
    { key: 84, char: 'е' },
    { key: 89, char: 'н' },
    { key: 85, char: 'г' },
    { key: 73, char: 'ш' },
    { key: 79, char: 'щ' },
    { key: 80, char: 'з' },
    { key: 219, char: 'х' },
    { key: 221, char: 'ъ' },
    { key: 220, char: '\\' },
    { key: 20, char: 'capslock' },
    { key: 65, char: 'ф' },
    { key: 83, char: 'ы' },
    { key: 68, char: 'в' },
    { key: 70, char: 'а' },
    { key: 71, char: 'п' },
    { key: 72, char: 'р' },
    { key: 74, char: 'о' },
    { key: 75, char: 'л' },
    { key: 76, char: 'д' },
    { key: 186, char: 'ж' },
    { key: 222, char: 'э' },
    { key: 13, char: '&#9166' },
    { key: 16, char: 'l_shift' },
    { key: 90, char: 'я' },
    { key: 88, char: 'ч' },
    { key: 67, char: 'с' },
    { key: 86, char: 'м' },
    { key: 66, char: 'и' },
    { key: 78, char: 'т' },
    { key: 77, char: 'ь' },
    { key: 188, char: 'б' },
    { key: 190, char: 'ю' },
    { key: 191, char: '.' },
    { key: 38, char: '&#8593' },
    { key: 16, char: 'r_shift' },
    { key: 17, char: 'l_ctrl' },
    { key: 18, char: 'l_alt' },
    { key: 32, char: 'space' },
    { key: 18, char: 'r_alt' },
    { key: 17, char: 'r_ctrl' },
    { key: 37, char: '&#8592' },
    { key: 40, char: '&#8595' },
    { key: 39, char: '&#8594' },
    { key: 46, char: 'del' },
  ],

  ru_shift: [
    { key: 192, char: 'Ё' },
    { key: 49, char: '!' },
    { key: 50, char: '"' },
    { key: 51, char: '№' },
    { key: 52, char: ';' },
    { key: 53, char: '%' },
    { key: 54, char: ':' },
    { key: 55, char: '?' },
    { key: 56, char: '*' },
    { key: 57, char: '(' },
    { key: 48, char: ')' },
    { key: 189, char: '_' },
    { key: 187, char: '+' },
    { key: 8, char: '&#8656' },
    { key: 9, char: '&#8633' },
    { key: 81, char: 'Й' },
    { key: 87, char: 'Ц' },
    { key: 69, char: 'У' },
    { key: 82, char: 'К' },
    { key: 84, char: 'Е' },
    { key: 89, char: 'Н' },
    { key: 85, char: 'Г' },
    { key: 73, char: 'Ш' },
    { key: 79, char: 'Щ' },
    { key: 80, char: 'З' },
    { key: 219, char: 'Х' },
    { key: 221, char: 'Ъ' },
    { key: 220, char: '/' },
    { key: 20, char: 'capslock' },
    { key: 65, char: 'Ф' },
    { key: 83, char: 'Ы' },
    { key: 68, char: 'В' },
    { key: 70, char: 'А' },
    { key: 71, char: 'П' },
    { key: 72, char: 'Р' },
    { key: 74, char: 'О' },
    { key: 75, char: 'Л' },
    { key: 76, char: 'Д' },
    { key: 186, char: 'Ж' },
    { key: 222, char: 'Э' },
    { key: 13, char: '&#9166' },
    { key: 16, char: 'l_shift' },
    { key: 90, char: 'Я' },
    { key: 88, char: 'Ч' },
    { key: 67, char: 'С' },
    { key: 86, char: 'М' },
    { key: 66, char: 'И' },
    { key: 78, char: 'Т' },
    { key: 77, char: 'Ь' },
    { key: 188, char: 'Б' },
    { key: 190, char: 'Ю' },
    { key: 191, char: ',' },
    { key: 38, char: '&#8593' },
    { key: 16, char: 'r_shift' },
    { key: 17, char: 'l_ctrl' },
    { key: 18, char: 'l_alt' },
    { key: 32, char: 'space' },
    { key: 18, char: 'r_alt' },
    { key: 17, char: 'r_ctrl' },
    { key: 37, char: '&#8592' },
    { key: 40, char: '&#8595' },
    { key: 39, char: '&#8594' },
    { key: 46, char: 'del' },
  ],
};

let leng = localStorage.getItem('leng') || 'eng';
localStorage.setItem('leng', leng);

function backspace() {
  if (textarea.selectionStart >= 1) {
    textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
  }
  textarea.focus();
}

function del() {
  textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
  textarea.focus();
}

function capslock() {
  const collection = document.getElementsByClassName('key');

  const items = document.querySelectorAll('.key_service');
  let item = null;

  for (let i = 0; i < items.length; i += 1) {
    if (items[i].textContent === 'capslock') {
      item = items[i];
      break;
    }
  }

  for (let i = 0; i < collection.length; i += 1) {
    if (collection[i].innerHTML.length === 1) {
      if (item.classList.contains('key_down')) {
        collection[i].innerHTML = collection[i].innerHTML.toLowerCase();
      } else {
        collection[i].innerHTML = collection[i].innerHTML.toUpperCase();
      }
    }
  }

  item.classList.toggle('key_down');
  textarea.focus();
}

function shiftDown(name = null) {
  let item = this;
  const collection = document.getElementsByClassName('key');

  if (name) {
    const items = document.querySelectorAll('.key_service');

    for (let i = 0; i < items.length; i += 1) {
      if (items[i].textContent === name) {
        item = items[i];
        break;
      }
    }
  }

  item.classList.add('key_down');

  for (let i = 0; i < collection.length; i += 1) {
    if (item.classList.contains('key_down')) {
      if (leng === 'eng') {
        collection[i].innerHTML = keys.eng_shift[i].char;
      } else if (leng === 'ru') {
        collection[i].innerHTML = keys.ru_shift[i].char;
      }
    }
  }

  textarea.focus();
}

function shiftUp(name = null) {
  let item = this;
  const collection = document.getElementsByClassName('key');

  if (name) {
    const items = document.querySelectorAll('.key_service');

    for (let i = 0; i < items.length; i += 1) {
      if (items[i].textContent === name) {
        item = items[i];
        break;
      }
    }
  }

  item.classList.remove('key_down');

  for (let i = 0; i < collection.length; i += 1) {
    if (!item.classList.contains('key_down')) {
      if (leng === 'eng') {
        collection[i].innerHTML = keys.eng[i].char;
      } else if (leng === 'ru') {
        collection[i].innerHTML = keys.ru[i].char;
      }
    }
  }

  textarea.focus();
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
  textarea.focus();
}

function arrowright() {
  textarea.setRangeText('', textarea.selectionStart + 1, textarea.selectionEnd + 1, 'end');
  textarea.focus();
}

function focusButton() {
  this.classList.add('key_down');
}

function blurButton() {
  this.classList.remove('key_down');
}

function printLetter() {
  if (this.innerHTML === '&amp;') {
    document.querySelector('.screen').value += '&';
  } else {
    document.querySelector('.screen').value += this.innerHTML;
  }
}

function downButton(name) {
  const items = document.querySelectorAll('.key_service');

  for (let i = 0; i < items.length; i += 1) {
    if (items[i].textContent === name) {
      items[i].classList.add('key_down');
      break;
    }
  }
}

function upButton(name) {
  const items = document.querySelectorAll('.key_service');

  for (let i = 0; i < items.length; i += 1) {
    if (items[i].textContent === name) {
      items[i].classList.remove('key_down');
      break;
    }
  }
}

function CreateKeys() {
  for (let i = 0; i < keys[leng].length; i += 1) {
    const key = document.createElement('div');
    key.innerHTML = `${keys[leng][i].char}`;
    key.data = `${keys[leng][i].key}`;

    if (keys[leng][i].char.length > 1 && keys[leng][i].char !== 'space') {
      key.classList.add('key', 'key_service');
    } else if (keys[leng][i].char === 'space') {
      key.classList.add('key', 'key_space');
    } else {
      key.classList.add('key');
    }

    WrapKeys.append(key);

    if (keys[leng][i].char === '\\' || keys[leng][i].char === '&#9166' || keys[leng][i].char === 'r_shift'
    || keys[leng][i].char === '&#8656' || keys[leng][i].char === 'del') {
      const LineBreak = document.createElement('div');
      LineBreak.classList.add('break');
      WrapKeys.append(LineBreak);
    }

    if (keys[leng][i].char !== 'capslock') {
      key.addEventListener('mousedown', focusButton);
      key.addEventListener('mouseup', blurButton);
    }

    switch (keys[leng][i].char) {
      case 'space':
        key.addEventListener('click', space);
        break;
      case '&#8633':
        key.addEventListener('click', tab);
        key.addEventListener('keydown', tab);
        break;
      case '&#9166':
        key.addEventListener('click', enter);
        break;
      case '&#8656':
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
      case 'l_ctrl':
      case 'r_ctrl':
        break;
      case '&#8592':
        key.addEventListener('click', arrowleft);
        break;
      case '&#8594':
        key.addEventListener('click', arrowright);
        break;
      case 'del':
        key.addEventListener('click', del);
        break;
      default:
        key.addEventListener('click', printLetter);
    }
  }
}

CreateKeys();

document.querySelector('.screen').addEventListener('keydown', (event) => {
  event.preventDefault();

  switch (event.code) {
    case 'Backspace':
      backspace();
      break;
    case 'Tab':
      tab();
      break;
    case 'Delete':
      del();
      break;
    case 'Space':
      space();
      break;
    case 'CapsLock':
      capslock();
      break;
    case 'ShiftLeft':
      shiftDown('l_shift');
      break;
    case 'ShiftRight':
      shiftDown('r_shift');
      break;
    case 'Enter':
      enter();
      break;
    case 'ArrowLeft':
      arrowleft();
      break;
    case 'ArrowRight':
      arrowright();
      break;
    case 'ControlLeft':
      downButton('l_ctrl');
      break;
    case 'ControlRight':
      downButton('r_ctrl');
      break;
    case 'AltLeft':
      downButton('l_alt');
      break;
    case 'AltRight':
      downButton('r_alt');
      break;
    default:
      break;
  }

  for (let i = 0; i < WrapKeys.childElementCount; i += 1) {
    if (+WrapKeys.children[i].data === event.keyCode) {
      if (event.code !== 'CapsLock' && event.key !== 'Shift' && event.key !== 'Control' && event.key !== 'Alt') {
        WrapKeys.children[i].classList.add('key_down');
      }

      if ((event.key.length === 1 && event.key !== ' ') || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        if (WrapKeys.children[i].innerHTML === '&amp;') {
          textarea.setRangeText('&', textarea.selectionStart, textarea.selectionEnd, 'end');
        } else {
          textarea.setRangeText(WrapKeys.children[i].innerHTML, textarea.selectionStart, textarea.selectionEnd, 'end');
        }
      }
      break;
    }
  }
});

document.querySelector('.screen').addEventListener('keyup', (event) => {
  event.preventDefault();

  switch (event.code) {
    case 'Backspace':
    case 'Tab':
    case 'Delete':
    case 'Space':
    case 'CapsLock':
    case 'Enter':
    case 'ArrowLeft':
    case 'ArrowRight':
      break;
    case 'ShiftLeft':
      shiftUp('l_shift');
      break;
    case 'ShiftRight':
      shiftUp('r_shift');
      break;
    case 'ControlLeft':
      upButton('l_ctrl');
      break;
    case 'ControlRight':
      upButton('r_ctrl');
      break;
    case 'AltLeft':
      upButton('l_alt');
      break;
    case 'AltRight':
      upButton('r_alt');
      break;
    default:
      break;
  }

  for (let i = 0; i < WrapKeys.childElementCount; i += 1) {
    if (+WrapKeys.children[i].data === event.keyCode) {
      if (event.code !== 'CapsLock' && event.key !== 'Shift' && event.key !== 'Control' && event.key !== 'Alt') {
        WrapKeys.children[i].classList.remove('key_down');
      }
      break;
    }
  }
});

function ChangeLeng(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}

ChangeLeng(
  () => {
    if (leng === 'eng') {
      const collection = document.getElementsByClassName('key');
      for (let i = 0; i < collection.length; i += 1) {
        collection[i].innerHTML = keys.ru[i].char;
        leng = 'ru';
      }
    } else {
      const collection = document.getElementsByClassName('key');
      for (let i = 0; i < collection.length; i += 1) {
        collection[i].innerHTML = keys.eng[i].char;
        leng = 'eng';
      }
    }

    localStorage.setItem('leng', leng);
  },
  'AltLeft',
  'ShiftLeft',
);

const lengtext = document.createElement('p');
lengtext.textContent = 'Изменить язык - "l_alt" + "l_shift"';
document.querySelector('.wrapper').append(lengtext);
