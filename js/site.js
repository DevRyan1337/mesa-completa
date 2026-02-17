// js/site.js
async function carregarPagina(slug) {
  try {
    const doc = await db.collection("paginas").doc(slug).get();
    if (!doc.exists) return;

    const data = doc.data();

    // Não quebra se o elemento não existir
    const elTitulo = document.getElementById("titulo");
    const elTexto  = document.getElementById("texto");

    if (elTitulo) elTitulo.textContent = data.titulo || "";
    if (elTexto)  elTexto.textContent  = data.texto  || "";

  } catch (e) {
    console.error("Erro ao carregar página:", e);
  }
}
