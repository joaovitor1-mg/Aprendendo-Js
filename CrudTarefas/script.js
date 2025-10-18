// João Vitor Martinelli, Daniele Chagas, Maria Eduarda Carvalho

class Tarefa {
  constructor(descricao) {
    this.descricao = descricao;
    this.concluida = false;
  }

  marcarConcluida(valor) {
    this.concluida = valor;
  }

  editar(descricao) {
    this.descricao = descricao;
  }
}

let tarefas = [];
let indiceEdicao = -1;

const btnSalvar = document.getElementById("btnSalvar");
const inputTarefa = document.getElementById("tarefa");
const listaTarefas = document.getElementById("listaTarefas");

// Atualizar a lista de tarefas
function atualizarLista() {
  listaTarefas.innerHTML = "";
  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarefa.concluida;
    checkbox.onchange = () => {
      tarefa.marcarConcluida(checkbox.checked);
      atualizarLista();
    };

    const span = document.createElement("span");
    span.textContent = tarefa.descricao;
    if (tarefa.concluida) {
      span.style.textDecoration = "line-through";
    }

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", () => editarTarefa(index));

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.addEventListener("click", () => excluirTarefa(index));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnEditar);
    li.appendChild(btnExcluir);
    listaTarefas.appendChild(li);
  });
}

// Limpar input e resetar button
function limparInput() {
  inputTarefa.value = "";
  indiceEdicao = -1;
  btnSalvar.textContent = "Adicionar";
}

// Adicionar ou editar tarefa
btnSalvar.addEventListener("click", () => {
  const descricao = inputTarefa.value.trim();
  if (!descricao) {
    alert("Preencha o nome da tarefa");
    return;
  }

  if (indiceEdicao === -1) {
    tarefas.push(new Tarefa(descricao));
  } else {
    tarefas[indiceEdicao].editar(descricao);
  }

  atualizarLista();
  limparInput();
});

// Editar
function editarTarefa(index) {
  inputTarefa.value = tarefas[index].descricao;
  indiceEdicao = index;
  btnSalvar.textContent = "Atualizar";
}

// Excluir
function excluirTarefa(index) {
  tarefas.splice(index, 1);
  atualizarLista();
  limparInput();
}
