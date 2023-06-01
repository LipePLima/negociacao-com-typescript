import { logarTempoDeExecucao } from "../decorators/tempo-de-execucao.js";

export abstract class View<T> {
      protected element: HTMLElement;
      private escapar: boolean = false;

      constructor(selector: string, escapar?: boolean) {
            this.element = document.querySelector(selector) as HTMLElement;

            if(!this.element) {
                  throw Error(`Seletor ${selector} não existe no DOM. Favor, verifique`)
            
            }

            if (escapar) {
                  this.escapar = escapar;
                  
            }
      }

      @logarTempoDeExecucao()
      public update(model: T): void {
            let template = this.template(model);

            if (this.escapar) {
                  template = template.replace(/<script>[\s\S]*?<script>/, '');
            }

            this.element.innerHTML = template;

      }

      protected abstract template(model: T): string 
}