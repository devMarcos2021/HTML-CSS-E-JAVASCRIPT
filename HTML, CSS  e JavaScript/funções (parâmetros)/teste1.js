function parOuImpar(n){
if(n % 2 ==0){
    return`O número ${n} é par!`
} else { 
    return`O número ${n} é impar!`
    }
}
var num = parOuImpar(3)
    console.log(num)