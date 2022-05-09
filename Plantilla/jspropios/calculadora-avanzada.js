function agregarDigito(digito){
    //1.- Referencia a mi objeto HTML
    let display = document.getElementById("display");
    display.value = display.value + digito;
}

function agregarOperador(operador){
    let display = document.getElementById("display");
    display.value = display.value + operador;
}

function calcularResultado(){
   let display = document.getElementById("display"); 
   //La funcion eval evalua la expresion algebraica  regresa el resultado
   let resultado = eval(display.value);
   display.value = resultado;
}

function calcularPotencia(){
    let display = document.getElementById("display");
    let base    = eval(display.value);
    let exponente   = document.getElementById("npotencia").value;
    display.value = Math.pow(base,exponente);
}

function calcularFactorial(){
    let display = document.getElementById("display");
    let numero = eval(display.value);
    let factorial = 1;
    for (let i = 1; i <= numero; i++){
        factorial = factorial * i;
    }
    display.value = factorial;
}

function calcularPorcentaje(){
    let display = document.getElementById("display");
    let base    = eval(display.value);
    let numero  = " "+document.getElementById("percent").value;
    let porcen = eval(numero+"/100");
    let resultado = base+"*"+porcen;
    display.value = eval(resultado);
}

function clearAll(){
    document.getElementById("display").value = "";
}

function reis(){
    let display = document.getElementById("display");
    display.value =  Math.sqrt(display.value);
}

function logna(){
    let display = document.getElementById("display");
    display.value =  Math.log(display.value);
}

function loga(){
    let display = document.getElementById("display");
    display.value =  Math.log10(display.value);
}