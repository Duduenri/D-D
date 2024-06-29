import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoDumbledore = new Mago('Dumbledore', 4, 'fogo', 4, 3)
const arqueiroDudu = new Arqueiro('Dudu', 7, 8)
const arqueiroMagoLegolas = new ArqueiroMago('Legolas', 7, 10, 'ar', 4, 8)
const guerreiraXena = new Guerreiro('Xena', 8)

//arqueiroBruno.#level = 15

const personagens = [magoDumbledore, arqueiroDudu, arqueiroMagoLegolas, guerreiraXena]

new PersonagemView(personagens).render()

console.log(Personagem.verificarVencedor(arqueiroBruno, magoAntonio))

console.log(arqueiroBruno)
