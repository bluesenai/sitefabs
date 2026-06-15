const dataInicio = new Date("2026-03-06");

function atualizarContador() {

    const hoje = new Date();

    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();
    let dias = hoje.getDate() - dataInicio.getDate();

    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(
            hoje.getFullYear(),
            hoje.getMonth(),
            0
        );

        dias += ultimoMes.getDate();
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    document.getElementById("anos").textContent =
        String(anos).padStart(2, "0");

    document.getElementById("meses").textContent =
        String(meses).padStart(2, "0");

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");
}

atualizarContador();

setInterval(atualizarContador, 1000);