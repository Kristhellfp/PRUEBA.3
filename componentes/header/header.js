export function mostrarMenu() {
    let header = document.createElement("header");

    let titulo = document.createElement("h1");
    titulo.textContent = "Tienda";

    let productosMarcados = document.createElement("div");
    productosMarcados.classList.add("productos-marcados");

    let texto = document.createElement("span");
    texto.textContent = "Productos marcados";

    let contador = document.createElement("div");
    contador.classList.add("contador");
    contador.textContent = "5";

    productosMarcados.appendChild(texto);
    productosMarcados.appendChild(contador);

    header.appendChild(titulo);
    header.appendChild(productosMarcados);

    document.body.prepend(header);
}
