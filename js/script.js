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

// Ativando descrição de perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");

  if (resposta.classList.contains("ativa")) {
    pergunta.setAttribute("aria-expanded", "true");
  } else {
    pergunta.setAttribute("aria-expanded", "false");
  }
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Galeria de Imagens
const galeria = document.querySelectorAll(".bicicleta-interna-imagens img");
const principal = document.querySelector(".bicicleta-interna-imagens img");

function mudaPrincipal(event) {
  const clicada = event.currentTarget;
  const srcPrincipal = principal.src;
  const altPrincipal = principal.alt;

  principal.src = clicada.src;
  principal.alt = clicada.alt;

  clicada.src = srcPrincipal;
  clicada.alt = altPrincipal;
}

function selecionaImagem(image) {
  image.addEventListener("click", mudaPrincipal);
}
galeria.forEach(selecionaImagem);

if (window.SimpleAnime) {
  new SimpleAnime();
}
