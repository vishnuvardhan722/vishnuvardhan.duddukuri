function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  document.getElementById("vishnu").checkVisibility(false);
},

#vishnu{
  Display: none;
}