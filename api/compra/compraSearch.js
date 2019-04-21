const _ = require('lodash')
const compra = require('../compra/compra')

function getMatches(req, res, name) {
    var rQuery = new RegExp(req.query.word,'i');

    var dataIni = String(req.query.dti);
    var dataFim = String(req.query.dtf);

    var vDataIni = `${dataIni.substring(0, 4)}-${dataIni.substring(4, 6)}-${dataIni.substring(6, 8)}`;
    var vDataFim = `${dataFim.substring(0, 4)}-${dataFim.substring(4, 6)}-${dataFim.substring(6, 8)}`;
    var nomes = [] ;

    
    _.forIn(req.body.usuario, function(value, key) {
       nomes[key] = (value.nome);
    });
    //console.log(nomes);

    if (req.body.usuario[0].nome == 'super') {
        compra.find({   $and:   [{ dt_requisicao: { $gte: vDataIni}} , //data de requisição
                                { dt_requisicao: { $lte: vDataFim}}], //data de requisição 
                        $or:   [{nr_requisicao         :req.query.word},   //Requisição
                                {aprovador             :{$regex:rQuery}},  //Requisição                   
                                {requisitante          :{$regex:rQuery}},  //Requisição                 
                                {aprovador_mro         :{$regex:rQuery}},  //Requisição          
                                {aprovador_ctrl        :{$regex:rQuery}},  //Requisição          
                                {aprovador_financ      :{$regex:rQuery}},  //Requisição      
                                {emissor_oc            :{$regex:rQuery}},  //Requisição               
                                {estado_sc             :{$regex:rQuery}},  //Requisição               
                                {situacao_sc           :{$regex:rQuery}},  //Requisição  
                                {it_codigo             :{$regex:rQuery}},  //Requisição  
                                {desc_item             :{$regex:rQuery}},  //Requisição  
                                {cod_estabel           :{$regex:rQuery}},  //Requisição  
                                {nome_estabel          :{$regex:rQuery}},  //Requisição  
                                {cod_cta_ctbl          :{$regex:rQuery}},  //Requisição  
                                {des_cta_ctbl          :{$regex:rQuery}},  //Requisição  
                                {cod_ccusto            :{$regex:rQuery}},  //Requisição  
                                {des_ccusto            :{$regex:rQuery}},  //Requisição  
                                {cod_unid_negoc        :{$regex:rQuery}},  //Requisição  
                                {des_unid_negoc        :{$regex:rQuery}},  //Requisição  
                                {cod_depos             :{$regex:rQuery}},  //Requisição  
                                {cod_localiz           :{$regex:rQuery}},  //Requisição  
                                {lote                  :{$regex:rQuery}},  //Requisição
                                {numero_ordem          :{$regex:rQuery}},  //Requisição
                                {num_ord_inv           :{$regex:rQuery}},  //Requisição
                                {narrativa             :{$regex:rQuery}},  //Requisição
                                {oc_numero_ordem       :req.query.word},   //ordem_compra
                                {oc_cod_fornec         :req.query.word},   //ordem_compra
                                {oc_nome_abrev_fornec  :req.query.word},   //ordem_compra
                                {oc_nome_fornec        :{$regex:rQuery}},  //ordem_compra
                                {oc_cnpj_fornec        :req.query.word},   //ordem_compra
                                {oc_it_codigo          :req.query.word},   //ordem_compra
                                {oc_desc_item          :{$regex:rQuery}},  //ordem_compra
                                {oc_cod_estabel        :req.query.word},   //ordem_compra
                                {oc_nome_estabel       :{$regex:rQuery}},  //ordem_compra 
                                {oc_des_cond_pag       :{$regex:rQuery}},  //ordem_compra
                                {oc_num_pedido         :req.query.word},   //ordem_compra
                                {oc_comprador          :{$regex:rQuery}},  //ordem_compra        
                                {oc_requisitante       :{$regex:rQuery}},  //ordem_compra
                                {oc_emissor            :{$regex:rQuery}},  //ordem_compra
                                {oc_usuario_cotacao    :{$regex:rQuery}},  //ordem_compra
                                {oc_responsavel_pedido :{$regex:rQuery}},  //ordem_compra
                                {oc_local_emtrega      :{$regex:rQuery}},  //ordem_compra
                                {oc_nr_requisicao      :req.query.word},   //ordem_compra
                                {oc_des_moeda          :{$regex:rQuery}},  //ordem_compra
                                {oc_situacao           :{$regex:rQuery}},  //ordem_compra
                                {oc_cod_cta_ctbl       :req.query.word},   //ordem_compra
                                {oc_des_cta_ctbl       :{$regex:rQuery}},  //ordem_compra
                                {oc_cod_ccusto         :req.query.word},   //ordem_compra        
                                {oc_des_ccusto         :{$regex:rQuery}},  //ordem_compra
                                {oc_endereco           :{$regex:rQuery}},  //ordem_compra
                                {oc_narrativa          :{$regex:rQuery}},  //ordem_compra
                                {cot_numero_ordem          :req.query.word},   //cotacao
                                {cot_it_codigo             :req.query.word},   //cotacao
                                {cot_desc_item             :{$regex:rQuery}},  //cotacao
                                {cot_des_moeda             :{$regex:rQuery}},  //cotacao
                                {cot_cod_fornec            :req.query.word},   //cotacao
                                {cot_nome_abrev_fornec     :req.query.word},   //cotacao
                                {cot_nome_fornec           :{$regex:rQuery}},  //cotacao
                                {cot_cnpj_fornec           :req.query.word},   //cotacao      
                                {cot_contato               :{$regex:rQuery}},  //cotacao
                                {cot_comprador             :{$regex:rQuery}},  //cotacao
                                {cot_cot_usuario           :{$regex:rQuery}},  //cotacao
                                {par_numero_ordem  :req.query.word},   //parcela
                                {par_it_codigo     :req.query.word},   //parcela
                                {par_desc_item     :{$regex:rQuery}},  //parcela
                                {par_situacao      :{$regex:rQuery}},  //parcela
                                {itn_numero_nota       :req.query.word},   //it_nota
                                {itn_cod_fornec        :req.query.word},   //it_nota
                                {itn_cod_nat_oper      :req.query.word},   //it_nota    
                                {itn_it_codigo         :req.query.word},   //it_nota      
                                {itn_desc_item         :{$regex:rQuery}},  //it_nota     
                                {itn_num_pedido        :req.query.word},   //it_nota     
                                {itn_numero_ordem      :req.query.word},   //it_nota
                                {itn_natureza_fiscal   :{$regex:rQuery}},  //it_nota
                                {itn_narrativa         :{$regex:rQuery}},  //it_nota
                                {itn_nome_abrev_fornec :req.query.word},   //it_nota 
                                {itn_nome_fornec       :{$regex:rQuery}},  //it_nota          
                                {itn_cnpj_fornec       :req.query.word},   //it_nota       
                                {itn_des_nat_oper      :{$regex:rQuery}},  //it_nota     
                                {itn_cod_estabel       :req.query.word},   //it_nota   
                                {itn_nome_estabel      :{$regex:rQuery}},  //it_nota      
                                {ped_num_pedido            :req.query.word},   //pedido
                                {ped_cod_fornec            :req.query.word},   //pedido
                                {ped_nome_abrev_fornec     :req.query.word},   //pedido
                                {ped_nome_fornec           :{$regex:rQuery}},  //pedido
                                {ped_cnpj_fornec           :req.query.word},   //pedido
                                {ped_situacao              :{$regex:rQuery}},  //pedido
                                {ped_natureza              :{$regex:rQuery}}   //pedido
                                ] },
                        
            function(error, result) {
                if(error) {
                    res.status(500).json({errors: [error]})
                } else {
                    res.json(result)
                }
            }
        ).skip( req.query.skip ).limit( req.query.limit )
    }
    else {
        //{items: {$in: myItemsArray}}
        compra.find({   $and:   [{ dt_requisicao: { $gt: vDataIni}} , //data de requisição
                                 { dt_requisicao: { $lt: vDataFim}}, //data de requisição 
                                 {requisitante: {$in: nomes}}],
                         $or:   [{nr_requisicao         :req.query.word},   //Requisição
                                 {aprovador             :{$regex:rQuery}},  //Requisição                   
                                 {requisitante          :{$regex:rQuery}},  //Requisição                 
                                 {aprovador_mro         :{$regex:rQuery}},  //Requisição          
                                 {aprovador_ctrl        :{$regex:rQuery}},  //Requisição          
                                 {aprovador_financ      :{$regex:rQuery}},  //Requisição      
                                 {emissor_oc            :{$regex:rQuery}},  //Requisição               
                                 {estado_sc             :{$regex:rQuery}},  //Requisição               
                                 {situacao_sc           :{$regex:rQuery}},  //Requisição  
                                 {it_codigo             :{$regex:rQuery}},  //Requisição  
                                 {desc_item             :{$regex:rQuery}},  //Requisição  
                                 {cod_estabel           :{$regex:rQuery}},  //Requisição  
                                 {nome_estabel          :{$regex:rQuery}},  //Requisição  
                                 {cod_cta_ctbl          :{$regex:rQuery}},  //Requisição  
                                 {des_cta_ctbl          :{$regex:rQuery}},  //Requisição  
                                 {cod_ccusto            :{$regex:rQuery}},  //Requisição  
                                 {des_ccusto            :{$regex:rQuery}},  //Requisição  
                                 {cod_unid_negoc        :{$regex:rQuery}},  //Requisição  
                                 {des_unid_negoc        :{$regex:rQuery}},  //Requisição  
                                 {cod_depos             :{$regex:rQuery}},  //Requisição  
                                 {cod_localiz           :{$regex:rQuery}},  //Requisição  
                                 {lote                  :{$regex:rQuery}},  //Requisição
                                 {numero_ordem          :{$regex:rQuery}},  //Requisição
                                 {num_ord_inv           :{$regex:rQuery}},  //Requisição
                                 {narrativa             :{$regex:rQuery}},  //Requisição
                                 {oc_numero_ordem       :req.query.word},   //ordem_compra
                                 {oc_cod_fornec         :req.query.word},   //ordem_compra
                                 {oc_nome_abrev_fornec  :req.query.word},   //ordem_compra
                                 {oc_nome_fornec        :{$regex:rQuery}},  //ordem_compra
                                 {oc_cnpj_fornec        :req.query.word},   //ordem_compra
                                 {oc_it_codigo          :req.query.word},   //ordem_compra
                                 {oc_desc_item          :{$regex:rQuery}},  //ordem_compra
                                 {oc_cod_estabel        :req.query.word},   //ordem_compra
                                 {oc_nome_estabel       :{$regex:rQuery}},  //ordem_compra 
                                 {oc_des_cond_pag       :{$regex:rQuery}},  //ordem_compra
                                 {oc_num_pedido         :req.query.word},   //ordem_compra
                                 {oc_comprador          :{$regex:rQuery}},  //ordem_compra        
                                 {oc_requisitante       :{$regex:rQuery}},  //ordem_compra
                                 {oc_emissor            :{$regex:rQuery}},  //ordem_compra
                                 {oc_usuario_cotacao    :{$regex:rQuery}},  //ordem_compra
                                 {oc_responsavel_pedido :{$regex:rQuery}},  //ordem_compra
                                 {oc_local_emtrega      :{$regex:rQuery}},  //ordem_compra
                                 {oc_nr_requisicao      :req.query.word},   //ordem_compra
                                 {oc_des_moeda          :{$regex:rQuery}},  //ordem_compra
                                 {oc_situacao           :{$regex:rQuery}},  //ordem_compra
                                 {oc_cod_cta_ctbl       :req.query.word},   //ordem_compra
                                 {oc_des_cta_ctbl       :{$regex:rQuery}},  //ordem_compra
                                 {oc_cod_ccusto         :req.query.word},   //ordem_compra        
                                 {oc_des_ccusto         :{$regex:rQuery}},  //ordem_compra
                                 {oc_endereco           :{$regex:rQuery}},  //ordem_compra
                                 {oc_narrativa          :{$regex:rQuery}},  //ordem_compra
                                 {cot_numero_ordem          :req.query.word},   //cotacao
                                 {cot_it_codigo             :req.query.word},   //cotacao
                                 {cot_desc_item             :{$regex:rQuery}},  //cotacao
                                 {cot_des_moeda             :{$regex:rQuery}},  //cotacao
                                 {cot_cod_fornec            :req.query.word},   //cotacao
                                 {cot_nome_abrev_fornec     :req.query.word},   //cotacao
                                 {cot_nome_fornec           :{$regex:rQuery}},  //cotacao
                                 {cot_cnpj_fornec           :req.query.word},   //cotacao      
                                 {cot_contato               :{$regex:rQuery}},  //cotacao
                                 {cot_comprador             :{$regex:rQuery}},  //cotacao
                                 {cot_cot_usuario           :{$regex:rQuery}},  //cotacao
                                 {par_numero_ordem  :req.query.word},   //parcela
                                 {par_it_codigo     :req.query.word},   //parcela
                                 {par_desc_item     :{$regex:rQuery}},  //parcela
                                 {par_situacao      :{$regex:rQuery}},  //parcela
                                 {itn_numero_nota       :req.query.word},   //it_nota
                                 {itn_cod_fornec        :req.query.word},   //it_nota
                                 {itn_cod_nat_oper      :req.query.word},   //it_nota    
                                 {itn_it_codigo         :req.query.word},   //it_nota      
                                 {itn_desc_item         :{$regex:rQuery}},  //it_nota     
                                 {itn_num_pedido        :req.query.word},   //it_nota     
                                 {itn_numero_ordem      :req.query.word},   //it_nota
                                 {itn_natureza_fiscal   :{$regex:rQuery}},  //it_nota
                                 {itn_narrativa         :{$regex:rQuery}},  //it_nota
                                 {itn_nome_abrev_fornec :req.query.word},   //it_nota 
                                 {itn_nome_fornec       :{$regex:rQuery}},  //it_nota          
                                 {itn_cnpj_fornec       :req.query.word},   //it_nota       
                                 {itn_des_nat_oper      :{$regex:rQuery}},  //it_nota     
                                 {itn_cod_estabel       :req.query.word},   //it_nota   
                                 {itn_nome_estabel      :{$regex:rQuery}},  //it_nota      
                                 {ped_num_pedido            :req.query.word},   //pedido
                                 {ped_cod_fornec            :req.query.word},   //pedido
                                 {ped_nome_abrev_fornec     :req.query.word},   //pedido
                                 {ped_nome_fornec           :{$regex:rQuery}},  //pedido
                                 {ped_cnpj_fornec           :req.query.word},   //pedido
                                 {ped_situacao              :{$regex:rQuery}},  //pedido
                                 {ped_natureza              :{$regex:rQuery}}   //pedido
            ] },
                function(error, result) {
                     if(error) {
                    res.status(500).json({errors: [error]})
                } else {
                 res.json(result)
                 }
            }
).skip( req.query.skip ).limit( req.query.limit ) 
    }
}
module.exports = { getMatches} 
