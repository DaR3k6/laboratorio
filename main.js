function liquidar() {
  let ciudad = document.getElementById("ciudad").value;
  let silla = document.getElementById("silla").value;

  let pesoMaletas = document.getElementById("pesoMaletas").value;
  let pasajeros = document.getElementById("pasajeros").value;
  let resultado = document.getElementById("capaMostrar");
  //Barranquilla
  if (ciudad == 0 && silla == 0) {
    let adicional = 0;
    let tiquetes = 150000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
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
  if (ciudad == 0 && silla == 1) {
    let adicional = 0;
    let tiquetes = 150000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
    }
    tp = adicional + tiquetes + 20000;
    return (resultado.innerHTML =
      "Tiquetes: " +
      tiquetes +
      `<br>` +
      "PesoAdicional: " +
      adicional +
      `<br>` +
      "Silla Ejecutiva: " +
      20000 +
      `<br>` +
      "Total a pagar: " +
      tp);
  }
  if (ciudad == 0 && silla == 2) {
    let adicional = 0;
    let tiquetes = 150000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
    }
    tp = adicional + tiquetes + 40000;
    return (resultado.innerHTML =
      "Tiquetes: " +
      tiquetes +
      `<br>` +
      "PesoAdicional: " +
      adicional +
      `<br>` +
      "Silla VIP (Reclama tu copa de whisky): " +
      40000 +
      `<br>` +
      "Total a pagar: " +
      tp);
  }

  //Medellin
  if (ciudad == 1 && silla == 0) {
    let adicional = 0;
    let tiquetes = 100000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
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
  if (ciudad == 1 && silla == 1) {
    let adicional = 0;
    let tiquetes = 100000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
    }
    tp = adicional + tiquetes + 20000;
    return (resultado.innerHTML =
      "Tiquetes: " +
      tiquetes +
      `<br>` +
      "PesoAdicional: " +
      adicional +
      `<br>` +
      "Silla Ejecutiva: " +
      20000 +
      `<br>` +
      "Total a pagar: " +
      tp);
  }
  if (ciudad == 1 && silla == 2) {
    let adicional = 0;
    let tiquetes = 100000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
    }
    tp = adicional + tiquetes + 40000;
    return (resultado.innerHTML =
      "Tiquetes: " +
      tiquetes +
      `<br>` +
      "PesoAdicional: " +
      adicional +
      `<br>` +
      "Silla VIP (Reclama tu copa de whisky): " +
      40000 +
      `<br>` +
      "Total a pagar: " +
      tp);
  }

  //Cali
  if (ciudad == 2 && silla == 0) {
    let adicional = 0;
    let tiquetes = 90000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
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
  if (ciudad == 2 && silla == 1) {
    let adicional = 0;
    let tiquetes = 90000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
    }
    tp = adicional + tiquetes + 20000;
    return (resultado.innerHTML =
      "Tiquetes: " +
      tiquetes +
      `<br>` +
      "PesoAdicional: " +
      adicional +
      `<br>` +
      "Silla Ejecutiva: " +
      20000 +
      `<br>` +
      "Total a pagar: " +
      tp);
  }
  if (ciudad == 2 && silla == 2) {
    let adicional = 0;
    let tiquetes = 90000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
    }
    tp = adicional + tiquetes + 40000;
    return (resultado.innerHTML =
      "Tiquetes: " +
      tiquetes +
      `<br>` +
      "PesoAdicional: " +
      adicional +
      `<br>` +
      "Silla VIP (Reclama tu copa de whisky): " +
      40000 +
      `<br>` +
      "Total a pagar: " +
      tp);
  }

  //Cartagena
  if (ciudad == 3 && silla == 0) {
    let adicional = 0;
    let tiquetes = 170000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
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
  if (ciudad == 3 && silla == 1) {
    let adicional = 0;
    let tiquetes = 170000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
    }
    tp = adicional + tiquetes + 20000;
    return (resultado.innerHTML =
      "Tiquetes: " +
      tiquetes +
      `<br>` +
      "PesoAdicional: " +
      adicional +
      `<br>` +
      "Silla Ejecutiva: " +
      20000 +
      `<br>` +
      "Total a pagar: " +
      tp);
  }
  if (ciudad == 3 && silla == 2) {
    let adicional = 0;
    let tiquetes = 170000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
    }
    tp = adicional + tiquetes + 40000;
    return (resultado.innerHTML =
      "Tiquetes: " +
      tiquetes +
      `<br>` +
      "PesoAdicional: " +
      adicional +
      `<br>` +
      "Silla VIP (Reclama tu copa de whisky): " +
      40000 +
      `<br>` +
      "Total a pagar: " +
      tp);
  }

  //Bogota
  if (ciudad == 4 && silla == 0) {
    let adicional = 0;
    let tiquetes = 120000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
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
  if (ciudad == 4 && silla == 1) {
    let adicional = 0;
    let tiquetes = 120000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
    }
    tp = adicional + tiquetes + 20000;
    return (resultado.innerHTML =
      "Tiquetes: " +
      tiquetes +
      `<br>` +
      "PesoAdicional: " +
      adicional +
      `<br>` +
      "Silla Ejecutiva: " +
      20000 +
      `<br>` +
      "Total a pagar: " +
      tp);
  }
  if (ciudad == 4 && silla == 2) {
    let adicional = 0;
    let tiquetes = 120000 * pasajeros;
    if (pesoMaletas > 50) {
      adicional = (pesoMaletas - 50) * 15000 * pasajeros;
    }
    tp = adicional + tiquetes + 40000;
    return (resultado.innerHTML =
      "Tiquetes: " +
      tiquetes +
      `<br>` +
      "PesoAdicional: " +
      adicional +
      `<br>` +
      "Silla VIP (Reclama tu copa de whisky): " +
      40000 +
      `<br>` +
      "Total a pagar: " +
      tp);
  }
}
