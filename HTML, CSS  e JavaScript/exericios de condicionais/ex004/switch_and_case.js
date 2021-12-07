//Função para buscar o número digitado pelo úsuario, comparar com as opções abaixo e retornar um mês do ano.
            //Function to search the number entered by the user, compare with the options below and return a month of the year.
            function show_month(){
                let month_ = document.querySelector('input#month')
                let month  = Number(month_.value)
                let ret = document.querySelector('div#ret')

                switch(month){
                    case 1:
                        ret.innerHTML = "january";
                        break;
                    case 2:
                        ret.innerHTML = 'February';
                        break;
                    case 3:
                        ret.innerHTML = 'March';
                        break;
                    case 4:
                        ret.innerHTML = 'April';
                        break;
                    case 5:
                        ret.innerHTML = 'May';
                        break;
                    case 6:
                        ret.innerHTML = 'June';
                        break;
                    case 7:
                        ret.innerHTML = 'July';
                        break;
                    case 8:
                        ret.innerHTML = 'August';
                        break;
                    case 9:
                        ret.innerHTML = 'September';
                        break;
                    case 10:
                        ret.innerHTML = 'October';
                        break;
                    case 11:
                        ret.innerHTML = 'November';
                    default:
                        ret.innerHTML = 'December';                      
                } 
            }
                