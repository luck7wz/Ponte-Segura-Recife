const app = document.getElementById("app");

// Carregar páginas
function carregarPagina(pagina) {
  app.innerHTML = "<p>Carregando...</p>";

  fetch(`templates/${pagina}`)
    .then(res => res.text())
    .then(html => {
      app.innerHTML = html;
    })
    .catch(() => {
      app.innerHTML = "<p>Erro ao carregar</p>";
    });
}

// Telas
function carregarHome() {
  carregarPagina("home.html");
}

function confirmarEnvio() {
  carregarPagina("confirmacao.html");
}

function enviarAlerta() {

  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }

  console.log("🚨 Alerta enviado!");

  carregarPagina("alerta_enviado.html");
}

// Iniciar app
carregarHome();