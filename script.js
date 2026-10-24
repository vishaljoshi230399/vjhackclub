(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = '☰';
    }));
  }
  const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
  const form = document.getElementById('enquiry-form');
  const feedback = document.getElementById('form-feedback');
  function getMessage() {
    if (!form.reportValidity()) return null;
    const data = new FormData(form);
    return `Hello VJHackClub, I would like to discuss a project.\n\nName: ${data.get('name')}\nEmail or phone: ${data.get('reply')}\nService: ${data.get('service')}\nProject details: ${data.get('details')}\n\nPlease let me know the next steps.`;
  }
  if (form) form.addEventListener('submit', e => {
    e.preventDefault(); const message = getMessage(); if (!message) return;
    const subject = encodeURIComponent(`VJHackClub project enquiry - ${form.elements.service.value}`);
    window.location.href = `mailto:Vjhackclub@gmail.com?subject=${subject}&body=${encodeURIComponent(message)}`;
    if (feedback) feedback.textContent = 'Your email app should open with a prepared draft. Please review and send it yourself.';
  });
  const wa = document.getElementById('whatsapp-enquiry');
  if (wa) wa.addEventListener('click', () => {
    const message = getMessage(); if (!message) return;
    window.open(`https://wa.me/919259689247?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    if (feedback) feedback.textContent = 'WhatsApp should open with a prepared message. Please review and send it yourself.';
  });
  document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
    const select = document.getElementById('service'); if (!select) return;
    const target = link.dataset.service;
    const match = Array.from(select.options).find(o => o.text.toLowerCase() === target.toLowerCase());
    if (match) select.value = match.value;
    else if (/landing page/i.test(target)) select.value = 'Landing page';
    else if (/business website/i.test(target)) select.value = 'Business website';
    else if (/e-commerce/i.test(target)) select.value = 'E-commerce website';
    else if (/seo/i.test(target)) select.value = 'SEO and digital marketing';
    else if (/creative/i.test(target)) select.value = 'Creative content and AI support';
    else if (/cybersecurity/i.test(target)) select.value = 'Cybersecurity education or authorized lab';
    else if (/website/i.test(target)) select.value = 'Website development';
  }));
})();
