import { nanoid } from 'nanoid';
import './style.css';
import clipboardCopy from 'clipboard-copy';

const passwordBrnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBrnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
  clipboardCopy(randomPassword);
});
