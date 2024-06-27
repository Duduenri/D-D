import { Personagem } from "./modules/Personagem"
// const personagemPedrinho = {
//     nome: 'Pedrinho',
//     vida: 7,
//     mana: 12,
//     level: 5,
//     tipo: 'Mago',
// }

// const personagemJose = {
//     nome: 'Jose',
//     vida: 7,
//     mana: 6,
//     level: 3,
//     tipo: 'Arqueiro',
// }

// const personagemThai = {
//     nome: 'Thai',
//     vida: 7,
//     mana: 12,
//     level: 5,
//     tipo: 'Mago',
// }

const personagemPedrinho = new Personagem()
personagemPedrinho.nome = 'Pedrinho'
personagemPedrinho.mana = 7
personagemPedrinho.level = 5

console.log(personagemPedrinho)