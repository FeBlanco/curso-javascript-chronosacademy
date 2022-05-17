console.log("Hello Word!");
const form = document.querySelector("form");
form.onsubmit = function (){
    calculoArea ();

}
function calculoArea (){
    let area;
    let base = document.querySelector("#base");
    let altura = document.querySelector("#altura");
    area = base.value * altura.value / 2;
    alert("Área Toral: "+area+"m2");
}