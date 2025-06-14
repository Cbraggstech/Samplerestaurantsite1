document.addEventListener('DOMContentLoaded', function() {
  // Get the dropdown button and menu
  const dropdownBtn = document.querySelector('.ss-dropdown-btn');
  const menuNav = document.querySelector('.apps-menu-nav');
  
  if (dropdownBtn && menuNav) {
    // Show menu on button click
    dropdownBtn.addEventListener('click', function(e) {
      e.preventDefault();
      menuNav.style.display = menuNav.style.display === 'block' ? 'none' : 'block';
    });
    
    // Make all links in the dropdown properly clickable
    const menuLinks = menuNav.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Prevent the click from being blocked
        e.stopPropagation();
        // Follow the link normally
        window.location.href = this.getAttribute('href');
      });
    });
  }
});
