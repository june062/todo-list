export {displayContentsOfProject}
import {taskContainer} from "../domlogic.js"
import {projectRemovalAndAddition} from "../index.js"




function displayContentsOfProject(e){
    let selectedProject = projectRemovalAndAddition.projects().find((element) => element.projectIdentifier == e.target.dataset.projectid)


    function displayAllTasks(){
        
    }
    for (const element of selectedProject.arrayOfTasks){
        let taskDOM = document.createElement("div");
        taskDOM.classList.add("task");

        taskContainer.appendChild(taskDOM)


        
    }
  
}
function displayNewTask(){

}

function removeAllTaskDOM(){

}

