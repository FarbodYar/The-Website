/*jslint white: true, continue: true, plusplus: true, sloppy: true*/
var Name = document.getElementById("Description");
var MyName = "I'M A CIVIL-GEOTECHNICAL ENGINEER WHO IS ALSO INTERESTED IN WEB DEVELOPMENT AND PROGRAMMING. WANNA KNOW MORE?";
var i = 0;
var lengthOfMyName = MyName.length;
var intervalHandler;


function TypingMyName() {
    "use strict";
    if (i < lengthOfMyName) {
        Name.innerHTML = Name.innerHTML + MyName[i];
        i++;
    } else {
        clearInterval(intervalHandler);
        
    }
}

intervalHandler = setInterval(TypingMyName,70);

