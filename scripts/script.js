"use strict";

const formHeader = document.querySelector('.form_location_header');
const formButtonHeader = document.querySelector('.form__button_location_header');

const formFooter = document.querySelector('.form_location_footer');
const formButtonFooter = document.querySelector('.form__button_location_footer');

const forms = [formHeader, formFooter];
const formsButtons = [formButtonHeader, formButtonFooter];

const LARGE_MOBILE = 425;

forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    submitForm(form, event);
  })
})

formsButtons.forEach((formButton) => {
  formButton.setAttribute('data-before', 'Отремонтируйте камеру ');
})

function submitForm(form, event) {
  event.preventDefault();

  const formButton = form.querySelector('.form__button');
  console.log(formButton.style.getPropertyValue('data-before'));
  if (document.documentElement.clientWidth > LARGE_MOBILE) {
    formButton.textContent = 'Круто, спасибо за доверие!';
  } else {
    formButton.textContent = '😊';
  }
  formButton.setAttribute('data-before', '');

  form.reset();
}
