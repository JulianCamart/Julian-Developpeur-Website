
import Phaser from "phaser";
import SceneMain from "./sceneMain";


var isMobile = navigator.userAgent.indexOf("Mobile");
if (isMobile == -1) {
    isMobile = navigator.userAgent.indexOf("Tablet");
}
if (isMobile == -1) {
    const config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'phaser-game',
        scene: [SceneMain],
        physics: {
            default: 'arcade',
            arcade: {debug: true},
            gravity: { y: 1000 }
        }
        
    };
} else {
    const config = {
        type: Phaser.AUTO,
        width: window.innerWidth,
        height: window.innerHeight,
        parent: 'phaser-game',
        scene: [SceneMain],
        physics: {
            default: 'arcade',
            arcade: {debug: true},
            gravity: { y: 1000 }
        }
    };
}
const game = new Phaser.Game(config);