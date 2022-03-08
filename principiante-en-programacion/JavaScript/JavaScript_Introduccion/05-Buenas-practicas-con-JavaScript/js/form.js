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
  imcTd.textContent = calcularIMC(peso, altura);

  pacienteTr.appendChild(nombreTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  tabla.appendChild(pacienteTr);          // le digo a la tabla que adopte al pacienteTr
  
} );