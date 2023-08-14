const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', (e) => {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', (e) => {
      popupClose(el.closest('.popup'));
      e.preventDefault;
    });
  }
}

const popupOpen = (currentPopup) => {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

const popupClose = (popupActive, doUnlock = true) => {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnlock();
    }
  }
}

const bodyLock = () => {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
    const el = lockPadding[index];
    el.style.paddingRigth = lockPaddingValue;
    }
  }
  body.style.paddingRigth = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

const bodyUnlock = () => {
  setTimeout(() => {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRigth = '0px';
    }
    body.style.paddingRigth = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', (e) => {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

