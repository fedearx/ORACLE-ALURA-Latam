var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click", function() {

  var xhr = new XMLHttpRequest;       // objeto para obtener informacion
  xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");   // donde lo abre y de cual URL
  
  // lo pongo a escuchar, hasta que cargue algo
  xhr.addEventListener("load", function(){

    var errorAjax = document.querySelector("#error-ajax");   // el span que informa

    // si pudo encontrar los datos
    if (xhr.status == 200) {
      errorAjax.classList.add("invisible");           // si no hay error no me muestres nada
      var respuesta = xhr.responseText;               // tiene lo que cargo, esta en crudo con formato json
      // convierto los datos para poderlos usar
      var pacientes = JSON.parse(respuesta);

      pacientes.forEach(function(paciente) {
        adicionarPacienteEnLaTabla(paciente);
        
      });
    } else {
      errorAjax.classList.remove("invisible");          // para que se vea el mensaje de error
      // si no entro los datos, me indica erl error que paso
      console.log(xhr.status);
      console.log(xhr.responseText);
    }

  })
  xhr.send();                         // desopues de abrirlo lo envio
})
