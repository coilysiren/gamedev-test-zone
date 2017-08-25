var path = require('path');
var DEFAULT_PORT = 8080
var express = require('express')
var app = express()
var sassMiddleware = require('node-sass-middleware');
var compiledAssetsDir = path.join(__dirname, '/../dist')
var clientDir = path.join(__dirname, '/../client')

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

app.use(sassMiddleware({
    src: path.join(clientDir, '/assets/css'),
    dest: compiledAssetsDir,
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/css'
}));

app.use(express.static(compiledAssetsDir))

app.get('/', (req, res) => {
    var indexPath = path.join(clientDir, '/views/index')
    res.render(indexPath)
})

app.listen(app.get('port'))
console.log('listening on port '+ app.get('port'))
