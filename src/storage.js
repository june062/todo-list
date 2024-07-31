import {Project} from "./AppLogicModules/projects.js"
import { Task } from "./AppLogicModules/tasks.js";
import { storeTasksInTimeObject } from "./AppLogicModules/schedule.js";
import { projectRemovalAndAddition } from "./index.js";
export {storageManager}

let storageManager = (function(){

    function sendToLocalStorage(arrayOfProjects){
        localStorage.setItem("arrayOfProjects", JSON.stringify(arrayOfProjects));
        localStorage.setItem("todaysSchedule", JSON.stringify(storeTasksInTimeObject.todaysSchedule))
        localStorage.setItem("thisWeeksSchedule", JSON.stringify(storeTasksInTimeObject.thisWeeksSchedule))
        localStorage.setItem("thisMonthsSchedule", JSON.stringify(storeTasksInTimeObject.thisMonthsSchedule))
        localStorage.setItem("projectIdentifier", Project.projectIdentifier)
        localStorage.setItem("taskIdentifier", Task.taskIdentifier)
        
    };

    function retrieveFromLocalStorage(){
        projectRemovalAndAddition.setProjects = JSON.parse(localStorage.getItem("arrayOfProjects"));
        for(let proj of projectRemovalAndAddition.projects){
          Object.setPrototypeOf(proj, Project.prototype)

        }
        Object.assign(storeTasksInTimeObject.todaysSchedule, JSON.parse(localStorage.getItem("todaysSchedule")));
        Object.assign(storeTasksInTimeObject.thisWeeksSchedule,JSON.parse(localStorage.getItem("thisWeeksSchedule")));
        Object.assign(storeTasksInTimeObject.thisMonthsSchedule,JSON.parse(localStorage.getItem("thisMonthsSchedule"))); 
        Project.projectIdentifier = localStorage.getItem("projectIdentifier");
        Task.taskIdentifier = localStorage.getItem("taskIdentifier");
    }

function createDefaultProject(){
    let defaultProject = new Project("Default Project");
    projectRemovalAndAddition.projects.push(defaultProject);
    sendToLocalStorage(projectRemovalAndAddition.projects);
}

    




    return {sendToLocalStorage,retrieveFromLocalStorage, createDefaultProject}
})()


