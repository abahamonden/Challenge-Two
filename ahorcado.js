var palabras = ["ALURA"];
// var teclear = document.getElementById("ahorcado"); //prueba
var letrasIngresadas =[];
var palabraIngresada =[];
var inicio = 0;
var ancho = 40;
var input  = document.querySelector("input");
let intentos = 8;
var palabrajuego = "ALURA";

var buttonagregar = document.querySelector("button.btnAgregar"); // Manejo de boton "Agregar"
buttonagregar.onclick = incorporar ;

var buttonreinicio = document.querySelector("button.btnreIniciar"); // Manejo de boton "Inicio"
buttonreinicio.onclick = juego ;

var buttonInicio = document.querySelector("button.btnInicio"); // Manejo de boton "Inicio"
buttonInicio.onclick = juego ;



	function incorporar () {  //Funcion para incorporar palabras al juego.

 		var texto = input.value;
 		var mayuscula = texto.toUpperCase().trim();
 		pincel.clearRect(310,310,400,50);
		var encontrado = false;

		for ( var posicion = 0 ; posicion < palabras.length ; posicion ++) {  //evitar palabras repetidas
			if (mayuscula == "") {
			encontrado = true;
			alert ("Debe Ingresar una palabra");	
			}

			if (mayuscula == palabras[posicion]) {
			encontrado = true;
			alert ("Esta palabra ya esta ingresada");
											}
																		}
			if (encontrado == false) {
			palabras.push (mayuscula);
			palabraIngresada = new Array(palabrajuego.length);
			console.log(mayuscula);
			alert("Se incorporo la palabra " + mayuscula + " al juego");					
			alert("Hay " + palabras.length + " palabras en el juego");
			
							}
 }

	function aleatoria () {  // Seleccionar la palabra desde el grupo 

		var aleatoria = Math.floor(Math.random()*(palabras.length));
		seleccion = palabras[aleatoria];
		return seleccion;
						}


	function juego () {

		pincel.clearRect(0,0,1200,800); //limpiar restos de jeugo anterior
		pincel.beginPath ();			
		palabrajuego = aleatoria ();
		frase = palabrajuego.split("");
		largo = frase.length;
		palabraIngresada = [];
		letrasIngresadas =[];
		intentos = 8;
		escenario();
		lineas (palabrajuego);
		window.addEventListener('keydown',capturaLetra);
		window.scroll({
 			top: 1000,
 			behavior: 'smooth'
						});

		 }
		
	
	function capturaLetra(evento) {
    	var letra = evento.key.toUpperCase();
    	console.log(letra);
    	if (validarLetra(letra, evento.keyCode) /*&& paso < 11*/) {
       		if(coincideLetra(letra)){ 
            	dLetrac(letra);
            	console.log(palabraIngresada.join(''));
            if (palabrajuego == palabraIngresada.join('')) {
            	pincel.font="40pt Verdana";
	        	pincel.fillStyle = "green";
	        	pincel.fillText("Ganaste!", 600 , 300);
	        	letrasIngresadas =[];	        	
	        	pincel.clearRect(310,310,400,50);
	        	limpiarLetras();
                            }
        }else{
           dLetrai(letra);
           intentos--;
           console.log(intentos);
           	if (intentos == 7){
			pincel.fillStyle = "black";
    		pincel.fillRect(50, 450, 10, 100);
    		pincel.fill();
    		 }
    		if (intentos == 6){
			pincel.fillStyle = "black";
    		pincel.fillRect(50, 350, 10, 100);
    		pincel.fill();
    		 }
			if (intentos ==5){
			pincel.fillStyle = "black";
    		pincel.fillRect(50, 340, 200, 10);
    		pincel.fillRect(240, 340, 10, 20);
    		pincel.fill();
    		 }
			if (intentos == 4){
			pincel.beginPath ();
			pincel.fillStyle = "black";
    		pincel.arc(245, 385, 25, 0, 2*3.14);
    		pincel.fill();
    		 }
			if (intentos == 3){
			pincel.fillStyle = "black";
    		pincel.fillRect(240, 400, 10, 100);
    		pincel.fill();
    		 }
			if (intentos == 2){
			
			pincel.fillStyle = "black";
    		pincel.fillRect(195, 425, 50, 10);
    		pincel.fill();
    		 }
			if (intentos == 1){
			pincel.fillStyle = "black";
    		pincel.fillRect(195, 425, 100, 10);
    		pincel.fill();
    		 }
			if (intentos == 0){
			pincel.fillStyle = "black";
    		pincel.beginPath();
			pincel.moveTo(230 , 550);
			pincel.lineTo(240 , 550);
			pincel.lineTo(245 , 400);
			pincel.lineTo(250 , 550);
			pincel.lineTo(260 , 550);
			pincel.lineTo(250 , 400);
			pincel.lineTo(240 , 400);
			pincel.lineTo(230 , 550);
			pincel.fill();
    		pincel.font="40pt Verdana";
	        pincel.fillStyle = "red";
	        pincel.fillText("Has Perdido", 600 , 300);
	        pincel.fillText("Vuelve a intentarlo", 600 , 400);
	       	pincel.clearRect(310,310,400,50);
	       	xi = 350;
	 		yi = 350;
			anchoi = 40;

    		 }
       }
    }
}

	function validarLetra(letra, codigo) {
   		letra = letra.toUpperCase();
    	console.log('Letra: '+ letra + ' Codigo: '+codigo);
    	var acentos = ['Á','É','Í','Ó','Ú','À','È','Ì','Ò','Ù'];
    	if (codigo > 64 && codigo < 91) {
        	if (acentos.indexOf(letra) < 0 ) {
            	if (letrasIngresadas.indexOf(letra) < 0) {
                return true;    
            }
            
        }
    }
    return false;
}

	function coincideLetra(letra) {
    	var coincide = false
    	if (palabrajuego.indexOf(letra) >= 0) {
        
       coincide = true;
    }
    letrasIngresadas.push(letra);
    console.log(letrasIngresadas);
    return coincide;
}


