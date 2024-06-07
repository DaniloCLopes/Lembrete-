const input = document.querySelector("#new-task");
const button = document.querySelector("#add-task");
const list = document.querySelector("#task-list");

button.addEventListener('click', function() {
    //recupera valor do input
    const taskText = input.value.trim();


    if (taskText !== ''){
        //cria um item <li>
        const newTask = document.createElement('li');
        newTask.textContent = taskText; 

        //marca como concluida
        newTask.addEventListener('click', function(){
            newTask.classList.toggle('completed')
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.addEventListener('click', function(){

        });
    }

});