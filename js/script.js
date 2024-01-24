// Ativar Link do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarMenu(link) {
  const url = window.location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarMenu);

// Ativar Items do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarItem(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarItem);
