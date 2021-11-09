let prato;
let tempo_preparo;
let tempo_padrao;
let mensagem;

if (prato = 'pipoca'){
    tempo_padrao = 10;
}
else if (prato = 'macarrao'){
    tempo_padrao = 8;
}
else if (prato = 'carne'){
    tempo_padrao = 15;
}
else if (prato = 'feijão'){
    tempo_padrao = 12;
}
else if (prato = 'brigadeiro'){
    tempo_padrao = 8
}

function refeicao(prato,tempo_preparo){

    if(prato == 'macarrao'|| prato == "pipoca" || prato == "carne" || prato == 'feijão'|| prato == 'brigadeiro'){
    
    if(tempo_preparo > 3 * tempo_padrao){
        mensagem = 'Kabuuum"'
    }

   else if (tempo_preparo > 2 * tempo_padrao){
    mensagem = 'Comida Queimou!'
   }

   else if (tempo_preparo < tempo_padrao){
       mensagem = 'Tempo insuficiente!'
   }
   else {
       mensagem = 'Prato pronto, bom apetite!'
   }
  
}
else{
    mensagem = 'Prato inexistente!'
}
return mensagem;
}

console.log(refeicao('pipoca',40));

