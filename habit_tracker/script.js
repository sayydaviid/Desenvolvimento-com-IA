// script.js - Rastreador de Habitos com sequencias (JavaScript puro, persistido no localStorage)

// Auxiliar: formata a data como AAAA-MM-DD
function obterHoje() {
  const agora = new Date();
  return agora.toISOString().split('T')[0];
}

// Carrega habitos do localStorage ou inicializa array vazio
var habitos = JSON.parse(localStorage.getItem('habitos')) || [];

// Garante que as sequencias sao validas (reseta se perdeu um dia)
function normalizarHabitos() {
  var hoje = obterHoje();
  habitos.forEach(function(h) {
    if (h.ultimaDataConclusao) {
      var diff = (new Date(hoje) - new Date(h.ultimaDataConclusao)) / (1000 * 60 * 60 * 24);
      if (diff >= 1) {
        // Se perdeu um dia, reseta a sequencia
        if (diff > 1) {
          h.sequencia = 0;
        }
      }
    }
  });
  salvarHabitos();
}

// Salva habitos no localStorage
function salvarHabitos() {
  localStorage.setItem('habitos', JSON.stringify(habitos));
}

// Cria o cartao visual de um habito
function criarCartaoHabito(habito) {
  var cartao = document.createElement('div');
  cartao.className = 'habit-card';
  cartao.dataset.id = habito.id;

  var nomeSpan = document.createElement('span');
  nomeSpan.className = 'habit-name';
  nomeSpan.textContent = habito.nome;

  var emblemaSequencia = document.createElement('span');
  emblemaSequencia.className = 'streak-badge';
  emblemaSequencia.textContent = 'Sequencia: ' + habito.sequencia;

  var btn = document.createElement('button');
  btn.className = 'done-btn';
  if (habito.ultimaDataConclusao === obterHoje()) {
    btn.innerHTML = '\u2713';
    btn.classList.add('done');
  } else {
    btn.innerHTML = '\u2714';
  }

  btn.addEventListener('click', function() {
    alternarConclusao(habito.id, btn, emblemaSequencia);
  });

  cartao.appendChild(emblemaSequencia);
  cartao.appendChild(nomeSpan);
  cartao.appendChild(btn);
  return cartao;
}

// Renderiza todos os habitos na tela
function renderizarHabitos() {
  var container = document.getElementById('habits-container');
  container.innerHTML = '';
  habitos.forEach(function(h) {
    container.appendChild(criarCartaoHabito(h));
  });
}

// Adiciona um novo habito
function adicionarHabito(nome) {
  var id = Date.now().toString();
  var novoHabito = {
    id: id,
    nome: nome,
    sequencia: 0,
    ultimaDataConclusao: null
  };
  habitos.push(novoHabito);
  salvarHabitos();
  renderizarHabitos();
}

// Alterna a conclusao de um habito (marcar/desmarcar)
function alternarConclusao(id, btnElem, emblemaElem) {
  var habito = habitos.find(function(h) { return h.id === id; });
  var hoje = obterHoje();
  if (!habito) return;

  if (habito.ultimaDataConclusao === hoje) {
    // Ja marcado hoje - permite desmarcar
    habito.ultimaDataConclusao = null;
    habito.sequencia = Math.max(0, habito.sequencia - 1);
    btnElem.classList.remove('done');
    btnElem.innerHTML = '\u2714';
  } else {
    // Marca como concluido hoje
    habito.ultimaDataConclusao = hoje;
    habito.sequencia = habito.sequencia + 1;
    btnElem.classList.add('done');
    btnElem.innerHTML = '\u2713';
  }
  emblemaElem.textContent = 'Sequencia: ' + habito.sequencia;
  salvarHabitos();
}

// Evento para adicionar um habito
document.getElementById('add-habit-btn').addEventListener('click', function() {
  var input = document.getElementById('habit-name');
  var nome = input.value.trim();
  if (nome) {
    adicionarHabito(nome);
    input.value = '';
  }
});

// Inicializa ao carregar
normalizarHabitos();
renderizarHabitos();
