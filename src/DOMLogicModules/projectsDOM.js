import {Project} from "../AppLogicModules/projects.js"
import { projectRemovalAndAddition, arrayOfProjects } from "../index.js";
import { sidebarDiv, newProjectsContainer } from "../domlogic.js";
export {projectsDOM};

let projectsDOM = (function (){

    function createProject(){
        let projectTitle = document.querySelector('#project-name');
        let projectTitleVal = projectTitle.value;

        let newProject = new Project(projectTitleVal);
        newProject.createAndAddTask("thing", "anything", "07/30/2024", "eh", "false") 
        
        projectRemovalAndAddition.addProjectToArray(newProject);

        function displayNewProject(){
            let projectButton = document.createElement('button');
                projectButton.textContent = newProject.projectName;

                projectButton.classList.add(`${newProject.projectName.replace(/\s+/g, '-').toLowerCase()}`);
                projectButton.setAttribute("data-projectID", newProject.projectIdentifier)
    
                newProjectsContainer.appendChild(projectButton)
        }

        displayNewProject();

    }
    function displayAllProjects(){
        for (const proj of arrayOfProjects){
            let projectButton = document.createElement('button');
            projectButton.textContent = proj.projectName;
            projectButton.classList.add(`${proj.projectName.replace(/\s+/g, '-').toLowerCase()}`);
            projectButton.setAttribute("data-projectID", proj.projectIdentifier)

            newProjectsContainer.appendChild(projectButton)
            }
        }   
    function displayAllTasks(){
        
    }

    

return {createProject, displayAllProjects}

})()