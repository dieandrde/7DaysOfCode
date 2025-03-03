//7daysofcode día 3
let pregunta = true;
let especializarse = true;
let tecnologias = true;

while(pregunta == true){
    let backfront = prompt ("Selecciona 1 para aprender Front-End o 2 para aprender Back-End");
    if(backfront == "1" || backfront == "2"){
       if(backfront == "1"){
        let frontend = prompt("Selecciona 1 para aprender React y 2 para aprender Vue");
        pregunta = false;
       } else{
        let backend = prompt("Selecciona 1 para aprender C# o 2 para aprender Java");
        pregunta = false;
       }
    }
    else{
        alert("Solo se admite cómo respuesta, los valores '1' y '2'");
    }
}

while(especializarse == true){
    let eleccion = prompt("Selecciona 1 para seguir especializandote en este área o 2 para convertirte en FullStack");
    if (eleccion == "1" || eleccion == "2"){
        if (eleccion == "1"){
            alert("¡Buena elección!");
            especializarse = false;
        } else{
            alert("¡Suerte en tu camino cómo Fullstack developer!");
            especializarse = false;
        }
    } else{
        alert("Solo se admite cómo respuesta, los valores '1' y '2'");
    }
}

while(tecnologias == true){
    let pregunta2 = prompt("Responde por 'ok' de ser cierta ¿Hay alguna otra tecnología que te gustaría aprender?");
    if (pregunta2.toLowerCase() == "ok"){//convierto en minusculas para evitar posibles errores
        let nuevaTecnologia = prompt("¿Que nueva tecnología quieres aprender?");
        alert(`¡Mucha suerte en tu camino aprendiendo ${nuevaTecnologia}!`);
    } else{
        tecnologias = false;
    }

}