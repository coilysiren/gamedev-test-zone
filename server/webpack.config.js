var path = require('path');
var webpack = require('webpack');

var phaserModule = path.join(__dirname, '/../node_modules/phaser-ce/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');
var gameJs = path.join(__dirname, '/../client/assets/js/game.js')

module.exports = {
  entry: {
    main: [gameJs]
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, '/../dist')
  },
  devtool: 'cheap-source-map',
  watch: true,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  module: {
    loaders: [
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] }
    ]
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    }
  }
}
