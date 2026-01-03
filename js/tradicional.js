const pacotes = [
  { pessoas: 10, suco: "1L", refri: "1 Refrigerantes 1,5L", img: "/img/tradicional/10.jpeg" },
  { pessoas: 15, suco: "1L", refri: "1 Refrigerantes 2L", img: "/img/tradicional/15.jpeg" },
  { pessoas: 20, suco: "2L", refri: "1 Refrigerantes 2L", img: "/img/tradicional/20.jpeg" },
  { pessoas: 25, suco: "2L", refri: "3 Refrigerantes 1,5L", img: "/img/tradicional/25.jpeg" },
  { pessoas: 30, suco: "2L", refri: "2 Refrigerantes 1,5L", img: "/img/tradicional/30.jpeg" },
  { pessoas: 40, suco: "3L", refri: "3 Refrigerantes 2L", img: "/img/tradicional/40.jpeg" },
  { pessoas: 50, suco: "4L", refri: "4 Refrigerantes 2L", img: "/img/tradicional/50.jpeg" },
  { pessoas: 70, suco: "6L", refri: "5 Refrigerantes 2L", img: "/img/tradicional/70.jpeg" },
  { pessoas: 100, suco: "8L", refri: "8 Refrigerantes 2L", img: "/img/tradicional/100.jpeg" }
];

const precoPessoa = 19.90;

function criarCard(pacote) {
  const total = (pacote.pessoas * precoPessoa).toFixed(2);

  const card = document.createElement("section");
  card.className = "card";

  const img = document.createElement("img");
  img.src = pacote.img;
  img.alt = `Coffee Break para ${pacote.pessoas} pessoas`;
  img.onerror = () => {
    img.onerror = null;
    img.src = "/img/logo.png";
  };

  const titulo = document.createElement("h2");
  titulo.textContent = `Indicado para ${pacote.pessoas} pessoas`;

  const lista = document.createElement("ul");
  lista.innerHTML = `
    <li>1 Bolo sortido com cobertura</li>
    <li>1 Bolo sortido</li>
    <li>${pacote.pessoas} Mini pão de mel</li>
    <li>${pacote.pessoas} Mini bauru de frango</li>
    <li>${pacote.pessoas} Mini bauru de queijo e presunto</li>
    <li>${pacote.pessoas} Mini hot dog assado</li>
    <li>${pacote.pessoas} Mini hambúrguer assado</li>
    <li>${pacote.pessoas} Pão de batata com patê de bacon</li>
    <li>${pacote.pessoas} Pão de batata com patê de frango</li>
    <li>${pacote.suco} Suco</li>
    <li>${pacote.refri}</li>
  `;

  const preco = document.createElement("p");
  preco.className = "preco";
  preco.textContent = `R$ ${precoPessoa.toFixed(2)} por pessoa`;

  const valor = document.createElement("p");
  valor.className = "valor";
  valor.textContent = `R$ ${total}`;

  const botao = document.createElement("a");
  botao.href = "https://wa.me/5527996311125";
  botao.className = "btn";
  botao.textContent = "faça sua encomenda";

  card.append(img, titulo, lista, preco, valor, botao);
  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";
  pacotes.forEach(p => container.appendChild(criarCard(p)));
});
