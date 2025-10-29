document.addEventListener('DOMContentLoaded', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const placeholder = document.querySelector('.placeholder');
  
  // Gestion des clics sur la timeline
  timelineItems.forEach(item => {
    item.addEventListener('click', function() {
      const formationId = this.getAttribute('data-formation');
      
      // Masquer tous les détails
      document.querySelectorAll('.detail-content').forEach(detail => {
        detail.style.display = 'none';
      });
      
      // Masquer le placeholder
      if (placeholder) {
        placeholder.style.display = 'none';
      }
      
      // Afficher le détail sélectionné
      const selectedDetail = document.getElementById('detail-' + formationId);
      if (selectedDetail) {
        selectedDetail.style.display = 'block';
      }
      
      // Effet visuel sur l'item sélectionné
      timelineItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
