let pegarButton = document.querySelector('.bn47')


let pegarNav = document.querySelector('nav') 
let moverButton = document.querySelector(".moverbutao")
let pegarHeader = document.querySelector('header')
pegarButton.addEventListener('click', () => {
   pegarNav.classList.toggle('active')
   pegarHeader.classList.toggle('active')
   moverButton.classList.toggle('active')


})