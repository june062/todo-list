import {projectRemovalAndAddition} from "./index.js";
import {storeTasksInTimeObject} from "./AppLogicModules/schedule.js";
import {storageManager} from "./storage.js";
import { Project } from "./AppLogicModules/projects.js";
import { Task } from "./AppLogicModules/tasks.js";
export {subscriber}


let Subscriber = function(){
    let subscribers = [];

    let addObserver = function(observer){
        subscribers.push(observer)
    }

    let removeObserver = function(observer){
        let indexOfObserver = subscribers.findIndexOf(observer)
        if(indexOfObserver > -1){
            subscribers.splice(indexOfObserver,1);
        }

    }
    let schedule = function(){
        storeTasksInTimeObject.storeTasks(projectRemovalAndAddition.projects)
    }
    let storage = function(){
        storageManager.sendToLocalStorage(projectRemovalAndAddition.projects)
    }
    let addProjectToArray = function(projectName){
        projectRemovalAndAddition.projects.push(projectName);
        storage();
    }
    
    let removeProjectFromArray =  function(){
        findProject();
        projectRemovalAndAddition.projects.splice(projectIndex,1);
        storage();
      
    }
    let findProject = function(projectIdentifier, projectName){
        let projectIndex = projectRemovalAndAddition.projects.findIndex(element=>element.projectIdentifier === projectIdentifier && element.projectName === projectName);
        return projectIndex;
   
    }

    let createTask = function(taskName,description,dueDate,urgency, completed, newProject){
        newProject.createAndAddTask(taskName,description,dueDate,urgency, completed);
        schedule();
        storage();
    }
    let editTask = function(firstVal,secondVal){
    
        let selectedTask = projectRemovalAndAddition.projects[firstVal].arrayOfTasks[secondVal];
        selectedTask.taskName = document.querySelector(`#task-name-${secondVal}`).value;
        selectedTask.description = document.querySelector(`#description-${secondVal}`).value;
        selectedTask.dueDate = document.querySelector(`#due-date-${secondVal}`).value;
        selectedTask.urgency = document.querySelector(`#urgency-${secondVal}`).value;
        selectedTask.completed = document.querySelector(`#completed-${secondVal}`).checked

        schedule();
        storage();
    
    

    }
    let removeTask = function(task){
        Project.prototype.deleteTask(task);
        schedule();
        storage();

    }
    let createDefaultProject = function(){
            let defaultProject = new Project("Default Project");
            addProjectToArray(defaultProject)
            
            
        
    }

    return {addObserver,removeObserver,schedule,storage, addProjectToArray,removeProjectFromArray, createTask,removeTask, editTask, createDefaultProject}
}

let subscriber = new Subscriber()

subscriber.addObserver(storageManager);
subscriber.addObserver(storeTasksInTimeObject)



