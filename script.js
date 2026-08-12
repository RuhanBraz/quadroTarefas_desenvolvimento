let lista = [];

function entrada() {

    const tarefa = document.getElementById("novaTarefa").value;
    
    const idTarefa = Date.now();

    lista.push ({
        id: idTarefa,
        tarefa: tarefa
    });

    console.log(lista);

    exibirTarefas();
}


function exibirTarefas(){

    const lTarefas = document.getElementById("blocos");
        lTarefas.innerHTML = lista.map(t =>
            `<div class="exibidas">
                ${t.tarefa} <button class="dentro" onclick="editarTarefa(${t.id})">editar</button>
                <button class="dentro" onclick="concluirTarefa(${t.id})">concluir</button>
            </div>`
        ).join("");
}