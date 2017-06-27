$(document).ready(function() {
    ($('input[type=radio][name=radioLanguage]').change(function () {
        if(($('input[name=radioLanguage]:checked', '#languageForm').val()) == "de") {

            /* Buttons German */

            $(".runButton").html("Run generieren");
            $(".eventButton").html("Event generieren");
            $(".contactButton").html("Kontakt generieren");
            $(".nameButton").html("Namen generieren");

            /* Labels German */

            $(".runType").html("Typ:  ");
            $(".runPayment").html("Bezahlung: ");
            $(".runEmployer").html("Auftraggeber: ");
            $(".runTarget").html("Auftragsziel: ");
            $(".runComplications").html("Komplikationen: ");

        } else if(($('input[name=radioLanguage]:checked', '#languageForm').val()) == "en") {

            /* Buttons English */

            $(".runButton").html("Generate Run");
            $(".eventButton").html("Generate Event");
            $(".contactButton").html("Generate Contact");
            $(".nameButton").html("Generate Name");

            /* Labels English */

            $(".runType").html("Type: ");
            $(".runPayment").html("Payment: ");
            $(".runEmployer").html("Employer: ");
            $(".runTarget").html("Target: ");
            $(".runComplications").html("Complications: ");


        }
    }));

    $(".eventButton").click(function() {
        $(".showEvent").html(randomEvent());
    });

    $(".runButton").click(function() {
        var actualRun = randomRun();
        $(".showRunType").html(actualRun[0]);
        $(".showRunPayment").html(actualRun[1]);
        $(".showRunEmployer").html(actualRun[2]);
        $(".showRunTarget").html(actualRun[3]);
        $(".showRunComplication1").html(actualRun[4]);
        $(".showRunComplication2").html(actualRun[5]);
        $(".showRunComplication3").html(actualRun[6]);
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
        "Courier",
        "Datasteal",
        "Destruction",
        "Distraction",
        "Encryption",
        "Enforcment",
        "Hacking",
        "Hoax",
        "Investigation",
        "Plant",
        "Retrieval",
        "Security",
        "Smuggling",
        "Tailchaser",
        "War",
        "Wild Things"
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
        "Government (Utility/Service)",
        "Government (Gvmt Office)",
        "Government (Policlub)",
        "Government (Military)",
        "Government (Hospital)",
        "Government (Law Enforcement)",
        "Shadowrunner",
        "Private Person",
        "Major Corporate (AAA: Novatech)",
        "Major Corporate (AAA: Ares Macrotechnology)",
        "Major Corporate (AAA: Shiawase Corporation)",
        "Major Corporate (AAA: Cross Applied Technologies)",
        "Major Corporate (AAA: Yamatetsu)",
        "Major Corporate (AAA: Mitsuhama Computer Technologies)",
        "Major Corporate (AAA: Wuxing Inc)",
        "Major Corporate (AAA: Saeder-Krupp Heavy Industries)",
        "Minor Corporate (A Corp)",
        "Minor Corporate (B Corp)",
        "Minor Corporate (Local Corp)",
        "Criminal (Gang)",
        "Criminal (Shadowrunner)",
        "Private Investigator",
        "Private Law Enforcment",
        "Mercenary Company",
        "Private (Lower-Class)",
        "Private (Middle-Class)",
        "Private (Upper-Class)",
        "Other (Cult/Conspiracy/Insect Spirits)",
        "Other (Magical Threat)",
        "Other (Contact/Friend of a Friend)",
        "Other (Mysterious Stranger)",
        "Other (Something Really Weird)",
        "Other (Dragon/Critters)",
        "Other (Enemy Interference)",
        "Other (Contact/Friend of a Friend)",
        "Location (Syndicate Turf)",
        "Location (Gang Turf),"

    ];

    runEmployer["de"] = [
        "Regierung",
        "Shadowrunner",
        "Private Person"
    ];

    runTarget["en"] = runEmployer["en"];

    runTarget["de"] = runEmployer["de"];

    runComplications["en"] = [
        "Weather (Blizzard)",
        "Weather (Heatwave)",
        "Weather (Thunderstorm)",
        "Weather (Light Rain)",
        "Weather (Heavy Rain)",
        "Weather (Fog)",
        "Weather (High Winds)",
        "Gangwar",
        "Criminal (Vandalism)",
        "Security (Security Rigger)",
        "Transportation (Must use different form)",
        "Transportation (Delays)",
        "Transportation (Detour)",
        "Transportation (Another City)",
        "Transportation (Other Land)",
        "Transportation (Other Continent)",
        "Transportation (Gang Attack)",
        "Transportation (Vehicle Breakdown)",
        "Security (Guard Creatures)",
        "Security (Heightened Security)",
        "Security (Cybered Guard Creatures)",
        "Security (Security Mage)",
        "Security (Security Decker)",
        "Criminal (Runners On-site - Different Goal)",
        "Criminal (Runners On-site - Same Goal)",
        "Criminal (Gang Raid)",
        "Criminal (Recent Activity)",
        "Criminal (Protests/Riots)",
        "Other (Other Obligations)",
        "Other (Critter Infestation",
        "Other (Screwjob)",
        "Other (Hunted Interference)",
        "Other (Conflicting Jobs)"
    ];

    runComplications["de"] = [
        "Wetter (Schwerer Sturm)",
        "Wetter (Hitzewelle)",
        "Bandenkrieg"
    ];

    var paymentCheck = (Math.floor(Math.random() * 10));
    if(paymentCheck < 8){
        runPayment = Math.floor(Math.random() * 10) * 1000 * Math.floor(Math.random() * 10);
        if(runPayment == 0) {
            runPayment = "5000";
        }
        runPayment += " &#165;";
    }else{
        runPayment = Math.floor(Math.random() * 10) * 100 * 2;
        if(runPayment == 0) {
            runPayment = 750;
        }
        days = Math.floor(Math.random() * 14)
        
        if(days == 0){
            days = 5;
        }
        runPayment += "&#165; per Day for ";
        runPayment += days;
        runPayment += " days";
    }


    var appLanguage = ($('input[name=radioLanguage]:checked', '#languageForm').val());

    var runTypeNumber = Math.floor(Math.random() * runType[appLanguage].length);
    var runEmployerNumber = Math.floor(Math.random() * runEmployer[appLanguage].length);
    var runTargetNumber = Math.floor(Math.random() * runTarget[appLanguage].length);
    var runComplicationsNumber1 = Math.floor(Math.random() * runComplications[appLanguage].length);
    var runComplicationsNumber2 = Math.floor(Math.random() * runComplications[appLanguage].length);
    var runComplicationsNumber3 = Math.floor(Math.random() * runComplications[appLanguage].length);

    Run[appLanguage] = [
        [runType[appLanguage][runTypeNumber]],
        [runPayment],
        [runEmployer[appLanguage][runEmployerNumber]],
        [runTarget[appLanguage][runTargetNumber]],
        [runComplications[appLanguage][runComplicationsNumber1]],
        [runComplications[appLanguage][runComplicationsNumber2]],
        [runComplications[appLanguage][runComplicationsNumber3]],
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

