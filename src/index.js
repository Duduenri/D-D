import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"

const magoDudu = new Mago('Dudu', 8, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)

const personagens = [magoDudu, magaJulia]

new PersonagemView(personagens).render()
