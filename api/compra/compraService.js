const compra = require('./compra')
const _ = require('lodash')

compra.methods(['get', 'post', 'put', 'delete'])
compra.updateOptions({new: true, runValidators: true})
compra.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)


function sendErrorsOrNext(req, res, next) {
	const bundle = res.locals.bundle
	if (bundle.errors) {
		var errors = parseErrors(bundle.errors)
		res.status(500).json({errors})
	} else {
		next()
	}
}

function parseErrors(nodeRestfulErrors) {
  //forIn é do loadash percorrre objeto de erros do mongoose
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

compra.route('count', function(req, res, next) {
	compra.count(function(error, value) {
		if(error) {
		res.status(500).json({errors:[error]})
		} else {
		res.json({value})
		}
	})
})

module.exports = compra
