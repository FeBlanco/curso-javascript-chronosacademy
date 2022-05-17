function tabuada (valor){
    let resultado =  "";
    for(var i = 1; i < 11; i++){
        valor * i;
        resultado += valor + " X " + i + " = " + valor * i+"\n";
    }
    return resultado;
}

const form = document.querySelector("form");
form.onsubmit = function(event) {
    event.preventDefault();

    const valor1 = document.querySelector("#valor1");
    const resultado = document.querySelector("#tabuada");

    resultado.value = tabuada (valor1.value);
}
