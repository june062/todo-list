import "./style.css"
import {Project} from "./AppLogicModules/projects.js"
import { formatDistance, subDays, format } from "date-fns";
import {storeTasksInTimeObject, thisMonthsSchedule} from "./AppLogicModules/schedule.js"
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

let project1 = new Project("Project 1");

project1.createAndAddTask("task1", "thing 1", "07/23/2024");
project1.createAndAddTask("task2", "That other thing that I have to do", "07/15/2024")

let project2 = new Project("Project 2");
 project2.createAndAddTask("Thing for project 2",  "Damn I have to do this thing", "09/01/2024");
project2.createAndAddTask("Other thing for project 2",  "Damn I also have to do this thing", "08/20/2024");

 

projectRemovalAndAddition.addProjectToArray(project1)
projectRemovalAndAddition.addProjectToArray(project2)





console.log(arrayOfProjects)




storeTasksInTimeObject();









