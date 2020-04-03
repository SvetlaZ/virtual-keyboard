const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.querySelector('body').prepend(wrapper);

const input = document.createElement('input');
input.classList.add('screen');
document.querySelector('.wrapper').append(input);

const wrapper_for_keyboard = document.createElement('div');
wrapper_for_keyboard.classList.add('wrapper-for-keyboard');
document.querySelector('.wrapper').append(wrapper_for_keyboard);

const WrapKeys = document.querySelector('.wrapper-for-keyboard');

const keys = ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
            'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
            'left shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'right shift',
            'left ctrl', 'fn', 'win', 'left alt', 'space', 'right alt', 'right ctrl'];
