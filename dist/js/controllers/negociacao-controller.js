import { Negociacao } from "./../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    add() {
        const regx = /-/g;
        const data = new Date(this.inputData.value.replace(regx, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        const negociacao = new Negociacao(data, quantidade, valor);
        console.log(negociacao);
    }
}
