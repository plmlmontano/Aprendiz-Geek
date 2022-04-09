import { ShowCard } from "./module/showCard"
let container = document.getElementById('container-card')

document.addEventListener('DOMContentLoaded', async () => {
    let res = await fetch('http://localhost:4000/paletas')
    let data = await res.json()
    ShowCard(data, container)

});