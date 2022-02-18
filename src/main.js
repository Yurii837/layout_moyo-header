'use strict';

const headerL = document.getElementById('largeNav');

const btnsL = headerL.getElementsByClassName('a');

for (let i = 0; i < btnsL.length; i++) {
  btnsL[i].addEventListener('click', function() {
    const currentL = document.getElementsByClassName('is-activeL');

    currentL[0].className = currentL[0].className.replace(' is-activeL', '');
    this.className += ' is-activeL';
  });
}

const headerS = document.getElementById('shortNav');

const btnsS = headerS.getElementsByClassName('a');

for (let i = 0; i < btnsS.length; i++) {
  btnsS[i].addEventListener('click', function() {
    const currentS = document.getElementsByClassName('is-activeS');

    currentS[0].className = currentS[0].className.replace(' is-activeS', '');
    this.className += ' is-activeS';
  });
}
