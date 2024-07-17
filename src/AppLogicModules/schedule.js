import { formatDistanceStrict, format, formatDistanceToNowStrict } from "date-fns";
import {arrayOfProjects} from "../index.js"
export {storeTasksInTimeObject, todaysSchedule, thisWeeksSchedule, thisMonthsSchedule}

let removeTaskFromSchedule = function(obj)
{
       return {removeTask: (nameOfTask) => {
            obj[nameOfTask].completed = "true";
            delete obj[nameOfTask];
            }
        }

}
let timeFactoryFunction = function(){
    let obj = {};
    return Object.assign(obj, removeTaskFromSchedule(obj))
}

let todaysSchedule = timeFactoryFunction();
let thisWeeksSchedule = timeFactoryFunction();
let thisMonthsSchedule = timeFactoryFunction();




function storeTasksInTimeObject(){
    for (let i = 0; i < 2; i++){
        
        let arrayToLoop = arrayOfProjects[i].arrayOfTasks;
        
        for(let j = 0; j < 2; j++){
            let daysPhrase = formatDistanceToNowStrict(arrayToLoop[j].dueDate, {unit: "day"});
            let days = daysPhrase.replace(/(^\d+)(.+$)/i,'$1'); 
            const thisWeekTrueOrFalse = days <= 7 && days != 1;
            const thisMonthTrueOrFalse = days > 7 && days <= 30;
            if(days == "1"){
                todaysSchedule[arrayToLoop[j].taskName] = arrayToLoop[j];
                thisWeeksSchedule[arrayToLoop[j].taskName] = arrayToLoop[j]
                thisMonthsSchedule[arrayToLoop[j].taskName] = arrayToLoop[j];
            }
            else if(thisWeekTrueOrFalse && arrayToLoop[j].completed != "true"){
                thisWeeksSchedule[arrayToLoop[j].taskName] = arrayToLoop[j]
                thisMonthsSchedule[arrayToLoop[j].taskName] = arrayToLoop[j];
            }
            else if(thisMonthTrueOrFalse && arrayToLoop[j].completed != "true"){
                thisMonthsSchedule[arrayToLoop[j].taskName] = arrayToLoop[j];
            }
            console.log(days)
            
    }
  

    }}



