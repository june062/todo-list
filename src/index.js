import "./style.css"
import {Project} from "./AppLogicModules/projects.js"


/* let arrayOfProjects = [];
function createProject(nameOfProject){
    nameOfProject = new Project(`${nameOfProject}`)
    arrayOfProjects.push(nameOfProject);

    function deleteProject(projectIndex){
        this.arrayOfProjects.splice(projectIndex, 1);
    }


} */

let project1 = new Project("Project 1");
console.log(project1);
project1.createAndAddTask("task1", "That thing i have to do");
project1.createAndAddTask("task2", "That other thing that I have to do")

let project2 = new Project("Project 2");
project2.createAndAddTask("Thing for project 2",  "Damn I have to do this thing");
project2.createAndAddTask("Other thing for project 2",  "Damn I also have to do this thing");
project2.createAndAddTask("third thing for project 2",  "Damn I also have to do this thing");
project2.createAndAddTask("forth thing for project 2",  "Damn I also have to do this thing")

console.log(project2)
project2.deleteTask(4); 

