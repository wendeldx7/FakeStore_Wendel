function validarLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var mensagemErro = document.getElementById("mensagem-erro");

  if (username === "wendel" && password === "123") {
    window.location.href = "../index.html";
    return false;
  } else {
    mensagemErro.textContent = "Nome de usuário ou senha incorretos!";
    mensagemErro.style.color = "red";
    return false;
  }
}
