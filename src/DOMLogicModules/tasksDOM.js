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
        function setAttributes(element, attrs) {
            for(let key in attrs) {
              element.setAttribute(key, attrs[key]);
            }
          }

        let taskForm = document.createElement("form");
            taskForm.setAttribute("method", "post");

        taskForm.classList.add("task");

        let taskNameDiv = document.createElement("div")
            let taskNameLabel = document.createElement("label");
                taskNameLabel.setAttribute("for", "task-name");
                taskNameLabel.textContent = element.taskName;
            let taskNameInput = document.createElement("input");
                setAttributes(taskNameInput, {"type": "text","id":"task-name", "placeholder": `${element.taskName}`});
            taskNameDiv.append(taskNameLabel,taskNameInput)


        let taskDescriptionDiv = document.createElement("div");
            let taskDescriptionLabel = document.createElement("label");
                taskDescriptionLabel.setAttribute("for", "description");
                taskDescriptionLabel.textContent = element.description;

            let taskDescriptionInput = document.createElement("input");
                setAttributes(taskDescriptionInput, {"type": "text","id":"description", "placeholder": `${element.description}`});
            taskDescriptionDiv.append(taskDescriptionLabel, taskDescriptionInput)



        let taskDueDateDiv = document.createElement("div");
            let taskDueDateLabel = document.createElement("label");
                taskDueDateLabel.setAttribute("for", "due-date");
                taskDueDateLabel.textContent = element.dueDate;
            let taskDueDateInput = document.createElement("input");
            setAttributes(taskDueDateInput, {"type": "date","id":"due-date", "value": `${element.dueDate}`});
            taskDueDateDiv.append(taskDueDateLabel, taskDueDateInput)


        let taskUrgencyDiv = document.createElement("div")
          
            let taskUrgencyLabel = document.createElement("label");
                taskUrgencyLabel.setAttribute("for", "urgency");
                taskUrgencyLabel.textContent = "Urgency"; 
            let taskUrgencySelect = document.createElement("select");
                setAttributes(taskUrgencySelect, {"name": "urgency", "id": "urgency"});
                let lowOption = document.createElement("option");
                    lowOption.setAttribute("value", "low");
                    lowOption.textContent = "Low";
                let mediumOption = document.createElement("option");
                    mediumOption.setAttribute("value", "medium");
                    mediumOption.textContent = "Medium";
                let highOption = document.createElement("option");
                    highOption.setAttribute("value", "high");
                    highOption.textContent = "High"
                taskUrgencySelect.append(lowOption,mediumOption,highOption);

            taskUrgencyDiv.append(taskUrgencyLabel, taskUrgencySelect)
                


        let taskCompletedDiv = document.createElement("div")
            let taskCompletedLabel = document.createElement("label");
                taskCompletedLabel.setAttribute("for", "completed");
                taskCompletedLabel.textContent = "Completed"; 
            let taskCompletedInput = document.createElement("input");
                setAttributes(taskCompletedInput, {"type": "checkbox","id":"completed", "placeholder": `${element.completed}`});
                taskCompletedDiv.append(taskCompletedLabel, taskCompletedInput)

        /* taskNameDiv.textContent = element.taskName;
        taskDescriptionDiv.textContent = element.description; */
            taskDescriptionDiv.classList.add("task-description")
       /*  taskDueDateDiv.textContent = element.dueDate;
        taskUrgencyDiv.textContent = element.urgency;
        taskCompletedDiv.textContent = element.completed; */




        taskContainer.appendChild(taskForm)
        taskForm.append(taskNameDiv,taskDescriptionDiv,taskDueDateDiv,taskUrgencyDiv,taskCompletedDiv)


        
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
