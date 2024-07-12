import {Task} from './tasks.js'

export class Project{
    static projectIdentifier = 0;
    

    constructor(projectName){
        this.projectName = projectName;
        this.arrayOfTasks = [];
        this.projectIdentifier = Project.projectIdentifier++;
    }
    createAndAddTask(taskName,description){
        taskName = new Task(taskName,description);
        this.arrayOfTasks.push(taskName);    
    }

    deleteTask(){

    }
}