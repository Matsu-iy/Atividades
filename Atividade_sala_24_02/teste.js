class Carro {
    constructor(marca, ano, cor) {
this.marca = marca; // atributo, algo imutavel
this.ano = ano; // atributo, algo imutavel
this.cor = cor;
    }
}

// criando um objeto da classe Carro
let meuCarro = new Carro("toyota", 2020, "vermelho");
console.log(meuCarro.marca);
console.log(meuCarro.ano);
console.log(meuCarro.cor);