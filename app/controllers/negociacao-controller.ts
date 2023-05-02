import { Negociacoes } from "../models/negociacoes.js";
import { Negociacao } from "./../models/negociacao.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagens-view.js";
import { DiaDaSemana } from "../enums/dia-da-semana.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  private negociacoes     = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView', true);
  private mensagemView    = new MensagemView("#mensagemView", false);

  constructor() {
    this.inputData       = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor      = document.querySelector("#valor");

    this.negociacoesView.update(this.negociacoes);
  }

  public add(): void {
    const negociacao = Negociacao.cria(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );

    if (!this.confirmaDia(negociacao.data)) {
      this.mensagemView
      .update('Apenas negociações em dias úteis são aceitas')
      
    } 

    this.negociacoes.adiciona(negociacao);
    this.attView();
    this.limparForm();
  }

  private confirmaDia (data: Date) {
    return data.getDay() > DiaDaSemana.DOMINGO 
        && data.getDay() < DiaDaSemana.SABADO
  }

  private limparForm(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';

    this.inputData.focus();
  }

  private attView(): void {
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso!")
  }
}
