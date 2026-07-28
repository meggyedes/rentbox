// Cseréld ki erre a saját fogadó e-mail címedre, mielőtt élesíted az oldalt.
const recipientEmail = 'IDE_IRD_A_SAJAT_EMAIL_CIMED@pelda.hu';

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('navigation');
if (navToggle && nav) navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
if (nav) nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.choose-box').forEach(button => button.addEventListener('click', () => {
  const contact = document.querySelector('#kapcsolat');
  const message = document.querySelector('[name="message"]');
  if (!contact || !message) return;
  contact.scrollIntoView({ behavior: 'smooth' });
  message.value = `A kiválasztott tetőbox: ${button.dataset.box}\nAutó típusa: \nTovábbi kérdés: `;
}));

const inquiryForm = document.getElementById('inquiry-form');
if (inquiryForm) inquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  if (recipientEmail.startsWith('IDE_IRD')) {
    alert('Indulás előtt add meg a saját e-mail címedet a script.js fájl első sorában.');
    return;
  }
  const data = new FormData(event.currentTarget);
  const subject = `Tetőbox bérlési igény – ${data.get('from')} → ${data.get('to')}`;
  const body = `Név: ${data.get('name')}\nE-mail: ${data.get('email')}\n\nBérlés kezdete: ${data.get('from')}\nBérlés vége: ${data.get('to')}\n\nÜzenet:\n${data.get('message')}`;
  window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Finom felületi mozgások és termékkép-nagyítás.
window.addEventListener('load', () => document.querySelector('.page-loader')?.classList.add('is-hidden'));

const header = document.querySelector('.site-header');
if (header) window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 30), { passive: true });

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const galleries = {
  excellence: [
    'images/web/IMG_8900.jpg', 'images/web/IMG_8901.jpg', 'images/web/IMG_8903.jpg',
    'images/web/IMG_8904.jpg', 'images/web/IMG_8905.jpg', 'images/web/IMG_8906.jpg',
    'images/web/IMG_8907.jpg', 'images/web/IMG_8908.jpg', 'images/web/IMG_8909.jpg',
    'images/web/IMG_8910.jpg'
  ],
  atlantis: ['images/web/atlantis-900.jpg']
};
const modal = document.getElementById('image-modal');
const modalImage = modal.querySelector('img');
const counter = modal.querySelector('.gallery-counter');
let activeGallery = [];
let activeIndex = 0;
let savedScrollY = 0;
const showGalleryImage = () => {
  modalImage.src = activeGallery[activeIndex];
  modalImage.alt = `Tetőbox fotó ${activeIndex + 1}.`;
  counter.textContent = `${activeIndex + 1} / ${activeGallery.length}`;
  modal.querySelectorAll('.gallery-nav').forEach(button => button.hidden = activeGallery.length < 2);
  [activeIndex - 1, activeIndex + 1].forEach(index => {
    const preload = new Image();
    preload.src = activeGallery[(index + activeGallery.length) % activeGallery.length];
  });
};
const openGallery = (gallery, index = 0) => {
  savedScrollY = window.scrollY;
  activeGallery = galleries[gallery]; activeIndex = index; showGalleryImage(); modal.showModal();
  modal.querySelector('.modal-close').focus({ preventScroll: true });
  requestAnimationFrame(() => requestAnimationFrame(() => window.scrollTo(0, savedScrollY)));
};
document.querySelectorAll('.image-open').forEach(button => button.addEventListener('click', () => {
  const galleryName = button.closest('.product-card').querySelector('.gallery-open').dataset.gallery;
  openGallery(galleryName, 0);
}));
document.querySelectorAll('.gallery-open').forEach(button => button.addEventListener('click', () => openGallery(button.dataset.gallery)));
modal.querySelector('.gallery-prev').addEventListener('click', () => { activeIndex = (activeIndex - 1 + activeGallery.length) % activeGallery.length; showGalleryImage(); });
modal.querySelector('.gallery-next').addEventListener('click', () => { activeIndex = (activeIndex + 1) % activeGallery.length; showGalleryImage(); });
modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
modal.addEventListener('close', () => requestAnimationFrame(() => window.scrollTo(0, savedScrollY)));

document.querySelectorAll('.sale-inquiry').forEach(button => button.addEventListener('click', () => {
  if (recipientEmail.startsWith('IDE_IRD')) {
    alert('Indulás előtt add meg a saját e-mail címedet a script.js fájl első sorában.');
    return;
  }
  const subject = `Vásárlási érdeklődés – ${button.dataset.product}`;
  const body = `Szia!\n\nÉrdeklődöm az eladó ${button.dataset.product} tetőbox iránt.\n\nNév: \nTelefonszám: \n`;
  window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}));
