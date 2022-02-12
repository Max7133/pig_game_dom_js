'use strict';
// Selecting id I need always # in frony
const score0El = document.querySelector('#score--0');
// Altetrnative way of selecting by ID
// const score0 = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// Starting point
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
// Hide the dice in the beginning
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    console.log(currentScore);
    current0El.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
});
