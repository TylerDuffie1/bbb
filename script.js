/* JavaScript code for making the website responsive */

// Adjust the navigation menu for small screens
function adjustMenu() {
    var nav = document.querySelector('nav');
    if (window.innerWidth < 600) {
      nav.style.display = 'none';
      var menuBtn = document.createElement('button');
      menuBtn.textContent = 'Menu';
      menuBtn.addEventListener('click', function() {
        if (nav.style.display === 'none') {
          nav.style.display = 'block';
        } else {
          nav.style.display = 'none';
        }
      });
      var header = document.querySelector('header');
      header.insertBefore(menuBtn, nav);
    } else {
      nav.style.display = 'flex';
      var menuBtn = document.querySelector('button');
      if (menuBtn) {
        menuBtn.parentNode.removeChild(menuBtn);
      }
    }
  }
  
  // Adjust the product list for small screens
  function adjustProducts() {
    var products = document.querySelector('section ul');
    if (window.innerWidth < 900) {
      products.style.flexDirection = 'column';
      products.style.alignItems = 'center';
      products.style.marginLeft = '0';
      products.childNodes.forEach(function(li) {
        li.style.flexBasis = '100%';
        li.style.marginBottom = '20px';
      });
    } else {
      products.style.flexDirection = 'row';
      products.style.alignItems = 'flex-start';
      products.style.marginLeft = '-10px';
      products.childNodes.forEach(function(li) {
        li.style.flexBasis = 'calc(33.33% - 20px)';
        li.style.marginBottom = '30px';
      });
    }
  }
  
  // Add event listeners for window resize and load events
  window.addEventListener('resize', function() {
    adjustMenu();
    adjustProducts();
  });
  
  window.addEventListener('load', function() {
    adjustMenu();
    adjustProducts();
  });
  