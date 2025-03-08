function calcularDesconto(preco, desconto) {
    let precoDesconto = preco * desconto / 100
    return preco - precoDesconto;
    
}

let precos = [50, 100, 200]; // Lista de preços
let descontos = [5, 10, 15]; // Lista de descontos

for (let i = 0; i < precos.length; i++) {
    let preco = precos[i];
    let desconto = descontos[i];
    console.log("O preço padrão de R$" + preco + " com o desconto de " + desconto + "%, vai sair por R$" + calcularDesconto(preco, desconto));
}