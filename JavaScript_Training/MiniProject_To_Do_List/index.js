document.addEventListener("DOMContentLoaded",function(){
    const inputContainer = document.querySelector(".inputContainer")
    const addbtn = document.querySelector(".buttonAdd")
    const List = document.querySelector(".toDoList");
    
    loadTasks();

    //add button 
    addbtn.addEventListener("click",()=>{
        const textContent = inputContainer.value.trim();
        if(textContent==="")
        {
            alert("Please enter a task");
            return;
        }
    
        addTask(textContent);
        saveTasks();
        inputContainer.value="";
    })

    //add Tasks and delete Tasks
    function addTask(textContent){
        const li = document.createElement("li");
        li.classList.add("task");

        const taskSpan= document.createElement("span");
        taskSpan.textContent = textContent;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Delete"
    
        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        List.appendChild(li);

        // Attach delete event to the button
        deleteBtn.addEventListener("click", () => {
            li.remove();
            saveTasks();
        });
    }
    
    
    //Save tasks
    function saveTasks (){
        const tasks=[];
        document.querySelectorAll(".toDoList li span").forEach(task =>{
            tasks.push(task.textContent.trim());
        })
    
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    function loadTasks(){
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.forEach(task=>addTask(task))
    }
});



