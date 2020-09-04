// These are UI variables.
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event Listerens.

loadEventListeners();

function loadEventListeners(){
    // add list.
    form.addEventListener('submit',addTask);
    // remove task
    taskList.addEventListener('click',removeTask);
    // FOR ALL CLEAR
    clearBtn.addEventListener('click',clearTasks)
    // eventlisterner for filter
    filter.addEventListener('keyup',filterTasks);
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

// function remoevTask
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure,you want to delete the Item ?',e.target.parentElement.parentElement.value))
        {
            e.target.parentElement.parentElement.remove();
        }
    }
}

//clearTasks function
function clearTasks(e){
    // taskList.innerHTML = '';
    // Fater method using while loop

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// for filter functions
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    console.log(text);
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    })
}