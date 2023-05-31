export class View {
    constructor(selector, escapar) {
        this.escapar = false;
        this.element = document.querySelector(selector);
        if (!this.element) {
            throw Error(`Seletor ${selector} não existe no DOM. Favor, verifique`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.element.innerHTML = template;
    }
}
