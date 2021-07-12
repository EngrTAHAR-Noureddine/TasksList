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
    //filter task event
    filter.addEventListener('keyup',filterTask);

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
    storeTaskInLocalStorage(taskInput.value);    
    //Clear input 
    taskInput.value = '';
    console.log(li);  
        //store in Local Storage
   

    
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
//filter task function
function filterTask(e){
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item=task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text)!=-1){
                task.style.display = 'block';
            }else{
                task.style.display = 'none';
            }
        }
    );

}
//store new task in LS
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks =[];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}