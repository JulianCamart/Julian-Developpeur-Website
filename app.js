TESTING = {
    PLAYER: 'assets/img/Ninja.png'
}

const config = {
    width: 500,
    height: 300,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 650
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

let player, cursors;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('player', TESTING.PLAYER);
}

function create() {
    player = this.physics.add.image(100, 100, 'player');
    player.body.collideWorldBounds = true;

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    player.setVelocityX(0);
    if(cursors.up.isDown) {
        player.setVelocity(0, -250);
    }
    if(cursors.left.isDown) {
        player.setVelocity(-100, 0);
    }
    if(cursors.right.isDown) {
        player.setVelocity(100, 0);
    }
}