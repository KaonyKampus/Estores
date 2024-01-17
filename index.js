
/*barra de menu---barra de menu---barra de menu*/
    
    
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
 

navToggle.addEventListener("click", function () {
      console.log("Click event");
      links.classList.toggle("show-links");
    });




/*arrays para los productos*/
let PRODUCTOS = [
  {id:10001,nombre:"Toldos",precio:10000,imagen: "./images/toldo.png"},
  {id:10002,nombre:"Pergolas",precio:10000, imagen: "./images/pergola.png"},
  {id:90001,nombre:"Persianas Enrollables",precio:10000, imagen: "./images/persiana_enrollable.png"},
  {id:90001,nombre:"Persianas Enrollables Premium",precio:10000, imagen: "./images/persiana_enrollable_premium.png"},
  {id:90003,nombre:"Persianas Sheer Elegance",precio:15000, imagen: "./images/sheers_elegance.png"},
  {id:90004,nombre:"Persianas Panel Japones",precio:10000, imagen: "./images/persiana_panel_japones.png"},
  {id:90005,nombre:"Persiana Romana",precio:10000, imagen: "./images/persiana_romana.png"},
  {id:90006,nombre:"Persianas dos en uno",precio:10000, imagen: "./images/persiana_dosuno.png"},
  {id:90007,nombre:"Cortinas Verticales",precio:10000, imagen: "./images/persiana_vertical.png"},
  {id:90008,nombre:"Cortinas Hanas",precio:10000, imagen: "./images/cortina_hanas.png"},
  {id:90009,nombre:"Cortinas Personalizadas Estampadas",precio:10000, imagen: "./images/estampadas.png"},
] 

const CARRITO = [];

function crearCards (){
    const carritoElement = document.getElementById ('carrito')
    carritoElement.innerHTML = '';

    PRODUCTOS.forEach(producto => {
      const card = document.createElement ("div");
      card.classList.add("card");
      card.innerHTML= `
                       <div id="carrito"></div>
                       <img src="${producto.imagen}" alt="${producto.nombre}" width="100%">
                       <h2 class="nombre-producto">${producto.nombre}</h2>
                       <p class="precio">precio: ${producto.precio}</p>
                       <button class="boton-compra" onclick ="agregarAlCarrito(${producto.id})">Agregar al carrito</button>
      `;
      carritoElement.appendChild (card);
    })
}


//funcion para agregar al carrito 

function agregarAlCarrito (idProducto){
      const productosSeleccionado = PRODUCTOS.find(producto => producto.id === idProducto)

       if(productosSeleccionado){
          CARRITO.push(productosSeleccionado);
          actualizarCarrito()
       }
}

//actualizar y visualizar carrito

function actualizarCarrito (){
   const carritoElement = document.getElementById ("carrito");
   carritoElement.innerHTML = " ";
   CARRITO.forEach( producto =>{
    const card = document.createElement ("div");
    card.classList.add("card");
    card.innerHTML= `
                     <img src="${producto.imagen}" alt="${producto.nombre}" width="100%">
                     <h2 class="nombre-producto">${producto.nombre}</h2>
                     <p class="boton-compra">precio: ${producto.precio}</p>
    `;
    carritoElement.appendChild (card);
  })

}


crearCards() 
