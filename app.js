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
    
    $(".nscButton").click(function() {
        var actualNSC = randomNSC();
        $(".showNSCName").html(actualNSC[0]);
        $(".showNSCGender").html(actualNSC[1]);
        $(".showNSCAge").html(actualNSC[2]);
        $(".showNSCRace").html(actualNSC[3]);
        $(".showNSCEthnie").html(actualNSC[4]);
        $(".showNSCHeight").html(actualNSC[5]);
        $(".showNSCWeight").html(actualNSC[6]);
        $(".showNSCHairColor").html(actualNSC[7]);
        $(".showNSCHairStyle").html(actualNSC[8]);
        $(".showNSCBeard").html(actualNSC[9]);
        $(".showNSCEyeColor").html(actualNSC[10]);
        
        $(".showNSCAssessories").html(actualNSC[11]);
        $(".showNSCAbnormalities").html(actualNSC[12]);
        $(".showNSCTop").html(actualNSC[13]);
        $(".showNSCPants").html(actualNSC[14]);
        $(".showNSCBoots").html(actualNSC[15]);
        
        $(".showNSCJob").html(actualNSC[16]);
        $(".showNSCHobby").html(actualNSC[17]);
        $(".showNSCReligion").html(actualNSC[18]);
        
        $(".showNSCSexuality").html(actualNSC[19]);
        $(".showNSCPersonality").html(actualNSC[20]);
        
        $(".showNSCSmoker").html(actualNSC[21]);
        $(".showNSCDrinker").html(actualNSC[22]);
        $(".showNSCAddiction").html(actualNSC[23]);
        
        $(".showNSCCyberware").html(actualNSC[24]);        
        $(".showNSCAwaken").html(actualNSC[25]);        
        $(".showNSCPreviouslyConvicted").html(actualNSC[26]);        
        
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
        "Critter",
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
        "Criminal (Syndicate)",
        "Criminal (Shadowrunner)",
        "Private Investigator",
        "Private Law Enforcment",
        "Mercenary Company",
        "Private Person",
        "Private Person (Lower-Class)",
        "Private Person (Middle-Class)",
        "Private Person (Upper-Class)",
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
        runPayment = Math.floor(Math.random() * 10) * 100 * 4;
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

    var contactRatingNumber = Math.floor(Math.random() * contactRating[appLanguage].length);
    var contactLoyalityNumber = Math.floor(Math.random() * contactLoyality[appLanguage].length);
    var contactProfessionNumber = Math.floor(Math.random() * contactProfession[appLanguage].length);
    var contactGenderNumber = Math.floor(Math.random() * contactGender[appLanguage].length);
    
    contactName = randomName(contactGenderNumber);

    Contact[appLanguage] = [
        [contactRating[appLanguage][contactRatingNumber]],
        [contactLoyality[appLanguage][contactLoyalityNumber]],
        [contactProfession[appLanguage][contactProfessionNumber]],
        [contactGender[appLanguage][contactGenderNumber]],
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
        "James",	
        "John",	
        "Robert",
        "Michael",	
        "William",	
        "Frank"
    ];

    firstName["female"] = [
        "Sarah",	
        "Linni",	
        "Susan",
        "Rose",	
        "Jeanne",	
        "Ingebork"
    ];

    lastName = [
        "Smith",
        "Johnson",	
        "Williams",	
        "Jones",	
        "Brown",	
        "Davis"
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

function randomNSC() {
    
    var NSC = [];
    
    var nscName = [];
    var nscGender = [];
    var nscAge = [];
    var nscHeight;
    var nscWeight;
    var nscStature = [];
    
    var nscHairColor = [];
    var nscHairStyle = [];
    var nscBeard = [];
    var nscEyeColor = [];
    var nscRace = [];
    var nscEthnie = [];
    var nscSexualOrientation = [];
    
    var nscAccessories = [];
    var nscTop = [];
    var nscPants = [];
    var nscBoots = [];
    
    var nscJob = [];
    var nscPersonality = [];
    var nscAbnormalities = [];
    var nscReligion = [];
    var nscHobby = [];
    
    var nscSmoker = [];
    var nscDrinker = [];
    var nscAddiction = [];
    
    var nscCyberware = [];
    var nscAwaken = [];
    var nscPreviouslyConvicted = [];
    
    var appLanguage = ($('input[name=radioLanguage]:checked', '#languageForm').val());
    
    nscHairColor['en'] = [
        "blond",
        "black",
        "brown",
        "red",
        "green",
        "white",
        "blue",
    ];
    
    nscHairStyle['en'] = [
        "long",
        "short",
        "ponytail",
        "bald head",
        "mowhawk",
        "undercut"
    ];
    
    nscBeard['en'] = [
        "none",
        "short",
        "full",
        "snauzer"
    ]
    
    nscEyeColor['en'] = [
        "blue",
        "brown",
        "green",
    ];
    
    nscRace['en'] = [
        "Human",
        "Elf",
        "Troll",
        "Ork",
        "Dwarf"
    ];
    
    nscEthnie['en'] = [
        "white",
        "black",
        "asian",
        "mexican",
        "indianer "
    ];
    
    nscEyeColor['en'] = [
        "blue",
        "brown",
        "green",
    ];
    
    nscSexualOrientation['en'] = [
        "straight",
        "gay",
        "bi",
        "none"
    ];
    
    nscAccessories['en'] = [
        "Glasses",
        "Bracelet (left Hand)",
        "Chain",
        "Ring (lift Hand)",
        "Ring (right Hand)",
    ];
    
    nscTop['en'] = [
        "Shirt",
        "Leatherjacket",
        "Hoodie",
    ];
    
    nscPants['en'] = [
        "Jeans",
        "Shorts",
        "Cargo Pants",
        "Baggy Pants"
    ];
    
    nscBoots['en'] = [
        "Sneaker",
        "Boots",
        "FlipFlop",
    ];
    
    nscJob['en'] = [
        "Policemen",
        "Firefighter",
        "Busdriver",
    ];
    
    nscPersonality['en'] = [
        "normal",
        "depressiv",
        "sadist",
        "psychopath",
    ];
    
    nscAbnormalities['en'] = [
        "Scar (Face)",
        "Scar (Head)",
        "Scar (Chest)",
        "Scar (Chest)",
        "Scar (Arm left)",
    ];
    
    nscReligion['en'] = [
        "Atheist",
        "Christian",
        "Islam"
    ];

    nscHobby['en'] = [
        "Shooting",
        "Cinema",
        "Pool Billiard",
    ];
    
    nscPreviouslyConvicted['en'] = [
        "No",
        "Smuggling",
        "Illegal Weapons",
        "Drugs",
        "Grand Theft"
    ]
    
    nscAddiction["en"] = [
        "none",
        "Alcohol",
        "Drugs",
        "BTL-Chips",
        "Gambling"
    ]
    
    nscSmoker["en"] = [
        "No",
        "Yes"
    ]
    
    nscDrinker["en"] = [
        "No",
        "Yes"
    ]
    
    nscAwaken["en"] = [
        "No",
        "Yes"
    ]
    
    nscCyberware["en"] = [
        "none",
        "Left Arm",
        "Left Leg",
        "Right Arm",
        "Right Leg",
        "Left Arm"
    ]; 

    
    nscName = "Frank Hauffe";
    
    var nscRaceNumber = Math.floor(Math.random() * nscRace[appLanguage].length);
    
   
    
    nscHeight = Math.floor(Math.random() * (220 - 120) + 120);
    nscWeight = Math.floor(Math.random() * (200 - 50) + 50);
    nscAge = Math.floor(Math.random() * (100 - 18) + 18);
    
     if(nscRace[appLanguage][nscRaceNumber] == "Troll") {
        nscHeight = Math.floor(Math.random() * (300 - 200) + 200);
        nscWeight = Math.floor(Math.random() * (400 - 150) + 150);
        nscAge = Math.floor(Math.random() * (55 - 18) + 18);
     }
    
    if(nscRace[appLanguage][nscRaceNumber] == "Dwarf") {
        nscHeight = Math.floor(Math.random() * (160 - 120) + 120);
        nscWeight = Math.floor(Math.random() * (150 - 50) + 50);
        nscAge = Math.floor(Math.random() * (150 - 18) + 18);
     } 
        
    nscGender[appLanguage] = "male";
    
    
    
     var nscHairColorNumber = Math.floor(Math.random() * nscHairColor[appLanguage].length);
     var nscHairStyleNumber = Math.floor(Math.random() * nscHairStyle[appLanguage].length);
    
    if(nscGender[appLanguage] == "male") {
        var nscBeardNumber = Math.floor(Math.random() * nscBeard[appLanguage].length);
    } else {
        nscBeardNumber = 0;
    }
    
    var sexualityCheck = (Math.floor(Math.random() * 10));
    if(sexualityCheck < 7) {
         var nscSexualOrientationNumber = 0;
    }else{
        var nscSexualOrientationNumber = Math.floor(Math.random() * nscSexualOrientation[appLanguage].length);
    }
    
    var personalityCheck = (Math.floor(Math.random() * 10));
    if(personalityCheck < 7) {
        nscPersonalityNumber = 0;
    }else{
        nscPersonalityNumber = Math.floor(Math.random() * nscPersonality[appLanguage].length);
    }
    
    var drinkerCheck = (Math.floor(Math.random() * 10));
    if(drinkerCheck < 4) {
        nscDrinkerNumber = 0;
    }else{
        nscDrinkerNumber = 1;
    }
    
    var smokerCheck = (Math.floor(Math.random() * 10));
    if(smokerCheck < 5) {
        nscSmokerNumber = 0;
    }else{
        nscSmokerNumber = 1;
    }
        
    var addictionCheck = (Math.floor(Math.random() * 10));
    if(drinkerCheck < 7) {
        var nscAddictionNumber = 0;
    }else{
        var nscAddictionNumber = Math.floor(Math.random() * nscAddiction[appLanguage].length);
    }
     
    var cyberwareCheck = (Math.floor(Math.random() * 10));
    if(cyberwareCheck < 6) {
        var nscCyberwareNumber = 0;
    }else{
        var nscCyberwareNumber = Math.floor(Math.random() * nscAddiction[appLanguage].length);
    }
    
    var awakenCheck = (Math.floor(Math.random() * 100000));
    if(awakenCheck == 100000) {
        var nscAwakenNumber = 1;
    }else{
        var nscAwakenNumber = 0;
    }
    
    var policeRecordCheck = (Math.floor(Math.random() * 10));
    if(policeRecordCheck < 7) {
        var nscPreviouslyConvictedNumber = 0;
    }else{
        var nscPreviouslyConvictedNumber = Math.floor(Math.random() * nscAddiction[appLanguage].length);
    }
    
     var nscRaceNumber = Math.floor(Math.random() * nscRace[appLanguage].length);
     var nscEyeColorNumber = Math.floor(Math.random() * nscEyeColor[appLanguage].length);
     var nscEthnieNumber = Math.floor(Math.random() * nscEthnie[appLanguage].length);
    
     var nscAccessoriesNumber = Math.floor(Math.random() * nscAccessories[appLanguage].length);
     var nscTopNumber = Math.floor(Math.random() * nscTop[appLanguage].length);
     var nscPantsNumber = Math.floor(Math.random() * nscPants[appLanguage].length);
     var nscBootsNumber = Math.floor(Math.random() * nscBoots[appLanguage].length);
     
     var nscJobNumber = Math.floor(Math.random() * nscJob[appLanguage].length);
    
     var nscAbnormalitiesNumber = Math.floor(Math.random() * nscAbnormalities[appLanguage].length);
     var nscReligionNumber = Math.floor(Math.random() * nscReligion[appLanguage].length);
     var nscHobbyNumber = Math.floor(Math.random() * nscHobby[appLanguage].length);
     
    var nscPreviouslyConvictedNumber = Math.floor(Math.random() * nscPreviouslyConvicted[appLanguage].length);
    

    
    NSC[appLanguage] = [
        [nscName],
        [nscGender],
        [nscAge],
        [nscRace[appLanguage][nscRaceNumber]],
        [nscEthnie[appLanguage][nscEthnieNumber]],
        [nscHeight],
        [nscWeight],
        [nscHairColor[appLanguage][nscHairColorNumber]],
        [nscHairStyle[appLanguage][nscHairStyleNumber]],
        [nscBeard[appLanguage][nscBeardNumber]],
        [nscEyeColor[appLanguage][nscEyeColorNumber]],
        
        [nscAccessories[appLanguage][nscAccessoriesNumber]],
        [nscAbnormalities[appLanguage][nscAbnormalitiesNumber]],
        [nscTop[appLanguage][nscTopNumber]],
        [nscPants[appLanguage][nscPantsNumber]],
        [nscBoots[appLanguage][nscBootsNumber]],
        
        [nscJob[appLanguage][nscJobNumber]],
        [nscHobby[appLanguage][nscHobbyNumber]],
        [nscReligion[appLanguage][nscReligionNumber]],
        
        [nscSexualOrientation[appLanguage][nscSexualOrientationNumber]],
        [nscPersonality[appLanguage][nscPersonalityNumber]],
        
        [nscSmoker[appLanguage][nscSmokerNumber]],
        [nscDrinker[appLanguage][nscDrinkerNumber]],
        [nscAddiction[appLanguage][nscAddictionNumber]],
        
        [nscCyberware[appLanguage][nscCyberwareNumber]],
        [nscAwaken[appLanguage][nscAwakenNumber]],
        [nscPreviouslyConvicted[appLanguage][nscPreviouslyConvictedNumber]],
    ];
    
    return NSC[appLanguage];
}
