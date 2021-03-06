import Phaser from "phaser";

export default class Player {
  // constructor(scene, x, y) {
  //   this.scene = scene;

  //   // Create the animations we need from the player spritesheet
  //   const anims = scene.anims;
  //   anims.create({
  //     key: "player-idle",
  //     frames: anims.generateFrameNumbers("player", { start: 0, end: 0 }),
  //     frameRate: 1,
  //     repeat: -1
  //   });
  //   anims.create({
  //     key: "player-run",
  //     frames: anims.generateFrameNumbers("player", { start: 2, end: 15 }),
  //     frameRate: 12,
  //     repeat: -1
  //   });
  //   anims.create({
  //       key: "player-jump",
  //       frames: anims.generateFrameNumbers("player", { start: 1, end: 1 }),
  //       frameRate: 1,
  //       repeat: -1
  //   });

  //   // Create the physics-based sprite that we will move around and animate
  //   this.sprite = scene.physics.add
  //     .sprite(x, y, "player", 0)
  //     .setDrag(1000, 0)
  //     .setMaxVelocity(300, 400);

  //   // Track the arrow keys & WASD
  //   const { LEFT, RIGHT, UP, Z, Q, D } = Phaser.Input.Keyboard.KeyCodes;
  //   this.keys = scene.input.keyboard.addKeys({
  //     left: LEFT,
  //     right: RIGHT,
  //     up: UP,
  //     z: Z,
  //     q: Q,
  //     d: D
  //   });
  // }

  // update() {
  //   const keys = this.keys;
  //   const sprite = this.sprite;
  //   const onGround = sprite.body.blocked.down;
  //   const acceleration = onGround ? 600 : 200;

  //   // Apply horizontal acceleration when left/a or right/d are applied
  //   if (keys.left.isDown || keys.q.isDown) {
  //     sprite.setAccelerationX(-acceleration);
  //     // No need to have a separate set of graphics for running to the left & to the right. Instead
  //     // we can just mirror the sprite.
  //     sprite.setFlipX(true);
  //   } else if (keys.right.isDown || keys.d.isDown) {
  //     sprite.setAccelerationX(acceleration);
  //     sprite.setFlipX(false);
  //   } else {
  //     sprite.setAccelerationX(0);
  //   }

  //   // Only allow the player to jump if they are on the ground
  //   if (onGround && (keys.up.isDown || keys.z.isDown)) {
  //     sprite.setVelocityY(-500);
  //   }

  //   // Update the animation/texture based on the state of the player
  //   if (onGround) {
  //     if (sprite.body.velocity.x !== 0) sprite.anims.play("player-run", true);
  //     else sprite.anims.play("player-idle", true);
  //   } else {
  //     sprite.anims.stop();
  //     sprite.setTexture("player", 10);
  //   }
  // }

  // destroy() {
  //   this.sprite.destroy();
  // }
}
