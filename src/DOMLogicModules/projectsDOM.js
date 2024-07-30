import {Project} from "../AppLogicModules/projects.js"
import { projectRemovalAndAddition } from "../index.js";
import { sidebarDiv, newProjectsContainer } from "../domlogic.js";
import { subscriber } from "../observer.js";
export {projectsDOM};

let projectsDOM = (function (){
    let newProject;

    function createProject(){
        let projectTitle = document.querySelector('#project-name');
        let projectTitleVal = projectTitle.value;

        newProject = new Project(projectTitleVal);
        console.log(Object.getPrototypeOf(newProject))
        subscriber.addProjectToArray(newProject);
        subscriber.createTask("thing", "anything", "07/30/2024", "eh", "false", newProject) ;
        

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
        for (const proj of projectRemovalAndAddition.projects){
            let projectButton = document.createElement('button');
            projectButton.textContent = proj.projectName;
            projectButton.classList.add(`${proj.projectName.replace(/\s+/g, '-').toLowerCase()}`);
            projectButton.setAttribute("data-projectID", proj.projectIdentifier)

            newProjectsContainer.appendChild(projectButton)
            }
        }   
 

return {createProject, displayAllProjects,newProject}

})()