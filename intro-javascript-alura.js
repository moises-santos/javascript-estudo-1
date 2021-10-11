const nome = 'Moises';
const Sobrenome = 'Nascimento'
const Idade = 29;
const anoDeNascimento = 1992;
const profissao = 'Oceanógrafo'
const faculdade = 'UFES'

/* c
onsole.log() 'printa no console'
*/

console.log(nome)
console.log(Idade)
console.log(anoDeNascimento)
console.log(nome + ' ' + Sobrenome)
console.log(`Meu nome é ${nome}`)
console.log(`Eu sou ${nome} formado na ${faculdade}`)

// atribuição de variáveis | aula dia 1/10/2021

// const = declava variáveis constantes. não mudam
// let = declara variáveis que podem ser sobrescritas
let nomeSobrenome
nomeSobrenome = nome + ' ' + Sobrenome
console.log(nomeSobrenome)

console.log(``)
console.log(``)

// criando listas | aula dia 1/10/2021
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
)


const idadeComprador = 19
const estaAcompanhada = true
const temPassagemComprada = true
const destino = `Rio de Janeiro`

listaDeDestinos.push(`Curitiba`) // add item na lista
// listaDeDestinos.splice(1,1) // remove item na lista

console.log(`Destinos possíveis:`)

// estudando condicionais 11/10/2021
// estudando operadores lógicos encadeados 11/10/2021

// if (idadeComprador >= 18) {
//   console.log("comprador maior de idade")
//   console.log(listaDeDestinos)

// } else if (estaAcompanhada) {
//   console.log("menor acompanhado")
//   console.log(listaDeDestinos)
// } else {
//   console.log("comprador menor, não posso vender")
//   console.log(listaDeDestinos[1])
//   listaDeDestinos.splice(1, 1)
//   console.log("Destinos restantes:")
//   console.log(listaDeDestinos)
// }

// if (idadeComprador >= 18 || estaAcompanhada) {
//   console.log("Boa Viagem")
//   console.log(listaDeDestinos)
// } else {
//   console.log("comprador menor, não posso vender")
// }
// console.log('')

// console.log("Embarque:")
// if(idadeComprador >= 18 && temPassagemComprada){
//   console.log("Permitido")
// }else{
//   console.log("Impedido")
// }


const podeComprar = idadeComprador >= 18 || estaAcompanhada

let contador = 0
while (contador<3){
  if(listaDeDestinos[contador] == destino){
    console.log("Destino existente")
  }else{
    console.log("Destino não existe")
  }
  contador += 1
}
