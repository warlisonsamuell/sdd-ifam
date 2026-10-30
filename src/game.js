import { CONFIG } from "./config.js";

export function createGameState() {
  return {
    phase: "start",
    score: 0,
    lives: CONFIG.initialLives,
    player: {
      x: (CONFIG.canvasWidth - CONFIG.playerWidth) / 2,
      y: CONFIG.canvasHeight - CONFIG.playerHeight,
      width: CONFIG.playerWidth,
      height: CONFIG.playerHeight,
    },
    items: [],
    elapsedTime: 0,
    spawnTimer: 0,
  };
}

export function startGame(state) {
  state.phase = "playing";
  state.score = 0;
  state.lives = CONFIG.initialLives;
  state.player.x = (CONFIG.canvasWidth - state.player.width) / 2;
  state.player.y = CONFIG.canvasHeight - state.player.height;
  state.items = [];
  state.elapsedTime = 0;
  state.spawnTimer = 0;
}

function spawnItem(state) {
  const isCoffee = Math.random() < CONFIG.coffeeChance;

  state.items.push({
    type: isCoffee ? "coffee" : "bug",
    x: Math.random() * (CONFIG.canvasWidth - CONFIG.itemSize),
    y: 0,
    size: CONFIG.itemSize,
  });
}

function overlaps(first, second) {
  return first.x < second.x + second.width
    && first.x + first.width > second.x
    && first.y < second.y + second.height
    && first.y + first.height > second.y;
}

export function updateGame(state, input, deltaTime) {
  if (state.phase !== "playing" || state.lives === 0) {
    return;
  }

  state.elapsedTime += deltaTime;

  if (input.left && !input.right) {
    state.player.x -= CONFIG.playerSpeed * deltaTime;
  } else if (input.right && !input.left) {
    state.player.x += CONFIG.playerSpeed * deltaTime;
  }

  state.player.x = Math.max(
    0,
    Math.min(state.player.x, CONFIG.canvasWidth - state.player.width),
  );

  const itemSpeed = Math.min(
    CONFIG.initialItemSpeed + state.elapsedTime * CONFIG.itemSpeedIncrease,
    CONFIG.maxItemSpeed,
  );
  const spawnInterval = Math.max(
    CONFIG.initialSpawnInterval - state.elapsedTime * CONFIG.spawnIntervalDecrease,
    CONFIG.minSpawnInterval,
  );

  state.spawnTimer += deltaTime;
  while (state.spawnTimer >= spawnInterval) {
    state.spawnTimer -= spawnInterval;
    spawnItem(state);
  }

  for (let itemIndex = state.items.length - 1; itemIndex >= 0; itemIndex -= 1) {
    const item = state.items[itemIndex];
    item.y += itemSpeed * deltaTime;

    if (overlaps(state.player, {
      x: item.x,
      y: item.y,
      width: item.size,
      height: item.size,
    })) {
      if (item.type === "coffee") {
        state.score += CONFIG.coffeePoints;
      } else {
        state.lives = Math.max(0, state.lives - 1);
        if (state.lives === 0) {
          state.phase = "gameover";
        }
      }

      state.items.splice(itemIndex, 1);
      if (state.phase !== "playing") {
        return;
      }
    } else if (item.y >= CONFIG.canvasHeight) {
      state.items.splice(itemIndex, 1);
    }
  }
}