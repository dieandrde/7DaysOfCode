//7daysofcode día 5
let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let otros = [];
//como es habitual, uso la función ".tolowercase()" para evitar posibles errores de tipeo.
let agregarMas = 0;
while(agregarMas == 0){
    let respuesta = prompt("¿Desea agregar un alimento a la lista? La respuesta debe ser por 'si' o por 'no'");
    if(respuesta.toLowerCase() == "si"){
        let alimento = prompt("Introduzca el alimento a continuación:");
        let categoria = prompt("¿En que categoría se encuentra este alimento? ¿frutas, lacteos, dulces, congelados u 'otros'?");
        if(categoria.toLowerCase() == "frutas"){
            frutas.push(alimento);
        }
        if(categoria.toLowerCase() == "lacteos"){
            lacteos.push(alimento);
        }
        if(categoria.toLowerCase() == "dulces"){
            dulces.push(alimento);
        }
        if(categoria.toLowerCase() == "congelados"){
            congelados.push(alimento);
        }
        if(categoria.toLowerCase() == "otros"){
            otros.push(alimento);
        }
    }
    if(respuesta.toLowerCase() == "no"){
        agregarMas++;
        alert(`Lista de compras:
            Frutas: ${frutas}
            Lacteos: ${lacteos}
            Dulces: ${dulces}
            Congelados: ${congelados}
            Otros: ${otros}`)
    }
    if(respuesta.toLowerCase() != "si" && respuesta.toLowerCase() != "no"){
        alert("Error. La respuesta debe ser por 'si' o por 'no' Intentelo nuevamente.");
    }
}



