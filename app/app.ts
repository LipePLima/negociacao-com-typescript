import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller: NegociacaoController = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.add();
    })

} else {
    throw Error('Não foi possível inicializar esta aplicação, verifique se o form existe')
    
}
