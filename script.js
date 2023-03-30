// creo class producto con sus propiedades

class Producto{
    constructor(id,plan,precio){
        this.id = id;
        this.plan = plan;
        this.precio = precio;
    }
}

// creo el producto 
const producto0 = new Producto (1 , 'DOS VECES', 4600);
const producto1 = new Producto (2, ' TRES VECES', 5100);
const producto2 = new Producto (3, ' FREE PASS', 6400);

// creo un array

const productos = [producto0, producto1, producto2]

// ciclo


const cardPlan = (lista) =>{
    for (e of lista){
        let card = document.createElement ("section")
        card.innerHTML += `
                            <div class="card" style ="width: 100vw;">
                            <div class="card-body>
                            <h5 class="card-title">${e.plan}</h5>
                            <p class="card-text">Clases de 1 hora </p>
                            <p class="card-text">Sabados BOX LIBRE </p>
                            <input type="button" onclick= " nuevoMensaje (${e.id})" value = "seleccionar plan ${e.precio}" class="btn btn-secondary">
                            </div>
                        </div>`
        document.body.append(card)
    }
}

cardPlan(productos)




// almacenar plan seleccionado

localStorage.setItem("dosVeces", 4600);
localStorage.setItem("Tres veces", 5100);
localStorage.setItem("Free Pass", 6400);



// Sweet alert

function nuevoMensaje (id){
    swal({
        title: "Gracias por unirte a THE BOX",
        text : `Tu plan ${id} ha sido procesado`,
        icon: "success",
        button : "Te esperamos"
    })
}

//API

const apiUbicacion = "https://restcountries.com/v3.1/name/argentina";

const divUbicacion = document.getElementById("divUbicacion");

fetch(apiUbicacion)
	.then((respuesta) => respuesta.json())
	.then((response) => {
		divUbicacion.innerHTML = `<p>Gimnasio The Box - ${response[0].flag} - Recoleta - C.A.B.A. - </p>
        <p> © 2023 Todos los derechos reservados `;
	})

	.catch((error) => console.log(error));
