let fnum= document.getElementById("fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true 
    }else{
        return false
    }
}

function inLista(n, l) { 
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(fnum.value) && ! inLista(fnum.value, valores)) {
        valores.push(Number(fnum.value))
        let item = document.createElement ("option")
        item.text = `Valor ${fnum.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    }else if(Number(fnum.value) <1 || Number(fnum.value) >100){
        alert("Apenas números de 1 à 100!")
    
    }else{ 
        alert("Número já adicionado ou não encontrado na lista !")
    }
    fnum.value = ""
fnum.focus()
} 

function finalizar() {
    if (valores.length ==0) {
       window.alert("Adicione valores antes de finalizar!")
    } else {
        var tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
            for(let pos in valores) {
                if (valores[pos] > maior)
                maior = valores[pos]
                if(valores[pos] < menor)
                menor = valores[pos]
            }

        }
    res.innerHTML = ""
    res.innerHTML +=`<p> Ao todo temos ${tot} números.</p>`
   
    }

