import "./style.css"
import {Project} from "./AppLogicModules/projects.js"
import {storeTasksInTimeObject,todaysSchedule, thisWeeksSchedule, thisMonthsSchedule} from "./AppLogicModules/schedule.js"
import {generatePermanentDOM, newProjectButton, projectModal,newProjectSubmit, newProjectClose} from "./domlogic.js"
import {projectsDOM} from "./DOMLogicModules/projectsDOM.js"
export {projectRemovalAndAddition} 




 generatePermanentDOM()


 const projectRemovalAndAddition = (function (){
    let arrayOfProjects = [];



    return {
        get projects(){
            return arrayOfProjects;
        }}

 })();

/*  if (!JSON.parse(localStorage.getItem("arrayOfProjects"))){
    createDefaultProject();
    sendToLocalStorage();
}

else {
    retrieveFromLocalStorage();
    projectsDOM.displayAllProjects();
}
 */

















