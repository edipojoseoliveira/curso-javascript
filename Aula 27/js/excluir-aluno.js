var tabela = document.querySelector("#tabela-alunos");

tabela.addEventListener("click", function(event) {
    var elementoClicado = event.target;
    if (elementoClicado.classList.contains("btn-excluir")) {
        var celula = elementoClicado.parentNode;
        var linha = celula.parentNode;

        var tdId = linha.querySelector(".td-id");
        var id = tdId.textContent;
        console.log(id);

        deletarAlunoNaAPI(id);

        linha.remove();
    }
});

function deletarAlunoNaAPI(id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("DELETE", "http://localhost:8080/aluno/deletar?id=" + id);
    xmlhttp.send();
}