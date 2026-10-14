const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const progress = document.querySelector('.scroll-progress span');
const whatsappLinks = document.querySelectorAll('[data-whatsapp]');
const contactModal = document.querySelector('[data-contact-modal]');
const contactOpeners = document.querySelectorAll('[data-contact-open]');
const contactClosers = document.querySelectorAll('[data-contact-close]');
const emailForm = document.querySelector('[data-email-form]');
const formStatus = document.querySelector('[data-form-status]');
const accordions = document.querySelectorAll('[data-accordion]');

// Substitua pelo número real da Destra, com DDI e DDD, sem espaços ou símbolos.
const whatsappNumber = '554999806486';
const whatsappMessage = 'Olá, Destra! Quero conversar sobre o posicionamento da minha marca.';
// Troque pelo e-mail real que deve receber os briefings.
const contactEmail = 'contato@destra.ag';

whatsappLinks.forEach((link) => {
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    if (nav) nav.classList.remove('is-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  });
});

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

accordions.forEach((accordion) => {
  const trigger = accordion.querySelector('.service-trigger');
  trigger?.addEventListener('click', () => {
    const willOpen = !accordion.classList.contains('is-open');
    accordions.forEach((item) => {
      item.classList.remove('is-open');
      item.querySelector('.service-trigger')?.setAttribute('aria-expanded', 'false');
    });
    if (willOpen) {
      accordion.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
});

const setModalState = (isOpen) => {
  if (!contactModal) return;
  contactModal.classList.toggle('is-open', isOpen);
  contactModal.setAttribute('aria-hidden', String(!isOpen));
  document.body.classList.toggle('modal-open', isOpen);
  if (isOpen) contactModal.querySelector('input')?.focus();
};

contactOpeners.forEach((button) => button.addEventListener('click', () => setModalState(true)));
contactClosers.forEach((button) => button.addEventListener('click', () => setModalState(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setModalState(false);
});

emailForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(emailForm);
  const name = String(formData.get('nome') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const brand = String(formData.get('marca') || '').trim();
  const project = String(formData.get('projeto') || '').trim();
  const subject = `Briefing de ${brand} — ${name}`;
  const body = [`Nome: ${name}`, `E-mail: ${email}`, `Marca: ${brand}`, '', 'Sobre o projeto:', project].join('\n');
  if (formStatus) formStatus.textContent = 'Abrindo seu cliente de e-mail…';
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const updateScrollState = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 30);
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progress) progress.style.width = `${percentage}%`;
};

window.addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelector('[data-year]')?.replaceChildren(String(new Date().getFullYear()));
