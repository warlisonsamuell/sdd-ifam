# Requisitos: Chuva de Bugs

## Introdução
Chuva de Bugs é um jogo de navegador para quem quer uma partida rápida com tema de programação. O jogador controla uma pessoa desenvolvedora que coleta cafés e desvia de bugs que caem do céu.

## Glossário
- **Dev**: personagem controlado pelo jogador.
- **Item**: café ou bug que cai durante a partida.
- **Recorde**: maior pontuação alcançada pelo jogador.

## Requisitos

### Requisito 1: Iniciar uma partida
**História de usuário:** Como jogador, quero iniciar uma partida pela tela inicial, para começar a coletar cafés e evitar bugs.

**Critérios de aceitação**
- **1.1** QUANDO o jogo é aberto, O SISTEMA DEVE exibir o nome do jogo e a instrução para pressionar Espaço para começar.
- **1.2** QUANDO o jogador pressiona Espaço na tela inicial, O SISTEMA DEVE iniciar uma partida.

### Requisito 2: Movimentar o dev
**História de usuário:** Como jogador, quero mover o dev para os lados, para alcançar cafés e evitar bugs.

**Critérios de aceitação**
- **2.1** ENQUANTO uma partida estiver em andamento, O SISTEMA DEVE permitir mover o dev para a esquerda e para a direita usando as setas correspondentes ou as teclas A e D.
- **2.2** ENQUANTO uma partida estiver em andamento, O SISTEMA DEVE manter o dev dentro dos limites da área de jogo.

### Requisito 3: Interagir com os itens
**História de usuário:** Como jogador, quero coletar cafés e evitar bugs, para aumentar minha pontuação e preservar minhas vidas.

**Critérios de aceitação**
- **3.1** ENQUANTO uma partida estiver em andamento, O SISTEMA DEVE fazer cafés e bugs caírem em posições variadas.
- **3.2** QUANDO o dev encosta em um café, O SISTEMA DEVE aumentar a pontuação em 1 ponto.
- **3.3** QUANDO o dev encosta em um bug, O SISTEMA DEVE reduzir as vidas em 1.
- **3.4** QUANDO um item chega ao chão sem encostar no dev, O SISTEMA DEVE removê-lo sem alterar a pontuação ou as vidas.

### Requisito 4: Aumentar o desafio
**História de usuário:** Como jogador, quero que a partida fique mais desafiadora com o tempo, para testar minha habilidade durante o jogo.

**Critérios de aceitação**
- **4.1** ENQUANTO a partida estiver em andamento, O SISTEMA DEVE aumentar gradualmente a velocidade de queda dos itens.
- **4.2** ENQUANTO a partida estiver em andamento, O SISTEMA DEVE aumentar gradualmente a frequência de surgimento dos itens.

### Requisito 5: Acompanhar a partida
**História de usuário:** Como jogador, quero ver minha pontuação e minhas vidas, para acompanhar meu desempenho e o risco de perder.

**Critérios de aceitação**
- **5.1** QUANDO uma partida começa, O SISTEMA DEVE iniciar o jogador com 3 vidas e pontuação zero.
- **5.2** ENQUANTO uma partida estiver em andamento, O SISTEMA DEVE exibir a pontuação e as vidas atuais.
- **5.3** QUANDO a pontuação ou a quantidade de vidas muda, O SISTEMA DEVE atualizar os valores exibidos.

### Requisito 6: Encerrar e repetir uma partida
**História de usuário:** Como jogador, quero ver o resultado e poder jogar novamente, para tentar superar minha pontuação.

**Critérios de aceitação**
- **6.1** QUANDO as vidas chegam a zero, O SISTEMA DEVE encerrar a partida e exibir a pontuação final, o recorde e a instrução para pressionar Espaço e jogar novamente.
- **6.2** QUANDO o jogador pressiona Espaço na tela de fim de jogo, O SISTEMA DEVE iniciar uma nova partida com pontuação zero e 3 vidas.

### Requisito 7: Exibir e preservar o recorde
**História de usuário:** Como jogador, quero consultar meu recorde em partidas futuras, para acompanhar minha melhor pontuação.

**Critérios de aceitação**
- **7.1** QUANDO a pontuação final supera o recorde, O SISTEMA DEVE atualizar o recorde.
- **7.2** QUANDO uma partida termina, O SISTEMA DEVE exibir o recorde atual.
- **7.3** QUANDO o jogador fecha e reabre a página, O SISTEMA DEVE preservar o recorde.

## Fora do escopo
- Som e música.
- Multiplayer.
- Login.
- Ranking online.
- Níveis ou fases.

## Suposições
- A partida termina assim que o jogador perde a terceira vida.
- Jogar novamente reinicia a pontuação e as vidas, mas preserva o recorde.
- O recorde só muda quando a pontuação final supera o recorde anterior.
- A apresentação usa fundo escuro com aparência de editor de código, emojis para o dev e os itens, e uma área de jogo fixa centralizada.