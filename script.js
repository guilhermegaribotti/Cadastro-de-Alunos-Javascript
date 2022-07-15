let aAlunos = [];
let indiceSelecionado;
let modoEdicao = false;

function cadastrarAluno() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let nascimento = document.getElementById("dataNascimento").value;
    let nota = document.getElementById("nota").value;

    alert("Aluno " + nome + " foi cadastrado com sucesso.");

    let u = { nome: nome, email: email, telefone: telefone, nascimento: nascimento, nota: nota };
    aAlunos.push(u);
    listarAlunos();

}

function listarAlunos() {
    let lista = "";
    for (let i = 0; i < aAlunos.length; i++) {
        lista += "<button onclick='excluirAluno( " + i + ")'> - </button>  <span onclick='mostrarDadosAluno(" + i + ")'>" + aAlunos[i].nome + "</span><br>";

    }

    document.getElementById("listarUsuarios").innerHTML = lista;

}

function excluirAluno(indice) {
    aAlunos.splice(indice, 1);
    if (indice == indiceSelecionado) {
        indiceSelecionado--;
        if (indiceSelecionado < 0) indiceSelecionado = 0;
        mostrarDadosAluno(indiceSelecionado)
    }
    listarAlunos();


}

function mostrarDadosAluno(indice) {
    indiceSelecionado = indice;
    document.getElementById("idNome").innerHTML = aAlunos[indice].nome;
    document.getElementById("idEmail").innerHTML = aAlunos[indice].email;
    document.getElementById("idTelefone").innerHTML = aAlunos[indice].telefone;
    document.getElementById("idNascimento").innerHTML = aAlunos[indice].nascimento;
    document.getElementById("idNota").innerHTML = aAlunos[indice].nota;
    modoEdicao = false;
    // document.getElementById("botaoEditar").innerHTML = "Editar Dados";

}

function editarDadosAluno() {
    if (!modoEdicao) {
        document.getElementById("idNome").innerHTML = "<input id='inputNome' value='" + aAlunos[indiceSelecionado].nome + "'>";
        document.getElementById("idEmail").innerHTML = "<input id='inputEmail' value='" + aAlunos[indiceSelecionado].email + "'>";
        document.getElementById("idTelefone").innerHTML = "<input id='inputEmail' value='" + aAlunos[indiceSelecionado].telefone + "'>";
        document.getElementById("idNascimento").innerHTML = "<input id='inputNascimento' value='" + aAlunos[indiceSelecionado].nascimento + "'>";
        document.getElementById("idNota").innerHTML = "<input id='inputNota' value='" + aAlunos[indiceSelecionado].nota + "'>";
        document.getElementById("botaoEditar").innerHTML = "Confirmar Edição";
        modoEdicao = true;

    } else {
        aAlunos[indiceSelecionado].nome = document.getElementById("inputNome").value;
        aAlunos[indiceSelecionado].email = document.getElementById("inputEmail").value;
        aAlunos[indiceSelecionado].telefone = document.getElementById("inputTelefone").value;
        aAlunos[indiceSelecionado].nascimento = document.getElementById("inputNascimento").value;
        aAlunos[indiceSelecionado].nota = document.getElementById("inputNota").value;
        mostrarDadosAluno(indiceSelecionado);
        listarAlunos();

    }

}
