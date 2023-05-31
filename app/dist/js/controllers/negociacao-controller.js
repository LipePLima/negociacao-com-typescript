import { Negociacoes } from "../models/negociacoes.js";
import { Negociacao } from "./../models/negociacao.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagens-view.js";
import { DiaDaSemana } from "../enums/dia-da-semana.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView', true);
        this.mensagemView = new MensagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    add() {
        const negociacao = Negociacao.cria(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.confirmaDia(negociacao.data)) {
            this.mensagemView
                .update('Apenas negociações em dias úteis são aceitas');
        }
        this.negociacoes.adiciona(negociacao);
        this.attView();
        this.limparForm();
    }
    confirmaDia(data) {
        return data.getDay() > DiaDaSemana.DOMINGO
            && data.getDay() < DiaDaSemana.SABADO;
    }
    limparForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    attView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação adicionada com sucesso!");
    }
}
