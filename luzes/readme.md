# Semáforo com ESP32
Objetivo

Este projeto demonstra o funcionamento de um semáforo eletrônico utilizando o ESP32 e três LEDs.
O sistema acende os LEDs vermelho, verde e amarelo em sequência, respeitando tempos semelhantes aos de um semáforo real.
Com isso, é possível compreender o controle de saídas digitais, temporização (delay) e lógica sequencial em microcontroladores.

# Esquema de Ligações

Conforme o diagrama apresentado, o circuito foi montado da seguinte forma:

🔴 LED Vermelho > Pino 23 do ESP32

🟡 LED Amarelo > Pino 22 do ESP32

🟢 LED Verde > Pino 21 do ESP32

Todos os catodos dos LEDs > GND do ESP32

# Explicação do Funcionamento

O programa envia sinais de alta tensão (HIGH) para cada pino de saída em momentos diferentes, acendendo os LEDs de forma sequencial.
O tempo em que cada LED permanece aceso é definido pelo comando delay(), simulando as fases de um semáforo:

Vermelho > 6 segundos
Verde > 4 segundos
Amarelo > 2 segundos

Após a sequência, o ciclo recomeça automaticamente, repetindo indefinidamente.

# código

```
// ---------- Definição dos pinos ----------
const int LED_VERMELHO = 23;  // LED vermelho conectado ao pino 23
const int LED_AMARELO  = 22;  // LED amarelo conectado ao pino 22
const int LED_VERDE    = 21;  // LED verde conectado ao pino 21

// ---------- Configuração inicial ----------
void setup() {
  pinMode(LED_VERMELHO, OUTPUT);
  pinMode(LED_AMARELO, OUTPUT);
  pinMode(LED_VERDE, OUTPUT);

  // Garante que todos os LEDs comecem desligados
  digitalWrite(LED_VERMELHO, LOW);
  digitalWrite(LED_AMARELO, LOW);
  digitalWrite(LED_VERDE, LOW);
}

// ---------- Loop principal ----------
void loop() {
  // 1. Vermelho aceso por 6 segundos
  digitalWrite(LED_VERMELHO, HIGH);
  digitalWrite(LED_AMARELO, LOW);
  digitalWrite(LED_VERDE, LOW);
  delay(6000);

  // 2. Verde aceso por 4 segundos
  digitalWrite(LED_VERMELHO, LOW);
  digitalWrite(LED_AMARELO, LOW);
  digitalWrite(LED_VERDE, HIGH);
  delay(4000);

  // 3. Amarelo aceso por 2 segundos
  digitalWrite(LED_VERMELHO, LOW);
  digitalWrite(LED_AMARELO, HIGH);
  digitalWrite(LED_VERDE, LOW);
  delay(2000);
}
```

# avaliações

Felipe Viana - cumpriu com os 3 requerimentos, sendo eles o código, a construção fisica, mas nao apresentou outros componentes para obter assim a nota maxima, assim dou nota 9"

Vitor Lucena - "Bem organizado e codigo funcionando com o que foi pedido na ponderada. nao foi colocado nada a mais para tirar nota maior, 9"