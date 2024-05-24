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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PEGANDO ELEMENTOS
var modal = document.getElementById("modal");
var botao = document.getElementById("botao");

var modal2 = document.getElementById("modal2");
var botao2 = document.getElementById("botao2");

var modal3 = document.getElementById("modal3");
var botao3 = document.getElementById("botao3");

var modal4 = document.getElementById("modal4");
var botao4 = document.getElementById("botao4");

// FECHAR MODAL
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];

// MODAL
botao.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// MODAL 2
botao2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

// MODAL 3
botao3.onclick = function() {
  modal3.style.display = "block";
}

span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

// MODAL 4
botao4.onclick = function() {
  modal4.style.display = "block";
}

span4.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
