function verificar(){
    let nu1 = document.getElementById("num1")
    let nu2 = document.getElementById("num2")
    let nu3 = document.getElementById("num3")
    let ret = document.getElementById("ret")
    let n1 = Number(nu1.value)
    let n2 = Number(nu2.value)
    let n3 = Number(nu3.value)
    
    if(n1 > n2 && n1 > n3) {
        ret.innerHTML = `O número <strong>${n1}</strong> é o maior dentre os três números digitados.`
    } else if(n2>n3) {
        ret.innerHTML = `O número <strong>${n2}</strong> é o maior dentre os três números digitados.`
    } else {
        ret.innerHTML = `O número <strong>${n3}</strong> é o maior dentre os três números digitados`
    }
    if(n1 == n2 || n1 == n3 || n2 == n1 || n2 == n3 ) { 
        alert(`[ERRO] Os números se repetem!`)
    }
}