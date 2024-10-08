function taskCalendar(){

    let day = prompt("Enter a day of  week:"); 

    switch (day.toLowerCase()){
    case "monday":
        alert("Your task for Monday is: Finish your assignment.");
        break;
    case "tuesday":
        alert("Your task for Tuesday is: Finish your projects.");
        break;
    case "wednesday":
        alert("Your task for Wednesday is: Complete the project report.");
            break;
    case "thursday":
        alert("Your task for Thursday is: Finish your activities.");
        break;      
    case "friday":
        alert("Your task for Friday is: Prepare for the presentation.");
        break;
    case "saturday":
        alert("Your task for Saturday is: Finish your household chores.");
        break;
    case "sunday":
        alert("Your task for Sunday is: It's time to review.");
        break;
    default:
        alert("Invalid Input!");
    }
}