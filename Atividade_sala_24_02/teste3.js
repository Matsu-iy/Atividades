class Carro {
    constructor(marca, ano, cor) {
this.marca = marca; // atributo, algo imutavel
this.ano = ano; // atributo, algo imutavel
this.cor = cor;
    }

    ligar() {
        console.log(`${this.marca} está ligado!`)
    }
}
// herança
class CarroEletrico extends Carro {
    constructor(marca, ano, cor, bateria, voltagem) {
        super(marca, ano, cor); // a função herança ( super ) faz com que o code chame um atributo ja informado em uma classe previa
        this.bateria = bateria;
        this.voltagem = voltagem;
    }

    carregarBateria() {
        console.log(`A batteria do carro ${this.marca} está carregada. A ${this.voltagem} esta calibrada.`)
    }
}

// criando o carro eletrico
let meuTesla = new CarroEletrico("Tesla", 2023, "preto", "100%", "100KW");
meuTesla.ligar();
meuTesla.carregarBateria();