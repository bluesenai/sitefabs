const btnVoltar = document.getElementById("voltar");

btnVoltar.addEventListener("click", () => {
    history.back();
});

let velocidade = 200;   // tempo inicial
let tamanhoMax = 300;   // tamanho inicial

function criarImagem() {

    const img = document.createElement("img");

    img.src = "velho.jpg";

    img.style.position = "absolute";

    // tamanho cresce conforme o tempo passa
    const tamanho = Math.random() * tamanhoMax + 50;
    img.style.width = tamanho + "px";

    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.top = Math.random() * window.innerHeight + "px";

    img.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(img);
}

function invasaoDeVelhos() {

    criarImagem();

    // acelera
    velocidade *= 0.97;

    if (velocidade < 1) {
        velocidade = 1;
    }

    // aumenta o tamanho máximo
    tamanhoMax *= 1.01;

    // impede imagens absurdamente gigantes
    if (tamanhoMax > 2000) {
        tamanhoMax = 2000;
    }

    setTimeout(invasaoDeVelhos, velocidade);
}

invasaoDeVelhos();