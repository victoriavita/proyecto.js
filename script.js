// saludo de bienvenida

let userName = prompt(
    "Bienvenido a Gimnasio The Box.\nPor favor ingrese su nombre:"
);
alert(`Hola ${userName} a continuacion le ofreceremos distintas opciones`);

// simulador de opciones
 // funcion constructora objeto

class Opcion{
    constructor (cantidad, arancel){
        this.cantidad= cantidad;
        this.arancel= arancel;
    }
}
const opcionUno = new Opcion ("dos", 4600)
const opcionDos = new Opcion ("tres", 5100)
const opcionTres = new Opcion ("free pass", 6400)

const arrayOpcion = [opcionUno, opcionDos, opcionTres];
console.log(arrayOpcion);

let planGim = prompt("Seleccione una opción: \n opcion a: 2 veces por semana \n opcion b: 3 veces por semana \n opcion c: free pass \n opcion d: no me interesa ninguna opcion")

while (planGim != "opcion a" && planGim != "opcion b" && planGim != "opcion c" && planGim != "opcion d"){ 
    alert("Por favor ingrese una opción correcta")
    planGim = prompt("Seleccione una opción: \n opcion a: 2 veces por semana \n opcion b: 3 veces por semana \n opcion c: free pass \n opcion d: no me interesa ninguna opcion")
} if (planGim == "opcion a"){
    alert(`${userName} seleccionaste el plan de 2 veces por semana. \nEl arancel es de $4.600`)
} if (planGim == "opcion b"){
    alert(`${userName} seleccionaste el plan de 3 veces por semana. \nEl arancel es de $5.100`)
} if (planGim == "opcion c"){
    alert(`${userName} seleccionaste el plan de free pass para entrenar todos los dias. \nEl arancel es de $6.400`)
} else if (planGim == "opcion d"){
    alert(`${userName} Gracias por ingresar a The Box.`)
} 


// agregar remera para entrenar


let agregarProducto = prompt (`${userName} ¿Desea agregar a su opcion elegida una remera para entrenar Dry fit? Ingrese si o no`)
while (agregarProducto != "si" && agregarProducto != "no"){
    alert("por favor ingrese una opcion correcta")
    agregarProducto = prompt (`${userName} ¿Desea agregar a su opcion elegida una remera para entrenar Dry fit? Ingrese si o no`)
}if (agregarProducto == "si"){
    let remera = 2000
    function sumar (opcion,remera) {
        console.log ("El valor de su arancel final es de" + (parseFloat(opcion) + parseFloat(remera)))
    } let opcion = prompt ("Por favor ingrese el valor de su arancel elegido");
    sumar(opcion,remera)
    alert(`${userName} El total de su arancel es de: \n`  + (parseFloat (opcion) + parseFloat(remera)));
    alert(`${userName} te esperamos en The Box.`)
}else if (agregarProducto == "no"){
    alert("Gracias por visitarnos.")
}

agregarProducto = {
    producto: "remera",
    color: "negro",
    precio: 2000
};
console.log(agregarProducto);




arrayOpcion.forEach(opcion=>console.log(opcion.arancel));

const arrayOpcionRemera = arrayOpcion.map((opcion)=>{
    return{
        cantidad: opcion.cantidad,
        arancel: (opcion.arancel + 2000)
    }
});
console.log(arrayOpcionRemera);



const totalArancel = arrayOpcion.reduce((acc, e)=> acc + e.arancel, 0);
console.log(`El total es de: ${totalArancel}`)






