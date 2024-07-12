export class Task{
    static taskIdentifier = 0;
    constructor(taskName, description){
        this.taskName = taskName;
        this.description = description
        this.taskIdentifier = Task.taskIdentifier++;
    }
}