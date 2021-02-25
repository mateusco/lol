var objetoSenha = document.getElementById("senha");
var objetoAlertaSenha = document.getElementById("AlertaSenha");
var objetoRegistrar = document.getElementById("Registrar");
var objetoEmail = document.getElementById("email");


function Registrar() {
    if (verificarsenha()) {
        alert("Logado")
        logarApi(objetoEmail.value, objetoSenha.value)
    }
}
console.log(objetoSenha)
function verificarsenha () {
    if (objetoSenha.value === "") {
   
    objetoAlertaSenha.innerHTML = "Os campos acima não podem ficar em branco"
    return false; 
} 
return true; 
}
















function logarApi(email, password){
    var usuario = JSON.stringify({email:email, password: password})
    
    console.log({email:email, password: password})
    console.log(usuario)

    $.ajax({
        url: "http://escolarapp2.herokuapp.com/account/login/",
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: usuario,
        success: function(objetoToken){
            console.log(objetoToken)
            const key = "Token " + objetoToken.key;
            console.log(key)
            window.localStorage.setItem("Token",key);
            
            window.location.href = "../inicio.html"
        },
        error: function (error){
           console.log(error)

        }
    });
}

