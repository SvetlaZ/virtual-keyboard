import './style.scss';

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.querySelector('body').prepend(wrapper);

const input = document.createElement('input');
input.classList.add('screen');
document.querySelector('.wrapper').append(input);
document.querySelector('input').focus();

const wrapperForKeyboard = document.createElement('div');
wrapperForKeyboard.classList.add('wrapper-for-keyboard');
document.querySelector('.wrapper').append(wrapperForKeyboard);

const WrapKeys = document.querySelector('.wrapper-for-keyboard');

const keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
  'l_shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'r_shift',
  'l_ctrl', 'fn', 'win', 'l_alt', 'space', 'r_alt', 'r_ctrl'];

function backspace() {
  document.querySelector('input').value = document.querySelector('input').value.slice(0, -1);
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
  for (let i = 0; i < keys.length; i += 1) {
    const key = document.createElement('div');
    key.innerHTML = `${keys[i]}`;

    if (keys[i].length > 1 && keys[i] !== 'space') {
      key.classList.add('key', 'key_service');
    } else if (keys[i] === 'space') {
      key.classList.add('key', 'key_space');
    } else {
      key.classList.add('key');
    }

    WrapKeys.append(key);

    if (keys[i] === '\\' || keys[i] === 'enter' || keys[i] === 'right shift' || keys[i] === 'backspace') {
      const LineBreak = document.createElement('div');
      LineBreak.classList.add('break');
      WrapKeys.append(LineBreak);
    }

    if (keys[i] !== 'capslock') {
      key.addEventListener('mousedown', focusButton);
      key.addEventListener('mouseup', blurButton);
    }

    switch (keys[i]) {
      case 'space':
        key.innerHTML = ' ';
        document.querySelector('input').focus();
        break;
      case 'tab':
        key.innerHTML = '    ';
        break;
      case 'backspace':
        key.addEventListener('click', backspace);
        break;
      case 'capslock':
        key.addEventListener('click', capslock);
        break;
      case 'l_shift':
      case 'r_shift':
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
