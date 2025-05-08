const darkModeToggle = document.getElementById('dark-mode-toggle');

// Event handler for toggling dark mode
darkModeToggle.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});