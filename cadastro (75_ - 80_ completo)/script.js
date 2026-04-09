function logar() {
    var usuario = document.getElementById ('inputUsuario').value
    var senha = document.getElementById('inputSenha').value

    if(usuario == "pedro" && senha == "1234") {
        window.location.href = "page2.html"
    }  else {
    
        Swal.fire({
  title: "Algo deu errado",
  text: "Veja se seu usuário ou senha está correta",
  icon: "question"

});

//document.getElementById('erro').innerHTML = "Usuário/Senha incorretos! Tente novamente!"
    }
}

function cadastrar() {

Swal.fire({
  title: "Tudo certo!!!!",
  text: "Seus dados foram cadastrados com sucesso",
  icon: "success"


    
})};