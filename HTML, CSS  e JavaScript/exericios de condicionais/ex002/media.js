function calcular() {
    let text1 = document.querySelector("input#texto1")
    let text2 = document.querySelector("input#texto2")
    let n1 = Number(text1.value)
    let n2 = Number(text2.value)
    let media = (n1 + n2)/2
    let ret = document.querySelector("div#ret")

    if (media>=7){
        ret.innerHTML = `A média obtida pelo aluno x é <strong>${media}</strong> portanto ele(a) está <mark id = "mark1">APROVADO!</mark>`
    }else{
        ret.innerHTML = `A média obtida pelo aluno x é <strong>${media}</strong> portanto ele(a) está <mark id = "mark2">REPROVADO!</mark>`
       }    
}