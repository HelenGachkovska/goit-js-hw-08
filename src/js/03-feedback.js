import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const formData = {};

formEl.addEventListener(
  'input',
  throttle(function (ev) {
    const { name, value } = ev.target;
    formData[name] = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

formEl.addEventListener('submit', ev => {
  ev.preventDefault();
  ev.currentTarget.reset();

  console.log(formData);

  localStorage.clear();
});

window.addEventListener('load', ev => {
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));
  const inputEl = document.querySelector('input');
  const messageEl = document.querySelector('textarea');

  if (saveData === null) {
    return;
  } else {
    inputEl.value = saveData.email;
    messageEl.value = saveData.message;
  }
});
