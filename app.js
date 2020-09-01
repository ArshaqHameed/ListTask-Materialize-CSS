// These are UI variables.
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event Listerens.

loadEventListeners();

function loadEventListeners(){
    form.addEventListener('submit',addTask);
}

function addTask(e){
    if(taskInput.value  === ''){
        alert('Please Add a Task.')
    }

    // create task as li element.
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    // create a link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'; 
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    // console.log(li);
    taskInput.value ='';
    e.preventDefault();
}