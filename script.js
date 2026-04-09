

console.log("Script loaded");

const campoCasa = document.getElementById("campoCasa");
const campoApto = document.getElementById("campoApto");
const quintalSeguro = document.getElementById("quintalSeguro");
const permitePet = document.getElementById("permitePet");

function atualizarCamposMoradia() {
    let moradia = document.getElementById("moradia").value;
    if (moradia === "casa") {
        campoCasa.style.display = "block";
        campoApto.style.display = "none";
        quintalSeguro.disabled = false;
        permitePet.disabled = true;
        permitePet.value = "";
    } else if (moradia === "apartamento") {
        campoCasa.style.display = "none";
        campoApto.style.display = "block";
        quintalSeguro.disabled = true;
        quintalSeguro.value = "";
        permitePet.disabled = false;
    } else {
        campoCasa.style.display = "none";
        campoApto.style.display = "none";
        quintalSeguro.disabled = true;
        quintalSeguro.value = "";
        permitePet.disabled = true;
        permitePet.value = "";
    }
}

document.getElementById("moradia").addEventListener("change", atualizarCamposMoradia);

atualizarCamposMoradia();

document.getElementById("formAdocao").addEventListener("submit", function (e) {
    console.log("Submit event triggered");
    e.preventDefault();

    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked') ? document.querySelector('input[name="quintal"]:checked').value : '';
    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value, 10);
    let cpf = document.getElementById("CPF").value;
    console.log("Valores:", { moradia, quintal, nome, idade, cpf });
    const cpfsCadastrados = ["123.456.789-00", "111.222.333-44"];
    let motivo = document.getElementById("motivo").value;
    let motivoLower = motivo.toLowerCase();
if(idade < 18){
    alert("Desculpe, mas é necessário ter pelo menos 18 anos para adotar um pet.");
    return;
}

if ((moradia === "apartamento" || moradia === "casa") &&
    (quintal === "sim" || quintal === "nao")) {
    if (moradia === "apartamento" && quintal === "sim") {
        alert("Apartamentos não podem possuir quintal externo.");
        return;
    }
} else {
    alert("Opção de moradia ou quintal inválida. Por favor, revise o formulário.");
    return;
}
if (moradia === "casa") {
    let quintalSeguro = document.getElementById("quintalSeguro").value;
    if (!quintalSeguro) {
        alert("Por favor, selecione se o quintal é seguro.");
        return;
    }
} else if (moradia === "apartamento") {
    let permitePet = document.getElementById("permitePet").value;
    if (!permitePet) {
        alert("Por favor, selecione se o condomínio permite animais.");
        return;
    }
}
    if (cpfsCadastrados.includes(cpf)) {
        alert("Este CPF já possui uma solicitação de adoção em análise.");
        return;
    }
    if (motivo.length < 10 || motivoLower === "porque sim" || motivoLower === "eu quero") {
        alert("Por favor, forneça um motivo mais detalhado para a adoção.");
        return;
    }
    alert("Parabéns, " + nome + "! Seu formulário foi enviado com sucesso para a ONG.");
});