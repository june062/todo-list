export {generatePermanentDOM, todayButton,thisWeekButton,thisMonthButton,newProjectButton,titleHeader}



let todayButton = document.createElement("button"); 
let thisWeekButton = document.createElement("button");
let thisMonthButton = document.createElement("button");
let newProjectButton = document.createElement("button");
let titleHeader = document.createElement("h1")

function generatePermanentDOM(){
    let body = document.querySelector("body");

    let sidebarDiv = document.createElement("div");
        sidebarDiv.classList.add("sidebar");
            todayButton.classList.add("today")
            todayButton.textContent = "Today";

            thisWeekButton.classList.add("this-week");
            thisWeekButton.textContent = "This Week";

            thisMonthButton.classList.add("this-month");
            thisMonthButton.textContent = "This Month";

            newProjectButton.classList.add("new-project");
            newProjectButton.textContent = "New Project";

    sidebarDiv.append(todayButton,thisWeekButton,thisMonthButton,newProjectButton);


    let titleContainer = document.createElement("div");
        titleContainer.classList.add("title-container");
            titleHeader.textContent= "Today"

    titleContainer.appendChild(titleHeader);

    let mainContainer = document.createElement("div");
        mainContainer.classList.add("main-container");

    body.append(sidebarDiv,titleContainer,mainContainer)

}