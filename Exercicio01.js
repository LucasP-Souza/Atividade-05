import PromptSync from "prompt-sync";
const prompt = PromptSync()

function calcularPrecoComDesconto(valor, quantidade, callback) {
    let valorTotal = valor * quantidade;
    return callback(valorTotal)
  }
  
  function desconto(valor) {
    let valorComDesconto = valor * 0.8
    return valorComDesconto
  }

  let valor = Number(prompt('Digite o valor do produto: '))
  let quantidade= Number(prompt('Digite a quantidade do produto: '))
  
  let precoFinal1 = calcularPrecoComDesconto(valor, quantidade, desconto)
  console.log('O valor do produto com desconto foi de : R$'+precoFinal1)
  