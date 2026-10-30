import { CONFIG } from "./config.js";

const canvas = document.querySelector("#game-canvas");
const context = canvas.getContext("2d");
let previousFrameTimestamp = null;

canvas.width = CONFIG.canvasWidth;
canvas.height = CONFIG.canvasHeight;
document.documentElement.style.setProperty("--game-background", CONFIG.colors.background);
document.documentElement.style.setProperty("--game-text", CONFIG.colors.text);
document.documentElement.style.setProperty("--game-width", `${CONFIG.canvasWidth}px`);

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

function frame(timestamp) {
  const deltaTime = previousFrameTimestamp === null
    ? 0
    : (timestamp - previousFrameTimestamp) / CONFIG.millisecondsPerSecond;
  previousFrameTimestamp = timestamp;

  drawStartScreen();
  requestAnimationFrame(frame);
}

requestAnimationFrame(frame);