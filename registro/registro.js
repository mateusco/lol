var objetoPrimeiraSenha = document.getElementById("PrimeiraSenha");
var objetoSegundaSenha = document.getElementById("SegundaSenha");
var objetoAlertaSenha = document.getElementById("AlertaSenha");
var objetoRegistrar = document.getElementById("Registrar");
var objetoEmail = document.getElementById("email")
var objetoToken = document.getElementById ("Token")

function Registrar() {
    if (compararSenha()) {
        registrarApi(objetoEmail.value, objetoPrimeiraSenha.value)
    }
}

function compararSenha() {
    if (objetoPrimeiraSenha.value != "" || objetoSegundaSenha.value != "") {
        if (objetoPrimeiraSenha.value != objetoSegundaSenha.value) {
            objetoAlertaSenha.innerHTML = "Senhas não são iguais"
            return false;
        }

        return true;
    } else{
        objetoAlertaSenha.innerHTML = "Os campos acima não podem ficar em branco"
        return false;
    }
}
function registrarApi(email, password){
    var usuario = JSON.stringify({email:email, password: password})
    
    console.log({email:email, password: password})
    console.log(usuario)

    $.ajax({
        url: "http://escolarapp2.herokuapp.com/account/register/",
        contentType: 'application/json',
        cache: false,
        method: 'POST',
        dataType: 'json',
        data: usuario,
        success: function(objetoToken){
            window.location.href = "../login/logiin.html"
            console.log(objetoToken)
           
            
        },
        error: function (error){
           console.log(error)

        }
    });
}




