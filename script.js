// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => mobileMenu.classList.add("active"));
closeMenu.addEventListener("click", () => mobileMenu.classList.remove("active"));

// Mobile search toggle
const searchBtn = document.getElementById("mobileSearchBtn");
const searchBar = document.getElementById("mobileSearchBar");

searchBtn.addEventListener("click", () => searchBar.classList.toggle("hidden"));


  const chatWidget = document.getElementById('chatWidget');
  const toggleBtn = document.getElementById('chatToggleBtn');
  const icon = document.getElementById('chatIcon');
  const iconPath = document.getElementById('iconPath');

  let isOpen = false;

  const messageIconPath = "M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.986 9.986 0 01-4.829-1.216L3 21l1.218-3.777A8.96 8.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z";
  const closeIconPath = "M6 18L18 6M6 6l12 12";

  toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      chatWidget.classList.remove('chat-hidden');
      chatWidget.classList.add('chat-visible');
    } else {
      chatWidget.classList.remove('chat-visible');
      chatWidget.classList.add('chat-hidden');
    }

    icon.classList.toggle('rotate-180');
    iconPath.setAttribute('d', isOpen ? closeIconPath : messageIconPath);
  });



// Navbar hide/show on scroll
let lastScrollTop = 0;
const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down — hide navbar
    navbar.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up — show navbar
    navbar.style.transform = "translateY(0)";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Login icon click redirect
document.getElementById("loginIcon").addEventListener("click", () => {
  window.location.href = "Login.html"; 
});
document.getElementById("cartIcon").addEventListener("click", () => {
  window.location.href = "ruff.html"; 
});





