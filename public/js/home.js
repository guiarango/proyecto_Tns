function onCheckBoxHamburger(checkbox) {
  const navBar = document.querySelector(".main-header__navigation--navBar");
  if (checkbox.checked) {
    navBar.style.display = "block";
    navBar.style.position = "fixed";
    navBar.style.top = "50%";
    navBar.style.left = "50%";
    navBar.style.transform = "translate(-50%, -50%)";
    navBar.style.color = "white";
    navBar.style.textalign = "center";
    navBar.style.zIndex = "5555";
  } else {
    navBar.style.display = "none";
    navBar.style.position = "relative";
    navBar.style.top = "0%";
    navBar.style.left = "0%";
    navBar.style.transform = "translate(0%, 0%)";
  }
}
