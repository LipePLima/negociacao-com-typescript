import { Negociacoes } from "../models/negociacoes.js";
import { Negociacao } from "./../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  public add(): void {
    const negociacao = this.criaNegociacao();

    this.negociacoes.adiciona(negociacao);
    
    console.log(this.negociacoes.lista());

    this.limparForm();
  }

  public criaNegociacao(): Negociacao {
    const regx: RegExp = /-/g;

    const data       = new Date(this.inputData.value.replace(regx, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor      = parseFloat(this.inputValor.value);

    return new Negociacao(data, quantidade, valor);
  }

  public limparForm(): void {
    this.inputData.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';

    this.inputData.focus();
  }
}
