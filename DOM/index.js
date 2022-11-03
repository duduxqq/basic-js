/*
const element = document.getElementById('blog-title')
console.log(element)

const element1 = document.getElementsByClassName('one')
console.log(element1)

const element2 = document.getElementsByTagName('meta')
console.log(element2)

const element3 = document.querySelector('.one')
console.log(element3)

const element4 = document.querySelectorAll('.one')
console.log(element4)

const element = document.querySelector('h1')

element.textContent = "Olá devs"

console.log(element.textContent)

const element = document.querySelector('h1')

element.innerText = "Olá Devs"

const element = document.querySelector('h1')

element.innerHTML = "Olá Devs <small>!!!</small>"


const element = document.querySelector('input')

element.value = "Valor que eu quiser"

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.getElementById("header")

console.log(headerID)

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
header.removeAttribute('class')

const element = document.querySelector('body')

element.style.backgroundColor = "#f9f3d2"

const div = document.createElement('div')
div.innerText = "Olá devs"

const body = document.querySelector('body')
body.prepend(div)

const div = document.createElement('div')
div.innerText = "Olá devs"

const body = document.querySelector('body')
const input = body.querySelector('input')
body.insertBefore(div, input)

function print() {
    console.log("print")
}

const input = document.querySelector('input')

input.on = function() {
    console.log('rodei')
}

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print() {
    console.log("print")
}

const input = document.querySelector('input')

input.keypress = function(event){
    console.log(event)
}

*/


function remove() {
   const element = document.querySelector('div')
   element.classList.remove('invisible')
}

document.onkeydown = teclado;
function teclado(e) {
    if(e.keyCode == 27) {
        const element1 = document.querySelector('div')
        element1.classList.add('invisible')
    }
}