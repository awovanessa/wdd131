// ============================
// Temple data (7 provided + 3 added)
// ============================
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "images/manti-utah-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "images/payson-utah-temple.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "images/yigo-guam-temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "images/washington-dc-temple.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "images/lima-peru-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico-city-mexico-temple.jpg"
  },
  // --- added temples ---
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen, Switzerland",
    dedicated: "1955, September, 11",
    area: 33001,
    imageUrl: "images/bern-switzerland-temple.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 47116,
    imageUrl: "images/tokyo-japan-temple.jpg"
  },
  {
    templeName: "Freiberg Germany",
    location: "Freiberg, Germany",
    dedicated: "1985, June, 29",
    area: 14232,
    imageUrl: "images/freiberg-germany-temple.jpg"
  }
];

// ============================
// Card rendering
// ============================
const cardContainer = document.querySelector('#temple-cards');

function formatArea(area) {
  return `${area.toLocaleString()} sq ft`;
}

function renderTemples(templeArray) {
  cardContainer.innerHTML = '';

  templeArray.forEach((temple) => {
    const card = document.createElement('figure');
    card.classList.add('temple-card');

    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
      <figcaption>
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${formatArea(temple.area)}</p>
      </figcaption>
    `;

    cardContainer.appendChild(card);
  });
}

// ============================
// Filters
// ============================
function getYear(dedicated) {
  return new Date(dedicated).getFullYear();
}

const filters = {
  home: () => temples,
  old: () => temples.filter((t) => getYear(t.dedicated) < 1900),
  new: () => temples.filter((t) => getYear(t.dedicated) > 2000),
  large: () => temples.filter((t) => t.area > 90000),
  small: () => temples.filter((t) => t.area < 10000)
};

const navLinks = document.querySelectorAll('#primary-nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const filterName = link.dataset.filter;
    renderTemples(filters[filterName]());

    navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');

    // close mobile menu after a selection
    primaryNav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', false);
    menuButton.innerHTML = '&#9776;';
    menuButton.setAttribute('aria-label', 'Open menu');
  });
});

// initial render
renderTemples(filters.home());

// ============================
// Dynamic footer content
// ============================
const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// ============================
// Hamburger menu toggle
// ============================
const menuButton = document.querySelector('#menu-button');
const primaryNav = document.querySelector('#primary-nav');

menuButton.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.innerHTML = isOpen ? '&#10006;' : '&#9776;';
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});