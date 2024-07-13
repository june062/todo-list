export class Task{
    static taskIdentifier = 0;
    constructor(taskName, description,dueDate,urgency, completed){
        this.taskName = taskName;
        this.description = description;
        this.dueDate = dueDate;
        this.urgency = urgency;
        this.completed = completed
        this.taskIdentifier = Task.taskIdentifier++;
    }
}