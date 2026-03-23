// Menu
const menu = document.getElementById("mainNav");

if (menu) {
  const navbox = bootstrap.Collapse.getOrCreateInstance(menu);
  const drops = menu.querySelectorAll(".dropdown-toggle");
  const links = menu.querySelectorAll(".link:not(.dropdown-toggle)");

  // Desktop
  drops.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth >= 992) {
        drops.forEach((other) => {
          if (other !== btn) {
            const next = other.nextElementSibling;
            if (next && next.classList.contains("show")) {
              bootstrap.Dropdown.getOrCreateInstance(other).hide();
            }
          }
        });
      }
    });
  });

  // Mobile
  links.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth < 992 && menu.classList.contains("show")) {
        navbox.hide();
      }
    });
  });
}