import { dataProductos } from "./data.js";
import { crearItemProducto } from "./itemProducto.js";  

export function cargarProductos() {

    const catalogo = document.getElementById("root");

    if (catalogo) {
        catalogo.innerHTML = ""; 

        if (!Array.isArray(dataProductos) || dataProductos.length === 0) {
            console.error("dataProductos está vacío o no es un array válido.");
            return;
        }

        const ul = document.createElement("ul");

       
        for (let i = 0; i < 10; i++) {
            const producto = dataProductos[i % dataProductos.length]; 

           
            const itemProducto = crearItemProducto(producto);

            ul.appendChild(itemProducto);  
        }

        
        catalogo.appendChild(ul);
    } else {
        console.error("No se encontró el contenedor 'root' para los productos.");
    }
}
