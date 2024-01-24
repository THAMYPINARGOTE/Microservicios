document.addEventListener("DOMContentLoaded", function () {
    const productosContainer = document.getElementById("productos");
    const carritoContainer = document.getElementById("carrito");
    const carrito = [];

    // Simulación de datos de productos
    const productos = [
        { id: 1, nombre: "Producto 1", precio: 10 },
        { id: 2, nombre: "Producto 2", precio: 20 },
        // Agrega más productos según sea necesario
    ];

    // Función para mostrar productos en la interfaz
    function mostrarProductos() {
        productosContainer.innerHTML = "";
        productos.forEach(producto => {
            const card = document.createElement("div");
            card.innerHTML = `
                <p>${producto.nombre} - $${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
            `;
            productosContainer.appendChild(card);
        });
    }

    // Función para agregar productos al carrito
    function agregarAlCarrito(id) {
        const productoSeleccionado = productos.find(producto => producto.id === id);
        carrito.push(productoSeleccionado);
        mostrarCarrito();
    }

    // Función para mostrar el contenido del carrito
    function mostrarCarrito() {
        carritoContainer.innerHTML = "";
        carrito.forEach(producto => {
            const item = document.createElement("div");
            item.textContent = `${producto.nombre} - $${producto.precio}`;
            carritoContainer.appendChild(item);
        });
    }

    // Inicialización
    mostrarProductos();
});
