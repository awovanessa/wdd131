// Dynamic footer content
const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.querySelector('#menu-button');
const primaryNav = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.innerHTML = isOpen ? '&#10006;' : '&#9776;';
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});