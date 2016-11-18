//variables publicas
var valor1 = "";
var historial = new Array();
var valor2 = "";
var Vmostrar = "";
var operacion;
var memoria = 0;
var pantalla = document.getElementById("result");
var subpantalla = document.getElementById("subresult");

var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");
var h5 = document.getElementById("h5");
//Fin
function mostar_num(numero) {
	if (numero == ".") {
		var pos = pantalla.value.indexOf(".");
		if (pos == -1) {
			valor1 += numero;
			pantalla.value = valor1;
			Vmostrar += numero;
			subpantalla.value = Vmostrar;

		}
	} else {
		valor1 += numero;
		pantalla.value = valor1;
		Vmostrar += numero;
		subpantalla.value = Vmostrar;

	}
}

function operar(valor) {

	if (pantalla.value != "" && subpantalla.value != "") {
		operacion = valor;
		valor2 = parseFloat(valor1);
		valor1 = " ";
		switch (operacion) {
			case 'suma':
				Vmostrar += " + ";
				subpantalla.value = Vmostrar;
				break;
			case 'restar':
				Vmostrar += " - ";
				subpantalla.value = Vmostrar;
				break;
			case 'multiplicar':
				Vmostrar += " x ";
				subpantalla.value = Vmostrar;
				break;
			case 'dividir':
				Vmostrar += " ÷ ";
				subpantalla.value = Vmostrar;
				break;
			case 'porcentaje':
				Vmostrar += " % ";
				subpantalla.value = Vmostrar;
				break;
			case 'raiz':
				valor1 = Math.pow(valor2, 0.5);
				pantalla.value = valor1;
				subpantalla.value = " = √(" + valor1 + ")";
				break;
			case 'exp':
				valor1 = Math.pow(valor2, 2);
				pantalla.value = valor1;
				subpantalla.value = " = sql(" + valor1 + ")";
				break;
		}
	}
}

function esIgual() {


	valor1 = parseFloat(valor1);
	switch (operacion) {
		case 'suma':
			valor1 += valor2;
			break;
		case 'restar':
			valor1 = valor2 - valor1;
			break;
		case 'multiplicar':
			valor1 *= valor2;
			break;
		case 'dividir':
			if (valor1 != 0) {
				valor1 = valor2 / valor1;
			} else {
				valor1 = "Error";
			}
			break;
		case 'porcentaje':
			var p = valor2 * valor1;
			valor1 = p / 100;
			break;
	}
	pantalla.value = valor1;
	Vmostrar += " = " + valor1;
	subpantalla.value = Vmostrar;
	historial.push(subpantalla.value);
	document.getElementById("dataHistory").innerHTML = historial.join("<br><hr>");
	document.getElementById("btnBH").style.display = "block";

	//console.log(historial);
	
	// if (h1.value == "") {
	// 	historial[0] = Vmostrar;
	// 	h1.value = historial[0];
	// 	console.log(h1.value);
	// } else {
	// 	if (h2.value == "") {
	// 		historial[1] = Vmostrar;
	// 		h2.value = historial[1];
	// 		console.log(h2.value);
	// 	} else {
	// 		if (h3.value == "") {
	// 			historial[2] = Vmostrar;
	// 			h3.value = historial[2];
	// 			console.log(h3.value);
	// 		} else {
	// 			if (h4.value == "") {
	// 				historial[3] = Vmostrar;
	// 				h4.value = historial[3];
	// 				console.log(h3.value);
	// 			} else {
	// 				if (h5.value == "") {
	// 					historial[4] = Vmostrar;
	// 					h5.value = historial[4];
	// 					console.log(h4.value);
	// 				}
	// 			}
	// 		}
	// 	}
	// }
	valor2 = parseFloat(valor1);
}

function borrar() {

	valor1 = "";
	valor2 = "";
	pantalla.value = " ";
	subpantalla.value = "";
	Vmostrar = "";
}

function Gmemoria() {

	valor1 = parseFloat(valor1);
	memoria = memoria + valor1;
}

function Mmemoria() {

	valor1 = memoria;
	pantalla.value = valor1;
	Vmostrar += memoria;
	subpantalla.value = Vmostrar;
}

function Bmemoria() {

	memoria = 0;
}

function Bretroceder() {

	//Para la Variable
	var c = valor1;
	var d = c.length - 1;
	valor1 = c.substring(0, d);
	//para la pantalla
	var str = pantalla.value;
	var L = str.length - 1;
	pantalla.value = str.substring(0, L);
	//para la subpantalla
	var ff = subpantalla.value;
	var tt = ff.length - 1;
	subpantalla.value = ff.substring(0, tt);
	//para la variable lectura
	var w = Vmostrar;
	var p = w.length - 1;
	Vmostrar = w.substring(0, p);
}

function borrarH() {
	delete historial[0];
    document.getElementById("dataHistory").innerHTML = " ";
    document.getElementById("btnBH").style.display = "none";
}
