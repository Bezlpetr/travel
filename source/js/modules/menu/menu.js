const headerElement = document.querySelector('[data-header]');
const navigationToggleElement = document.querySelector('[data-navigation-toggle]');
const menuButtons = document.querySelectorAll('[data-navigation-button]');
const mainWrapperElement = document.querySelector('[data-main-wrapper]');

const initMenu = () => {
  if (headerElement) {
    headerElement.classList.remove('header--nojs');
    headerElement.classList.remove('header--navigation-opened');
    headerElement.classList.add('header--navigation-closed');
  }
};

const openMenu = () => {
  if (headerElement) {
    headerElement.classList.remove('header--navigation-closed');
    headerElement.classList.add('header--navigation-opened');
    mainWrapperElement.classList.add('wrapper--menu-open');
    document.body.style.overflowY = 'hidden';
    setNavigationButtonsListener();
  }
};

const closeMenu = () => {
  if (headerElement) {
    headerElement.classList.remove('header--navigation-opened');
    headerElement.classList.add('header--navigation-closed');
    mainWrapperElement.classList.remove('wrapper--menu-open');
    document.body.style.overflowY = 'visible';
    removeNavigationButtonsListener();
  }
};

function setNavigationButtonsListener() {
  menuButtons.forEach((button) => {
    button.addEventListener('click', closeMenu);
  });
}

function removeNavigationButtonsListener() {
  menuButtons.forEach((button) => {
    button.removeEventListener('click', closeMenu);
  });
}

const onNavigationToggleClick = () => {
  if (headerElement) {
    if (headerElement.classList.contains('header--navigation-closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  }
};

const setNavigationToggleListener = () => {
  navigationToggleElement.addEventListener('click', onNavigationToggleClick);
};

export {initMenu, setNavigationToggleListener};
