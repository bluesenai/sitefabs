const envelope =
    document.getElementById("envelope");

const carta =
    document.getElementById("carta");

envelope.addEventListener("click", () => {

    envelope.style.display = "none";

    carta.style.display = "block";

});