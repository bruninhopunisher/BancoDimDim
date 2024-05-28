const transacoes = [
    {
        descricao: "Salario",
        data: "15/05/2024",
        valor: 2000
    },
    {
        descricao: "mercado",
        data: "15/05/2024",
        valor: -500
    },
    {
        descricao: "cosmetico",
        data: "15/05/2024",
        valor: -150
    },
    {
        descricao: "perfumaria",
        data: "15/05/2024",
        valor: 280
    }
];

 function adicionarTransacao(descricao,valor,data) { 
    const transacao = {
        descricao: descricao,
        data: data,
        valor: valor
    };

    transacoes.push(transacao);

  const lista = document.querySelector('.history');
  const item = document.createElement('li'); 
  item.innerHTML = 
  `<span>${descricao}<br>${data}</span>
    <span class="transacao${valor < 0 ? 'Neg' : 'Pos'}"> R$ ${valor}</span> `;
    
    lista.appendChild(item);
}  

function calcularTotal() {
    let total = 0;
    for (const transacao of transacoes) {
    total += transacao.valor;
        }
    return total;
}

function atualizarValorTotal() {
    const total = calcularTotal();
    const totalElement = document.getElementById('total_val');
    totalElement.textContent = `R$ ${total},00`;
}


atualizarValorTotal();
