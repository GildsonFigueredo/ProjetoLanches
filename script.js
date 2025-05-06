function focoCampo() {
    console.log("Campo de nome em foco");
  }

  function fazerPedido() {
    const nome = document.getElementById('nomeCliente').value;
    if (!nome) {
      alert("Por favor, insira seu nome.");
      return;
    }

    let itensSelecionados = document.querySelectorAll('input[name="item"]:checked');
    let resumo = document.getElementById('resumo');

    if (itensSelecionados.length === 0) {
      resumo.innerHTML = `<p>${nome}, você não selecionou nenhum item.</p>`;
      return;
    }

    let mensagem = `<h3>Pedido de ${nome}</h3><ul>`;

    for (let i = 0; i < itensSelecionados.length; i++) {
      let item = itensSelecionados[i].value;

      switch(item) {
        case "Hambúrguer":
          mensagem += `<li>${item} - R$ 10,00</li>`;
          break;
        case "Refrigerante":
          mensagem += `<li>${item} - R$ 5,00</li>`;
          break;
        case "Suco":
          mensagem += `<li>${item} - R$ 6,00</li>`;
          break;
        case "Batata Frita":
          mensagem += `<li>${item} - R$ 7,00</li>`;
          break;
        default:
          mensagem += `<li>${item} - preço não disponível</li>`;
          break;
      }
    }
    mensagem += '</ul>';

    // While com contador fictício
    let contador = 0;
    while (contador < 1) {
      mensagem += `<p>Aproveite sua refeição!</p>`;
      contador++;
    }

    // Do-while com uma observação
    let tentativa = 0;
    do {
      console.log("Verificando conclusão do pedido...");
      tentativa++;
    } while (tentativa < 1);

    resumo.innerHTML = mensagem;
  }

  // Evento de teclado para ENTER
  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("Enter pressionado - disparando pedido");
      fazerPedido();
    }
  });

  // MouseEvent com evento de clique
  document.getElementById("formPedido").addEventListener("click", function(e) {
    if (e.target.tagName === "INPUT") {
      console.log("Você clicou em:", e.target.value);
    }
  });
