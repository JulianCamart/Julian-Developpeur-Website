
import Phaser from "phaser";
import SceneMain from "./sceneMain";


const config = {
  type: Phaser.AUTO,
  width: 1024,
  height: 600,
  parent: "game-container",
  pixelArt: true,
  backgroundColor: "#1d212d",
  scene: SceneMain,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 1000 }
    }
  }
};
const game = new Phaser.Game(config);