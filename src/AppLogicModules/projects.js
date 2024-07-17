import {Task} from './tasks.js'
import { sendToLocalStorage } from '../index.js';

export class Project{
    static projectIdentifier = 0;
    

    constructor(projectName){
        this.projectName = projectName;
        this.arrayOfTasks = [];
        this.projectIdentifier = Project.projectIdentifier++;
    }
    createAndAddTask(taskName,description,dueDate,urgency, completed){
        taskName = new Task(taskName,description,dueDate,urgency, completed);
        this.arrayOfTasks.push(taskName);   
        sendToLocalStorage(); 
    }

    deleteTask(task){
      let taskIndex = this.arrayOfTasks.findIndex(element=>element.taskIdentifier === task);
      this.arrayOfTasks.splice(taskIndex,1);
      sendToLocalStorage();
    }
}

