/*
    1. Se le debe pedir al usuaio que ingrese nombre y apellido;
    2. Se le debe pedir que ingrese la url de su foto de perfil;
    3. Mediante un h1 se le debe mostrar el nombre ingresador por el usuario;
    4. mediante una mediante una imagen se debe mostrar la foto que él/ella ingresó.
*/
let nameUser = prompt('Ingrese su nombre')
let lastuser = prompt('Ingrese su apellido')
let photo = prompt('Ingrese la URL o link de su foto de perfil') // https://static.eldiario.es/clip/71d118ff-5ef2-449c-be8a-6c321304fa70_16-9-aspect-ratio_default_0.jpg
let container = document.querySelector('div')
let image = document.querySelector('img')
let h2NameLast = document.querySelector('h2')

h2NameLast.textContent = `${nameUser} ${lastuser}`

image.setAttribute('src', photo)

container.appendChild(image)