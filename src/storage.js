import {Project} from "./AppLogicModules/projects.js"
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
    };

    function retrieveFromLocalStorage(){
        projectRemovalAndAddition.setProjects = JSON.parse(localStorage.getItem("arrayOfProjects"));
        Object.assign(storeTasksInTimeObject.todaysSchedule, JSON.parse(localStorage.getItem("todaysSchedule")));
        Object.assign(storeTasksInTimeObject.thisWeeksSchedule,JSON.parse(localStorage.getItem("thisWeeksSchedule")));
        Object.assign(storeTasksInTimeObject.thisMonthsSchedule,JSON.parse(localStorage.getItem("thisMonthsSchedule"))); 
        Project.projectIdentifier = localStorage.getItem("projectIdentifier");
    }

function createDefaultProject(){
    let defaultProject = new Project("Default Project");
    projectRemovalAndAddition.addProjectToArray(defaultProject);
    sendToLocalStorage();
}

    




    return {sendToLocalStorage,retrieveFromLocalStorage, createDefaultProject}
})()


