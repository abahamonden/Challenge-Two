	var pantalla = document.querySelector("canvas");
	var pincel = pantalla.getContext("2d");
	var b = 0;


	function lineas (word) {
   		var inicio = 0;
		var ancho = 40;
		var xcentro = 500;
		var ybase = 525;

		var factor = Math.floor(largo / 2);
		console.log(factor);
	   	inicio = xcentro - (factor * ancho );
    	var x = inicio;
    	

     	for (let i = 0; i < largo ; i++) {
         pincel.fillStyle = "black";
         pincel.fillRect(x, ybase, ancho, 5);
         x += ancho + 5; 
     											}

}

	function escenario (palabra) { 

    	//Dibujo de la base
    	pincel.fillStyle = "black";
    	pincel.fillRect(50, 550, 80, 40);
    	pincel.fill();

    	}


	function dLetrac(letra) {
    	var p = ancho + 5;
    	var xcentro = 500;
    	var regexp = RegExp(letra, 'g');
    	var ybase = 480;
    	var repeticiones = palabrajuego.match(regexp).length;
    	var factor = Math.floor(largo / 2);
    	inicio = xcentro - (factor * ancho );
    	
        var i=0;
    	var j=0;
    	while (i < repeticiones) {
        	if (palabrajuego[j] == letra) {
            palabraIngresada[j] = letra;
            ++i;
           	var xc = ( j * p ) + inicio;
            pincel.font="30pt Verdana";
	        pincel.fillStyle = "black";
	        pincel.fillText(letra, xc + 5, ybase + 40);
        }
        ++j;
    }
}

var xi = 350;
var yi = 350;
var anchoi = 40;

function dLetrai(letra) {
    pincel.font="30pt Verdana";
	pincel.fillStyle = "red";
	pincel.fillText(letra, xi, yi);
    xi += anchoi;
    if (xi > 780) {
        xi = 350;
        yi += 40;
    }
}



