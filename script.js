const inputTextTarefa = document.getElementById('texto-tarefa');
const olTarefa = document.getElementById('lista-tarefas');
const buttonCreateTarefa = document.getElementById('criar-tarefa');
const liList = document.getElementsByClassName('item-list');
const buttonRemoveFinalizados = document.getElementById('remover-finalizados');
const buttonApagaTudo = document.getElementById('apaga-tudo');
const buttonSalvaTarefas = document.getElementById('salvar-tarefas');

// criar li ao digitar tarefa e pressionar o botão
buttonCreateTarefa.addEventListener('click', () => {
  const elementLi = document.createElement('li');
  if (inputTextTarefa.value.length > 2) {
    elementLi.innerText = inputTextTarefa.value;
    elementLi.classList.add('item-list');
    olTarefa.appendChild(elementLi);
    inputTextTarefa.value = '';
  } else {
    alert('Digite um item no local indicado');
  }
});

// criar seleção da tarefa por cor ao clicar uma vez
olTarefa.addEventListener('click', function (event) {
  for (let index = 0; index < liList.length; index += 1) {
    liList[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
});

// riscar a tarefa ao clicar duas vezes
olTarefa.addEventListener('dblclick', function (event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
});

// apagar toda a lista usando o id apaga-tudo no button -> usando o removeChild
// https://www.horadecodar.com.br/2020/11/06/como-remover-elemento-da-pagina-com-javascript/
buttonApagaTudo.addEventListener('click', () => {
  olTarefa.innerHTML = '';
});

// apagar elementos riscados classe completed ao clicar
// Dica: Luiz sobre https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
buttonRemoveFinalizados.addEventListener('click', () => {
  const tarefaFinalizada = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefaFinalizada.length; index += 1) {
    olTarefa.removeChild(tarefaFinalizada[index]);
  }
});

//12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
// dica Monitoria com Tales
buttonSalvaTarefas.addEventListener('click', function () {
  localStorage.setItem('listaTarefa', olTarefa.innerHTML);
}) 

window.onload = function () {
  if(localStorage.listaTarefa){
    let recuperaLista = localStorage.getItem('listaTarefa');
    olTarefa.innerHTML = recuperaLista;
  }
}
