import Phaser from "phaser";
import Player from "./player.js";

export default class SceneMain extends Phaser.Scene {


    preload() {

        this.load.spritesheet(
            "player",
            "../assets/santaSprites/NPC_142.png",
            {
              frameWidth: 40,
              frameHeight: 56
            }
          );
          //TODO
          this.load.image(
            "tiles",
            "../assets/tilesets/0x72-industrial-tileset-32px-extruded.png"
          );
          this.load.tilemapTiledJSON(
            "map",
            "../assets/map/map.json"
          );
          
    }
    create() {
        
    }

    update() {
        // Allow the player to respond to key presses and move itself
        this.player.update();
    }
}