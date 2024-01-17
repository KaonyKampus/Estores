const CARRITO = JSON.parse(sessionStorage.getItem('carrito')) || [];

function mostrarCarrito() {
  const carritoElement = document.getElementById('carrito');

  CARRITO.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h2>${producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
    `;
    carritoElement.appendChild(card);
  });
}

// Llama a la función para mostrar el carrito al cargar la página
mostrarCarrito();