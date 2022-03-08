var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event) {
  event.preventDefault();     // para prevenir lo que hace por default (comportamiento padron)

  var form = document.querySelector("#form-adicionar");
  var paciente = capturarDatosPaciente(form);  // creo el objeto
  var pacienteTr = construirTr(paciente);
  var tabla = document.querySelector("#tabla-pacientes");
  tabla.appendChild(pacienteTr);          // le digo a la tabla que adopte al pacienteTr
  form.reset();   // para que limpie el formulario
  
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