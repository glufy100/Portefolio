document.addEventListener('DOMContentLoaded', () => {
  const revealTargets = document.querySelectorAll(
    '.text-box, .contact-card, .project-card, .experience-card, .formation-details, .day-card, .skill-column, .project-showcase-content, .project-visual, .detail-section, .section-header'
  );

  revealTargets.forEach((element, index) => {
    element.classList.add('js-reveal');
    element.style.transitionDelay = `${Math.min(index * 70, 560)}ms`;
  });

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerInstance.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  revealTargets.forEach((element) => observer.observe(element));

  const cards = document.querySelectorAll('.project-card, .experience-card, .contact-card, .text-box');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const bounds = card.getBoundingClientRect();
      const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
      const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;

      card.style.setProperty('--tilt-x', `${offsetX * 3}deg`);
      card.style.setProperty('--tilt-y', `${offsetY * -3}deg`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });

  const heroPhoto = document.querySelector('.photo');
  if (heroPhoto) {
    window.addEventListener('mousemove', (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 8;
      const y = (event.clientY / window.innerHeight - 0.5) * 8;
      heroPhoto.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    window.addEventListener('mouseleave', () => {
      heroPhoto.style.transform = 'translate3d(0, 0, 0)';
    });
  }
});
