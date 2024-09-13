let precio = 400000;
let contador = 1;
let total = precio*contador;

let precioSpan = document.querySelector(".precioInicial").innerHTML = precio;

document.querySelector(".cantidad").innerHTML = contador;
document.querySelector(".total").innerHTML = total;

function sumar (){
    contador = contador + 1;
    total= precio * contador;
    document.querySelector(".cantidad").innerHTML = contador;
    document.querySelector(".total").innerHTML = total;
}

function restar (){
    contador = contador - 1;
    total= precio * contador;
    document.querySelector(".cantidad").innerHTML = contador;
   document.querySelector(".total").innerHTML = total;
}




