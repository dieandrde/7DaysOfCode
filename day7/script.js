let bienvenida = alert("Bienvenido a la calculadora de Diego");
let operar = true;

function suma(a , b){
    return alert(a + b);
}

function resta(a , b){
    return alert(a - b);
}

function dividir(a , b){
    return alert(a / b);
}

function multiplicar(a , b){
    return alert(a * b);
}

while(operar == true){
    let seguirOperando = prompt("¿Quiere realizar operaciones? Pulse 1 para confirmar o 2 para denegar.");
    if (seguirOperando == "1"){
        let elegirOperacion = prompt ("Pulsa '+' para sumar, '-' para restar, '*' para multiplicar, '/' para dividir o deja en blanco para salir.");
        switch(elegirOperacion){
            case "+":
                suma(parseInt(prompt("Elige un número")), parseInt(prompt("Elige otro número")));
                break;
            case "-":
                resta(parseInt(prompt("Elige un número")), parseInt(prompt("Elige otro número")));
                break;
            case "*":
                multiplicar(parseInt(prompt("Elige un número")), parseInt(prompt("Elige otro número")));
                break;
            case "/":
                dividir(parseInt(prompt("Elige un número")), parseInt(prompt("Elige otro número")));
                break;
            default:
                alert("Lo siento, no contamos con esa operación por este momento, vuelve a intentarlo.");
                break;
        }
    } else if(seguirOperando == "2"){
        operar = false;
        alert("¡Hasta la próxima!");
    } else{
        alert("Lo siento, elija entre las opciones 1 y 2. Intentelo nuevamente");
    }
}

