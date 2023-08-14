export const validateClientForm = () => {
  const userSurname = document.getElementById('floatingSurname');
  const userName = document.getElementById('floatingName');
  const userLastName = document.getElementById('floatingLastName');
  const unacceptableLetter = document.getElementById('unacceptableLetter');
  const writeSurname = document.getElementById('writeSurname');
  const writeName = document.getElementById('writeName');
  const writeLastName = document.getElementById('writeLastName');
  const requiredValue = document.getElementById('requiredValue');
  const validateArray = [unacceptableLetter, writeSurname, writeName, writeLastName, requiredValue];
  const regexp = /[^а-яА-ЯёЁ]+$/g;

  const onInputValue = (input) => {
    input.addEventListener('input', () => {
      input.style.borderColor = '#c8c5d1';
      for (const item of validateArray) {
        item.textContent = '';
      }
    });

    input.oncut = input.oncopy = input.onpast = () => {
      input.style.borderColor = '#c8c5d1';
      for (const item of validateArray) {
        item.textContent = '';
      }
    };

    input.onchange = () => {
      input.style.borderColor = '#c8c5d1';

      if (userSurname.value && userName.value && userLastName.value) {
        for (const item of validateArray) {
          item.textContent = '';
        }
      }
    };
  };

  onInputValue(userSurname);
  onInputValue(userName);
  onInputValue(userLastName);

  const checkRequiredName = (input, message, name) => {
    if (!input.value) {
      input.style.borderColor = '#f06a4d';
      message.textContent = `Введите ${name} клиента!`;
      return false;
    } else {
      message.textContent = '';
    }

    return true;
  };

  const checkByRegexp = (input, regexp) => {
    if (regexp.test(input.value)) {
      input.style.borderColor = '#f06a4d';
      unacceptableLetter.textContent = 'Недопустимые символы!';
      return false;
    }

    return true;
  };

  if (!checkRequiredName(userSurname, writeSurname, 'фамилию')) {
    return false;
  };

  if (!checkRequiredName(userName, writeName, 'имя')) {
    return false;
  };

  if (!checkRequiredName(userLastName, writeLastName, 'отчество')) {
    return false;
  };

  if (!checkByRegexp(userSurname, regexp)) {
    return false;
  };

  if (!checkByRegexp(userName, regexp)) {
    return false;
  };

  if (!checkByRegexp(userLastName, regexp)) {
    return false;
  };

  return true;
}