var min = 100;
var max = 999;
var progreso1 = document.getElementById("progreso1");
var progreso2 = document.getElementById("progreso2");
var progreso3 = document.getElementById("progreso3");
var btnMayor = document.getElementById("btnMayor");
var btnIgual = document.getElementById("btnIgual");
var btnMenor = document.getElementById("btnMenor");
var win = document.getElementById("continuar");
var N1, N2; 
var generaciones = 0;
let sonido = new Audio("mp3/yay-6326.mp3");
let sonidoError = new Audio("mp3/error-126627.mp3");
let sonidoWin = new Audio("mp3/short-crowd-cheer-6713.mp3");
var correcto = 0;
win.style.display = "none";
function generarNumerosAleatorios() {
    if (generaciones < 12) {
        console.log("Generando números");
        N1 = Math.floor(Math.random() * (max - min) + min);
        N2 = Math.floor(Math.random() * (max - min) + min);
        document.getElementById("num1").innerHTML = N1;
        document.getElementById("num2").innerHTML = N2;
        console.log("N1:", N1);
        console.log("N2:", N2);
        generaciones++;
    } else {
        console.log("Ya se generaron tres pares de números.");
    }
}

btnMayor.addEventListener("click", function () {  
    if (N1 > N2) {
        generarNumerosAleatorios(); 
        sonido.play(); // Reproducir el sonido cuando la respuesta es correcta
        correcto++;
        barraProgreso();
    }else {
        sonidoError.play();
    }
});

btnIgual.addEventListener("click", function () {
    if (N1 === N2) {
        generarNumerosAleatorios(); 
        sonido.play();
        correcto++;
        barraProgreso();
    } else {
        sonidoError.play();
    }
});

btnMenor.addEventListener("click", function () {
    if (N1 < N2) {
        generarNumerosAleatorios(); 
        sonido.play();
        correcto++;
        barraProgreso();
    } else {
        sonidoError.play();
    }
});

function barraProgreso(){
    if (correcto==1) {
        progreso1.style.backgroundColor = "green";
    }else if (correcto==2) {
        progreso2.style.backgroundColor = "green";
    }else if(correcto==3){
        progreso3.style.backgroundColor = "green";
    }if (correcto==4) {
        progreso4.style.backgroundColor = "green";
    }else if (correcto==5) {
        progreso5.style.backgroundColor = "green";
    }else if(correcto==6){
        progreso6.style.backgroundColor = "green";
    }else if(correcto==7){
        progreso7.style.backgroundColor = "green";
    }else if(correcto==8){
        progreso8.style.backgroundColor = "green";
    }else if(correcto==9){
        progreso9.style.backgroundColor = "green";
    }else if(correcto==10){
        progreso10.style.backgroundColor = "green";
    }else if(correcto==11){
        progreso11.style.backgroundColor = "green";
    }else if(correcto==12){
        progreso12.style.backgroundColor = "green";
        win.style.display = "flex"
        sonidoWin.play();
    }
}

// Generamos los números aleatorios al cargar la página
generarNumerosAleatorios();
