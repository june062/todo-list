import "./style.css"
import {Project} from "./AppLogicModules/projects.js"
import {storeTasksInTimeObject,todaysSchedule, thisWeeksSchedule, thisMonthsSchedule} from "./AppLogicModules/schedule.js"
export {arrayOfProjects, sendToLocalStorage} 


 let arrayOfProjects = [];
 
 let projectRemovalAndAddition = (function (){

    function addProjectToArray(project){
        arrayOfProjects.push(project);
        sendToLocalStorage()
    }
    function removeProjectFromArray(projectIdentifier){
        let projectIndex = arrayOfProjects.findIndex(element=>element.projectIdentifier === projectIdentifier);
        arrayOfProjects.splice(projectIndex,1);
        sendToLocalStorage();

    }
    return {addProjectToArray, removeProjectFromArray}

 })();
 /* let newProject = new Project("New Project");
 projectRemovalAndAddition.addProjectToArray(newProject) */

 if (!JSON.parse(localStorage.getItem("arrayOfProjects"))){
    createDefaultProject();
    sendToLocalStorage();
}
else {
    retrieveFromLocalStorage();
}


function sendToLocalStorage(){
    localStorage.setItem("arrayOfProjects", JSON.stringify(arrayOfProjects));
    localStorage.setItem("todaysSchedule", JSON.stringify(todaysSchedule))
    localStorage.setItem("thisWeeksSchedule", JSON.stringify(thisWeeksSchedule))
    localStorage.setItem("thisMonthsSchedule", JSON.stringify(thisMonthsSchedule))
}

function retrieveFromLocalStorage(){
    arrayOfProjects = JSON.parse(localStorage.getItem("arrayOfProjects"));
    Object.assign(todaysSchedule, JSON.parse(localStorage.getItem("todaysSchedule")));
    Object.assign(thisWeeksSchedule,JSON.parse(localStorage.getItem("thisWeeksSchedule")));
    Object.assign(thisMonthsSchedule,JSON.parse(localStorage.getItem("thisMonthsSchedule"))); 
}

function createDefaultProject(){
    let defaultProject = new Project("Default Project");
    projectRemovalAndAddition.addProjectToArray(defaultProject);
    sendToLocalStorage();
}

storeTasksInTimeObject();

console.log(arrayOfProjects)
console.log(thisMonthsSchedule)











