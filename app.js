$(document).ready(function() {
    ($('input[type=radio][name=radioLanguage]').change(function () {
        if(($('input[name=radioLanguage]:checked', '#languageForm').val()) == "de") {

            /* Buttons German */

            $(".languageFlagEnglish").html("Englisch");
            $(".languageFlagGerman").html("Deutsch");

            $(".genderFemale").html("Weiblich");
            $(".genderMale").html("Männlich");

            $(".runButton").html("Run generieren");
            $(".eventButton").html("Event generieren");
            $(".contactButton").html("Kontakt generieren");
            $(".nameButton").html("Namen generieren");
            $(".locationButton").html("Ort generieren");

            /* Labels German */

            $(".runType").html("Typ:  ");
            $(".runPayment").html("Bezahlung: ");
            $(".runEmployer").html("Auftraggeber: ");
            $(".runTarget").html("Auftragsziel: ");
            $(".runComplications").html("Komplikationen: ");

            $(".nscName").html("Name: ");
            $(".nscGender").html("Geschlecht: ");
            $(".nscAge").html("Alter: ");
            $(".nscRace").html("Metatyp: ");
            $(".nscEthnie").html("Ethnische Zugehörigkeit: ");
            $(".nscHeight").html("Größe: ");
            $(".nscWeight").html("Gewicht: ");
            $(".nscHairColor").html("Haarfarbe: ");
            $(".nscHairStyle").html("Frisur: ");
            $(".nscBeard").html("Bart: ");
            $(".nscEyeColor").html("Augenfarbe: ");
            $(".nscAccessories").html("Assessoirs: ");
            $(".nscAbnormalities").html("Besonderheiten: ");
            $(".nscClothStyle").html("Kleidungsstil: ");
            $(".nscJob").html("Beruf: ");
            $(".nscHobby").html("Hobby: ");
            $(".nscReligion").html("Religion: ");
            $(".nscSexuality").html("Sexuelle Orientierung: ");
            $(".nscPersonality").html("Persönlichkeit: ");
            $(".nscSmoker").html("Raucher: ");
            $(".nscDrinker").html("Trinker: ");
            $(".nscAddiction").html("Sucht: ");
            $(".nscCyberware").html("Cyberware: ");
            $(".nscAwaken").html("Erwacht: ");
            $(".nscPreviouslyConvicted").html("Vorstrafen: ");

            $(".contactRating").html("Einfluss: ");
            $(".contactLoyality").html("Loyalität: ");
            $(".contactProfession").html("Beruf: ");
            $(".contactGender").html("Geschlecht: ");
            $(".contactName").html("Name: ");
            $(".contactMetaType").html("Metatyp: ");


            $(".locationCity").html("Stadt: ");
            $(".locationDistrict").html("Stadtteil: ");
            $(".locationPlace").html("Ort: ");


        } else if(($('input[name=radioLanguage]:checked', '#languageForm').val()) == "en") {

            /* Buttons English */

            $(".languageFlagEnglish").html("English");
            $(".languageFlagGerman").html("German");

            $(".genderFemale").html("Female");
            $(".genderMale").html("Male");

            $(".runButton").html("Generate Run");
            $(".eventButton").html("Generate Event");
            $(".contactButton").html("Generate Contact");
            $(".nameButton").html("Generate Name");
            $(".locationButton").html("Generate Location");

            /* Labels English */

            $(".runType").html("Type: ");
            $(".runPayment").html("Payment: ");
            $(".runEmployer").html("Employer: ");
            $(".runTarget").html("Target: ");
            $(".runComplications").html("Complications: ");

            $(".nscName").html("Name: ");
            $(".nscGender").html("Gender: ");
            $(".nscAge").html("Age: ");
            $(".nscRace").html("Metatyp: ");
            $(".nscEthnie").html("Ethnic Origins: ");
            $(".nscHeight").html("Height: ");
            $(".nscWeight").html("Weight: ");
            $(".nscHairColor").html("Hair color: ");
            $(".nscHairStyle").html("Hair style: ");
            $(".nscBeard").html("Beard: ");
            $(".nscEyeColor").html("Eye color: ");
            $(".nscAccessories").html("Assessoirs: ");
            $(".nscAbnormalities").html("Abnormalities: ");
            $(".nscClothStyle").html("Cloth style: ");
            $(".nscJob").html("Job: ");
            $(".nscHobby").html("Hobby: ");
            $(".nscReligion").html("Religion: ");
            $(".nscSexuality").html("Sexuell Oriantation ");
            $(".nscPersonality").html("Personality: ");
            $(".nscSmoker").html("Smoker: ");
            $(".nscDrinker").html("Drinker: ");
            $(".nscAddiction").html("Addiction: ");
            $(".nscCyberware").html("Cyberware: ");
            $(".nscAwaken").html("Awaken: ");
            $(".nscPreviouslyConvicted").html("Previously convicted: ");

            $(".contactRating").html("Rating: ");
            $(".contactLoyality").html("Loyality: ");
            $(".contactProfession").html("Profession: ");
            $(".contactGender").html("Gender: ");
            $(".contactName").html("Name: ");
            $(".contactMetaType").html("Meta type: ");

            $(".locationCity").html("City: ");
            $(".locationDistrict").html("District: ");
            $(".locationPlace").html("Place: ");


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
        $(".showRunMeetingPlace").html(actualRun[3]);
        $(".showRunTarget").html(actualRun[4]);
        $(".showRunComplication1").html(actualRun[5]);
        $(".showRunComplication2").html(actualRun[6]);
        $(".showRunComplication3").html(actualRun[7]);
    });

    $(".contactButton").click(function() {
        var actualContact = randomContact();
        $(".showContactRating").html(actualContact[0]);
        $(".showContactLoyality").html(actualContact[1]);
        $(".showContactProfession").html(actualContact[2]);
        $(".showContactGender").html(actualContact[3]);
        $(".showContactName").html(actualContact[4]);
        $(".showContactMetaType").html(actualContact[5]);
    });

    $(".nameButton").click(function() {
        var actualName = randomName();
        $(".showName").html(actualName);
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
        $(".showNSCClothStyle").html(actualNSC[13]);

        $(".showNSCJob").html(actualNSC[14]);
        $(".showNSCHobby").html(actualNSC[15]);
        $(".showNSCReligion").html(actualNSC[16]);

        $(".showNSCSexuality").html(actualNSC[17]);
        $(".showNSCPersonality").html(actualNSC[18]);

        $(".showNSCSmoker").html(actualNSC[19]);
        $(".showNSCDrinker").html(actualNSC[20]);
        $(".showNSCAddiction").html(actualNSC[21]);

        $(".showNSCCyberware").html(actualNSC[22]);        
        $(".showNSCAwaken").html(actualNSC[23]);        
        $(".showNSCPreviouslyConvicted").html(actualNSC[24]);        

    });

    $(".locationButton").click(function() {
        var actualLocation = randomLocation();
        $(".showLocationCity").html(actualLocation[0]);
        $(".showLocationDistrict").html(actualLocation[1]);
        $(".showLocationPlace").html(actualLocation[2]);
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
    var runMeetingPlace = "";
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
        "Mr. Johnson",
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
        "Other (Enemy Interference)",
        "Other (Contact/Friend of a Friend)",
        "Location (Syndicate Turf)",
        "Location (Gang Turf),"

    ];

    runEmployer["de"] = [
        "Herr Schmidt",
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

    var appLanguage = ($('input[name=radioLanguage]:checked', '#languageForm').val());

    var runTypeNumber = Math.floor(Math.random() * runType[appLanguage].length);

    var runEmployerCheck = Math.floor(Math.random() * 10);
    if(runEmployerCheck < 5) {
        var runEmployerNumber = 0
        } else {
            var runEmployerNumber = Math.floor(Math.random() * runEmployer[appLanguage].length);
            if(runEmployerNumber == 0) {
                runEmployerNumber = 1
            }
        }

    var runMeetingPlace = randomLocation();

    var runTargetNumber = Math.floor(Math.random() * runTarget[appLanguage].length);
    var runComplicationsNumber1 = Math.floor(Math.random() * runComplications[appLanguage].length);
    var runComplicationsNumber2 = Math.floor(Math.random() * runComplications[appLanguage].length);
    var runComplicationsNumber3 = Math.floor(Math.random() * runComplications[appLanguage].length);

    if(runType[appLanguage][runTypeNumber] == "Assasination" || runType[appLanguage][runTypeNumber] == "Blackmail") {
        if(runTarget[appLanguage][runTargetNumber] == runEmployer[appLanguage][runEmployerNumber]) {
            alert(runTarget[appLanguage][runTargetNumber]);
            runTarget[appLanguage][runTargetNumber] = randomName(); 
        }else{            
            runTarget[appLanguage][runTargetNumber] += " ("; 
            runTarget[appLanguage][runTargetNumber] += randomName(); 
            runTarget[appLanguage][runTargetNumber] += ")"; 
        }


    }

    if(runType[appLanguage][runTypeNumber] == "Bodyguard") {
        if(runEmployer[appLanguage][runEmployerNumber] != "Mr. Johnson") {
            runTarget[appLanguage][runTargetNumber] = runEmployer[appLanguage][runEmployerNumber];
        }

        var name = randomName();

        runTarget[appLanguage][runTargetNumber] = name + " (" + runTarget[appLanguage][runTargetNumber] + ")";
    }

    if(runType[appLanguage][runTypeNumber] == "Bodyguard" || runType[appLanguage][runTypeNumber] == "Bodyguard" || runType[appLanguage][runTypeNumber] == "Investigation")  {
        var paymentCheck = (Math.floor(Math.random() * 10));
        if(paymentCheck < 8){
            runPayment = Math.floor(Math.random() * 10) * 1000 * Math.floor(Math.random() * 10);
            if(runPayment == 0) {
                runPayment = "5000";
            }
            runPayment += " &#165;";
        }else{
            runPayment = Math.floor(Math.random() * 10) * 100 * Math.floor(Math.random() * 20);
            if(runPayment == 0) {
                runPayment = 1000;
            }
            days = Math.floor(Math.random() * 14)

            if(days == 0){
                days = 5;
            }
            runPayment += " &#165; per Day for ";
            runPayment += days;
            runPayment += " days";
        }
    }else{
        runPayment = Math.floor(Math.random() * 10) * 1000 * Math.floor(Math.random() * 10);
        if(runPayment == 0) {
            runPayment = "5000";
        }
        runPayment += " &#165;";
    }


    Run[appLanguage] = [
        [runType[appLanguage][runTypeNumber]],
        [runPayment],
        [runEmployer[appLanguage][runEmployerNumber]],
        [runMeetingPlace[2]],
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
    var contactMetaType = randomMetaType();

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

    contactName = randomName(contactGender[appLanguage][contactGenderNumber]);

    Contact[appLanguage] = [
        [contactRating[appLanguage][contactRatingNumber]],
        [contactLoyality[appLanguage][contactLoyalityNumber]],
        [contactProfession[appLanguage][contactProfessionNumber]],
        [contactGender[appLanguage][contactGenderNumber]],
        [contactName],
        [contactMetaType]
    ];

    return (Contact[appLanguage]);
}


function randomName(gender = "") {
    var firstName = {};
    var lastName = {};

    if(gender == false) { 
        gender = ($('input[name=radioGender]:checked', '#genderForm').val());
    } 

    firstName["male"] = [
        "James",	
        "John",	
        "Robert",
        "Michael",	
        "William",	
        "Frank",
        "Noah",
        "Liam", 
        "William",
        "Mason",
        "James",
        "Benjamin",
        "Jacob",
        "Michael",
        "Elijah",
        "Ethan",
        "Alexander",
        "Oliver",
        "Daniel",
        "Lucas",
        "Matthew",
        "Aiden",
        "Jackson",
        "Logan",
        "David",
        "Joseph",
    ];

    firstName["female"] = [
        "Sarah",	
        "Linni",	
        "Susan",
        "Rose",	
        "Jeanne",	
        "Ingebork",
        "Emma",
        "Olivia",
        "Ava",
        "Sophia",
        "Isabella",    
        "Mia",
        "Charlotte",
        "Abigail",
        "Emily",
        "Harper",
        "Amelia",
        "Evelyn",
        "Elizabeth",
        "Sofia",
        "Madison",
        "Avery",
        "Ella",
        "Scarlett",
        "Grace",
        "Chloe"
    ];

    lastName = [
        "Anderson",
        "Archer",
        "Armstrong",
        "Baker",
        "Barber",
        "Bennett",
        "Bishop",
        "Black",
        "Blair",
        "Brewster",
        "Brown",
        "Carter",
        "Chaplin",
        "Coleman",
        "Collister",
        "Connor",
        "Cunningham",
        "Dearing",
        "Edison",
        "Edwards",
        "Eliot",
        "Franklin",
        "Garcia",
        "Hanson",
        "Harper", 
        "Harsen",
        "Havering",
        "Hernandez",
        "Hilton",
        "Hobbs",
        "Jackson",
        "Jameson",
        "Jenkins",
        "Johnson",
        "Jones",
        "King",
        "Lopez",
        "Malone",
        "Martin",
        "Martinez",
        "Mason",
        "Mathewson",
        "Michaels",
        "Miller",
        "Moore",
        "Muller",
        "Nolan",
        "Norris",
        "Parker",
        "Perez",
        "Ramirez",
        "Rodriguez",
        "Sanchez",
        "Sawyer",
        "Shoemaker",
        "Smith",
        "Stark",
        "Stevenson",
        "Stone",
        "Thomas",
        "Thompson",
        "Torres",
        "Warren",
        "Ward",
        "Wayne",
        "West",
        "White",
        "Williams",
        "Young"
    ];

    firstName["weiblich"] = firstName["female"];
    firstName["männlich"] = firstName["male"];

    var firstNameNumber = Math.floor(Math.random() * firstName[gender].length);
    var lastNameNumber = Math.floor(Math.random() * lastName.length);


    return (firstName[gender][firstNameNumber] + " " + lastName[lastNameNumber]);
}


function randomNSC() {

    var NSC = [];

    var nscName = [];
    var nscGender = [];
    var nscAge = [];
    var nscHeight;
    var nscWeight;

    var nscHairColor = [];
    var nscHairStyle = [];
    var nscBeard = [];
    var nscEyeColor = [];
    var nscRace = [];
    var nscEthnie = [];
    var nscSexualOrientation = [];

    var nscAccessories = [];
    var nscClothStyle = [];

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

    nscGender['en'] = [
        "male",
        "female"
    ];

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
        "undercut",
        "Long and Grungy"
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

    nscClothStyle['en'] = [
        "Biker Leahter",
        "Blue Jeans",
        "Fancy Suit", 
        "Ripped Clothing" ,
        "Hot Shorts",
        "High Fashion", 
        "Military Garb",
        "Average Clothes", 
        "80s Retro",
        "Costume",
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
        "None",
        "Tattoos",
        "Kick Ass Attitude Glasses",
        "Punked Out Glowing Tattoos",
        "Crazy Colors Spiked Gloves and Belt",
        "Interesting Piercngs",
        "Stretched Ear Piercings",
        "Clean Nail Polish that changes color",
        "Shaggy High Heels or Platform boots",
        "Crazy Colored Contacts",
        "Scarification Art"
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

    // German Arrays

    nscGender['de'] = [
        "male",
        "female"
    ];

    nscHairColor['de'] = [
        "blond",
        "black",
        "brown",
        "red",
        "green",
        "white",
        "blue",
    ];

    nscHairStyle['de'] = [
        "long",
        "short",
        "ponytail",
        "bald head",
        "mowhawk",
        "undercut",
        "Long and Grungy"
    ];

    nscBeard['de'] = [
        "none",
        "short",
        "full",
        "snauzer"
    ]

    nscEyeColor['de'] = [
        "blue",
        "brown",
        "green",
    ];

    nscEyeColor['de'] = [
        "blue",
        "brown",
        "green",
    ];

    nscSexualOrientation['de'] = [
        "straight",
        "gay",
        "bi",
        "none"
    ];

    nscAccessories['de'] = [
        "Glasses",
        "Bracelet (left Hand)",
        "Chain",
        "Ring (lift Hand)",
        "Ring (right Hand)",
    ];

    nscClothStyle['de'] = [
        "Biker Leahter",
        "Blue Jeans",
        "Fancy Suit", 
        "Ripped Clothing" ,
        "Hot Shorts",
        "High Fashion", 
        "Military Garb",
        "Average Clothes", 
        "80s Retro",
        "Costume",
    ];


    nscJob['de'] = [
        "Policemen",
        "Firefighter",
        "Busdriver",
    ];

    nscPersonality['de'] = [
        "normal",
        "depressiv",
        "sadist",
        "psychopath",
    ];

    nscAbnormalities['de'] = [
        "None",
        "Tattoos",
        "Kick Ass Attitude Glasses",
        "Punked Out Glowing Tattoos",
        "Crazy Colors Spiked Gloves and Belt",
        "Interesting Piercngs",
        "Stretched Ear Piercings",
        "Clean Nail Polish that changes color",
        "Shaggy High Heels or Platform boots",
        "Crazy Colored Contacts",
        "Scarification Art"
    ];

    nscReligion['de'] = [
        "Atheist",
        "Christian",
        "Islam"
    ];

    nscHobby['de'] = [
        "Shooting",
        "Cinema",
        "Pool Billiard",
    ];

    nscPreviouslyConvicted['de'] = [
        "No",
        "Smuggling",
        "Illegal Weapons",
        "Drugs",
        "Grand Theft"
    ]

    nscAddiction["de"] = [
        "none",
        "Alcohol",
        "Drugs",
        "BTL-Chips",
        "Gambling"
    ]

    nscSmoker["de"] = [
        "No",
        "Yes"
    ]

    nscDrinker["de"] = [
        "No",
        "Yes"
    ]

    nscAwaken["de"] = [
        "No",
        "Yes"
    ]

    nscCyberware["de"] = [
        "none",
        "Left Arm",
        "Left Leg",
        "Right Arm",
        "Right Leg",
        "Left Arm"
    ]; 


    var nscGenderNumber = Math.floor(Math.random() * nscGender[appLanguage].length);

    nscName = randomName(nscGender[appLanguage][nscGenderNumber]);
    
    nscRace = randomMetaType();
    
    nscWeight = randomWeight(nscRace);
    nscHeight = randomHeight(nscRace);
    nscAge = randomAge(nscRace);
    nscEthnie = randomEthnicOrigin(nscRace);

    var nscHairColorNumber = Math.floor(Math.random() * nscHairColor[appLanguage].length);
    var nscHairStyleNumber = Math.floor(Math.random() * nscHairStyle[appLanguage].length);

    if(nscGender[appLanguage] == "male") {
        var nscBeardNumber = Math.floor(Math.random() * nscBeard[appLanguage].length);
    } else {
        nscBeardNumber = 0;
    }
    
    if(nscRace[appLanguage] == "Dryad") {
        nscGender[appLanguage][1];
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
    var abnormalitiesCheck = (Math.floor(Math.random() * 10));
    if(abnormalitiesCheck < 7) {
        var nscAbnormalitiesNumber = 0;
    }else{
        var nscAbnormalitiesNumber = Math.floor(Math.random() * nscAbnormalities[appLanguage].length);
    }

    var religionCheck = (Math.floor(Math.random() * 10));
    if(policeRecordCheck < 7) {
        var nscReligionNumber = 0;
    } else {
        var nscReligionNumber = Math.floor(Math.random() * nscReligion[appLanguage].length);
    }

    var nscEyeColorNumber = Math.floor(Math.random() * nscEyeColor[appLanguage].length);

    var nscAccessoriesNumber = Math.floor(Math.random() * nscAccessories[appLanguage].length);
    var nscClothStyleNumber = Math.floor(Math.random() * nscClothStyle[appLanguage].length);

    var nscJobNumber = Math.floor(Math.random() * nscJob[appLanguage].length);

    var nscHobbyNumber = Math.floor(Math.random() * nscHobby[appLanguage].length);

    NSC[appLanguage] = [
        [nscName],
        [nscGender[appLanguage][nscGenderNumber]],
        [nscAge],
        [nscRace],
        [nscEthnie],
        [nscHeight],
        [nscWeight],
        [nscHairColor[appLanguage][nscHairColorNumber]],
        [nscHairStyle[appLanguage][nscHairStyleNumber]],
        [nscBeard[appLanguage][nscBeardNumber]],
        [nscEyeColor[appLanguage][nscEyeColorNumber]],

        [nscAccessories[appLanguage][nscAccessoriesNumber]],
        [nscAbnormalities[appLanguage][nscAbnormalitiesNumber]],
        [nscClothStyle[appLanguage][nscClothStyleNumber]],

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


function randomLocation() {

    var location = [];

    var locationCity = [];
    var locationDistrict = [];
    var locationPlace = [];

    var appLanguage = ($('input[name=radioLanguage]:checked', '#languageForm').val());

    locationCity = [
        "Seattle",
        "Berlin",
        "Hongkong"
    ];

    locationDistrict["Seattle"] = [
        "Auburn",
        "Bellevue",
        "Council Island",
        "Downtown",
        "Everett",	
        "Fort Lewis",	
        "Outremer",	
        "Puyallup",	
        "Redmond",
        "Renton",	
        "Snohomish",	
        "Tacoma"
    ];

    locationDistrict["Berlin"] = [
        "AGC Siemensstadt",
        "Charlottenburg-Wilmersdorf",
        "Falkensee",
        "Friedrichshain-Kreuzberg",	
        "Gropiusstadt",	
        "Köpenick",	
        "Lichtenberg",	
        "Marzahn-Hellersdorf",	
        "Mitte",
        "Oranienburg",	
        "Pankow",	
        "Potsdam",	
        "Reinickendorf",	
        "Renrakusan a.D. Prenzlauer Berg",
        "Schönefeld",	
        "Schönwalde",
        "Spandau",	
        "Strausberg-Fredersdorf",	
        "Tempelhof",	
        "Zehlendorf",	
        "Z-IC Tegel",
    ];

    locationDistrict["Hongkong"] = [
        "Downtown Hongkong",
        "Eastern Hongkong",
        "Kowloon City",	
        "Kwai Tsing",	
        "Kwun Tong",	
        "Lantau",	
        "Northern Reaches",	
        "Sai Kung",	
        "Southern Coast",	
        "Tolo-Docks",	
        "Yau Tsim Mong"
    ];

    locationPlace["en"] = [
        "Backroom (Bar)",
        "Backroom (Cafe)",
        "Cafe",
        "Pizzeria",
        "Restaurant"
    ];

    var cityCheck = (Math.floor(Math.random() * 10));
    if(cityCheck < 9) {
        var locationCityNumber = 0;
    }else{
        var locationCityNumber = Math.floor(Math.random() * locationCity.length);
    } 

    var locationDistrictNumber = Math.floor(Math.random() * locationDistrict[locationCity[locationCityNumber]].length);

    var locationPlaceNumber = Math.floor(Math.random() * locationPlace[appLanguage].length);

    location = [
        [locationCity[locationCityNumber]],
        [locationDistrict[locationCity[locationCityNumber]][locationDistrictNumber]],
        [locationPlace[appLanguage][locationPlaceNumber]]
    ]

    return location;
}


function randomMetaType(){

    var metaType = [];
    var metaSubTypes = [];

    var appLanguage = ($('input[name=radioLanguage]:checked', '#languageForm').val());


    metaType['en'] = [
        "Human",
        "Elv",
        "Troll",
        "Orc",
        "Dwarf"
    ];

    metaSubTypes['en'] = {
        Dwarf: [
            "Gnome",
            "Harumen",
            "Koborokuru",
            "Menehune",
            "Querx"
        ],

        Elv: [
            "Dalakiton",
            "Dryad",
            "Night One",
            "Wakyambi",
            "Xapiri Thëpë"
        ],

        Human: [
            "Nartaki"
        ],

        Ork: [
            "Hobgoblin",
            "Ogre",
            "Oni",
            "Satyr"
        ],

        Troll: [
            "Cyclops",
            "Fomori",
            "Giant",
            "Minotaur"
        ]
    };
    
    
    metaType['de'] = [
            "Mensch",
            "Elf",
            "Troll",
            "Ork",
            "Zwerg"
    ];

    var metaTypeCheck = (Math.floor(Math.random() * 10));
    if(metaTypeCheck < 6) {
        var metaTypeNumber = 0;
    }else{
        var metaTypeNumber = Math.floor(Math.random() * metaType[appLanguage].length);
    } 

    var metaSubTypeCheck = (Math.floor(Math.random() * 100));
    if(metaSubTypeCheck < 94) {
        return metaType[appLanguage][metaTypeNumber];
    }else{

        race = (metaType[appLanguage][metaTypeNumber]);
        var number = (metaSubTypes[appLanguage][race].length);

        var metaSubTypeNumber = Math.floor(Math.random() * number);
        
        var metaType = metaSubTypes[appLanguage][metaType[appLanguage][metaTypeNumber]][metaSubTypeNumber];
        return metaType;  
    }

   
}


function randomWeight(metaType="Human"){

    var weight = Math.floor(Math.random()*(200-50+1)+50); 

    //Troll Subtype Weight
    
    if(metaType == "Troll") {
       weight = Math.floor(Math.random()*(600-180)+180);
    }
        
    if(metaType == "Cyclop") {
         weight = Math.floor(Math.random()*(700-280)+700);
    }
    
    if(metaType == "Giant") {
         weight = Math.floor(Math.random()*(700-330)+700);
    }
    
    //Dwarf Subtype Weight

    if(metaType == "Dwarf") {   
        weight = Math.floor(Math.random()*(150-50+1)+50);
    }
    
    if(metaType == "Gnome") {
        weight = Math.floor(Math.random()*(50-20+1)+50);
    }
    
    if(metaType == "Koborokuru") {
        weight = Math.floor(Math.random()*(50-30+1)+50);
    }
    
    if(metaType == "Menehune") {
        weight = Math.floor(Math.random()*(70-50+1)+70);
    }
    
    //Elvish Subtype Weight
    
    if(metaType == "Dryad") {
        weight = Math.floor(Math.random()*(40-25+1)+40);
    }
    
    if(metaType == "Wakyambi") {
        weight = Math.floor(Math.random()*(650-220)+650);
    }
    
    //Ork Subtype Weight
    
    if(metaType == "Hobgoblin") {
         weight = Math.floor(Math.random()*(130-80+1)+130);
    }
    
    if(metaType == "Ogre") {
         weight = Math.floor(Math.random()*(130-90+1)+130);
    }
    
    if(metaType == "Oni") {
         weight = Math.floor(Math.random()*(150-115+1)+150);
    }
   

    return weight + " kg";
}


function randomHeight(metaType="Human"){

    var height = Math.floor(Math.random()*(220-150+1)+150); 

    if(metaType == "Troll") {
        height = Math.floor(Math.random()*(350-200+1)+200);
    }
    
    if(metaType == "Giant") {
         weight = Math.floor(Math.random()*(400-250)+400);
    }
    
    
    //Dwarf Subtype Height

    if(metaType == "Dwarf") {
        height = Math.floor(Math.random()*(160-120+1)+120);
    }
    
    if(metaType == "Gnome") {
        height = Math.floor(Math.random()*(95-65+1)+95);
    }
    
    if(metaType == "Koborokuru"|| metaType == "Menehune") {
        height = Math.floor(Math.random()*(130-90+1)+130);
    }
    
    //Elvish Subtype Height
    
    if(metaType == "Dryad") {
        height = Math.floor(Math.random()*(120-85+1)+120);
    }
    
    if(metaType == "Wakyambi") {
        height = Math.floor(Math.random()*(350-200+1)+200);
    }
    
    //Ork Subtype Height
    
    if(metaType == "Hobgoblin") {
         height = Math.floor(Math.random()*(200-160+1)+200);
    }
    
    if(metaType == "Ogre") {
         height = Math.floor(Math.random()*(190-160+1)+190);
    }
    
    if(metaType == "Oni") {
         height = Math.floor(Math.random()*(220-180+1)+220);
    }

    return (height/100) + " m";
}

function randomAge(metaType="Human"){

    var age = nscAge = Math.floor(Math.random()*(100-18+1)+18);

    return age
}

function randomEthnicOrigin(metaType="Human"){

    var ethnie = [];
    
    var appLanguage = ($('input[name=radioLanguage]:checked', '#languageForm').val());
    
    ethnie['en'] = [
        "Anglo-American",
        "African",
        "European",
        "Japanese/Koren",
        "Chinese/Southern Asia",
        "Pacific Islander",
        "Hispanic-American",
        "South American",
        "Black American",
        "Central European",
        "Middle East"
    ];
    
   ethnie['de'] = [
        "Anglo-American",
        "African",
        "European",
        "Japanese/Koren",
        "Chinese/Southern Asia",
        "Pacific Islander",
        "Hispanic-American",
        "South American",
        "Black American",
        "Central European",
        "Middle East"
    ];
    
    var ethnieNumber = Math.floor(Math.random() * ethnie[appLanguage].length)
  
    //Dwarf Subtype Origins
    
    if(metaType == "Gnome") {
        ethnie[appLanguage][ethnieNumber] = "European";
    }
    
    if(metaType == "Harumen") {
        ethnie[appLanguage][ethnieNumber] = "Chinese/Southern Asia";
    }    
    
    if(metaType == "Koborokuru") {
        ethnie[appLanguage][ethnieNumber] = "Japanese/Koren";
    }    
    
    if(metaType == "Menehune") {
        ethnie[appLanguage][ethnieNumber] = "Pacific Islander";
    }   
    
    if(metaType == "Querx") {
        ethnie[appLanguage][ethnieNumber] = "Allied German States";
    }
    
    //Elve Subtype Origins
    
    if(metaType == "Dalakiton") {
        ethnie[appLanguage][ethnieNumber] = "Chinese/Southern Asia";
    }
    
    if(metaType == "Wakyambi") {
        ethnie[appLanguage][ethnieNumber] = "African";
    }    
    
    if(metaType == "Xapiri Thëpë") {
        ethnie[appLanguage][ethnieNumber] = "South American";
    }    
    
    //Human Subtype Origins
    
    if(metaType == "Nartaki") {
        ethnie[appLanguage][ethnieNumber] = "Chinese/Southern Asia";
    } 
    
    //Ork Subtype Origins
    
    if(metaType == "Hobgoblin") {
        ethnie[appLanguage][ethnieNumber] = "Middle East";
    } 
    
        if(metaType == "Ogre") {
        ethnie[appLanguage][ethnieNumber] = "European";
    } 
    
        if(metaType == "Oni") {
        ethnie[appLanguage][ethnieNumber] = "Japanese/Koren";
    } 
    
        if(metaType == "Satyr") {
        ethnie[appLanguage][ethnieNumber] = "European";
    } 
    
    //Troll Subtype Origins
    
    if(metaType == "Cyclop") {
        ethnie[appLanguage][ethnieNumber] = "European";
    } 
    
        if(metaType == "Fomori") {
        ethnie[appLanguage][ethnieNumber] = "Irish";
    } 
    
        if(metaType == "Giant") {
        ethnie[appLanguage][ethnieNumber] = "North European";
    } 
    
        if(metaType == "Minotaur") {
        ethnie[appLanguage][ethnieNumber] = "European";
    } 
    
    return ethnie[appLanguage][ethnieNumber];
}