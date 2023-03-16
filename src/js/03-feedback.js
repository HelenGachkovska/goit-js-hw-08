import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

let formData = {};

checkingLocalStorage();

formEl.addEventListener(
  'input',
  throttle(function (ev) {
    if (ev.target.value) {
      formData[ev.target.name] = ev.target.value;
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 500)
);

formEl.addEventListener('submit', ev => {
  ev.preventDefault();

  if (Object.keys(formData).length === 0) {
    return;
  }
  console.log(formData);
    ev.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    formData = {};
});

function checkingLocalStorage() {
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (saveData) {
    inputEl.value = saveData.email || '';
    messageEl.value = saveData.message || '';
    formData = {
      email: inputEl.value,
      message: messageEl.value,
    };
  }
}
