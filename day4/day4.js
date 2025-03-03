//7daysofcode día 4
const numeroAleatorio = Math.floor(Math.random() * (11 - 1) + 1);
//console.log(numeroAleatorio);
let intentos = 3;

while(intentos>0){
    let adivinar = prompt(`Adivina el número entre el 1 al 10 en el que estoy pensando, tienes ${intentos} intento(s).`)
    if(adivinar == numeroAleatorio){
        alert(`Acertaste, el número es ${numeroAleatorio}`);
        intentos = 0;
    } else{
        alert("¡Incorrecto!");
        intentos --;
        if(intentos == 0){
            alert(`Lo siento, no acertaste. El número en el que estaba pensando era ${numeroAleatorio}`);
        }
    }

}
