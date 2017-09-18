const cheerio = require('cheerio')
module.exports = function(source){
	const $ = cheerio.load(source)
	return 'module.exports = '+JSON.stringify($('svg').html())
}