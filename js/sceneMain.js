import Phaser from "phaser";
import Player from "./player.js";

export default class SceneMain extends Phaser.Scene {


    preload() {

      this.load.image("blocks", "../assets/tilesSets/BlocksSolids.png");
      //this.load.image("tree", "../assets/tilesSets/Tiles_171.png");
      //this.load.image("plants", "../assets/tilesSets/Tiles_3.png");

      this.load.tilemapTiledJSON('map', '../assets/map/map.json');



      // this.load.spritesheet(
      //     "player",
      //     "../assets/santaSprites/NPC_142.png",
      //     {
      //       frameWidth: 40,
      //       frameHeight: 56
      //     }
      //   );
    }

    create() {

      const map = this.make.tilemap({ key: "map" });

    //   // Parameters are the name you gave the tileset in Tiled and then the key of the tileset image in
    //   // Phaser's cache (i.e. the name you used in preload)
      const tilesSolidsBlocks = map.addTilesetImage("SolidsBlocks", "blocks");
    //   const tilesetTree = map.addTilesetImage("Tree", "tree");
    //   const tilesetPlants = map.addTilesetImage("ItemsPlants", "plants");

    //   // Parameters: layer name (or index) from Tiled, tileset, x, y
    //   const belowLayer = map.createStaticLayer("Ground", tileset, 0, 0);
    //   const worldLayer = map.createStaticLayer("Items", tileset, 0, 0);

    //   this.player = new Player(this, 10, 10);
        
    }

    update() {
    //     // Allow the player to respond to key presses and move itself
    //     this.player.update();
    }
}