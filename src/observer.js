

/* This should manage the modules that need to know when arrayOfProjects has changed and executing them without having access to arrayOfProjects */


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
        /* When a project or task is added/removed to/from arrayOfProjects, call a function that tells the storage.js module to execute the sendToLocalStorage function, 
        passing the projects getter as a parameter for the function */
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
        console.log(Object.getPrototypeOf(newProject))
        console.log(projectRemovalAndAddition.projects)
        newProject.createAndAddTask(taskName,description,dueDate,urgency, completed);
        schedule();
        storage();
    }
    let editTask = function(){

    }
    let removeTask = function(task){
        Project.prototype.deleteTask(task);
        schedule();
        storage();

    }

    return {addObserver,removeObserver,schedule,storage, addProjectToArray,removeProjectFromArray, createTask,removeTask, editTask}
}

let subscriber = new Subscriber()

subscriber.addObserver(storageManager);
subscriber.addObserver(storeTasksInTimeObject)



