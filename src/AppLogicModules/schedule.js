import { formatDistanceStrict, format, formatDistanceToNowStrict } from "date-fns";
import {arrayOfProjects} from "../index.js"
export {storeTasksInTimeObject, todaysSchedule, thisWeeksSchedule, thisMonthsSchedule}

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
        
        let arrayToLoop = arrayOfProjects[i].arrayOfTasks;
        console.log(arrayToLoop)
        for(let j = 0; j < 2; j++){
            let daysPhrase = formatDistanceToNowStrict(arrayToLoop[j].dueDate, {unit: "day"});
            let days = daysPhrase.replace(/(^\d+)(.+$)/i,'$1'); 
            if(days == "1"){
                todaysSchedule[arrayToLoop[j].taskName] = arrayToLoop[j];
                thisWeeksSchedule[arrayToLoop[j].taskName] = arrayToLoop[j]
                thisMonthsSchedule[arrayToLoop[j].taskName] = arrayToLoop[j];
            }
            else if(days <= 7 && days != 1){
                thisWeeksSchedule[arrayToLoop[j].taskName] = arrayToLoop[j]
                thisMonthsSchedule[arrayToLoop[j].taskName] = arrayToLoop[j];
            }
            else if(days > 7 && days <= 30){
                thisMonthsSchedule[arrayToLoop[j].taskName] = arrayToLoop[j];
            }
            console.log(days)
            
    }
  

    }}
