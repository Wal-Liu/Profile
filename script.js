function goToLink(url) {
      window.open(url, '_blank');
    }
    
    // Dark Mode Toggle
    const toggle = document.getElementById('modeToggle');
    toggle.addEventListener('change', function() {
      document.body.classList.toggle('dark', this.checked);
    });
    