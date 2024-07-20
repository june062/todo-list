import {Project} from "../AppLogicModules/projects.js"
import { projectRemovalAndAddition } from "../index.js";
export {projectsDOM};

let projectsDOM = (function (){

    function createProject(){
        let projectTitle = document.querySelector('#project-name');
        let projectTitleVal = projectTitle.value;

        let newProject = new Project(projectTitleVal);
        projectRemovalAndAddition.addProjectToArray(newProject);
    }

return {createProject}

})()