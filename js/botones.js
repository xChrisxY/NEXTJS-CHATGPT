
// Generación de ventana Emergente
const boton = document.querySelector("#boton-1");
const ventanaEmergente = document.querySelector("#ventanaEmergente")

boton.addEventListener("mouseover", function () {

      ventanaEmergente.style.display = "block";

});

boton.addEventListener("mouseout", function () {

      ventanaEmergente.style.display = "none"

});

const boton2 = document.querySelector("#boton-2");
const ventanaEmergente2 = document.querySelector("#ventanaEmergente-2");

boton2.addEventListener("mouseover", function () {

      ventanaEmergente2.style.display = "block";

});

boton2.addEventListener("mouseout", function () {

      ventanaEmergente2.style.display = "none";

});

