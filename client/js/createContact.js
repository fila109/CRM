/*Добавление контакта*/
export const createContactItem = () => {
    const contact = document.createElement('div');
    const contactType = document.createElement('div');
    const contactName = document.createElement('button');
    const contactList = document.createElement('ul');
    const contactPhone = document.createElement('li');
    const contactVk = document.createElement('li');
    const contactFb = document.createElement('li');
    const contactEmail = document.createElement('li');
    const contactOther = document.createElement('li');
    const contactInput = document.createElement('input');
    const contactDelete = document.createElement('button');
    const contactDeleteTooltip = document.createElement('span');

    contact.classList.add('contact');
    contactDeleteTooltip.classList.add('contact-tooltip', 'site-tooltip');
    contactType.classList.add('contact__type');
    contactName.classList.add('contact__name');
    contactList.classList.add('contact__list');
    contactPhone.classList.add('contact__item');
    contactVk.classList.add('contact__item');
    contactFb.classList.add('contact__item');
    contactEmail.classList.add('contact__item');
    contactOther.classList.add('contact__item');
    contactInput.classList.add('contact__input');
    contactDelete.classList.add('contact__delete');

    contactName.textContent = 'Телефон';
    contactDeleteTooltip.textContent = 'Удалить контакт';
    contactPhone.textContent = 'Телефон';
    contactVk.textContent = 'VK';
    contactFb.textContent = 'Facebook';
    contactEmail.textContent = 'E-mail';
    contactOther.textContent = 'Другое';
    contactInput.placeholder = 'Введите данные контакта';
    contactInput.type = 'text';
    contactDelete.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z"/>
    </svg>`;
  

    contactDelete.addEventListener('click', (e) => {
      e.preventDefault();
      contact.remove();
    });

    contactName.addEventListener('click', (e) => {
      e.preventDefault();
      contactList.classList.toggle('contact__list-active');
      contactName.classList.toggle('contact__list-active');
    });

    contactType.addEventListener('mouseleave', () => {
      contactList.classList.remove('contact__list-active');
      contactName.classList.remove('contact__list-active');
    });

    const setType = (type) => {
      type.addEventListener('click', () => {
        contactName.textContent = type.textContent;
        contactList.classList.remove('contact__list-active');
        contactName.classList.remove('contact__list-active');
      });
    };

    const typesArray = [contactPhone, contactVk, contactFb, contactEmail, contactOther];
    for (const type of typesArray) {
      setType(type)
    };

    contactDelete.append(contactDeleteTooltip);
    contact.append(contactType, contactInput, contactDelete);
    contactType.append(contactName, contactList);
    contactList.append(contactPhone, contactVk, contactFb, contactEmail, contactOther);

    return {
      contact,
      contactName,
      contactInput,
      contactDelete
    }
  }