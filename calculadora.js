//exercício calculadora aula 06

//soma
function adicionar (x,y){
    return x+y;
}


//subtração
function subtracao (a,b){
    return a-b;
}

//multiplicação
function multiplicacao (m,n){
    return m*n;
}

//divisão
function divisao(w,z){
    return w/z;
}

console.log("TESTE FUNÇOES ADICIONAR", adicionar(1,2));
console.log("TESTE FUNÇOES SUBTRAIR", subtracao(1,2));
console.log("TESTE FUNÇOES MULTIPLICAÇÃO", multiplicacao(1,2));
console.log("TESTE FUNÇOES DIVISAO", divisao(1,2));
console.log("TESTE FUNÇOES DIVISAO", divisao(1,0));

//quadrado
function quadradoDoNumero(h){
    return multiplicacao(h,h);
}

console.log("TESTE FUNÇAO QUADRADO", quadradoDoNumero(2));

//média de 3 números (x+y+z)/3
function mediaDeTresNumeros(e,f,g){
    return (adicionar(e,f)+g)/3
}
console.log("TESTE FUNÇAO MÉDIA TRÊS NÚMEROS", mediaDeTresNumeros(1,2,3));

//calculo porcentagem
function calculaPorcentagem(k,l){
    return multiplicacao(k,divisao(l,100))
}
console.log("TESTE FUNÇAO PORCENTAGEM", calculaPorcentagem(100,25));

//gerador porcentagem
function geradorPorcentagem(u,v){
    return multiplicacao(divisao(u,v),100)
}
console.log("TESTE FUNÇAO GERADOR PORCENTAGEM", geradorPorcentagem(2,200));
