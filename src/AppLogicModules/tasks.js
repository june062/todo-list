import {format} from "date-fns";
export {Task};

class Task{
    static taskIdentifier = 0;
    constructor(taskName, description,dueDate,urgency, completed){
        this.taskName = taskName;
        this.description = description;
        this.dueDate = format(new Date(dueDate), "yyyy-MM-dd");
        this.urgency = urgency;
        this.completed = completed;
        this.taskIdentifier = Task.taskIdentifier++;
    }
}