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

    $(".contactButton").click(function() {
        var actualContact = randomContact();
        $(".showContactRating").html(actualContact[0]);
        $(".showContactLoyality").html(actualContact[1]);
        $(".showContactProfession").html(actualContact[2]);
        $(".showContactGender").html(actualContact[3]);
        $(".showContactName").html(actualContact[4]);
    });

    $(".nameButton").click(function() {
        var actualName = randomName();
        $(".showMaleName").html(actualName);
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

    runType["de"] = [
        "Ablenkung",
        "Attentat",
        "Critter",
        "Datendiebstahl",
        "Einschleusen",
        "Einschüchterung",
        "Erpressung",
        "Extraktion",
        "Krieg",
        "Kurier/Schmuggel",
        "Leibwache",
        "Nachforschungen",
        "Sicherheit",
        "Tailchaser",
        "Täuschung/Fälschung",
        "Ver- und Entschlüsselung",
        "Wiederbeschaffung",
        "Zerstörung"
    ]

    runEmployer["en"] = [
        "Government",
        "Shadowrunner",
        "Private Person"
    ];

    runEmployer["de"] = [
        "Regierung",
        "Shadowrunner",
        "Private Person"
    ];

    runTarget["en"] = [
        "Major Corporate (AA Corp)",
        "Crime Syndicate",
        "Hospital"
    ];

    runTarget["de"] = [
        "Großunternehmen (AA Konzern)",
        "Verbrecher Syndikat",
        "Krankenhaus"
    ];

    runComplications["en"] = [
        "Weather (Blizzard)",
        "Weather (Heatwave)",
        "Gangwar"
    ];

    runComplications["de"] = [
        "Wetter (Schwerer Sturm)",
        "Wetter (Hitzewelle)",
        "Bandenkrieg"
    ];

    runPayment = Math.floor(Math.random() * 10) * 1000 * Math.floor(Math.random() * 10);

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

function randomContact() {

    var Contact = {};
    var contactRating = {};
    var contactLoyality = {};
    var contactProfession = {};
    var contactGender = {};
    var contactName = "";

    var appLanguage = ($('input[name=radioLanguage]:checked', '#languageForm').val());

    contactRating["en"] = [
        "1 Virtually no social influence; useful only for their Knowledge skills.",
        "2 Has one or two friends with some Knowledge skills, or some minor social influence.",
        "3 Has a few friends, but not a lot of social influence.",
        "4 Knows several people in a neighborhood; a borough mayor or a gang leader.",
        "5 Knows several people and has a moderate degree of social influence; a city councilman or a low-level executive it a small-to-medium corporation.",
        "6 Known and connected across his state; a city/sprawl mayor or governor, notable fixer, or a mid-level executive in a medium-sized corporation.",
        "7 Knows a lot of people over a large area, and has considerable social influence; often holds a leadership position in a national corporation.",
        "8 Well-connected across a multi-state region; an executive in a state government or a national corporation.",
        "9 Well-connected on his own continent, with considerable social influence; a mid-level executive in a small national government or AA megacorporation.",
        "10 Well-connected worldwide, with significant social influence; a senior executive in a small national government or a AA megacorporation.",
        "11 Extremely well-connected worldwide, with significant social influence; mid-level executive position in a major national government or AAA megacorporation.",
        "12 Global power-player with extensive social influence; holds a key executive position in a major national government or AAA megacorporation."
    ];

    contactRating["de"] = [
        "1 ",
        "2 ",
        "3 ",
        "4 Knows several people in a neighborhood; a borough mayor or a gang leader.",
        "5 Knows several people and has a moderate degree of social influence; a city councilman or a low-level executive it a small-to-medium corporation.",
        "6 Known and connected across his state; a city/sprawl mayor or governor, notable fixer, or a mid-level executive in a medium-sized corporation.",
        "7 Knows a lot of people over a large area, and has considerable social influence; often holds a leadership position in a national corporation.",
        "8 Well-connected across a multi-state region; an executive in a state government or a national corporation.",
        "9 Well-connected on his own continent, with considerable social influence; a mid-level executive in a small national government or AA megacorporation.",
        "10 Well-connected worldwide, with significant social influence; a senior executive in a small national government or a AA megacorporation.",
        "11 Extremely well-connected worldwide, with significant social influence; mid-level executive position in a major national government or AAA megacorporation.",
        "12 Global power-player with extensive social influence; holds a key executive position in a major national government or AAA megacorporation."
    ];

    contactLoyality["en"] = [
        "1 Just Biz. The relationship is purely mercenary, based solely on economics. The people involved may not even like each other, and they won’t offer any sort of preferential treatment.",
        "2 Regular. The relationship is still all business, but the parties treat each other with a modicum of mutual respect.",
        "3 Acquaintance. The people in the relationship are friendly, but calling them actual friends might be stretching it. The contact is willing to be inconvenienced in small ways for the character but won’t take fall for him.",
        "4 Buddy. There’s actual friendship here, or at least solid mutual respect. The contact will go out of his way for the character if needed.",
        "5 Got Your Back. The parties know and trust each other, and have for some time. The contact will back the character even in risky situations.",
        "6 Friend for Life. The contact and character will go to the wall for each other, if that’s what it takes."
    ];

    contactLoyality["de"] = [
        "1 ",
        "2 ",
        "3  might be stretching it. The contact is willing to be inconvenienced in small ways for the character but won’t take fall for him.",
        "4 Buddy. There’s actual friendship here, or at least solid mutual respect. The contact will go out of his way for the character if needed.",
        "5 Got Your Back. The parties know and trust each other, and have for some time. The contact will back the character even in risky situations.",
        "6 Friend for Life. The contact and character will go to the wall for each other, if that’s what it takes."
    ];


    contactProfession["en"] = [
        "Ancients lieutenant",
        "Ancients member",
        "Drug dealer",
        "Talismonger",
        "Street doc"
    ];

    contactProfession["de"] = [
        "Ancients Anführer",
        "Ancients Mitglied",
        "Drogendealer",
        "Talismanhändler",
        "Straßendoktor"
    ];

    contactGender["en"] = [
        "male",
        "female"
    ];

    contactGender["de"] = [
        "männlich",
        "weiblich"
    ];

    contactName = randomName(contactGender);

    var contactRatingNumber = Math.floor(Math.random() * contactRating[appLanguage].length);
    var contactLoyalityNumber = Math.floor(Math.random() * contactLoyality[appLanguage].length);
    var contactProfessionNumber = Math.floor(Math.random() * contactProfession[appLanguage].length);
    var contactGenderNumber = Math.floor(Math.random() * contactGender.length);

    Contact[appLanguage] = [
        [contactRating[appLanguage][contactRatingNumber]],
        [contactLoyality[appLanguage][contactLoyalityNumber]],
        [contactProfession[appLanguage][contactProfessionNumber]],
        [contactGender[contactGenderNumber]],
        [contactName]
    ];

    return (Contact[appLanguage]);
}

function randomName(gender = "") {
    var firstName = {};
    var lastName = {};

    if(gender == false) { 
        gender = ($('input[name=radioGender]:checked', '#genderForm').val());
    } else {
        gender = [
            "male",
            "female"
        ]
    }

    firstName["male"] = [
        "JAMES",	
        "JOHN",	
        "ROBERT",
        "MICHAEL",	
        "WILLIAM",	
        "FRANK"
    ];

    firstName["female"] = [
        "SARAH",	
        "LINNI",	
        "SUSAN",
        "ROSE",	
        "JEANNE",	
        "INGEBORK"
    ];

    lastName = [
        "SMITH",
        "JOHNSON",	
        "WILLIAMS",	
        "JONES",	
        "BROWN",	
        "DAVIS"
    ];

    if(Array.isArray(gender)) {
        var genderNumber = Math.floor(Math.random() * gender.length);
        var gender = gender[genderNumber];

        var firstNameNumber = Math.floor(Math.random() *firstName[gender].length);
        var lastNameNumber = Math.floor(Math.random() * lastName.length);
    } else {
        var firstNameNumber = Math.floor(Math.random() * firstName[gender].length);
        var lastNameNumber = Math.floor(Math.random() * lastName.length);
    }

    return (firstName[gender][firstNameNumber] + " " + lastName[lastNameNumber]);
}

