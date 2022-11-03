// Objetos

let pessoa = {
    nome: 'Rafael'
}

console.log(pessoa)

// Arrays

let familia = [26, 45, 50, 17]

console.log(familia[0])

let nomeDoColega = ["Renan", 15, 1.77]

console.log("O nome do meu colega é " + nomeDoColega[0] + " a idade dele é "+ nomeDoColega[1] + " e ele tem " + nomeDoColega[2] + " de altura!")

// Functions
let corSite = "azul"
console.log(corSite)
function resetaCor(cor, tonalidade) {
    corSite = cor + tonalidade;
}
resetaCor("vermelho", " escuro")
console.log(corSite)

// Types Functions

function dizerNome() {
    console.log("Eduardo")
}

dizerNome();

function multiplicarPorDois(valor){
    return valor *2
}

console.log(multiplicarPorDois(5))

let resultado = multiplicarPorDois(5)

console.log(resultado)

// Operador Ternario

let pontos = 200
let tipo = pontos > 100 ? 'premium' : 'comum'
console.log(tipo)

// Projeto trocando valores

let a = "vermelho"
let b = "azul"

let c = a
console.log(a, b)

a = b
b=c 
console.log(a)
console.log(b)

// If Else

let hora = 22;

if (hora > 6 && hora < 12){
    console.log("Bom dia!")
} else if(hora > 12 && hora < 18) {
    console.log("Boa Tarde!")
}else {
    console.log("Boa Noite!")
}

// Switch Case

let permissao = "comum"

switch(permissao) {
    case 'comum':
    console.log("usuario comum")
    break

    case 'gerente':
    console.log("usuario gerente")
    break

    case 'diretor':
        console.log("usuario diretor")
        break    

    default:
        console.log("Usuario não reconhecido!")
}

// Laço for && Loop For

for (let i = 0; i < 5; i++){
    console.log("Estou aprendendo!")
}

for (let i = 0; i <= 5; i++){
    console.log("2 Estou aprendendo!")
}

// For In

const pessoa1 = {
    nome: 'Jhonatan',
    idade: 25
}   

for(let chave in pessoa1) {
    console.log(chave, pessoa1['nome'])
}

const cores = ["Vermelho", "Azul", "Verde"]

for (let indice in cores) {
    console.log(indice, cores[indice])
}

// For of

for(let cor of cores) {
    console.log(cor)
}

// Maximo entre dois valores

function max(numero1, numero2) {
    if (numero1 > numero2){
        console.log(numero1)
    }else {
        console.log(numero2)
    }
}

//Fizz Buzz
const resultadoo = fizzBuzz(5)
console.log(resultadoo)
function fizzBuzz(number){

if (number / 3) {
    console.log("Fizz")
} else if(number / 5){
    console.log("buzz")
}
}

// Medidor de velocidade

verificarVelocidade(70)

function verificarVelocidade(velocidade){
    if (velocidade <= 70) {
        console.log("OK")
    } else{
        const pontos=Math.floor(((velocidade - 70) / 5))
        if (pontos >=12) {
            console.log("Carteira suspensa")
        }else {
            console.log("Pontos ", pontos)
        }
    }
}

// Constructor Function

function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhotela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo ligação...")
    }
}

const celular = new Celular('asus',5.5, 5000)
console.log(celular)

// Clonando Objetos

const novoObjeto = Object.assign({},celular)
console.log(novoObjeto)

const objeto2 = {...celular}
console.log(objeto2)

// Exercicio de Constructor Function

function Postagem(titulo, mensagem, autor, vizu, comen, aovivo){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.vizu = vizu,
    this.comen = comen,
    this.aovivo = aovivo 
}

const upost = new Postagem("Como Baixar ...", "Torrent donwload", "GBGamer", 1200, "Valeu mano, SHOW!!!", false)
console.log(upost)

// Add elementos ao array

const numeros = [1,2,3]

numeros.unshift(0)
console.log(numeros)

numeros.splice(1,0,'a')
console.log(numeros)

numeros.push(5)
console.log(numeros)

// Array Encontrando elementos 
const numeros1 = [1,2,3,4,1]
console.log(numeros1.lastIndexOf(1))

console.log(numeros1.includes(2))

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
]

// Array Encontrando elementos com find

const marcas2 = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
]

const valor = marcas2.find(function(marca) {
    return marca.nome === 'a'
})

console.log(valor)

// Arrow Functions

const marcas3 = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
]

const valor2 = marcas3.find(marca => {
    return marca.nome === 'a'
})

console.log(valor2)

// Array removendo elementos

const numeros3 = [1,2,3,4,5,6]
console.log(numeros3)

const ultimo = numeros3.pop()

console.log(ultimo)

console.log(numeros3)

const inicio = numeros3.shift()

console.log(inicio)

console.log(numeros3)

const meio = numeros3.splice(1,1)

console.log(meio)

console.log(numeros3)

// Array esvaziar elementos

const numeros4 = [1,2,3,4,5,6]

numeros4.length = 0

console.log(numeros4)

// Array concatenando e dividindo arrays

const primeiro = [1,2,3]
const segundo = [4,5,6]

const combinado = primeiro.concat(segundo)
console.log(combinado)

const dividir = combinado.slice(1,3)
console.log(dividir)

// Operador Spread ...


// Array combinando

const numeros5 = [1,2,3,4,5]

const combinado1 = numeros5.join(',')
console.log(combinado1)