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
  elementLi.innerText = inputTextTarefa.value;
  elementLi.classList.add('item-list');
  olTarefa.appendChild(elementLi);
  inputTextTarefa.value = "";
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

// apagar toda a lista usando o id apaga-tudo no button
// https://www.horadecodar.com.br/2020/11/06/como-remover-elemento-da-pagina-com-javascript/
buttonApagaTudo.addEventListener('click', function(){
  olTarefa.parentNode.removeChild(olTarefa);
});


  // var elemento = document.querySelector("#elemento-para-remover");
  // elemento.parentNode.removeChild(elemento);


// apagar elementos riscados classe completed ao clicar
// buttonRemoveFinalizados.addEventListener('click', function (event) {
//   event.target.classList.remove('completed')

// })