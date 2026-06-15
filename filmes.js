const filmes = document.querySelectorAll(".filme");

const modal = document.getElementById("modal");

const titulo = document.getElementById("titulo");
const info = document.getElementById("info");
const sinopse = document.getElementById("sinopse");
const poster = document.getElementById("posterGrande");

filmes.forEach(filme => {

    filme.addEventListener("click", () => {

        titulo.textContent =
            filme.dataset.titulo;

        info.innerHTML = `
    <strong>Diretor:</strong> ${filme.dataset.diretor}<br>
    <strong>Ano:</strong> ${filme.dataset.ano}
`;

        sinopse.textContent =
            filme.dataset.sinopse;

        poster.src =
            filme.querySelector("img").src;

        modal.style.display = "flex";

    });

});

document.getElementById("fechar")
.addEventListener("click", () => {

    modal.style.display = "none";

});