export class View {
      protected element: HTMLElement;

      constructor(selector: string) {
            this.element = document.querySelector(selector);
      }

      update(model: string): void {
            const template = this.template(model);
            this.element.innerHTML = template;
      }

      template(model: string): string {
            throw Error('Classe filha precisa implementar o método template.')
      }
}