import { formatDistanceStrict, format, formatDistanceToNowStrict } from "date-fns";
import {arrayOfProjects} from "../index.js"
export {storeTasksInTimeObject, thisMonthsSchedule}

class Today{
    constructor(){}
}

class ThisWeek{
    constructor(){}
}
class ThisMonth{
    constructor(){}
} 


const todaysSchedule = new Today();
const thisWeeksSchedule = new ThisWeek();
const thisMonthsSchedule = new ThisMonth(); 

function storeTasksInTimeObject(){
    for (let i = 0; i < 2; i++){
        let arrayToLoop = arrayOfProjects[i].arrayOfTasks
        for(let j = 0; j < 2; j++){
            let days = formatDistanceToNowStrict(arrayToLoop[j].dueDate, {unit: "day"})
            if(days === "1 day"){
                thisMonthsSchedule.task = arrayToLoop[j];
            }
            console.log(days);
            
        }
    }
  

}

