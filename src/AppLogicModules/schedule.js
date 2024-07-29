import { formatDistanceStrict, format, formatDistanceToNowStrict } from "date-fns";


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




let storeTasksInTimeObject = (function (){
todaysSchedule;
thisWeeksSchedule;
thisMonthsSchedule;


let storeTasks = function(arrayOfProjects){
    for (let i = 0; i < arrayOfProjects.length; i++){
        let arrayToLoop;
        
        if (arrayOfProjects[i].arrayOfTasks.length == 0){
            continue;
        }
        else{
            arrayToLoop = arrayOfProjects[i].arrayOfTasks;
        }
       
        
        for(let j = 0; j < arrayToLoop.length; j++){
            let daysPhrase = formatDistanceToNowStrict(arrayToLoop[j].dueDate, {unit: "day"});
            let days = daysPhrase.replace(/(^\d+)(.+$)/i,'$1'); 
            const thisWeekTrueOrFalse = days <= 7 && days != 1;
            const thisMonthTrueOrFalse = days > 7 && days <= 30;
            if(days == "1"){
                todaysSchedule[`Task ${i}-${j}`] = arrayToLoop[j];
                thisWeeksSchedule[`Task ${i}-${j}`] = arrayToLoop[j]
                thisMonthsSchedule[`Task ${i}-${j}`] = arrayToLoop[j];
            }
            else if(thisWeekTrueOrFalse && arrayToLoop[j].completed != "true"){
                thisWeeksSchedule[`Task ${i}-${j}`] = arrayToLoop[j]
                thisMonthsSchedule[`Task ${i}-${j}`] = arrayToLoop[j];
            }
            else if(thisMonthTrueOrFalse && arrayToLoop[j].completed != "true"){
                thisMonthsSchedule[`Task ${i}-${j}`] = arrayToLoop[j];
            }
            console.log(days)
            
    }
  

    }
}
return{storeTasks, todaysSchedule,thisWeeksSchedule,thisMonthsSchedule}



})()



