function test(){ 
    let letter = document.getElementById("letra").value
        let res = document.getElementById("res")
        letter = letter.toLowerCase();

            if (letter =="a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
                res.innerHTML = "É uma <strong>VOGAL</strong>!"
            }else{
                res.innerHTML = "É uma <strong>CONSOANTE</strong>!"
            }
        }
    
    

