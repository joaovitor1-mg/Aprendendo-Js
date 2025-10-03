class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

let produtos = [];

let inputNome = document.getElementById("nomeProduto");
let inputPreco = document.getElementById("precoProduto");
let btnAdicionar = document.getElementById("btnadicionar");
let lista = document.getElementById("listaProdutos");

function atualizarLista() {
    lista.innerHTML = ""
    produtos.forEach(p => {
        let li = document.createElement("li");
        li.textContent = `${p.nome} - R$ ${p.preco}`;
        lista.appendChild(li);
    });
}

btnAdicionar.addEventListener("click", () => {
    let nome = inputNome.value;
    let preco = parseFloat(inputPreco.value);
    
    if (nome && !isNaN(preco) && preco > 0) {
        let novoProduto = new Produto(nome, preco);
        produtos.push(novoProduto);
        atualizarLista();
        inputNome.value = "";
        inputPreco.value = "";
    } else {
        alert("Preencha corretamente os campos!");
    }
});
