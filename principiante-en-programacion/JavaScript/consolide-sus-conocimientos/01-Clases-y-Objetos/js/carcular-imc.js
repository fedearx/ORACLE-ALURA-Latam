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
    tdIMC.textContent = calcularIMC(peso, altura);
  }

}

function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura)   // calculó el IMC
  return imc.toFixed(2);
}

