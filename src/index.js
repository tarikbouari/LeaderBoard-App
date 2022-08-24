import './style.css';
import { sendData, getScore } from './game.js';

const refresh = document.getElementById('refresh');
const submit = document.getElementById('submit');
const container = document.getElementById('name-board');
const nameInput = document.getElementById('name');
const form = document.getElementById('form');
const scoreInput = document.getElementById('score');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if ((nameInput.value && scoreInput.value) === '') return 'value missing';
  sendData({
    user: nameInput.value,
    score: scoreInput.value,
  });
  form.reset();
  return e;
});

getScore();

refresh.addEventListener('click', () => {
  container.innerHTML = '';
  getScore();
});
