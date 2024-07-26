/* import {todaysSchedule,thisWeeksSchedule,thisMonthsSchedule} from "./AppLogicModules/schedule.js"
import {Project} from "./AppLogicModules/projects.js"
export {arrayOfProjects,sendToLocalStorage,retrieveFromLocalStorage, projectRemovalAndAddition}

let arrayOfProjects = [];

function sendToLocalStorage(){
    localStorage.setItem("arrayOfProjects", JSON.stringify(arrayOfProjects));
    localStorage.setItem("todaysSchedule", JSON.stringify(todaysSchedule))
    localStorage.setItem("thisWeeksSchedule", JSON.stringify(thisWeeksSchedule))
    localStorage.setItem("thisMonthsSchedule", JSON.stringify(thisMonthsSchedule))
    localStorage.setItem("projectIdentifier", Project.projectIdentifier)
}

function retrieveFromLocalStorage(){
    arrayOfProjects = JSON.parse(localStorage.getItem("arrayOfProjects"));
    Object.assign(todaysSchedule, JSON.parse(localStorage.getItem("todaysSchedule")));
    Object.assign(thisWeeksSchedule,JSON.parse(localStorage.getItem("thisWeeksSchedule")));
    Object.assign(thisMonthsSchedule,JSON.parse(localStorage.getItem("thisMonthsSchedule"))); 
    Project.projectIdentifier = localStorage.getItem("projectIdentifier");
}

const projectRemovalAndAddition = (function (){

    function addProjectToArray(project){
        arrayOfProjects.push(project);
        sendToLocalStorage()
    }
    function removeProjectFromArray(projectIdentifier, projectName){
        let projectIndex = arrayOfProjects.findIndex(element=>element.projectIdentifier === projectIdentifier && element.projectName === projectName);
        arrayOfProjects.splice(projectIndex,1);
        sendToLocalStorage();

    }
    return {addProjectToArray, removeProjectFromArray}

 })();

 if (!JSON.parse(localStorage.getItem("arrayOfProjects"))){
    createDefaultProject();
    sendToLocalStorage();
}
else {
    retrieveFromLocalStorage();
    projectsDOM.displayAllProjects();
}
 */