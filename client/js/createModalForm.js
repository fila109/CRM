import { createContactItem } from './createContact.js';

export const createClientsForm = () => {
  const modalTitle = document.createElement('h2');
  const modalClose = document.createElement('button');
  const form = document.createElement('form');
  const inputSurname = document.createElement('input');
  const labelSurname = document.createElement('label');
  const inputName = document.createElement('input');
  const labelName = document.createElement('label');
  const inputLastName = document.createElement('input');
  const labelLastName = document.createElement('label');
  const requiredSurname = document.createElement('span');
  const requiredName = document.createElement('span');
  const addContactBtn = document.createElement('button');
  const contactBtnSvgDefault = document.createElement('span');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  const contactsBlock = document.createElement('div');
  const formFloatingSurname = document.createElement('div');
  const formFloatingName = document.createElement('div');
  const formFloatingLastName = document.createElement('div');

  const errorBlock = document.createElement('p');
  const unacceptableLetter = document.createElement('span');
  const writeSurname = document.createElement('span');
  const writeName = document.createElement('span');
  const writeLastName = document.createElement('span');
  const requiredValue = document.createElement('span');
  const requiredContacts = document.createElement('span');

  modalTitle.classList.add('modal__title');
  modalClose.classList.add('modal__close');

  form.classList.add('modal__form');
  formFloatingSurname.classList.add('form__floating');
  formFloatingName.classList.add('form__floating');
  formFloatingLastName.classList.add('form__floating');

  inputSurname.classList.add('modal__input');
  inputName.classList.add('modal__input');
  inputLastName.classList.add('modal__input');

  labelSurname.classList.add('modal__label');
  labelName.classList.add('modal__label');
  labelLastName.classList.add('modal__label');

  requiredSurname.classList.add('modal__label');
  requiredName.classList.add('modal__label');

  addContactBtn.classList.add('modal__btn-contact', 'modal__btn-contact--active');
  saveBtn.classList.add('modal__btn-save', 'site-btn');
  cancelBtn.classList.add('modal__btn-back');

  contactBtnSvgDefault.classList.add('btn-contact__svg', 'btn-contact__svg--default', 'btn-contact__svg--active');

  contactsBlock.classList.add('modal__contact');

  labelSurname.for = 'floatingSurname';
  labelName.for = 'floatingName';
  labelLastName.for = 'floatingLastName';

  inputSurname.id = 'floatingSurname';
  inputName.id = 'floatingName';
  inputLastName.id = 'floatingLastName';

  inputSurname.type = 'text';
  inputName.type = 'text';
  inputLastName.type = 'text';

  inputSurname.placeholder = 'Фамилия';
  inputName.placeholder = 'Имя';
  inputLastName.placeholder = 'Отчество';

  errorBlock.classList.add('modal__error');
  unacceptableLetter.id = 'unacceptableLetter';
  writeSurname.id = 'writeSurname';
  writeName.id = 'writeName';
  writeLastName.id = 'writeLastName';
  requiredValue.id = 'requiredValue';
  requiredContacts.id = 'requiredContacts';

  modalTitle.textContent = 'Новый клиент';
  labelSurname.textContent = 'Фамилия';
  labelName.textContent = 'Имя';
  labelLastName.textContent = 'Отчество';
  addContactBtn.textContent = 'Добавить контакт';
  saveBtn.textContent = 'Сохранить';
  cancelBtn.textContent = 'Отмена';
  requiredSurname.textContent = '*';
  requiredName.textContent = '*';
  contactBtnSvgDefault.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.99998 3.66659C6.63331 3.66659 6.33331 3.96659 6.33331 4.33325V6.33325H4.33331C3.96665 6.33325 3.66665 6.63325 3.66665 6.99992C3.66665 7.36659 3.96665 7.66659 4.33331 7.66659H6.33331V9.66659C6.33331 10.0333 6.63331 10.3333 6.99998 10.3333C7.36665 10.3333 7.66665 10.0333 7.66665 9.66659V7.66659H9.66665C10.0333 7.66659 10.3333 7.36659 10.3333 6.99992C10.3333 6.63325 10.0333 6.33325 9.66665 6.33325H7.66665V4.33325C7.66665 3.96659 7.36665 3.66659 6.99998 3.66659ZM6.99998 0.333252C3.31998 0.333252 0.333313 3.31992 0.333313 6.99992C0.333313 10.6799 3.31998 13.6666 6.99998 13.6666C10.68 13.6666 13.6666 10.6799 13.6666 6.99992C13.6666 3.31992 10.68 0.333252 6.99998 0.333252ZM6.99998 12.3333C4.05998 12.3333 1.66665 9.93992 1.66665 6.99992C1.66665 4.05992 4.05998 1.66659 6.99998 1.66659C9.93998 1.66659 12.3333 4.05992 12.3333 6.99992C12.3333 9.93992 9.93998 12.3333 6.99998 12.3333Z" fill="#9873FF"/>
    </svg>
  `;

  labelSurname.append(requiredSurname);
  labelName.append(requiredName);
  formFloatingSurname.append(inputSurname, labelSurname);
  formFloatingName.append(inputName, labelName);
  formFloatingLastName.append(inputLastName, labelLastName);
  contactsBlock.append(addContactBtn);
  errorBlock.append(writeSurname, writeName, writeLastName, requiredValue, requiredContacts, unacceptableLetter);
  form.append(
    formFloatingSurname,
    formFloatingName,
    formFloatingLastName,
    contactsBlock,
    errorBlock,
    saveBtn,
    cancelBtn
  );

  addContactBtn.append(contactBtnSvgDefault);

  addContactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const contactsItems = document.getElementsByClassName('contact');

    if (contactsItems.length < 9) {
      const contactItem = createContactItem();
      contactsBlock.prepend(contactItem.contact);
      contactsBlock.style.backgroundColor = '#f4f3f6';
      addContactBtn.style.backgroundColor = '#f4f3f6';
      if (contactsItems.length > 5) {
        document.querySelector('.site-modal__content').style.top = '70%';
      } else {
        document.querySelector('.site-modal__content').style.top = '50%';
      } 
    } else {
        const contactItem = createContactItem();
        contactsBlock.prepend(contactItem.contact);
        addContactBtn.disabled = true;
      }
    });

  return {
    form,
    modalClose,
    modalTitle,
    cancelBtn,
    inputSurname,
    inputName,
    inputLastName,
    labelSurname,
    labelName,
    labelLastName,
    contactsBlock,
    addContactBtn
  };
}