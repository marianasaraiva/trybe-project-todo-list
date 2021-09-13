const paragraphyID = document.getElementById('funcionament');
const inputTextTarefa = document.getElementById('texto-tarefa');
const olTarefa = document.getElementById('lista-tarefas')
const buttonCreateTarefa = document.getElementById('criar-tarefa');

buttonCreateTarefa.addEventListener('click', function(){
  let elementLi = document.createElement('li');
  elementLi.innerText = inputTextTarefa.value;
  olTarefa.appendChild(elementLi);
  inputTextTarefa.value = "";
})
