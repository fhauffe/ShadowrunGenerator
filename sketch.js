$(document).ready(function() {
    $(".eventButton").click(function() {
        $(".showEvent").html(randomEvent());
    });
    
    $(".runButton").click(function() {
        var actualRun = randomRun();
        $(".showRunType").html(actualRun[0]);
        $(".showRunPayment").html(actualRun[1]);
        $(".showRunEmployer").html(actualRun[2]);
        $(".showRunTarget").html(actualRun[3]);
        $(".showRunComplication").html(actualRun[4]);
    });
});

function randomEvent() {

    var events = {};

    events["en"] = [
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

    events["de"] = [
        "Eine Katze fällt vom Baum",
        "Vlad ruft an!"    
    ];

    var appLanguage = ($('input[name=radioLanguage]:checked', '#languageForm').val());
    var eventNumber = Math.floor(Math.random() * events[appLanguage].length);

    return (events[appLanguage][eventNumber]);
}

function randomRun() {

    var Run = {};
    var runType = {};
    var runPayment;
    var runEmployer = {};
    var runTarget = {};
    var runComplications = {};

    runType["en"] = [
        "Assasination",
        "Blackmail",
        "Bodyguard",
        "Burglary",
        "Counterfeit",
        "Courier"
    ];
    
    runEmployer["en"] = [
        "Government",
        "Shadowrunner",
        "Private Person"
    ];
    
    runTarget["en"] = [
        "Major Corporate (AA Corp)",
        "Crime Syndicate",
        "Hospital"
    ]
    
    runComplications["en"] = [
        "Weather (Blizzard)",
        "Weather (Heatwave)",
        "Gangwar"
    ]

    runPayment = Math.floor(Math.random() * 10000);

    var appLanguage = ($('input[name=radioLanguage]:checked', '#languageForm').val());
    
    var runTypeNumber = Math.floor(Math.random() * runType[appLanguage].length);
    var runEmployerNumber = Math.floor(Math.random() * runEmployer[appLanguage].length);
    var runTargetNumber = Math.floor(Math.random() * runTarget[appLanguage].length);
    var runComplicationsNumber = Math.floor(Math.random() * runComplications[appLanguage].length);

    Run[appLanguage] = [
        [runType[appLanguage][runTypeNumber]],
        [runPayment],
        [runEmployer[appLanguage][runEmployerNumber]],
        [runTarget[appLanguage][runTargetNumber]],
        [runComplications[appLanguage][runComplicationsNumber]],
    ] 
    
    return (Run[appLanguage]);
}