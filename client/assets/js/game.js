require('pixi');
require('p2');
var Phaser = require('phaser');

var game = new Phaser.Game(
    '100',
    '100',
    Phaser.AUTO,
    'content',
    {
        preload: preload,
        create: create,
        update: update
    }
);

function preload() {
}

function create() {
}

function update() {
}
