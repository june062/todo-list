import "./style.css"
import {Project} from "./AppLogicModules/projects.js"
import {storeTasksInTimeObject,todaysSchedule, thisWeeksSchedule, thisMonthsSchedule} from "./AppLogicModules/schedule.js"
import {generatePermanentDOM, newProjectButton, projectModal,newProjectSubmit, newProjectClose} from "./domlogic.js"
import {projectsDOM} from "./DOMLogicModules/projectsDOM.js"
export {sendToLocalStorage, retrieveFromLocalStorage, projectRemovalAndAddition} 




 generatePermanentDOM()


 const projectRemovalAndAddition = (function (){
    let arrayOfProjects = [];



    
     let addProjectToArray = function(project){
        arrayOfProjects.push(project);
    }
    
    let removeProjectFromArray =  function(){
        findProject();
        arrayOfProjects.splice(projectIndex,1);
        sendToLocalStorage();
    }
    let findProject = function(projectIdentifier, projectName){
        let projectIndex = arrayOfProjects.findIndex(element=>element.projectIdentifier === projectIdentifier && element.projectName === projectName);
        return projectIndex;
    }


 

    return {
        get projects(){
            return arrayOfProjects;
        },
        addProjectToArray, 
        removeProjectFromArray}

 })();

 if (!JSON.parse(localStorage.getItem("arrayOfProjects"))){
    createDefaultProject();
    sendToLocalStorage();
}
else {
    retrieveFromLocalStorage();
    projectsDOM.displayAllProjects();
}


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

function createDefaultProject(){
    let defaultProject = new Project("Default Project");
    projectRemovalAndAddition.addProjectToArray(defaultProject);
    sendToLocalStorage();
}



console.log(arrayOfProjects)














