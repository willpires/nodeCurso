
interface x {
    okteste():void
}

class Pessoa implements x{

    private nome:string
    private idade:number
    
    constructor(nome:string, idade: number){
        this.nome = nome
        this.idade = idade
    }
    
    public getnome(): string {
        return this.nome
    }
    
    public setnome(value: string) {
        this.nome = value
    }
    
    okteste(): void {
        throw new Error("Method not implemented.")
    }
}

class pessoaRepositorio {
    private pessoa:Array<Pessoa>
    add(){
        const a = new Pessoa('will',10)
        this.pessoa.push(a)
    }
}

const a = new Pessoa('william',28)
console.log(a.getnome)