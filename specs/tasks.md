# Plano de implementação: Chuva de Bugs

> Como usar: rode `/4-implementar N` para cada tarefa, teste no navegador e faça commit.

- [ ] 1. Monte o esqueleto visível
  - Crie a página com a área Canvas fixa, centralizada e com o visual escuro definido no design.
  - Exporte o `CONFIG` inicial e configure `main.js` para desenhar o nome do jogo e a instrução de início.
  - Inicie o loop com `requestAnimationFrame` e delta time, mantendo algo visível no Canvas.
  - **Arquivos:** `index.html`, `style.css`, `src/config.js`, `src/main.js`
  - **Como verificar:** abra a página no navegador → a área central mostra “Chuva de Bugs” e a instrução para pressionar Espaço.
  - _Requisitos: 1.1_

- [ ] 2. Implemente a partida jogável
  - Crie o estado e as regras em `game.js`: início, movimento do dev, surgimento e queda de itens, colisões e remoção de itens que chegam ao chão.
  - Conecte as setas e A/D ao movimento, limitando o dev à área de jogo.
  - Exiba pontuação e vidas e aumente gradualmente a velocidade e a frequência de surgimento.
  - **Arquivos:** `src/config.js`, `src/main.js`, `src/game.js`
  - **Como verificar:** pressione Espaço e mova o dev → cafés somam 1 ponto, bugs retiram 1 vida, itens perdidos não alteram os valores e a partida fica mais difícil com o tempo.
  - _Requisitos: 1.2, 2.1, 2.2, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 5.1, 5.2, 5.3_

- [ ] 3. Conclua o fim de jogo e o recorde
  - Encerre a partida ao chegar a zero vidas e apresente pontuação final, recorde e instrução para jogar novamente.
  - Permita reiniciar com Espaço, restaurando pontuação e 3 vidas sem apagar o recorde.
  - Crie `record.js` para carregar e atualizar o recorde no armazenamento do navegador.
  - **Arquivos:** `src/config.js`, `src/main.js`, `src/game.js`, `src/record.js`
  - **Como verificar:** perca as três vidas e faça uma pontuação maior que o recorde anterior → a tela final mostra o resultado; pressione Espaço e depois reabra a página → a nova partida começa limpa e o recorde continua salvo.
  - _Requisitos: 6.1, 6.2, 7.1, 7.2, 7.3_

- [ ] 4. Pola e confira todos os critérios
  - Ajuste apresentação, textos e desenho dos emojis para corresponder ao visual definido, sem alterar o escopo.
  - Trate casos limite: direções simultâneas, tecla Espaço repetida, colisão no chão e recorde ausente ou inválido.
  - Faça uma rodada de verificação no navegador cobrindo início, movimento, itens, dificuldade, pontuação, vidas, fim de jogo, repetição e persistência do recorde.
  - **Arquivos:** `index.html`, `style.css`, `src/config.js`, `src/main.js`, `src/game.js`, `src/record.js`
  - **Como verificar:** recarregue a página e percorra o ciclo completo de jogo → cada comportamento corresponde aos critérios, sem erros visíveis nem valores incorretos.
  - _Requisitos: 1.1, 1.2, 2.1, 2.2, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 5.1, 5.2, 5.3, 6.1, 6.2, 7.1, 7.2, 7.3_

## Correções