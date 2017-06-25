$(document).ready(function() {
   $(".eventButton").click(function() {
       var appLanguage = ($('input[name=radioLanguage]:checked', '#languageForm').val());
       if(appLanguage == "en") {
           $(".showEvent").html(randomEvent());
       }
     
   });
});

function randomEvent() {
    var events = {};
    var events = [
        "Gang drive-by shooting",
        "Person screaming for help in an alley, getting mugged",
        "Person screaming for help in an alley, it's a trap!",
        "Fire alarm in the building, false alarm",
        "Fire alarm in the building, actual fire, people need help",
        "Fire alarm in the building, distraction for a Shadowrun",
        "Someone tries to pickpocket a PC",
        "Someone chats up a PC, attempts to flirt with them",
        "Someone chats up a PC, recognises them",
        "Someone chats up a PC, thinks he recognised them",
        "Hobo asks for money",
        "EXPLOSION! Hardware malfunction in a StufferShack kitchen",
        "EXPLOSION! [Building down the street] is getting hit by a Run",
        "Random Knight Errant check! Let's hope no one is carrying illegal guns",
        "Kid bumps into PCs, is running away from some dangerous-looking dudes",
        "Car crash. 1d100 to determine how bad it is",
        "PC's allergies/addictions/dependants start acting up",
        "A contact calls, casually checking in. Only possible if PC has 'friendly' contacts.",
        "A contact calls, they're in trouble!",
        "Thor shot right on the PCs' faces (aka rocks fall, everyone dies)"
    ];
    
    var eventNumber = Math.floor(Math.random() * events.length);
    
    return (events[eventNumber]);
}