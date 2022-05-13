const valorDeVenda = 200
const custoDoProduto = 50;
const impostoSobreOCusto = custoDoProduto * 0.20


let valorCustoTotal = custoDoProduto + impostoSobreOCusto
let lucro = valorDeVenda - valorCustoTotal


if (valorDeVenda >= 0 && custoDoProduto >= 0){
    let lucroTotal = lucro * 1000
    console.log(lucroTotal)
} else {
    console.log('Erro: insira valores maior que 0')
}

