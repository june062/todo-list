export {generatePermanentDOM, todayButton,thisWeekButton,thisMonthButton,newProjectButton,titleHeader, projectModal, newProjectSubmit, newProjectClose, sidebarDiv, newProjectsContainer, taskContainer}
import {projectsDOM} from "./DOMLogicModules/projectsDOM.js"
import {arrayOfProjects} from "./index.js"
import {displayContentsOfProject} from "./DOMLogicModules/tasksDOM"



let todayButton = document.createElement("button"); 
let thisWeekButton = document.createElement("button");
let thisMonthButton = document.createElement("button");
let newProjectButton = document.createElement("button");
let titleHeader = document.createElement("h1");
let projectModal = document.querySelector("dialog.project-modal")
let newProjectSubmit = document.querySelector("dialog .submit-form")
let newProjectClose = document.querySelector("dialog .close-form");
let sidebarDiv = document.createElement("div");
let newProjectsContainer = document.createElement("div");
let mainContainer = document.createElement("div");
let taskContainer = document.createElement("div");



function generatePermanentDOM(){
    let body = document.querySelector("body");

    
        sidebarDiv.classList.add("sidebar");
            todayButton.classList.add("today")
            todayButton.textContent = "Today";

            thisWeekButton.classList.add("this-week");
            thisWeekButton.textContent = "This Week";

            thisMonthButton.classList.add("this-month");
            thisMonthButton.textContent = "This Month";

            newProjectButton.classList.add("new-project");
            newProjectButton.textContent = "New Project";

            newProjectsContainer.classList.add("new-projects-container")

    sidebarDiv.append(todayButton,thisWeekButton,thisMonthButton,newProjectButton, newProjectsContainer);


    let titleContainer = document.createElement("div");
        titleContainer.classList.add("title-container");
            titleHeader.textContent= "Today"

    titleContainer.appendChild(titleHeader);

        mainContainer.classList.add("main-container");

    taskContainer.classList.add("task-container")
        mainContainer.appendChild(taskContainer)

    body.append(sidebarDiv,titleContainer,mainContainer)

}



 /* New Project button functionality  */
newProjectButton.addEventListener("click",()=> {
    projectModal.showModal()
})

newProjectSubmit.addEventListener("click", () => {
    projectsDOM.createProject()
})

newProjectClose.addEventListener("click", ()=> {
    projectModal.close()
})

 newProjectsContainer.addEventListener("click", 
displayContentsOfProject)  