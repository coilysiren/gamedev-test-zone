var phaser = __dirname + '/../node_modules/phaser-ce/build/custom/phaser-split.js'
var pixi = __dirname + '/../node_modules/phaser-ce/build/custom/pixi.js'
var p2 = __dirname + '/../node_modules/phaser-ce/build/custom/p2.js'

module.exports = {
  entry: {
    vendor: ['pixi', 'p2', 'phaser'],
    main: ['./client/game.js']
  },
  output: {
    filename: "[name].js",
    path: __dirname + '/../dist'
  },
  watch: true,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    }
  }
}
