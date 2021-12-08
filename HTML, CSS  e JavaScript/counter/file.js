let res = document.querySelector("div#retorno")
        let numero = 0 
            
            function somar() {    
                numero  ++
                res.innerHTML = `<p>O contador está com <mark>${numero}</mark> cliques.</p>`
            }
        
            function zerar() { 
                numero = 0
                res.innerHTML = null
            }