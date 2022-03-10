var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event) {
  event.preventDefault();     // para prevenir lo que hace por default (comportamiento padron)

  var form = document.querySelector("#form-adicionar");
  var paciente = capturarDatosPaciente(form);  // creo el objeto
  var pacienteTr = construirTr(paciente);

    // validar Paciente
  var errores = validarPaciente(paciente);

  if (errores.length > 0) {
    exibirMensajesErrores(errores);
    return;                                 // retorna vacia en la funcion anaonima
  }

  var tabla = document.querySelector("#tabla-pacientes");
  tabla.appendChild(pacienteTr);            // le digo a la tabla que adopte al pacienteTr
  form.reset();                             // para que limpie el formulario

  var mensajesErrores = document.querySelector("#mensajes-errores");
  mensajesErrores.innerHTML = "";           // para limpiar la lista de mensajes de error
  
} );

function capturarDatosPaciente(form) {
    // captura los datos del formulario
    // creo la clase
    var paciente = {
      nombre: form.nombre.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calcularIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function construirTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nombreTd = construirTd(paciente.nombre, "info-nombre");
    var pesoTd = construirTd(paciente.peso, "info-peso");
    var alturaTd = construirTd(paciente.altura, "info-altura");
    var gorduraTd = construirTd(paciente.gordura, "info-gordura");
    var imcTd = construirTd(paciente.imc, "info-imc");
  
    // asignar al tr de los td, y la tabla el tr
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function construirTd(dato, clase) {
  var td = document.createElement("td");
  td.classList.add(clase);
  td.textContent = dato;
  return td;
}

function validarPaciente(paciente) {
  var errores = [];

  if (paciente.nombre.length == 0 ) {
    errores.push("El nombre no puede estar vacío");
  }
  if (paciente.peso.length == 0 ) {
    errores.push("El peso no puede estar vacío");
  }
  if (paciente.altura.length == 0 ) {
    errores.push("La altura no puede estar vacía");
  }
  if (paciente.gordura.length == 0 ) {
    errores.push("El % gordura no puede estar vacío");
  }

  if (!validarPeso(paciente.peso)) {
    errores.push("El peso es incorrecto");
  } 
 
  if (!validarAltura(paciente.altura)) {
    errores.push("La altura es incorrecta");
  } 

  return errores;
}


function exibirMensajesErrores(errores) {

	var ul = document.querySelector("#mensajes-errores");
  ul.innerHTML = "";                           // para limpiar la lista de errores

  errores.forEach(function(error) {
    var li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });

}