import { throttle } from 'throttle-debounce';

const submit = document.querySelector('[type="submit"]');
const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const throttleFunc = throttle(1000, function setInputValue(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));    
});

form.addEventListener('input', throttleFunc);
addEventListener('DOMContentLoaded', getInputValue);
submit.addEventListener('click', submitForm);



function getInputValue() {
    const inputValue = localStorage.getItem(STORAGE_KEY)
    if (inputValue) {
        const formValue = JSON.parse(inputValue);
        for (const key in formValue) {
            if (form.elements[key]) { 
                form.elements[key].value = `${formValue[key]}`;
            }
        }
    } 
};

function submitForm(e) {
    e.preventDefault();
    localStorage.clear()
    console.log(formData);
}