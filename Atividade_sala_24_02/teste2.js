class Carro {
    constructor(marca, ano) {
this.marca = marca; // atributo, algo imutavel
this.ano = ano; // atributo, algo imutavel
    }

    ligar() {
        console.log('${this.marca} está ligado!')
    }
}

// criando um objeto da classe carro
let meuCarro = new Carro("fiat", 2022);
meuCarro.ligar(); // saida fiat ligado.
