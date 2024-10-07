let day = prompt("Enter a day of  week:"); 

switch (day.toLowerCase()){
    case "monday":
        console.log("Finish your assignment!");
        break;
    case "tuesday":
        console.log("Finish your projects!");
        break;
    case "wednnesday":
        console.log("Complete the project report!");
            break;
    case "thursday":
        console.log("Finish your activities!");
        break;      
    case "friday":
        console.log("Prepare for the presentation!");
        break;
    case "saturday":
        console.log("Finish your household chores!");
        break;
    case "sunday":
        console.log("It's time to review!");
        break;
    default:
        console.log("Invalid Input!");
}