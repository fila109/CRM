export const deleteClientModal = () => {

  const deleteModal = document.createElement('div');
  const deleteModalContent = document.createElement('div');
  const modalClose = document.createElement('button');
  const deleteModalTitle = document.createElement('h2');
  const deleteModalText = document.createElement('p');
  const deleteModalDelete = document.createElement('button');
  const deleteModalBack = document.createElement('button');

  deleteModal.classList.add('delete-modal', 'site-modal', 'modal-active');
  deleteModalContent.classList.add('delete-modal__content', 'site-modal__content', 'modal-active');
  deleteModalText.classList.add('delete-modal__text');
  deleteModalTitle.classList.add('delete-modal__title', 'modal-title', 'popup__title');
  deleteModalDelete.classList.add('delete-modal__delete', 'form__btn-save');
  deleteModalBack.classList.add('delete-modal__back', 'form__btn-cancel');
  modalClose.classList.add('modal-close', 'popup__close');

  deleteModalTitle.textContent = 'Удалить клиента';
  deleteModalText.textContent = 'Вы действительно хотите удалить данного клиента?';
  deleteModalDelete.textContent = 'Удалить';
  deleteModalBack.textContent = 'Отмена';

  deleteModalContent.append(
    modalClose,
    deleteModalTitle,
    deleteModalText,
    deleteModalDelete,
    deleteModalBack
  );
  deleteModal.append(deleteModalContent);

  modalClose.addEventListener('click', () => {
    deleteModal.remove();
  })

  deleteModalBack.addEventListener('click', () => {
    deleteModal.remove();
  })

  window.addEventListener('click', (e) => {
    if (e.target === deleteModal) {
      deleteModal.remove();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.which === 27) {
      deleteModal.remove();
    }
  })

  return {
    deleteModal,
    deleteModalContent,
    deleteModalDelete
  }
}