import "./style.css"
import {generatePermanentDOM, newProjectButton, projectModal,newProjectSubmit, newProjectClose} from "./domlogic.js"
import {projectsDOM} from "./DOMLogicModules/projectsDOM.js"
export {projectRemovalAndAddition} 







 const projectRemovalAndAddition = (function (){
    let arrayOfProjects = [];



    return {
        get projects(){
            return arrayOfProjects;
        },
        set setProjects(obj){
            arrayOfProjects = obj;

        }
    
    }
    

 })();
 generatePermanentDOM()
















