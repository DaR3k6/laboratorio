let ciudad = document.getElementById("ciudad").value;
let silla = document.getElementById("silla").value;

let pesoMaletas = document.getElementById("pesoMaletas").value;
let pasajeros = document.getElementById("pasajeros").value;
let resultado = document.getElementById("capaMostrar");

function liquidar() {
  if (ciudad == 0 && silla == 0) {
    let adicional = 0;
    let tiquetes = 150000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000;
    }
    tp = adicional + tiquetes;
    return (resultado.innerHTML =
      "Tiquetes: " +
      tiquetes +
      `<br>` +
      "PesoAdicional: " +
      adicional +
      `<br>` +
      "Total a pagar: " +
      tp);
  }
}
