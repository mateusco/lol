var cadastro = {
 nome: "Matheus",
 atestado_antecedente: false,
 idade: "17",
 nacionalidade: "Argentino",
}

if ( cadastro.atestado_antecedente == false) {
    if ( cadastro.idade >= 18 ) {
       if ( cadastro.nacionalidade == "Brasileiro" || cadastro.nacionalidade == "Argentino" ) {
            console.log("Cadastro: Aprovado") 

} else {
    console.log( "devido aos antecedentes criminais, o motorista não poderá realizar o cadastro.")
}

  }  else {
    console.log(" idade não aprovada")
    }

} else {
    console.log( "O motorista não é Brasileiro ou argentino.")
}


    /*function soma (a,b) {
        return a + b 
    }
    var resultado1 = soma(4,2)
    var resultado2 = soma(8,6)
    console.log(resultado1)
    console.log(resultado2)

    function subtração (a,b) {
        return a - b 
    }
    var resultado3 = subtração(4,2)
    var resultado4 = subtração(8,6)
    console.log(resultado3)
    console.log(resultado4)

    function divisão (a,b) {
        return a / b 
    }
    var resultado5 = divisão(4,2)
    var resultado6 = divisão(8,6)
    console.log(resultado5)
    console.log(resultado6)

function multiplicação (a,b) {
        return a * b 
    }
    var resultado7 = multiplicação(4,2)
    var resultado8 = multiplicação(8,6)
    console.log(resultado7)
    console.log(resultado8)


    function média (a,b) {
        return (a+b)/2 
    }
    var resultado9 = média(4,2)
    var resultado10 = média(8,6)
    console.log(resultado9)
    console.log(resultado10)
    */

