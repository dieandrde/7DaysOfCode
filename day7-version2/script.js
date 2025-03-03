function sumar(a , b){
    return a + b;
}

function restar(a , b){
    return a - b;
}

function dividir(a , b){
    if(b === 0){
        return "Error, la división entre cero no está definida.";
    }
    return a / b;
}

function multiplicar(a , b){
    return a * b;
}

function calcular(operacion){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let resultado;
    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingrese números válidos.");
        return;
    }


     switch(operacion){
        case "sumar":
            resultado = sumar(num1,num2);
            break;
        case "restar":
            resultado = restar(num1,num2);
            break;
        case "dividir":
            resultado = dividir(num1,num2);
            break;
        case "multiplicar":
            resultado = multiplicar(num1,num2);
            break;
        default:
            resultado = "Operación no válida. Intentelo nuevamente.";
        }
    
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function salir() {
    alert("¡Hasta la próxima!");
    window.close();
  }


