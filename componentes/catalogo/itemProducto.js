export function crearItemProducto(producto) {
    let li = document.createElement("li");

    let img = document.createElement("img");
    img.setAttribute("src", "https://th.bing.com/th/id/OIP.4AArYTY-NyxBSktZ8TPJLAHaGS?rs=1&pid=ImgDetMain");
    img.setAttribute("alt", producto.nombre);

    let divProductoInfo = document.createElement("div");
    divProductoInfo.classList.add("producto-info");

    let spanNombre = document.createElement("span");
    spanNombre.textContent = producto.nombre;

    let spanPrecio = document.createElement("span");
    spanPrecio.textContent = producto.precio;

    let buttonEliminar = document.createElement("button");
    buttonEliminar.setAttribute("data-id", producto.id);
    buttonEliminar.textContent = "Eliminar";

    divProductoInfo.appendChild(spanNombre);
    divProductoInfo.appendChild(spanPrecio);
    divProductoInfo.appendChild(buttonEliminar);
    li.appendChild(img);
    li.appendChild(divProductoInfo);

    let eliminarBtn = buttonEliminar;
    eliminarBtn.addEventListener("click", () => {
        eliminarProducto(producto.id);  
    });

    return li;
}

export function eliminarProducto(id) {
    console.log(`Eliminando producto con id: ${id}`);

    let lista = document.querySelector("ul");
    if (lista) {
        let item = [...lista.children].find(li => li.querySelector("button").getAttribute("data-id") === String(id));

        if (item) {
            lista.removeChild(item); 
            console.log(`Producto con id: ${id} eliminado.`);
        } else {
            console.error(`No se encontró el producto con id: ${id}`);
        }
    } else {
        console.error("No se encontró la lista de productos.");
    }
}
