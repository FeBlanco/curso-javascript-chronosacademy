function maiorValor(valor1, valor2) {
    let maior;
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);

    if (valor1 > valor2) {
        maior = valor1;
    } else {
        maior = valor2;
    }
    return maior;
}

const form = document.querySelector("form");
form.onsubmit = function(event){
    event.preventDefault();
    const valor1 = document.querySelector("#valor1");
    const valor2 = document.querySelector("#valor2");
    const maior = document.querySelector("#maior");

    maior.value = maiorValor(valor1.value, valor2.value);
}