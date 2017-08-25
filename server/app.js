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

const app = require('express')()
const webpack = require('webpack')
const DEFAULT_PORT = 8080

app.set('view engine', 'ejs')
app.set("port", process.env.PORT || DEFAULT_PORT);

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(app.get("port"))
console.log('listening on port '+ app.get("port"))
