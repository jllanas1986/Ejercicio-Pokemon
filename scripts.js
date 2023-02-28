console.log(document.title);
//1.Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
let newTitle = document.getElementById('gen-1')
newTitle.textContent = 'Generasión 1 Pokimon'

//2.Cambia el color de fondo de la primera generación de Pokimon.
let pokemon1GR = document.getElementsByClassName('infocard-list')[0];
for (pokemon of pokemon1GR.children) {
    pokemon.style.background = 'yellow'
    
}

//3.Imprime por consola la URL de la página.
let URLpage = window.location;
console.log(URLpage);

//4.Imprime por consola el dominio de la página.
let dominio = window.location.host;
console.log(dominio);

//5. Imprime todos los nodos de imagen.
let NodosImg = document.querySelectorAll('img')
console.log(NodosImg);

//6.Sustituye el atributo "src" de todas las imágenes por este
let newAtribute = document.querySelectorAll('img')
for (const iterator of newAtribute) {
    iterator.setAttribute('src','https://media.giphy.com/media/2v170e71aanfi/giphy.gif');
}

//7.Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
let pokimonFlyer = document.getElementsByClassName('itype flying')
console.log(pokimonFlyer[9]);

for (elem of pokimonFlyer) {
    elem.parentNode.parentNode.style.background = 'red'
}

