import express from 'express';

import {buscarUfPorId,buscarUfsPorNome,buscarUfs} from './service/servico.js';

const app = express();

app.get('/ufs',(req, res)=>{
    let busca = req.query.busca;
    let ufs = busca? buscarUfsPorNome(busca): buscarUfs();    
    if(ufs.length>0){
        return res.status(200).json(ufs);
    }
    return res.status(404).json({"Erro":"Recurso não encotrado!!!"});  
});

app.get('/ufs/:id',(req, res)=>{
    let req_id = req.params.id;
    if(!isNaN(req_id)){
        let uf = buscarUfPorId(req_id);
        if(uf){
            return res.status(200).json(uf);
        }
        return res.status(404).json({"Erro":"Recurso não encotrado!!!"});  
    }
    return res.status(400).json({"Erro":"O id do elemento desejado é um número inteiro."});    
});

app.listen(8080,()=>{
    console.log("Inicialização"+ (new Date()));
})