var express = require('express')
var router = express.Router()
var version = require('../package.json').version

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Приложение для деплоймента',
  	version,
  	counter: req.app.counter,
  	started_at: req.app.started_at
  });
})

router.get('/increment', (req, res) => {
	req.app.increment()
	res.redirect('/')
})

router.get('/kill', (req, res) => {
	console.log('Got /kill, so quitting.')
	res.redirect('/')
	process.exit(123)
})

router.get('/500', (req, res, next) => {
	const err = new Error('Intended 500 error with no details')
	next(err)
})

module.exports = router
