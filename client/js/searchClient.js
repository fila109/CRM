import { findClient } from "./clientsApi.js";
import { createClientItem } from "./createClientItem.js";

export const searchClient = (clients) => {
  const findList = document.querySelector('.find-list');
  const input = document.querySelector('.search__input');

  clients.forEach(client => {
    const findItem = document.createElement('li');
    const findLink = document.createElement('a');

    findItem.classList.add('find-list__item');
    findLink.classList.add('find-list__link');

    findLink.textContent = `${client.surname} ${client.name} ${client.lastName}`;
    findLink.href = '#';

    findItem.append(findLink);
    findList.append(findItem);
  });

  const rewriteTable = async (str) => {
    const response = await findClient(str);
    const tboby = document.querySelector('.clients__tbody');
    tboby.innerHTML = '';

    for (const client of response) {
      tboby.append(createClientItem(client));
    }
  }

  input.addEventListener('input', async () => {
    const value = input.value.trim();
    const foundItems = document.querySelectorAll('.find-list__link');

    if (value !== '') {
      rewriteTable(value);

      foundItems.forEach(link => {
        if (link.innerText.search(value) == -1) {
          link.classList.add('hide');
          item.innerHTML = link.innerText;
        } else {
          link.classList.remove('hide');
          findList.classList.remove('hide');
          const str = link.innerText;
          link.innerHTML = marker(str, link.innerText.search(value), value.length);
        }
      })
    } else {
      foundItems.forEach(link => {
        const tbody = document.querySelector('.clients__tbody');
        tbody.innerHTML = '';

        clients.forEach(client => tbody.append(createClientItem(client)));

        link.classList.remove('hide');
        findList.classList.add('hide');
        link.innerHTML = link.innerText;
      });
    }
  });

  const marker = (str, pos, len) => str
    .slice(0, pos) + '<mark>' + str
      .slice(pos, pos + len) + '</mark>' + str
        .slice(pos + len);
}