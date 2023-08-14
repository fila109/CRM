import { deleteClientModal } from "./createDeleteModal.js";
import { editClientModal } from "./editClient.js";
import { createContactItemByType, formatDate, formatTime } from "./utils.js";

export const createClientItem = (data) => {
  const clientTr = document.createElement('tr');
  const clientIdTd = document.createElement('td');
  const clientId = document.createElement('span');

  const clientFullName = document.createElement('td');
  const clientName = document.createElement('span');
  const clientTSurname = document.createElement('span');
  const clientLastName = document.createElement('span');

  const clientCreated = document.createElement('td');
  const createdDate = document.createElement('span');
  const createdTime = document.createElement('span');

  const clientChange = document.createElement('td');
  const changeDate = document.createElement('span');
  const changeTime = document.createElement('span');

  const clientContacts = document.createElement('td');

  const clientActions = document.createElement('td');
  const clientEdit = document.createElement('button');
  const clientDelete = document.createElement('button');

  const deleteClient = deleteClientModal();
  const editClient = editClientModal(data);

  clientTr.classList.add('clients__item');
  clientTr.id = data.id;
  clientIdTd.classList.add('client__id');
  clientFullName.classList.add('clients__full-name');
  clientName.classList.add('clients__name');
  clientLastName.classList.add('clients__lastname');
  clientCreated.classList.add('clients__created');
  createdDate.classList.add('created__date');
  createdTime.classList.add('created__time');
  clientChange.classList.add('clients__change');
  changeDate.classList.add('change__date');
  changeTime.classList.add('change__time');
  clientContacts.classList.add('clients__contacts');
  clientActions.classList.add('clients__actions');
  clientDelete.classList.add('clients__delete');
  clientEdit.classList.add('clients__edit');


  for (const contact of data.contacts) {
    createContactItemByType(contact.type, contact.value, clientContacts)
  };

  const deleteClientById = () => {
    import('./clientsApi.js').then(({ deleteClientItem }) => {
      deleteClient.deleteModalDelete.addEventListener('click', () => {
        deleteClientItem(data.id);
        document.getElementById(data.id).remove();
        deleteClient.deleteModal.remove();
      })
    })
  }
  clientDelete.addEventListener('click', () => {
    deleteClientById();
    document.body.append(deleteClient.deleteModal);
  });

  clientEdit.addEventListener('click', () => {
    document.body.append(editClient.editModal);
  });

  /*clientId.textContent = data.id.substr(0, 6);*/
  clientId.textContent = Math.floor(Math.random() * 15);
  clientName.textContent = data.name;
  clientTSurname.textContent = data.surname;
  clientLastName.textContent = data.lastName;
  clientEdit.textContent = 'Изменить';
  clientDelete.textContent = 'Удалить';
  createdDate.textContent = formatDate(data.createdAt);
  createdTime.textContent = formatTime(data.createdAt);
  changeDate.textContent = formatDate(data.updatedAt);
  changeTime.textContent = formatTime(data.updatedAt);

  clientIdTd.append(clientId);
  clientFullName.append(clientTSurname, clientName, clientLastName);
  clientCreated.append(createdDate, createdTime);
  clientChange.append(changeDate, changeTime);
  clientActions.append(clientEdit, clientDelete);
  clientTr.append(clientIdTd, clientFullName, clientCreated, clientChange, clientContacts, clientActions);

  return clientTr;
}