var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event) {
  event.preventDefault();     // para prevenir lo que hace por default (comportamiento padron)

  var form = document.querySelector("#form-adicionar");

  var nombre = form.nombre.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var tabla = document.querySelector("#tabla-pacientes");

  var pacienteTr = document.createElement("tr");
  var nombreTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  // hasta ahora crfee etiquetas 1 tr y 5 td

  nombreTd.textContent = nombre;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  tabla.appendChild(pacienteTr);          // le digo a la tabla que adopte al pacienteTr
  
} );





// querySelector --> solo selecciona un solo elemento
// var pacientes = document.querySelector(".paciente");

var pacientes = document.querySelectorAll(".paciente");    // id #    Clase .

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdIMC = paciente.querySelector(".info-imc");

  var pesoEsValido = true;
  var alturaEsValida = true;

  if ((peso < 0) || (peso > 1000)) {
    tdIMC.textContent = "Peso Incorrecto";
    pesoEsValido = false;
    // paciente.style.color = "lightcoral";               pinta todas las letras de la fila en rojo
    // paciente.style.backgroundColor = "lightcoral";     pinta todas las celdas de la fila en rojo
    paciente.classList.add("paciente-incorrecto");
  }

  if ((altura < 0) || (altura > 3)) {
    tdIMC.textContent = "Altura Incorrecta";
    alturaEsValida = false;
    paciente.classList.add("paciente-incorrecto");
  }

  if (pesoEsValido && alturaEsValida) {
    var imc = peso / (altura * altura)   // calculó el IMC
    tdIMC.textContent = imc.toFixed(2);   // toFixed(2), que tenga dos decimales
  }

}


