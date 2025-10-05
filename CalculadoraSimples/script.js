
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultadolog = document.getElementById("resultado");
const botoes = document.querySelectorAll("button")

function calcular(operacao) {
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat (num2.value);

let resultado;
let corDeFundo;

switch (operacao) {
    case "soma":
        resultado = valor1 + valor2;
        corDeFundo = "lightgreen";
        break;
    case "subtracao":
        resultado = valor1 - valor2;
        corDeFundo = "lightblue";
        break;
    case "multiplicacao": 
        resultado = valor1 * valor2;
        corDeFundo = "peachpuff";
        break;
    case "divisao":
        if (valor2 === 0) {
            alert("divisão por zero jhow");
            return;
        }
        resultado = valor1 / valor2;
        corDeFundo = "lavender";
        break;
}
resultadolog.textContent = `Resultado: ${resultado}`;
document.body.style.backgroundColor = corDeFundo;
}

botoes[0].addEventListener("click", () => calcular("soma"));
botoes[1].addEventListener("click", () => calcular("subtracao"));
botoes[2].addEventListener("click", () => calcular("multiplicacao"));
botoes[3].addEventListener("click", () => calcular("divisao"));