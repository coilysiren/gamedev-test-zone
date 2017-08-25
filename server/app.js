var express = require('express')
var app = express()
var DEFAULT_PORT = 8080

app.set('view engine', 'ejs')
app.set('port', process.env.PORT || DEFAULT_PORT)

if (process.env.NODE_ENV !== 'production') {
    var webpack = require('webpack')
    var webpackDevMiddleware = require('webpack-dev-middleware')
    var webpackHotMiddleware = require('webpack-hot-middleware')
    var webpackConfig = require('./webpack.config.js')
    var compiler = webpack(webpackConfig)
    app.use(webpackDevMiddleware(compiler))
    app.use(webpackHotMiddleware(compiler))
}

app.get('/', (req, res) => {
  res.render('index')
})

app.use(express.static(__dirname + '/../dist'))

app.listen(app.get('port'))
console.log('listening on port '+ app.get('port'))
