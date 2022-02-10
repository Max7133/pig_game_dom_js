'use strict';
// Selecting id I need always # in frony
const score0El = document.querySelector('#score--0');
// Altetrnative way of selecting by ID
// const score0 = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
// Starting point
score0El.textContent = 0;
score1El.textContent = 0;
// Hide the dice in the beginning
diceEl.classList.add('hidden');
