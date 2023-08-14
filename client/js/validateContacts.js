export const validateContact = (contactType, contactInput) => {
  const writeValue = document.getElementById('writeName');
  const onlyNumbers = /[^0-9]+$/g;
  const onlyEmail = /[^a-zA-Z|@|.]+$/g;

  const onInputValue = input => {
    input.addEventListener('input', () => {
      input.style.borderColor = '#c8c5d1';
      writeValue.textContent = '';
    });

    input.oncut = input.oncopy = input.onpast = () => {
      input.style.borderColor = '#c8c5d1';
      writeValue.textContent = '';
    };
  };

  const showErrorMessage = (message, block, input) => {
    block.textContent = message;
    input.style.borderColor = '#f06a4d';
  };

  onInputValue(contactInput);

  if (!contactInput.value) {
    showErrorMessage('Заполните все поля контактов!', writeValue, contactInput);
    return false;
  }

  switch (contactType.innerHTML) {
    case 'Телефон':
      if (onlyNumbers.test(contactInput.value)) {
        showErrorMessage('Введите цифры!', writeValue, contactInput);
        return false;
      } else if (contactInput.value.length !== 11) {
        showErrorMessage('Номер должен содержать 11 цифр!', writeValue, contactInput);
        return false;
      }
      return true;

    case 'Email':
      if (onlyEmail.test(contactInput.value)) {
        showErrorMessage('Неправилный формат e-mail!', writeValue, contactInput);
        return false;
      }
      return true;
    
    default:
      return true;
  }
};