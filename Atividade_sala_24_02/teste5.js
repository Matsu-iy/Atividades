class Carro {
    constructor(marca, modelo, ano, cor, preco){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.preco = preco;
    }
    descricao() {
        console.log(`O carro é um ${this.marca} modelo ${this.modelo} do ano de ${this.ano}, na cor ${this.cor} custando em média ${this.preco} Whanzas.`);
    }
}
let carro1 = new Carro("fiat", "X", 2022, "cinza", 20000);
carro1.descricao();

class NovoCarro {
    constructor(marca, modelo, ano, cor, preco, garantia){
        super(marca, modelo, ano, cor, preco);
        this.garantia = garantia;
    }
    descricao2() {
        console.log(`Aproveite nossa oferta especial para o novo ${this.marca} ${this.modelo}! Por apenas R$ ${this.preco - 500}, você leva o carro com ${this.garantia} de garantia!`)
    }
}