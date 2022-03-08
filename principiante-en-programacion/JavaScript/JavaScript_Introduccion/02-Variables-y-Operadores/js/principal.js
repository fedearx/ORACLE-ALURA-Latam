var paciente = document.querySelector("#primer-paciente");    // id #

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdIMC = paciente.querySelector(".info-imc");

var pesoEsValido = true;
var alturaEsValida = true;

if ((peso < 0) || (peso > 1000)) {
  console.log("Peso incorrecto");
  tdIMC.textContent = "Peso Incorrecto";
  pesoEsValido = false;
}

if ((altura < 0) || (altura > 3)) {
  console.log("Altura incorrecto");
  tdIMC.textContent = "Altura Incorrecta";
  alturaEsValida = false;
}

if (pesoEsValido && alturaEsValida) {
  var imc = peso / (altura * altura)   // calculó el IMC
  tdIMC.textContent = imc;
}
