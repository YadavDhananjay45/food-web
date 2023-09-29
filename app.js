const menuBtn = document.querySelector(".hamburger");
const menuDiv = document.querySelector(".menudiv");
let isVisible = false;
menuBtn.addEventListener("click", () => {
  if (isVisible == false) {
    menuDiv.classList.remove("hidden");
    menuDiv.classList.add("block");
    isVisible = true;
  } else {
    menuDiv.classList.remove("block");
    menuDiv.classList.add("hidden");
    isVisible = false;
  }
});

function toggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
}
