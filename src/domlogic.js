export function generatePermanentDOM(){
    let body = document.querySelector("body");

    let sidebarDiv = document.createElement("div");
        sidebarDiv.classList.add("sidebar");
        let todayButton = document.createElement("button"); 
            todayButton.classList.add("today")
            todayButton.textContent = "Today";

        let thisWeekButton = document.createElement("button");
            thisWeekButton.classList.add("this-week");
            thisWeekButton.textContent = "This Week";

        let thisMonthButton = document.createElement("button");
            thisMonthButton.classList.add("this-month");
            thisMonthButton.textContent = "This Month";

        let newProjectButton = document.createElement("button");
            newProjectButton.classList.add("new-project");
            newProjectButton.textContent = "New Project";

    sidebarDiv.append(todayButton,thisWeekButton,thisMonthButton,newProjectButton);


    let titleContainer = document.createElement("div");
        titleContainer.classList.add("title-container");
        let titleHeader = document.createElement("h1")
            titleHeader.textContent= "Today"

    titleContainer.appendChild(titleHeader);

    body.append(sidebarDiv,titleContainer)

}