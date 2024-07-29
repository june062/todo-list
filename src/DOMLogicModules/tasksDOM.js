export {displayContentsOfProject}
import {taskContainer, mainContainer} from "../domlogic.js"
import {projectRemovalAndAddition} from "../index.js"




function displayContentsOfProject(e){
    removeAllTaskDOM()

    if (!document.querySelector(".main-container > .add-task")){
        let addTask = document.createElement('button');
            addTask.classList.add("add-task")
            addTask.textContent = "Add a task"
        mainContainer.appendChild(addTask)
    }



    let selectedProject = projectRemovalAndAddition.projects.find((element) => element.projectIdentifier == e.target.dataset.projectid)
    displayAllTasks();


    function displayAllTasks(){
        
    
    for (const element of selectedProject.arrayOfTasks){
        let taskDOM = document.createElement("div");
        taskDOM.classList.add("task");

        taskDOM.textContent = element.taskName;



        taskContainer.appendChild(taskDOM)


        
    }
}
  
}
function displayNewTask(){

}

function removeAllTaskDOM(){
    while (taskContainer.firstChild){
        taskContainer.removeChild(taskContainer.firstChild)
    }

}

