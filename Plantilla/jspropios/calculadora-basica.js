//Son mis funciones requeridas para la calculadora basica
function Suma() {
    var N1 = document.getElementById("numero_1").value;
    var N2 = document.getElementById("numero_2").value;
    let suma = parseInt(N1) + parseInt(N2);//El alumna va a corregir esto 
    alert("La Suma es: " + suma);
}

function Resta() {
    var N1 = document.getElementById("numero_1").value;
    var N2 = document.getElementById("numero_2").value;
    let resta = N1 - N2;
    alert("La Resta es: " + resta);
}

function Multiplicacion(){
    var N1 = document.getElementById("numero_1").value;
    var N2 = document.getElementById("numero_2").value;
    let multi = N1 * N2;
    alert("La Multiplicación es: " + multi);
}

function Division(){
    var N1 = document.getElementById("numero_1").value;
    var N2 = document.getElementById("numero_2").value;
    let divi = N1 / N2;
    alert("La Division es: " + divi);
}