var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("dblclick", function(event) {
  // console.log("hicieron clic");            hacen click en la tabla
  // event.target.remove()                    elimina exactamente la fila y columno donde hago clic
  
  event.target.parentNode.classList.add("fadeOut"); // lo oculta 
  setTimeout(function() {
     event.target.parentNode.remove();              // elimina la fila completo
  },500);
});

/*
pacientes.forEach(function(paciente) {
  paciente.addEventListener("dblclick", function() {
    console.log("Realizaron 2 clics");
    this.remove();
  })
})
*/