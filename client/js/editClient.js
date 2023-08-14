import { deleteClientModal } from "./createDeleteModal.js";
import { createClientsForm } from "./createModalForm.js";
import { createContactItem } from './createContact.js';
import { sendClientData } from "./clientsApi.js";
import { validateClientForm } from "./validateForm.js";
import { validateContact } from "./validateContacts.js";
import { createClientItem } from "./createClientItem.js";

export const editClientModal = (data) => {
  const editModal = document.createElement('div');
  const editModalContent = document.createElement('div');
  const createForm = createClientsForm();
  const titleId = document.createElement('span');

  editModal.classList.add('edit-modal', 'site-modal', 'modal-active');
  editModalContent.classList.add('edit-modal__content', 'site-modal__content', 'modal-active');
  titleId.classList.add('modal__id');

  createForm.modalTitle.textContent = 'Изменить данные';
  createForm.cancelBtn.textContent = 'Удалить клиента';
  titleId.textContent = `ID: ${data.id.substr(0, 6)}`;

  editModalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);
  editModal.append(editModalContent);
  createForm.modalTitle.append(titleId);

  createForm.cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const deleteModal = deleteClientModal();
    document.body.append(deleteModal.deleteModal);

    import('./clientsApi.js').then(({ deleteClientItem }) => {
      deleteModal.deleteModalDelete.addEventListener('click', () => {
        deleteClientItem(data.id);
        document.getElementById(data.id).remove();
      })
    })
  })

  createForm.modalClose.addEventListener('click', () => {
    editModal.remove();
  })

  document.addEventListener('click', (e) => {
    if (e.target == editModal) {
      editModal.remove();
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.which === 27) {
      editModal.remove();
    }
  });

  createForm.inputSurname.value = data.surname;
  createForm.inputName.value = data.name;
  createForm.inputLastName.value = data.lastName;

  for (const contact of data.contacts) {
    const createContact = createContactItem();

    createContact.contactName.textContent = contact.type;
    createContact.contactInput.value = contact.value;

    createForm.contactsBlock.prepend(createContact.contact);
    createForm.contactsBlock.style.background = '#f4f3f6';
  };

  if (data.contacts.length == 10) {
    createForm.addContactBtn.classList.remove('modal__btn-contact--active');
  };

  createForm.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateClientForm()) {
      return;
    }

    const contactTypes = document.querySelectorAll('.contact__name');
    const contactValues = document.querySelectorAll('.contact__input');

    let contacts = [];
    let client = {};

    for (let i = 0; i < contactTypes.length; i++) {
      if (!validateContact(contactTypes[i], contactValues[i])) {
        return;
      };
      contacts.push({
        type: contactTypes[i].innerHTML,
        value: contactValues[i].value
      });
    }

    client.surname = createForm.inputSurname.value;
    client.name = createForm.inputName.value;
    client.lastName = createForm.inputLastName.value;
    client.contacts = contacts;

    const editedData = await sendClientData(client, 'PATCH', data.id);
    document.getElementById(editedData.id).remove();
    document.querySelector('.clients__tbody').append(createClientItem(editedData));
    document.querySelector('.modal-edit').remove();
  })

  return {
    editModal,
    editModalContent
  };
}