function calculadora() {
  var operacao = Number(prompt('Escolha uma operação: \n 1 - soma(+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação(**)'))

  if(!operacao || operacao >= 7) {
    alert("Erro - Operação Inválida");
    calculadora()
  } else {
    
    let n1 = Number(prompt("Insira o primeiro valor"));
    let n2 = Number(prompt("Insira o segundo valor"));
    let resultado;

    if(!n1 || !n2) {
      alert("Erro - Parametros inválidos")
      calculadora();
    } else {
      function soma() {
        resultado = n1+n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperação()
      }
  
      function divisaoReal() {
        resultado = n1/n2;
        alert(`${n1} % ${n2} = ${resultado}`);
        novaOperação()
      }
  
      function subtracao() {
        resultado = n1-n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperação()
      }
  
      function multiplicacao() {
        resultado = n1*n2;
        alert(`${n1} X ${n2} = ${resultado}`);
        novaOperação()
      }
  
      function divisapInteira() {
        resultado = n1%n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
        novaOperação()
      }
  
      function potenciacao() {
        resultado = n1**n2;
        alert(`${n1} elevado a ${n2} = ${resultado}`);
        novaOperação()
      }

    } 
  }

  switch (operacao) {
    case 1: 
      soma()
      break
    case 2:
      subtracao()
      break
    case 3: 
      multiplicacao()
      break
    case 4:
      divisaoReal()
      break
    case 5:
      divisapInteira()
      break
    case 6:
      potenciacao()
      break
  }
}
    
    function novaOperação() {
      let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não')

      if (opcao == 1) {
        calculadora()
      } else if (opcao == 2) {
        alert('Até a próxima')
      } else {
        alert('Digite uma opção válida')
        novaOperação()
      }
    }

  
calculadora();