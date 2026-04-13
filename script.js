// NAVBAR SCROLL
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // DROPDOWN SERVIÇOS
  const navServicos = document.getElementById('navServicos');
  const servicosToggle = document.getElementById('servicosToggle');
  servicosToggle.addEventListener('click', (e) => {
    e.preventDefault();
    navServicos.classList.toggle('open');
  });
  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!navServicos.contains(e.target)) navServicos.classList.remove('open');
  });
  // Fechar ao clicar num item do dropdown
  document.querySelectorAll('#servicosDropdown a').forEach(a => {
    a.addEventListener('click', () => navServicos.classList.remove('open'));
  });

  // HAMBURGER
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
  document.querySelectorAll('.mobile-link, .mobile-menu .nav-cta').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // SCROLL REVEAL
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }});
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // FAQ
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-icon').textContent = '+'; });
      if (!wasOpen) { item.classList.add('open'); q.querySelector('.faq-icon').textContent = '−'; }
    });
  });

  // COUNTER ANIMATION
  function animateCounter(el, target, suffix='') {
    let start = 0;
    const duration = 1800;
    const step = timestamp => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(ease * target);
      el.textContent = val + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const numbersObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target.querySelector('.number-val');
        const text = el.textContent;
        if (text.includes('400')) animateCounter(el, 400, '+');
        else if (text.includes('★')) { el.textContent = '5★'; }
        else if (text.includes('4+')) animateCounter(el, 4, '+');
        else if (text.includes('6')) animateCounter(el, 6, '');
        numbersObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.number-item').forEach(el => numbersObserver.observe(el));
  document.addEventListener('DOMContentLoaded', function() {
  // Pegamos o link "Serviços" e a caixa do menu
  const servicosBtn = document.getElementById('servicosToggle');
  const dropdownMenu = document.getElementById('servicosDropdown');

  // Só executa se esses elementos existirem na página
  if (servicosBtn && dropdownMenu) {
    
    // Evento de clique no botão "Serviços"
    servicosBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Evita que a página pule para o topo
      dropdownMenu.classList.toggle('active'); // Liga/desliga o menu
    });

    // Evento para fechar o menu se clicar em qualquer lugar fora dele
    document.addEventListener('click', function(event) {
      // Se o clique não foi no botão e nem dentro do menu, ele fecha
      if (!servicosBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active');
      }
    });
  }
});