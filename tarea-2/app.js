
let contenido1 = document.getElementById('contenido1')
let boton1 = document.getElementById('mostrar1')
boton1.addEventListener('click', mostrarApiData1, true);


async function mostrarApiData1() {
    const url ='https://randomuser.me/api/'
    const res = await fetch(url);
    const data = await res.json();

    contenido1.innerHTML =  `<img src='${data.results[0].picture.large}'>
                             <p> Celular: ${data.results[0].phone}</p>
                             <p> Email: ${data.results[0].email}</p>
                             <p> Genero: ${data.results[0].gender}</p>
                             <p> Nombre: ${data.results[0].name.first}</p>
                             <p> Apellido: ${data.results[0].name.last}</p>
                             `;
    
    console.log(data,"data <---- async");

    console.log("entro a la function async");

}