
function tabuada() {
    let num = document.getElementById("numero")
    let tab = document.getElementById("seltab")
    
    if (num.value.length == 0){
        window.alert(`[ERRO] por favor digite um número!`)
    }else {
        let n= Number(num.value)
        tab.innerHTML = ""
        
        for(c = 1;c<=10;c++) { 
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`// esse código tem mais utilidade em linguagens como php, em javascript nao faz tanto sentido
            tab.appendChild(item)
        }

}
}

