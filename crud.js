console.log("JS working!");
// document.addEventListener("DOMContentLoaded",showTask);
const tasks = document.querySelector('.tasks');
const taskInp = document.querySelector('.task-inp');
const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click",()=>{
    addTask();
})
taskInp.addEventListener("keydown",function(e){
    if(e.key == "Enter"){
        addTask();
    }
})

function addTask(){
    if(taskInp.value != ""){
        let li = document.createElement("li");
        li.innerHTML = taskInp.value;
        tasks.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        console.log(tasks);
        li.appendChild(span);
        
        li.addEventListener("click",function(e){
            if(e.target.tagName == "LI"){
                e.target.classList.toggle("completed");
            }
            else if(e.target.tagName == "SPAN"){
                e.target.parentElement.remove();
            }
            saveTask();
        })  
    }
    else{
        alert("You must write something!")
    }
    taskInp.value = "";
    taskInp.focus();
    saveTask();
}


function saveTask(){
    localStorage.setItem("tasks",tasks.innerHTML);
}   

function showTask(){
    tasks.innerHTML = localStorage.getItem("tasks");
}   

showTask();
