const menuHamburguer = document.querySelector(".menu-hamburguer");
const navegacaoPrincipal = document.getElementById("navegacao-principal");
const itensLinksNavegacao = document.querySelectorAll("header nav a");
const secoes = document.querySelectorAll("section");

menuHamburguer.addEventListener("click", () => {
  navegacaoPrincipal.classList.toggle("ativo");
  const estaExpandido = navegacaoPrincipal.classList.contains("ativo");
  menuHamburguer.setAttribute("aria-expanded", estaExpandido);
});

navegacaoPrincipal.addEventListener("click", (e) => {
  const link = e.target.closest("a");

  if (link) {
    navegacaoPrincipal.classList.remove("ativo");
    menuHamburguer.setAttribute("aria-expanded", "false");
  }
});

function destacarMenu() {
  const rolagemY = window.scrollY;
  let secaoAtual = "";

  secoes.forEach((secao) => {
    const topoSecao = secao.offsetTop - 150;

    if (rolagemY >= topoSecao) {
      secaoAtual = secao.getAttribute("id");
    }
  });

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    secaoAtual = secoes[secoes.length - 1].getAttribute("id");
  }

  itensLinksNavegacao.forEach((link) => {
    link.classList.remove("link-ativo");
    link.removeAttribute("aria-current");
    if (link.getAttribute("href") === "#" + secaoAtual) {
      link.classList.add("link-ativo");
      link.setAttribute("aria-current", "page");
    }
  });
}

window.addEventListener("scroll", destacarMenu);
destacarMenu();
