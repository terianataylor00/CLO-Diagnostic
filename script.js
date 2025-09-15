document.addEventListener('DOMContentLoaded', () => {
  // Attach a click handler to each selection button
  document.querySelectorAll('.selection-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Read and normalize the group value
      const group = (btn.getAttribute('data-group') || '').trim();

      // If no group, do nothing
      if (!group) return;

      // Turn OFF all in the same group, then turn ON the clicked one
      document.querySelectorAll(`.selection-btn[data-group="${group}"]`)
        .forEach(b => b.classList.toggle('active', b === btn));
    });
  });
});

