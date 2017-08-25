const phaser = './node_modules/phaser-ce/build/custom/phaser-split.js'
const pixi = './node_modules/phaser-ce/build/custom/pixi.js'
const p2 = './node_modules/phaser-ce/build/custom/p2.js'

module.exports = {
  entry: './client/game.js',
  entry: {
    app: ['./client/game.js'],
    vendor: ['pixi', 'p2', 'phaser']
  },
  output: {
    filename: "[name].js",
    path: __dirname + '/dist'
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
