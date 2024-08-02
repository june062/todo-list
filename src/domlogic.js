export {generatePermanentDOM, todayButton,thisWeekButton,thisMonthButton,newProjectButton,titleHeader, sidebarDiv, newProjectsContainer, taskContainer, mainContainer}
import {projectsDOM} from "./DOMLogicModules/projectsDOM.js"
import {tasksDOM} from "./DOMLogicModules/tasksDOM.js"
import { storageManager } from "./storage.js";
import { subscriber } from "./observer.js";
import {displayContentsOfProject} from "./DOMLogicModules/tasksDOM"



let todayButton = document.createElement("button"); 
let thisWeekButton = document.createElement("button");
let thisMonthButton = document.createElement("button");
let newProjectButton = document.createElement("button");
let titleHeader = document.createElement("h1");
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

    if (!JSON.parse(localStorage.getItem("arrayOfProjects")) ){
        subscriber.createDefaultProject();
        projectsDOM.displayAllProjects();
    }
    
    else {
        storageManager.retrieveFromLocalStorage();
        projectsDOM.displayAllProjects();
    }

}



let projectModal = document.querySelector("dialog.project-modal")
let newProjectSubmit = document.querySelector("dialog .submit-form")
let newProjectClose = document.querySelector("dialog .close-form");


let taskModal= document.querySelector("dialog.task-modal");
let neweTaskSubmit = document.querySelector("dialog .task-submit-form");
let newTaskClose = document.querySelector("dialog .task-close-form");


newProjectButton.addEventListener("click",()=> {
    projectModal.showModal()
})

newProjectSubmit.addEventListener("click", () => {
    projectsDOM.createProject()
})

newProjectClose.addEventListener("click", ()=> {
    projectModal.close()
})

 newProjectsContainer.addEventListener("click", (e)=>{
    tasksDOM.displayContentsOfProject(e);
 }
)  



mainContainer.addEventListener("click", (e)=>{
    if (e.target === document.querySelector("button.add-task")){
        taskModal.showModal();
    }

})
newTaskClose.addEventListener("click", ()=>{
    taskModal.close()}
    )
neweTaskSubmit.addEventListener("click", ()=>{
    tasksDOM.displayNewTask();

})

taskContainer.addEventListener("click", (event)=>{
    
    if(event.target !== document.querySelectorAll("main-container > button.add-task")){
        if(event.target instanceof HTMLInputElement|| event.target instanceof HTMLTextAreaElement|| event.target instanceof HTMLDivElement|| event.target instanceof HTMLFormElement || event.target instanceof HTMLSelectElement||
            event.target instanceof HTMLLabelElement){
            return;
        }
    }
    console.log(event.target)
    event.preventDefault();
    subscriber.editTask(+event.target.dataset.projectid, +event.target.dataset.taskid);

})


mainContainer.addEventListener("click", (e)=>{
    if (e.target === document.querySelector("button.delete-project")){
    projectsDOM.deleteProject()
    }
})