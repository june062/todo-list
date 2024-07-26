

/* This should manage the modules that need to know when arrayOfProjects has changed and executing them without having access to arrayOfProjects */


import {projectRemovalAndAddition} from "./index.js"
import {storeTasksInTimeObject} from "./AppLogicModules/schedule.js"


let Subscriber = function(){
    this.subscriber = [];

    let addObserver = function(observer){
        this.subscriber.push(observer)
    }

    let removeObserver = function(observer){
        let indexOfObserver = this.subscriber.findIndexOf(observer)
        if(indexOfObserver > -1){
            this.subscriber.splice(indexOfObserver,1);
        }

    }
    let schedule = function(){
        storeTasksInTimeObject.storeTasks(projectRemovalAndAddition.projects())
    }
    let storage = function(){
        /* When a project or task is added/removed to/from arrayOfProjects, call a function that tells the storage.js module to execute the sendToLocalStorage function, 
        passing the projects getter as a parameter for the function */
    }
}

let subscriber = new Subscriber()


