document.addEventListener("DOMContentLoaded", function() {
  var dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(function(dropdown) {
    var dropdownToggle = dropdown.querySelector('a');
    var dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      var isActive = dropdownMenu.classList.contains('active');
      
      // Закрити всі випливаючі меню, крім поточного
      dropdowns.forEach(function(item) {
        if (item !== dropdown) {
          item.querySelector('.dropdown-menu').classList.remove('active');
        }
      });
      
      // Змінити стан активності поточного випливаючого меню
      dropdownMenu.classList.toggle('active');
    });
  });
});

// Закрити випливаюче меню при кліку за межами нього
document.addEventListener("click", function(e) {
  var isClickInsideDropdown = document.querySelector('.dropdown').contains(e.target);
  if (!isClickInsideDropdown) {
    document.querySelectorAll('.dropdown-menu').forEach(function(dropdownMenu) {
      dropdownMenu.classList.remove('active');
    });
  }
});
