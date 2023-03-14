import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const formData = {};

formEl.addEventListener('input', throttle(function (ev) {
    const { name, value } = ev.target;
    formData[name] = value;
    console.log(formData);
}, 500));


