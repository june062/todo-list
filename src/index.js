import "./style.css"
import {Project} from "./AppLogicModules/projects.js"


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
console.log(project1);
project1.createAndAddTask("task1");
project1.createAndAddTask("task2", "That other thing that I have to do", "hi")

let project2 = new Project("Project 2");
project2.createAndAddTask("Thing for project 2",  "Damn I have to do this thing");
project2.createAndAddTask("Other thing for project 2",  "Damn I also have to do this thing");
project2.createAndAddTask("third thing for project 2",  "Damn I also have to do this thing");
project2.createAndAddTask("forth thing for project 2",  "Damn I also have to do this thing")

console.log(project2)


projectRemovalAndAddition.addProjectToArray(project1);
projectRemovalAndAddition.addProjectToArray(project2);

projectRemovalAndAddition.removeProjectFromArray(0);
console.log(arrayOfProjects)



