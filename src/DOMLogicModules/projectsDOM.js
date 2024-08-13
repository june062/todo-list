import {Project} from "../AppLogicModules/projects.js"
import { projectRemovalAndAddition } from "../index.js";
import { sidebarDiv, newProjectsContainer, mainContainer, taskContainer } from "../domlogic.js";
import { subscriber } from "../observer.js";
import { tasksDOM } from "./tasksDOM.js";
export {projectsDOM};

let projectsDOM = (function (){
    let newProject;

    function createProject(){
        let projectTitle = document.querySelector('#project-name');
        let projectTitleVal = projectTitle.value;

        newProject = new Project(projectTitleVal);
        subscriber.addProjectToArray(newProject);
        

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
        
        while(newProjectsContainer.firstChild){
            newProjectsContainer.removeChild(newProjectsContainer.firstChild);

        }
        for (const proj of projectRemovalAndAddition.projects){
            let projectButton = document.createElement('button');
            projectButton.textContent = proj.projectName;
            projectButton.classList.add(`${proj.projectName.replace(/\s+/g, '-').toLowerCase()}`);
            projectButton.setAttribute("data-projectID", proj.projectIdentifier)

            newProjectsContainer.appendChild(projectButton)
            }
        }  
    function deleteProject(){
        projectRemovalAndAddition.projects.splice(projectRemovalAndAddition.projects.findIndex((element)=>{
            element.projectIdentifier === tasksDOM.returnSelectedProject().projectIdentifier;
        }), 1);
        displayAllProjects();
        while(mainContainer.lastChild !==taskContainer){
            mainContainer.removeChild(mainContainer.lastChild)
        }

        subscriber.storage();
        subscriber.schedule();
    }
         
 

return {createProject, displayAllProjects,deleteProject, newProject}

})()