// Acessando os elementos do DOM (Botões)
const addBtn = document.querySelector('#add-btn');
const filterBtn = document.querySelectorAll('.filter-btn');

// Cria e insere uma nova tarefa na lista com base no input do usuário

function addTask() {
    
    const taskTitle = document.querySelector('#task-title').value;

    if (taskTitle) {

        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);

        newTask.querySelector('.task-title').textContent = taskTitle;
        newTask.classList.remove('template', 'hide');

        const list = document.querySelector('#task-list');
        list.appendChild(newTask);

        // Atribuição de eventos diretamente nos elementos dinâmicos criados
        newTask.querySelector('.remove-btn').addEventListener('click', function() {
            removeTask(this);
        });

        newTask.querySelector('.done-btn').addEventListener("click", function() {
            completeTask(this);
        });

        // limpa texto do input
        document.querySelector('#task-title').value = "";
    }
}

// Remove a tarefa do DOM a partir do elemento filho acionado
function removeTask(task) {
    task.parentNode.remove(true);
}

// Alterna o estado de conclusão da tarefa adicionando/removendo a classe de estilo
function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle('done');
}

// Exibe todas as tarefas ativas e concluídas da lista.
function filterTaskAll(btn) {

    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const list = document.querySelectorAll('.task-box:not(.template)');

    list.forEach(li => {

        li.classList.remove('hide');

    });
}

// Filtra a lista para exibir apenas as tarefas que não possuem marcação de concluídas.
function filterTaskActives(btn) {

    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const list = document.querySelectorAll('.task-box:not(.template)');

    list.forEach(li => {

        if (li.classList.contains('done')) {
            li.classList.add('hide');
        } else {
            li.classList.remove('hide');
        }

    });
}

// Filtra a lista para exibir apenas as tarefas marcadas como concluídas.
function filterTaskCompleted(btn) {

    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');

    const list = document.querySelectorAll('.task-box:not(.template)');
    
    list.forEach(li => {

        if (!li.classList.contains('done')) {
            li.classList.add('hide');
        } else {
            li.classList.remove('hide');
        }

    });
}

// Evento para envio do formulário e criação de tarefa
addBtn.addEventListener("click", function(e) {
    e.preventDefault();
    addTask();
});

// Eventos de clique para os seletores de filtros
filterBtn[0].addEventListener('click', function(e) {
    filterTaskAll(this);
});

filterBtn[1].addEventListener('click', function(e) {
    filterTaskActives(this);
});

filterBtn[2].addEventListener('click', function(e) {
    filterTaskCompleted(this);
});