//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import react from "react";
import reactDOM from "react-dom";
const date = new Date();

let greeting = "";
let customColor={
    color: "black"
};

let timeOfDay = date.getHours();

if(timeOfDay<12){
    greeting = "Good Morning";
    customColor.color="green";
}
else if(timeOfDay<=18){
    greeting = "Good Afternoon";
    customColor.color="blue";
}
else{
    greeting = "Good Evening";
    customColor.color="red";
}

reactDOM.render(
    
        <h1 className = "heading" style = {customColor}>{greeting}</h1>,document.getElementById("root"));