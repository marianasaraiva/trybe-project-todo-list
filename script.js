const paragraphyID = document.getElementById('funcionament');
const inputTextTarefa = document.getElementById('texto-tarefa');
const containerSection = document.getElementsByName('container');
const olTarefa = document.getElementById('lista-tarefas')
const buttonCreateTarefa = document.getElementById('criar-tarefa');
const liList = document.getElementsByClassName('item-list');
const buttonRemoveFinalizados = document.getElementById('remover-finalizados');
const buttonApagaTudo = document.getElementById('apaga-tudo');

// criar li ao digitar tarefa e pressionar o botão
buttonCreateTarefa.addEventListener('click', function () {
  let elementLi = document.createElement('li');
  // if(inouTextTarefa.value !== ''){
  elementLi.innerText = inputTextTarefa.value;
  elementLi.classList.add('item-list');
  olTarefa.appendChild(elementLi);
  inputTextTarefa.value = "";
  // } else {

  // }
})

// criar seleção da tarefa por cor ao clicar uma vez
olTarefa.addEventListener('click', function (event) {
  for (let index = 0; index < liList.length; index += 1) {
    liList[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
})

// riscar a tarefa ao clicar duas vezes
olTarefa.addEventListener('dblclick', function (event) {
  if (event.target.tagName === 'LI')
    event.target.classList.toggle('completed')
});

// apagar toda a lista usando o id apaga-tudo no button -> usando o removeChild
// https://www.horadecodar.com.br/2020/11/06/como-remover-elemento-da-pagina-com-javascript/ 
buttonApagaTudo.addEventListener('click', function () {
  olTarefa.parentNode.removeChild(olTarefa);
});

// apagar elementos riscados classe completed ao clicar
// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
// O que será verificado:
// Será verificado que existe um elemento button com o id remover-finalizados
// Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista

//apagar elementos riscados classe completed ao clicar
buttonRemoveFinalizados.addEventListener('click', function () {
  let tarefaFinalizada = document.querySelectorAll('.completed');
  for (let index = 0; index < tarefaFinalizada.length; index += 1) {
    olTarefa.removeChild(tarefaFinalizada[index]);
  }
});

//https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript
// remover um elemento - identificar o elementos setar o elemento