class Pai {
    constructor(sobrenomenome, idade, dividas) {
      this.sobrenome = sobrenomenome;
      this.idade = idade;
      this.dividas = dividas;
    }
  
    apresentacao() {
      console.log(`Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos e estou com dívidas no valor de R$ ${this.dividas}.`);
    }
  }
  
  class Filho extends Pai {
    constructor(sobrenomenome, idade, dividasPai, heranca) {
      super(sobrenomenome, idade, dividasPai);
      this.heranca = heranca;
    }
  
    assumirDividas() {
      console.log(`Olá! Meu nome é ${this.sobrenomenome}, tenho ${this.idade} anos e estou assumindo as dívidas do meu pai, no valor de R$ ${this.dividas}.`);
      console.log(`Além disso, recebi uma herança no valor de R$ ${this.heranca}.`);
    }
  }
  
  let pai1 = new Pai("Benites", 55, 10000);
  pai1.apresentacao(); // Saída: Olá! Meu nome é José, tenho 55 anos e estou com dívidas no valor de R$ 10000.
  
  let filho1 = new Filho("Benites", 30, pai1.dividas, 5000);
  filho1.apresentacao(); // Saída: Olá! Meu nome é Pedro, tenho 30 anos e estou com dívidas no valor de R$ 10000.
  filho1.assumirDividas(); // Saída: Olá! Meu nome é Pedro, tenho 30 anos e estou assumindo as dívidas do meu pai, no valor de R$ 10000.
                         // Saída: Além disso, recebi uma herança no valor de R$ 5000.