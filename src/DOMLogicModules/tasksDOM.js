export {tasksDOM}
import {taskContainer, mainContainer} from "../domlogic.js"
import {projectRemovalAndAddition} from "../index.js"
import {subscriber} from "../observer.js"
import {format} from "date-fns";



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
            for (const element of selectedProject.arrayOfTasks){
                
                createTasksDOM(element);
            };
            
        }

        function createTasksDOM(element){
            function setAttributes(DOMelement, attrs) {
                for(let key in attrs) {
                DOMelement.setAttribute(key, attrs[key]);
                }
            }
                
            
            let taskForm = document.createElement("form");
                taskForm.setAttribute("method", "post");
                taskForm.setAttribute("data-taskID", element.taskIdentifier)
                taskForm.setAttribute("data-projectID", selectedProject.projectIdentifier)

        

            let taskNameDiv = document.createElement("div")
            taskNameDiv.classList.add("task-info");
                let taskNameLabel = document.createElement("label");
                    taskNameLabel.setAttribute("for", "task-name");
                    taskNameLabel.textContent = `Task Name`;
                let taskNameInput = document.createElement("input");
                    setAttributes(taskNameInput, {"type": "text","id":"task-name", "value": `${element.taskName}`});
                taskNameDiv.append(taskNameLabel,taskNameInput)


            let taskDescriptionDiv = document.createElement("div");
            taskDescriptionDiv.classList.add("task-info")
                let taskDescriptionLabel = document.createElement("label");
                    taskDescriptionLabel.setAttribute("for", "description");
                    taskDescriptionLabel.textContent = `Description`;

                let taskDescriptionTextArea = document.createElement("textarea");
                    setAttributes(taskDescriptionTextArea, {"id":"description"});
                    taskDescriptionTextArea.textContent = element.description;
                taskDescriptionDiv.append(taskDescriptionLabel, taskDescriptionTextArea)



            let taskDueDateDiv = document.createElement("div");
            taskDueDateDiv.classList.add("task-info");
                let taskDueDateLabel = document.createElement("label");
                    taskDueDateLabel.setAttribute("for", "due-date");
                    taskDueDateLabel.textContent = `Due Date`;
                let taskDueDateInput = document.createElement("input");
                setAttributes(taskDueDateInput, {"type": "date","id":"due-date", "value": `${format(new Date(element.dueDate), "yyyy-MM-dd")}`});
                taskDueDateDiv.append(taskDueDateLabel, taskDueDateInput)


            let taskUrgencyDiv = document.createElement("div")
            taskUrgencyDiv.classList.add("task-info");
            
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
                    for (let i = 0; i < taskUrgencySelect.options.length; i++) {
                        taskUrgencySelect.options[i].selected = taskUrgencySelect.options[i].value === element.urgency;
                    }

                taskUrgencyDiv.append(taskUrgencyLabel, taskUrgencySelect)
                    


            let taskCompletedDiv = document.createElement("div");
            taskCompletedDiv.classList.add("task-info");
                let taskCompletedLabel = document.createElement("label");
                    taskCompletedLabel.setAttribute("for", "completed");
                    taskCompletedLabel.textContent = "Completed"; 
                let taskCompletedInput = document.createElement("input");
                    setAttributes(taskCompletedInput, {"type": "checkbox","id":"completed"});

                    if(element.completed){
                        taskCompletedInput.checked = true;
                    }
                    taskCompletedDiv.append(taskCompletedLabel, taskCompletedInput)

            let submitEdittedTask = document.createElement("button");
            submitEdittedTask.classList.add("submit-editted-task");
            submitEdittedTask.textContent = "Submit edit";


           
                taskDescriptionDiv.classList.add("task-description")
        



            taskContainer.appendChild(taskForm)
            taskForm.append(taskNameDiv,taskDescriptionDiv,taskDueDateDiv,taskUrgencyDiv,taskCompletedDiv, submitEdittedTask)


            
        }
        
        
        function displayNewTask(){

            let nameVal = document.querySelector("#task-name").value;
            let descriptionVal = document.querySelector("#description").value;
            let dueDateVal = document.querySelector("#due-date").value;
            let urgencyVal = document.querySelector("#urgency").value;
            let completedVal = document.querySelector("#completed").checked;
            console.log(completedVal)

            subscriber.createTask(nameVal, descriptionVal, dueDateVal, urgencyVal, completedVal, selectedProject);
        

            createTasksDOM(selectedProject.arrayOfTasks[selectedProject.arrayOfTasks.length - 1]);
            



        }

        function removeAllTaskDOM(){
            while (taskContainer.firstChild){
                taskContainer.removeChild(taskContainer.firstChild)
            }

        }
return {removeAllTaskDOM,displayContentsOfProject,displayNewTask, selectedProject}
})()
