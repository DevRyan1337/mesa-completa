// js/painel.js
(function () {
  // Garante que firebase-init.js já rodou
  function ensureFirebase() {
    if (!window.auth || !window.db) {
      console.error("Firebase não inicializado. Verifique a ordem dos scripts.");
      alert("Erro: Firebase não inicializado. Confira a ordem dos scripts no HTML.");
      return false;
    }
    return true;
  }

  // ---------- LOGIN ----------
  async function login() {
    if (!ensureFirebase()) return;

    const emailEl = document.getElementById("email");
    const senhaEl = document.getElementById("senha");

    if (!emailEl || !senhaEl) return;

    const email = emailEl.value.trim();
    const senha = senhaEl.value;

    try {
      await auth.signInWithEmailAndPassword(email, senha);
      location.href = "dashboard.html";
    } catch (e) {
      alert("Erro: " + e.message);
    }
  }

  // ---------- DASHBOARD ----------
  async function carregarPaginaNoPainel() {
    if (!ensureFirebase()) return;

    const selPagina = document.getElementById("pagina");
    const inpTitulo = document.getElementById("titulo");
    const txtTexto = document.getElementById("texto");

    if (!selPagina || !inpTitulo || !txtTexto) return;

    const slug = selPagina.value;

    try {
      const doc = await db.collection("paginas").doc(slug).get();

      if (doc.exists) {
        const d = doc.data();
        inpTitulo.value = d.titulo || "";
        txtTexto.value = d.texto || "";
      } else {
        inpTitulo.value = "";
        txtTexto.value = "";
      }
    } catch (e) {
      console.error(e);
      alert("Erro ao carregar: " + e.message);
    }
  }

  async function salvarPaginaNoPainel() {
    if (!ensureFirebase()) return;

    const selPagina = document.getElementById("pagina");
    const inpTitulo = document.getElementById("titulo");
    const txtTexto = document.getElementById("texto");

    if (!selPagina || !inpTitulo || !txtTexto) return;

    const slug = selPagina.value;

    try {
      await db.collection("paginas").doc(slug).set(
        {
          titulo: inpTitulo.value,
          texto: txtTexto.value,
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );

      alert("Salvo!");
    } catch (e) {
      console.error(e);
      alert("Erro ao salvar: " + e.message);
    }
  }

  function logout() {
    if (!ensureFirebase()) return;
    auth.signOut().then(() => (location.href = "login.html"));
  }

  // ---------- AUTO-WIRING (liga automaticamente ao abrir as páginas) ----------
  document.addEventListener("DOMContentLoaded", () => {
    // LOGIN PAGE
    const btnEntrar = document.getElementById("btnEntrar");
    if (btnEntrar) btnEntrar.addEventListener("click", login);

    // DASHBOARD PAGE
    const btnCarregar = document.getElementById("btnCarregar");
    const btnSalvar = document.getElementById("btnSalvar");
    const btnSair = document.getElementById("btnSair");
    const selPagina = document.getElementById("pagina");

    // Protege o dashboard
    if (document.getElementById("pagina")) {
      if (!ensureFirebase()) return;

      auth.onAuthStateChanged((user) => {
        if (!user) {
          location.href = "login.html";
        } else {
          carregarPaginaNoPainel();
        }
      });
    }

    if (btnCarregar) btnCarregar.addEventListener("click", carregarPaginaNoPainel);
    if (btnSalvar) btnSalvar.addEventListener("click", salvarPaginaNoPainel);
    if (btnSair) btnSair.addEventListener("click", logout);
    if (selPagina) selPagina.addEventListener("change", carregarPaginaNoPainel);
  });
})();
