console.log("Olá mundo!");

var titulo = document.querySelector(".titulo-pagina");
titulo.textContent = "Sistema - EdiCursos";

var alunos = document.querySelectorAll(".aluno");

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
    var trAluno = alunos[i];

    var tdNome = trAluno.querySelector(".td-nome");
    var nome = tdNome.textContent;

    var tdTrabalho = trAluno.querySelector(".td-trabalho");
    var trabalho = Number(tdTrabalho.textContent);

    var tdProva = trAluno.querySelector(".td-prova");
    var prova = Number(tdProva.textContent);

    var tdMedia = trAluno.querySelector(".td-media");

    var notaTrabalhoValida = true;
    var notaProvaValida = true;

    if (trabalho < 0 || trabalho > 10) {
        console.log("Nota do trabalho inválida");
        notaTrabalhoValida = false;
    }

    if (prova < 0 || prova > 10) {
        console.log("Nota da prova inválida");
        notaProvaValida = false;
    }

    if (notaTrabalhoValida && notaProvaValida) {
        var mediaAluno = (trabalho + prova) / 2;
        tdMedia.textContent = mediaAluno;

        if (mediaAluno < 7) {
            //Aluno foi reprovado
            //trAluno.style.backgroundColor = "salmon";
            trAluno.classList.add("aluno-reprovado");
        }
    } else {
        tdMedia.textContent = "Notas inválidas, verifique.";
    }
}