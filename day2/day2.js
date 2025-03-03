//7daysofcode día 2:
let nombre = prompt("¿Cúal es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguajeDeProgramacion = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${nombre}! Tienes ${edad} y estás estudiando ${lenguajeDeProgramacion}.`);

let respuesta = prompt(`¿Te gusta estudiar ${lenguajeDeProgramacion}? Responde por SI o por NO.`);

if (respuesta.toLowerCase() == 'si'){ //convierto en minusculas la respuesta
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
        
     } else{
            if(respuesta.toLowerCase() == 'no'){
                alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
            }
            else{
                alert("La respuesta debe ser por 'SI' o por 'NO'");
    
            }
        }



