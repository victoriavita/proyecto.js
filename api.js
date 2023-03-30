
const apiUbicacion = "https://restcountries.com/v3.1/name/argentina";

const divUbicacion = document.getElementById("divUbicacion");

fetch(apiUbicacion)
	.then((respuesta) => respuesta.json())
	.then((response) => {
		divUbicacion.innerHTML = `<p>Gimnasio The Box - ${response[0].flag} - Recoleta - C.A.B.A. - </p>
        <p> © 2023 Todos los derechos reservados `;
	})

	.catch((error) => console.log(error));
