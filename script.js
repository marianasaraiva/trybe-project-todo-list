const paragraphyID = document.getElementById('funcionament');
const inputTextTarefa = document.getElementById('texto-tarefa');
const olTarefa = document.getElementById('lista-tarefas')
const buttonCreateTarefa = document.getElementById('criar-tarefa');
const liList = document.getElementsByClassName('item-list');
console.log(liList);

// criar li ao digitar tarefa e pressionar o botão
buttonCreateTarefa.addEventListener('click', function(){
  let elementLi = document.createElement('li');
  elementLi.innerText = inputTextTarefa.value;
  elementLi.classList.add('item-list');
  olTarefa.appendChild(elementLi);
  inputTextTarefa.value = "";
})

// criar seleção da tarefa por cor ao clicar uma vez
olTarefa.addEventListener('click', function(event){
  for (let index = 0; index < liList.length; index += 1){
    liList[index].classList.remove('selected');
    event.target.classList.add('selected');
  }
})

// riscar a tarefa ao clicar duas vezes
olTarefa.addEventListener('dblclick', function (event){
  if(event.target.tagName === 'LI')
  event.target.classList.toggle('completed')
  });
