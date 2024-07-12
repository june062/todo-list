import "./style.css"
import {Project} from "./AppLogicModules/projects.js"

let project1 = new Project("Project 1");
console.log(project1);
project1.createAndAddTask("task1", "That thing i have to do");
project1.createAndAddTask("task2", "That other thing that I have to do")

let project2 = new Project("Project 2");
project2.createAndAddTask("Thing for project 2",  "Damn I have to do this thing");
project2.createAndAddTask("Other thing for project 2",  "Damn I also have to do this thing")

console.log(project2)
