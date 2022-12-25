import loadPage from "./pages/pageLoad";
import homePage from "./pages/home";
import menuPage from "./pages/menu";
import contactPage from "./pages/contact";

main();

function changePage() {
  const homeNav = document.getElementById("nav1");
  const menuNav = document.getElementById("nav2");
  const contactNav = document.getElementById("nav3");

  homeNav.addEventListener("click", homePage);
  menuNav.addEventListener("click", menuPage);
  contactNav.addEventListener("click", contactPage);
}

function main() {
  loadPage();
  homePage();
  changePage();
}
