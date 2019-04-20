

const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    /*
    const requisicaoService = require('../api/requisicao/requisicaoService')
    requisicaoService.register(router, '/requisicao')

    */
    const requisicaoBusca = require('../api/compra/compraSearch')
    router.route('/compraMatches').get(requisicaoBusca.getMatches)
    //router.route('/compraCount').get(requisicaoBusca.getCount)
    

    const compraService = require('../api/compra/compraService');
    compraService.register(router, '/compra');

}
