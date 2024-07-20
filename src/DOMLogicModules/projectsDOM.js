import {Project} from "../AppLogicModules/projects.js"
import { projectRemovalAndAddition, arrayOfProjects } from "../index.js";
import { sidebarDiv } from "../domlogic.js";
export {projectsDOM};

let projectsDOM = (function (){

    function createProject(){
        let projectTitle = document.querySelector('#project-name');
        let projectTitleVal = projectTitle.value;

        let newProject = new Project(projectTitleVal);
        console.log(Project.projectIdentifier)
        projectRemovalAndAddition.addProjectToArray(newProject);

        function displayNewProject(){
            let projectButton = document.createElement('button');
                projectButton.textContent = newProject.projectName;

                projectButton.classList.add(`${newProject.projectName.replace(/\s+/g, '-').toLowerCase()}`)
    
                sidebarDiv.appendChild(projectButton)
        }

        displayNewProject();

    }
    function displayAllProjects(){
        for (const proj of arrayOfProjects){
            let projectButton = document.createElement('button');
            projectButton.textContent = proj.projectName;
            projectButton.classList.add(`${proj.projectName.replace(/\s+/g, '-').toLowerCase()}`)

            sidebarDiv.appendChild(projectButton)
            }
        }   
    function displayAllTasks(){
        
    }

    

return {createProject, displayAllProjects}

})()