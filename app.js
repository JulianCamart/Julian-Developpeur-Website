// const ASSETS = {
//     name: 'santa',
//     png: 'assets/img/NPC_142.png',
//     heightFrame: 56,
//     widthFrame: 40
// };

// const config = {
//     width: 800,
//     height: 600,
//     type: Phaser.AUTO,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: {
//                 y: 650
//             }
//         }
//     },
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     }
// };

// let player, cursors, sprite;
// var isTurnRight = true;
// var isTurnLeft = false;

// var game = new Phaser.Game(config);

// function preload() {
//     //Add spriteSheet as config object name(santa)
//     this.load.spritesheet(ASSETS.name,
//         ASSETS.png,
//         {
//             frameWidth: ASSETS.widthFrame,
//             frameHeight: ASSETS.heightFrame
//         }
//     );
// }

// function create() {
//     player = this.physics.add.sprite(10, 500, ASSETS.name);
//     player.setScale(2);
//     player.setBounce(0.2);
//     player.setCollideWorldBounds(true);

//     this.anims.create({
//         key: 'waitRight',
//         frames: this.anims.generateFrameNumbers(ASSETS.name, { start: 0, end: 0 }),
//         frameRate: 1
//     });

//     this.anims.create({
//         key: 'waitLeft',
//         frames: this.anims.generateFrameNumbers(ASSETS.name, { start: 18, end: 18 }),
//         frameRate: 1
//     });

//     this.anims.create({
//         key: 'walkRight',
//         frames: this.anims.generateFrameNumbers(ASSETS.name, { start: 4, end: 17 }),
//         frameRate: 22,
//         repeat: -1
//     });

//     this.anims.create({
//         key: 'walkLeft',
//         frames: this.anims.generateFrameNumbers(ASSETS.name, { start: 22, end: 35 }),
//         frameRate: 22,
//         repeat: -1
//     });


//     //TODO Better animation when jump (is bugged)

//     // this.anims.create({
//     //     key: 'jumpRight',
//     //     frames: this.anims.generateFrameNumbers(ASSETS.name, { start: 0, end: 3 }),
//     //     frameRate: 6,
//     //     yoyo: true,
//     //     repeat: -1
//     // });

//     // this.anims.create({
//     //     key: 'jumpLeft',
//     //     frames: this.anims.generateFrameNumbers(ASSETS.name, { start: 18, end: 21 }),
//     //     frameRate: 6,
//     //     yoyo: true,
//     //     repeat: -1
//     // });

//     cursors = this.input.keyboard.createCursorKeys();
// }

// function update() {
//     if(cursors.left.isDown) {
//         player.setVelocity(-125, 0);
//         player.anims.play('walkLeft', true);
//         isTurnLeft = true;
//         isTurnRight = false;
//     }
//     else if(cursors.right.isDown) {
//         player.setVelocity(125, 0);
//         player.anims.play('walkRight', true);
//         isTurnRight = true;
//         isTurnLeft = false;
//     }
//     else {
//         player.setVelocityX(0);
//         if(isTurnRight) {
//             player.anims.play('waitRight', true);
//         }
//         else if(isTurnLeft) {
//             player.anims.play('waitLeft', true);
//         }
//     }

//     //NEED DEBUG TO FIND A SOLUTION
//     // if(cursors.up.isDown) {
//     //     //Check for a better way to do jump event
//     //     player.setVelocity(0, -200);
//     //     if(isTurnRight) {
//     //         player.anims.play('jumpRight', true);
//     //     }
//     //     else if(isTurnLeft) {
//     //         player.anims.play('jumpLeft', true);
//     //     }
//     // }
// }