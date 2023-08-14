const productos = [
    {
        nombre: "bicicleta",
        precio: 70000
    },
    {
        nombre: "Mate",
        precio: 6000   
    },
    {
        nombre: "Mouse",
        precio: 12000
    },
];

const carrito = [
];

const divBici = document.querySelector("#bici-carrito");
const divMate = document.querySelector("#mate-carrito");
const divMouse = document.querySelector("#mouse-carrito");
const h2Bici = document.querySelector("#h2-cantidad-bici");
const h2Mate = document.querySelector("#h2-cantidad-mate");
const h2Mouse = document.querySelector("#h2-cantidad-mouse");
const h2Total = document.querySelector("#h2-total");
const h2TotalProductos = document.querySelector("#h2-productos-total");
let numero = 0;
let numero1 = 0;
let numero2 = 0;


const boton = document.querySelector(".btn");
boton.addEventListener("click", funcionbici);
function funcionbici(){
    carrito.push(productos[0]);
    const buscarBici = carrito.filter((el) => el.nombre === "bicicleta");
    const sumaBicis = buscarBici.map((e) => e.precio);
    const totalBicis = sumaBicis.reduce((acc, el) => acc + el, 0);
    divBici.innerHTML = "$" + totalBicis ;
    numero ++;
    boton.value = numero;
    h2Bici.innerHTML= numero ;
    const precioFinal = carrito.map((e) => e.precio);
    const precioTotal = precioFinal.reduce((acc, el) => acc + el, 0);
    h2Total.innerHTML = "$" + precioTotal ;
    const sumaDeCantidad = numero + numero1 + numero2 ;
    h2TotalProductos.innerHTML = sumaDeCantidad ;
    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("su carrito", carritoJson);
};

const boton2 = document.querySelector(".btn2");
boton2.addEventListener("click", funcionmate);
function funcionmate(){
    carrito.push(productos[1]);
    const buscarMate = carrito.filter((el) => el.nombre === "Mate");
    const sumaMate = buscarMate.map((e) => e.precio);
    const totalMate = sumaMate.reduce((acc, el) => acc + el, 0);
    divMate.innerHTML = "$" + totalMate ;
    numero1 ++;
    boton.value = numero1;
    h2Mate.innerHTML= numero1 ;
    const precioFinal = carrito.map((e) => e.precio);
    const precioTotal = precioFinal.reduce((acc, el) => acc + el, 0);
    h2Total.innerHTML = "$" + precioTotal ;
    const sumaDeCantidad = numero + numero1 + numero2 ;
    h2TotalProductos.innerHTML = sumaDeCantidad ;
    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("su carrito", carritoJson);
};

const boton3 = document.querySelector(".btn3");
boton3.addEventListener("click", funcionmouse);
function funcionmouse(){
    carrito.push(productos[2]);
    const buscarMouse = carrito.filter((el) => el.nombre === "Mouse");
    const sumaMouse = buscarMouse.map((e) => e.precio);
    const totalMouse = sumaMouse.reduce((acc, el) => acc + el, 0);
    divMouse.innerHTML = "$" + totalMouse ;
    numero2 ++;
    boton.value = numero2;
    h2Mouse.innerHTML= numero2 ;
    const precioFinal = carrito.map((e) => e.precio);
    const precioTotal = precioFinal.reduce((acc, el) => acc + el, 0);
    h2Total.innerHTML = "$" + precioTotal ;
    const sumaDeCantidad = numero + numero1 + numero2 ;
    h2TotalProductos.innerHTML = sumaDeCantidad ;
    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("su carrito", carritoJson);
};









