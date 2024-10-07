let day = prompt("Enter a day of  week:"); 

switch (day.toLowerCase()){
    case "monday":
        console.log("Your task for Monday is: Finish your assignment.");
        break;
    case "tuesday":
        console.log("Your task for Tuesday is: Finish your projects.");
        break;
    case "wednesday":
        console.log("Your task for Wednesday is: Complete the project report.");
            break;
    case "thursday":
        console.log("Your task for Thursday is: Finish your activities.");
        break;      
    case "friday":
        console.log("Your task for Friday is: Prepare for the presentation.");
        break;
    case "saturday":
        console.log("Your task for Saturday is: Finish your household chores.");
        break;
    case "sunday":
        console.log("Your task for Sunday is: It's time to review.");
        break;
    default:
        console.log("Invalid Input!");
}