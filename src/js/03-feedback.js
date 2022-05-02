
const submit = document.querySelector('[type="submit"]');
const form = document.querySelector('.feedback-form');


form.addEventListener('input', setInputValue);
addEventListener('DOMContentLoaded', getInputValue);
submit.addEventListener('click', submitForm);

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

function setInputValue(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));    
};



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
// console.log(object);