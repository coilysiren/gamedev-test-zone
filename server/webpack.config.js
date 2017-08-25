var phaser = __dirname + '/../node_modules/phaser-ce/build/custom/phaser-split.js'
var pixi = __dirname + '/../node_modules/phaser-ce/build/custom/pixi.js'
var p2 = __dirname + '/../node_modules/phaser-ce/build/custom/p2.js'

module.exports = {
  entry: {
    main: ['./client/game.js']
  },
  output: {
    filename: "[name].js",
    path: __dirname + '/../dist'
  },
  devtool: 'cheap-source-map',
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
