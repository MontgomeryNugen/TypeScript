export class Stuffy {
    constructor(n: string, t: string, c: string) {
        this._name = n;
        this.type = t;
        this.color = c;    
    }

    private _name: string;
    private type: string;
    private color: string;

    get name(): string {
        return this._name;
    }

    about(): string {
        return `name: ${this._name}, type: ${this.type}, color: ${this.color}`;    
    }
}
