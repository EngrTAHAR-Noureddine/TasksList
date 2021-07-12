//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners 
loadEventListeners();
//Fct of loadEventListeners
function loadEventListeners(){
    //Add task event 
    form.addEventListener('submit',addTask);
    //remove task event 
    taskList.addEventListener('click',removeTask);
    //clear task events
    clearBtn.addEventListener('click',clearTasks);
}
//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }else{
    //Create li element
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new Link element
    const link = document.createElement('a');
    //Add class 
    link.className = 'delete-item secondary-content';
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //Append the link to li 
    li.appendChild(link);

    //Apend li to ul
    taskList.appendChild(li);

    //Clear input 
    taskInput.value = '';
    console.log(li);
    }


    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log(e.target);
        if(confirm('Are you Sure ?')){
            e.target.parentElement.parentElement.remove();
        }
    }
    
}
// clear tasks
function clearTasks(e){
    /* the best but have the faster than it  */
    //taskList.innerHTML = ''; 
    if(taskList.firstChild){
    if(confirm('Are you Sure ?')){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
        }
                }
    }
}
