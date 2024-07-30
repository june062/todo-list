export {tasksDOM}
import {taskContainer, mainContainer} from "../domlogic.js"
import {projectRemovalAndAddition} from "../index.js"
import {subscriber} from "../observer.js"
import {Project} from "../AppLogicModules/projects.js"



let tasksDOM = (function(){
    let selectedProject;


function displayContentsOfProject(e){
    removeAllTaskDOM()

    if (!document.querySelector(".main-container > .add-task")){
        let addTask = document.createElement('button');
            addTask.classList.add("add-task");
            addTask.textContent = "Add a task"
        mainContainer.appendChild(addTask);
    }

    selectedProject = projectRemovalAndAddition.projects.find((element) => element.projectIdentifier == e.target.dataset.projectid);

    displayAllTasks();


    function displayAllTasks(){
        
    
    for (const element of selectedProject.arrayOfTasks){
        let taskDOM = document.createElement("div");
        taskDOM.classList.add("task");

        taskDOM.textContent = element.taskName;



        taskContainer.appendChild(taskDOM)


        
    }
    return selectedProject;
}
  
}
function displayNewTask(){

    let nameVal = document.querySelector("#task-name").value;
    let descriptionVal = document.querySelector("#description").value;
    let dueDateVal = document.querySelector("#due-date").value;
    let urgencyVal = document.querySelector("#urgency").value;
    let completedVal = document.querySelector("#completed").value;

    subscriber.createTask(nameVal, descriptionVal, dueDateVal, urgencyVal, completedVal, selectedProject);
    



}

function removeAllTaskDOM(){
    while (taskContainer.firstChild){
        taskContainer.removeChild(taskContainer.firstChild)
    }

}
return {removeAllTaskDOM,displayContentsOfProject,displayNewTask, selectedProject}
})()
