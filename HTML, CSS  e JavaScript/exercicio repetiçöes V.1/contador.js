
let fim = document.getElementById("fim");
let passo = document.getElementById("passo")



let botao = document.getElementById("contar")
    botao.addEventListener("click",contar);

function contar () { 
    let retorno = document.getElementById("ret")
    let n1 = document.getElementById("inicio");
    let n2 = document.getElementById("fim");
    let n3 = document.getElementById("passo")
    let inicio = Number(n1.value);
    let fim = Number(n2.value);
    let passo = Number(n3.value);
    if (inicio == undefined) {
        alert ("[ERRO] o campo 'Inicio' não pode ficar vazio!")
     }else if (fim == "") { 
        alert ("[ERRO] o campo 'Fim' não pode ficar vazio!")
     }else if (passo ==""){
        alert ("[ERRO] o campo 'Passo' não pode ficar vazio!")
     }else{
         if(inicio<fim) { 
            for(let contar = inicio; contar <= fim; contar +=passo){
                retorno.innerHTML += `${contar} \u{1F449}`
            }
        }else {
            for(let contar =inicio;contar>=fim;contar-=passo)
                retorno.innerHTML +=`${contar} \u{1F449}`
            }   
        retorno.innerHTML += `\u{1F3C1}`	

     }
}

//for (var tal = 0; tal <=0;tal+=0){

