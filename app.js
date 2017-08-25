// const Phaser = require('phaser');

// var game = new Phaser.Game(
//     800,
//     600,
//     Phaser.AUTO,
//     'content',
//     {
//         preload: preload,
//         create: create,
//         update: update
//     }
// );

// function preload() {
//     game.load.image('sky', 'assets/sky.png');
//     game.load.image('ground', 'assets/platform.png');
//     game.load.image('star', 'assets/star.png');
//     game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
// }

// function create() {
//     game.add.sprite(0, 0, 'star');
// }

// function update() {
// }

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
