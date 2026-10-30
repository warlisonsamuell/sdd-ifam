import { CONFIG } from "./config.js";
import { createGameState, startGame, updateGame } from "./game.js";

const canvas = document.querySelector("#game-canvas");
const context = canvas.getContext("2d");
const gameState = createGameState();
const input = { left: false, right: false };
let previousFrameTimestamp = null;

canvas.width = CONFIG.canvasWidth;
canvas.height = CONFIG.canvasHeight;
document.documentElement.style.setProperty("--game-background", CONFIG.colors.background);
document.documentElement.style.setProperty("--game-text", CONFIG.colors.text);
document.documentElement.style.setProperty("--game-width", `${CONFIG.canvasWidth}px`);

function handleKeyDown(event) {
  if (event.code === CONFIG.startKey) {
    event.preventDefault();
    if (gameState.phase === "start") {
      startGame(gameState);
    }
  }

  const pressedKey = event.key.toLowerCase();
  if (CONFIG.leftKeys.some((keyName) => keyName.toLowerCase() === pressedKey)) {
    input.left = true;
  }
  if (CONFIG.rightKeys.some((keyName) => keyName.toLowerCase() === pressedKey)) {
    input.right = true;
  }
}

function handleKeyUp(event) {
  const releasedKey = event.key.toLowerCase();
  if (CONFIG.leftKeys.some((keyName) => keyName.toLowerCase() === releasedKey)) {
    input.left = false;
  }
  if (CONFIG.rightKeys.some((keyName) => keyName.toLowerCase() === releasedKey)) {
    input.right = false;
  }
}

window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

function drawStartScreen() {
  context.fillStyle = CONFIG.colors.background;
  context.fillRect(0, 0, CONFIG.canvasWidth, CONFIG.canvasHeight);
  context.textAlign = "center";
  context.textBaseline = "middle";

  context.fillStyle = CONFIG.colors.accent;
  context.font = `${CONFIG.titleFontSize}px ${CONFIG.fontFamily}`;
  context.fillText(
    CONFIG.title,
    CONFIG.canvasWidth / 2,
    CONFIG.canvasHeight / 2 + CONFIG.titleOffsetY,
  );

  context.fillStyle = CONFIG.colors.text;
  context.font = `${CONFIG.instructionFontSize}px ${CONFIG.fontFamily}`;
  context.fillText(
    CONFIG.startInstruction,
    CONFIG.canvasWidth / 2,
    CONFIG.canvasHeight / 2 + CONFIG.instructionOffsetY,
  );
}

function drawPlayingScreen() {
  context.fillStyle = CONFIG.colors.background;
  context.fillRect(0, 0, CONFIG.canvasWidth, CONFIG.canvasHeight);
  context.textBaseline = "top";
  context.font = `${CONFIG.hudFontSize}px ${CONFIG.fontFamily}`;

  context.fillStyle = CONFIG.colors.text;
  context.textAlign = "left";
  context.fillText(
    `${CONFIG.scoreLabel}: ${gameState.score}`,
    CONFIG.hudInset,
    CONFIG.hudInset,
  );
  context.textAlign = "right";
  context.fillText(
    `${CONFIG.livesLabel}: ${gameState.lives}`,
    CONFIG.canvasWidth - CONFIG.hudInset,
    CONFIG.hudInset,
  );

  context.textAlign = "center";
  context.textBaseline = "bottom";
  context.font = `${gameState.player.height}px ${CONFIG.fontFamily}`;
  context.fillText(
    CONFIG.playerEmoji,
    gameState.player.x + gameState.player.width / 2,
    gameState.player.y + gameState.player.height,
  );

  context.textBaseline = "bottom";
  context.font = `${CONFIG.itemSize}px ${CONFIG.fontFamily}`;
  for (const item of gameState.items) {
    const emoji = item.type === "coffee" ? CONFIG.coffeeEmoji : CONFIG.bugEmoji;
    context.fillText(emoji, item.x + item.size / 2, item.y + item.size);
  }
}

function frame(timestamp) {
  const deltaTime = previousFrameTimestamp === null
    ? 0
    : (timestamp - previousFrameTimestamp) / CONFIG.millisecondsPerSecond;
  previousFrameTimestamp = timestamp;

  updateGame(gameState, input, deltaTime);
  if (gameState.phase === "start") {
    drawStartScreen();
  } else {
    drawPlayingScreen();
  }

  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);