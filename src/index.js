import "./style.css"
import {Project} from "./AppLogicModules/projects.js"
import { formatDistance, subDays, format } from "date-fns";
import {storeTasksInTimeObject,todaysSchedule, thisWeeksSchedule, thisMonthsSchedule} from "./AppLogicModules/schedule.js"
export {arrayOfProjects} 


 let arrayOfProjects = [];
 
 let projectRemovalAndAddition = (function (){

    function addProjectToArray(project){
        arrayOfProjects.push(project);
    }
    function removeProjectFromArray(projectIdentifier){
        let projectIndex = arrayOfProjects.findIndex(element=>element.projectIdentifier === projectIdentifier);
        arrayOfProjects.splice(projectIndex,1)

    }
    return {addProjectToArray, removeProjectFromArray}

 })();

/* let project1 = new Project("Project 1");

project1.createAndAddTask("task1", "thing 1", "07/23/2024", "eh", "false");
project1.createAndAddTask("task2", "That other thing that I have to do", "07/15/2024", "eh", "true")

let project2 = new Project("Project 2");
 project2.createAndAddTask("Thing for project 2",  "Damn I have to do this thing", "09/01/2024", "eh", "false");
project2.createAndAddTask("Other thing for project 2",  "Damn I also have to do this thing", "08/15/2024", "eh", "false");

 

projectRemovalAndAddition.addProjectToArray(project1)
projectRemovalAndAddition.addProjectToArray(project2)


console.log(todaysSchedule)*/

 
/* console.log(thisWeeksSchedule)



console.log(thisMonthsSchedule)
  */


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

retrieveFromLocalStorage()
storeTasksInTimeObject()







