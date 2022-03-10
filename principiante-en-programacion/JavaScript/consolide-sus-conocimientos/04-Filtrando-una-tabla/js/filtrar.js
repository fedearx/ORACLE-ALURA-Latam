var campoFiltro = document.querySelector("#filtrar-tabla");
// console.log(campoFiltro);

campoFiltro.addEventListener("input", function() {

  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNombre = paciente.querySelector(".info-nombre");      // selecciona una columna exacta
      var nombre = tdNombre.textContent;
      
      // trabajando con expresiones regulares
      var expresion = new RegExp(this.value, "i");                // nop diferencia entre mayusculas y minusculas

      // si no es parte del nombre
      if (!expresion.test(nombre)) {
        paciente.classList.add("invisible");                      // no es igual, lo pone inviisble
      } else {
        paciente.classList.remove("invisible");                   // elimina la clase invisible, lo hace visible nuevamente
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisible");
    }
  }
})