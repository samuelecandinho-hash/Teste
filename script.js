document.getElementsByID("formAdocao").addEventlistener("submit", function (e) {
    e.preventdefault();

    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value

    if(idade < 18){
        alert("oloko")
    }
}