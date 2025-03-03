//7daysofcode día 5 y 6
let categorias = {
    frutas: [],
    lacteos: [],
    dulces: [],
    congelados: [],
    otros: []
};

while (true) {
    let respuesta = prompt("¿Desea agregar un alimento a la lista de compras? Escriba 'si', 'no' o déjelo vacío para eliminar un alimento.").toLowerCase();

    if (respuesta === "si") {
        let alimento = prompt("Introduzca el alimento a continuación:");
        let categoria = prompt("¿En qué categoría se encuentra? (frutas, lacteos, dulces, congelados, otros)").toLowerCase();

        if (categorias[categoria]) {
            categorias[categoria].push(alimento);
        } else {
            alert("Categoría inválida.");
        }
    } 
    else if (respuesta === "no") {
        let mensajeLista = "Lista de compras:\n";
        for (let cat in categorias) {
            mensajeLista += `${cat}: ${categorias[cat].join(", ")}\n`;
        }
        alert(mensajeLista);
        break;
    } 
    else if (respuesta === "") {
        let categoria = prompt("¿De qué categoría desea eliminar un alimento? (frutas, lacteos, dulces, congelados, otros)").toLowerCase();

        if (categorias[categoria]?.length > 0) {
            let alimento = prompt(`Lista en ${categoria}: ${categorias[categoria].join(", ")}\nIngrese el nombre del alimento a eliminar:`);

            let index = categorias[categoria].indexOf(alimento);
            if (index !== -1) {
                categorias[categoria].splice(index, 1);
                alert(`"${alimento}" eliminado de la categoría "${categoria}".`);
            } else {
                alert("El alimento no se encuentra en la lista.");
            }
        } else {
            alert("La categoría está vacía o es inválida.");
        }
    } 
    else {
        alert("Error. Responda 'si', 'no' o deje vacío para eliminar un alimento.");
    }
}
