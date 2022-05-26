import react from "react"

function Heading(){
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

    return(
    <h1 className = "heading" style = {customColor}>{greeting}</h1>
    );

}

export default Heading;