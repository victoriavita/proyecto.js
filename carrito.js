let carrito = [];
let total = 0;

//agregar Producto haciendo click

const tituloPlan = document.getElementById("tituloPlan");
console.log(tituloPlan);

let botonUno = document.getElementById("btnClickOp1");
botonUno.addEventListener("click", btnRespuesta);

let botonDos = document.getElementById("btnClickOp2");
botonDos.addEventListener("click", btnRespuesta);

let botonTres = document.getElementById("btnClickOp3");
botonTres.addEventListener("click", btnRespuesta);

function btnRespuesta (){
    console.log("plan selecciondo")
}
let cantidad = (agregarProducto);
let arancel =[]

function agregarProducto (cantidad, arancel){
    const producto ={
        cantidad: cantidad,
        arancel: arancel 
    };

    carrito.push(producto);

    const productoJson = JSON.stringify(producto);
    console.log(productoJson);
    localStorage.setItem("producto", productoJson);

 // total de carrito
    total += arancel;
    const totalPlan = document.getElementById("totalPlan");
    totalPlan.innerText = total.toFixed (2);
}


// almacenar plan seleccionado

localStorage.setItem("dosVeces", 4600);
localStorage.setItem("Tres veces", 5100);
localStorage.setItem("Free Pass", 6400);
