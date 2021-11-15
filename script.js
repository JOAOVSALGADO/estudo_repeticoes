// var c = 1 
//while(c<50){
//console.log('tudo bem' + c)
//c++
//}

//var c = 1
//Os dois programas tem a mesma funcionalidade, o "do" quer dizer que ira imprimir determinado comando enquanto "while" satistisfazer essa condição.Tanto faz escrever de um jeito ou de outro.
//do {
//console.log('tudo bem ' + c)
//c++
//}
//while (c < 10) 

//var c = 1 
//while (c < 6){
//console.log (c)
// c++
//}

//for (var c = 1; c <= 10; c++) {
//console.log (c)
//}

function verificar() {

    var num1 = window.document.getElementById('n1')
    var num2 = window.document.getElementById('n2')
    var num3 = window.document.getElementById('n3')
    var nu1 = Number(num1.value)
    var nu2 = Number(num2.value)
    var nu3 = Number(num3.value)
    res.innerHTML = "Contando: "
    
    if (num1.value.length ==0 || num2.value.length == 0 || num3.value.length == 0){window.alert("[ERRO] faltam dados")}
    else{if (nu1<nu2){
        for (var c = nu1; c <= nu2; c += nu3) {
            res.innerHTML += ' ' + c + '\u{1f449}'
            document.body.style.background = '#515154' 
        }
    
    }else {
        for (var c = nu1; c >= nu2; c -= nu3) {
            res.innerHTML += ' ' + c + '\u{1f449}'

            document.body.style.background = 'blue' 
            
    }
      
}res.innerHTML += "\u{1f3c1}" 
}
    
}
