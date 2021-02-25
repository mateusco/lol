var objetoTitulo = document.getElementById("titulo");
var objetoNome = document.getElementById("Nome");
var objetoValidarIdade= document.getElementById("Idade");
var objetoValidarNacionalidade = document.getElementById("Nacionalidade");
var objetoErroNome = document.getElementById("ErroNome");
var objetoErroIdade = document.getElementById("erroIdade");
var objetoErroNacionalidade = document.getElementById("erroNacionalidade");
var objetoAntecedentes = document.getElementById("antecedentes")
var objetoerrocheck = document.getElementById("Errocheck")



var listaCompras = { ameixas: 3, pera:5, carne:2} 
console.log(listaCompras.ameixas)



function cadastrar () {
    if (ValidarIdade()) {
        if (ValidandoNacionalidade()) {
        if ( validarAntecedentes()) {
            alert("Cadastrado")
        } 
    }
}
}








function capturarValorDoH1 () {
    console.log(objetoTitulo.textContent);
}

function modificarValorDoH1 () {
objetoTitulo.innerHTML = "meu novo titulo";

}
function PintarDeVermelho() {
    objetoTitulo.style.color ="Orange";
}
function centralizar() {
    objetoTitulo.style.textAlign ="Center";
}

function  ValidarIdade() {
    if (Number(objetoValidarIdade.value) >= 18 ) {
     return true;
    }
    objetoErroIdade.innerHTML = "idade inválida";
    console.log("Idade inválida")
    return false;

}
function  ValidandoNacionalidade () {
    objetoValidarNacionalidade.value = objetoValidarNacionalidade.value.toLowerCase()
    
    if (String(objetoValidarNacionalidade.value) == "brasileiro" ) {
     return true;
    }
    objetoErroNacionalidade.innerHTML = "Nacionalidade Inválida";
    return false;
}
function validarAntecedentes () {
    if (objetoAntecedentes.checked) {
        objetoerrocheck.innerHTML = " Possui antecedentes criminais";
        return false
    
    }
        return true
}








