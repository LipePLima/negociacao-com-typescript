export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get data(): Date {
        const data = new Date(this._data.getTime());

        return data;
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    public static cria(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const regx: RegExp = /-/g;

        const data       = new Date(dataString.replace(regx, ','));
        const quantidade = parseInt(quantidadeString);
        const valor      = parseFloat(valorString);
    
        return new Negociacao(data, quantidade, valor);
    }
}
