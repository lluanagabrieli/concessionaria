let menuAberto = false;

function abrirMenu() {
  const menu = document.getElementsByClassName("menu-navegacao-botao")[0];

  if (!menuAberto) {
    menu.style.display = "block";
    menuAberto = true;
  } else {
    menu.style.display = "none";
    menuAberto = false;
  }
}
