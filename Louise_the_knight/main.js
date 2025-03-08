import StartingScene from "./startingScene.js";
import GameScene from "./gameScene.js";

// Create the canvas element with the willReadFrequently attribute
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d", { willReadFrequently: true });
document.body.appendChild(canvas);

const config = {
  type: Phaser.CANVAS,
  canvas: canvas,
  width: 960,
  height: 280,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 },
      debug: false,
    },
  },
  scene: [StartingScene, GameScene],
};

const game = new Phaser.Game(config);
