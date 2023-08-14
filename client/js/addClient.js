import { createClientItem } from "./createClientItem.js"
import { createClientsForm } from "./createModalForm.js"
import { sendClientData } from "./clientsApi.js";
import { validateContact } from "./validateContacts.js";
import { validateClientForm } from "./validateForm.js";

export const addClientModal = () => {
  const createForm = createClientsForm();
  const modal = document.createElement('div');
  const modalContent = document.createElement('div');

  modal.classList.add('modal', 'site-modal', 'modal-active');
  modalContent.classList.add('modal__content', 'site-modal__content', 'modal-active');
  createForm.form.classList.add('add-client');

  modal.append(modalContent);
  modalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);

  createForm.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateClientForm()) {
      return;
    }

    const contactTypes = document.querySelectorAll('.contact__name');
    const contactValues = document.querySelectorAll('.contact__input');
    let contacts = [];
    let clientsObject = {};

    for (let i = 0; i < contactTypes.length; i++) {
      if (!validateContact(contactTypes[i], contactValues[i])) {
        return;
      };
      contacts.push({
        type: contactTypes[i].innerHTML,
        value: contactValues[i].value
      });
    };
    
    clientsObject.name = createForm.inputName.value;
    clientsObject.surname = createForm.inputSurname.value;
    clientsObject.lastName = createForm.inputLastName.value;
    clientsObject.contacts = contacts;
    console.log(clientsObject);

    const data = await sendClientData(clientsObject, 'POST');
    document.querySelector('.clients__tbody').append(createClientItem(data));
    document.querySelector('.modal').remove();

    
  });

  createForm.modalClose.addEventListener('click', () => {
    modal.remove();
  });

  createForm.cancelBtn.addEventListener('click', () => {
    modal.remove();
  });

  document.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.remove();
    }
  });

  return modal;
}