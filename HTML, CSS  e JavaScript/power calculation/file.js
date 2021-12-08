function calcular() { 
            
    var n1 = document.getElementById ("base");
    var n2 = document.getElementById ("expo");
    var base = Number(n1.value);
    var expoente = Number(n2.value);
    var calculo = base ** expoente;
    var resultado = document.getElementById("res")

    if (base > 100) { 

        alert ("[ERRO} Digite um número base de 0 a 100")
    }else {

        var escrita = ""
        if (expoente == 0) {
            escrita = "a zero"
        } else if (expoente == 1) { 
            escrita = "à um"
        }else if (expoente == 2) {
            escrita = "ao quadrado"
        }else if (expoente == 3) {
            escrita = "ao cubo"
        }else if (expoente == 4) { 
            escrita = "à quarta potência"
        }else if (expoente == 5) { 
            escrita = "à quinta potência"
        }else if (expoente == 6) {
            escrita = "à sexta potência"
        }else if (expoente == 7){
            escrita = "à sétima potência"
        }else if (expoente == 8){
            escrita = "à oitava potência"
        }else if (expoente == 9){ 
            escrita = "à nona potência"                
        } else {
            escrita = "à décima potência"
        }
        
        res.innerHTML = `O valor de ${base} elevado ${escrita} é ${calculo}!` 
    }
}
