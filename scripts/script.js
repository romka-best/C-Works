"use strict";

const formHeader = document.querySelector('.form_location_header');
const formButtonHeader = document.querySelector('.form__button_location_header');

const formFooter = document.querySelector('.form_location_footer');
const formButtonFooter = document.querySelector('.form__button_location_footer');

const forms = [formHeader, formFooter];
const formsButtons = [formButtonHeader, formButtonFooter];

const BETWEEN_TABLET_AND_MOBILE = 680;

forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    submitForm(form, event);
  })
});

formsButtons.forEach((formButton) => {
  formButton.setAttribute('data-before', 'Отремонтируйте камеру ');
});

function submitForm(form, event) {
  event.preventDefault();

  const formButton = form.querySelector('.form__button');
  if (document.documentElement.clientWidth > BETWEEN_TABLET_AND_MOBILE) {
    formButton.textContent = 'Круто, спасибо за доверие!';
  } else {
    formButton.textContent = '😊';
  }
  formButton.setAttribute('data-before', '');

  form.reset();
}

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth <= BETWEEN_TABLET_AND_MOBILE) {
    if (formButtonHeader.textContent === "Круто, спасибо за доверие!") {
      formButtonHeader.textContent = "😊";
    }
    if (formButtonFooter.textContent === "Круто, спасибо за доверие!") {
      formButtonFooter.textContent = "😊";
    }
  } else {
    if (formButtonHeader.textContent === "😊") {
      formButtonHeader.textContent = "Круто, спасибо за доверие!";
    }
    if (formButtonFooter.textContent === "😊") {
      formButtonFooter.textContent = "Круто, спасибо за доверие!";
    }
  }
}, true);

