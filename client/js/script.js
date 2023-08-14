import { getClients } from './clientsApi.js';
import { createClientItem } from './createClientItem.js';
import { createClientSection } from './createClientSection.js';
import { searchClient } from './searchClient.js';
import { sortTable } from './sortClientsTable.js';

const createApp = async () => {
  const clientSection = createClientSection();
  document.body.append(clientSection.main);
  const preloader = document.querySelector('.preloader');

  try {
    const clients = await getClients();
    searchClient(clients);

    for (const client of clients) {
      setTimeout(document.querySelector('.clients__tbody').append(createClientItem(client)), 1500);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() =>
      preloader.remove(), 1500);
  }
}

createApp();

document.addEventListener('DOMContentLoaded', () => sortTable());











