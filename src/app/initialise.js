function initialise(f) {
    grpPlots = f.select("#grp-plots");
    brightnessScreen = f.select("#brightness-screen");
    svgOnOffKnob = f.select("#on-off-knob");
    svgOffKnob = f.select("#off-knob");
    svgOnOffKnobCx = svgOnOffKnob.attr("cx");
    svgOnOffKnobCy = svgOnOffKnob.attr("cy");
    mainMenu = f.select("#main-menu");
    lblMainMenu = f.select("#lbl-main-menu");
    optMrh90 = f.select("#opt-mrh90");
    optMh60r = f.select("#opt-mh60r");
    optS70a9 = f.select("#opt-s70a9");
    optCh47f = f.select("#opt-ch47f");
    aircraftSholMenu = f.select("#aircraft-shol-menu"); // group
    optionsTopAircraftSholSelect = f.select("#options-top-aircraft-shol-select"); // group
    optMenuAircraftSholSelect = f.select("#opt-menu-aircraft-shol-select");
    lblMainMenuAircraftSholSelect = f.select("#lbl-main-menu-aircraft-shol-select");
    optAircraftSholsSelect = f.select("#opt-aircraft-shols-select");
    optBridgeEmergencyCards = f.select("#opt-bridge-emergency-cards");
    optFlycoEmergencyChecklists = f.select("#opt-flyco-emergency-checklists");
    optFlycoStandardChecklists = f.select("#opt-flyco-standard-checklists");
    optArhTiger = f.select("#opt-arh-tiger");
    optForeign = f.select("#opt-foreign");
    activeSholDisplay = f.select("#active-shol-display"); // group
    optionsBottom = f.select("#options-bottom"); // group
    optCda = f.select("#opt-cda");
    opt6 = f.select("#opt-6");
    opt5 = f.select("#opt-5");
    opt4 = f.select("#opt-4");
    opt3 = f.select("#opt-3");
    opt2 = f.select("#opt-2");
    opt1 = f.select("#opt-1");
    hilightCdf = f.select("#hilight-cdf");
    hilightCda = f.select("#hilight-cda");
    hilight6 = f.select("#hilight-6");
    hilight5 = f.select("#hilight-5");
    hilight4 = f.select("#hilight-4");
    hilight3 = f.select("#hilight-3");
    hilight2 = f.select("#hilight-2");
    hilight1 = f.select("#hilight-1");
    hilightCdf = f.select("#hilight-cdf");
    optionsTop = f.select("#options-top"); // group
    lblAircraftId = f.select("#lbl-aircraft-id"); // group
    optAircraftIdIndicator = f.select("#opt-aircraft-id-indicator");
    optAircraftIdHighlight = f.select("#opt-aircraft-id-highlight");
    optXfer = f.select("#opt-xfer");
    optVertrep = f.select("#opt-vertrep");
    optLand = f.select("#opt-land");
    optLaunch = f.select("#opt-launch");
    optTaxi = f.select("#opt-taxi");
    optEngageShutdown = f.select("#opt-engage-shutdown"); // group
    txtShutdown = f.select("#txt-shutdown");
    txtEngage = f.select("#txt-engage");
    optMenu = f.select("#opt-menu");
    hilightXfer = f.select("#hilight-xfer");
    hilightVertrep = f.select("#hilight-vertrep");
    hilightLand = f.select("#hilight-land");
    hilightLaunch = f.select("#hilight-launch");
    hilightTaxi = f.select("#hilight-taxi");
    hilightEngageShutdown = f.select("#hilight-engage-shutdown");
    lblAircraft = f.select("#lbl-aircraft"); // group
    optAircraftIndicator = f.select("#opt-aircraft-indicator");
    optHighlight = f.select("#opt-highlight");
    optionsLeft = f.select("#options-left"); // group
    optIntoWind = f.select("#opt-into-wind");
    optAft = f.select("#opt-aft");
    optFwd = f.select("#opt-fwd");
    optNight = f.select("#opt-night");
    optDay = f.select("#opt-day");
    optBack = f.select("#opt-back");
    hilightIntoWind = f.select("#hilight-into-wind");
    hilightAft = f.select("#hilight-aft");
    hilightFwd = f.select("#hilight-fwd");
    hilightNight = f.select("#hilight-night");
    hilightDay = f.select("#hilight-day");
    polarGraph = f.select("#polar-graph"); // group
    anglesKnotsLabels = f.select("#angles-knots-labels"); // group
    g160 = f.select("#g160");
    g140 = f.select("#g140");
    g120 = f.select("#g120");
    g100 = f.select("#g100");
    g80 = f.select("#g80");
    g60 = f.select("#g60");
    g40 = f.select("#g40");
    g20 = f.select("#g20");
    r160 = f.select("#r160");
    r140 = f.select("#r140");
    r120 = f.select("#r120");
    r100 = f.select("#r100");
    r80 = f.select("#r80");
    r60 = f.select("#r60");
    r40 = f.select("#r40");
    r20 = f.select("#r20");
    knotsLabels = f.select("#knots-labels"); // group
    polarGridLines = f.select("#polar-grid-lines"); // group
    redGreenCircle = f.select("#red-green-circle"); // group

    // roll and pitch bars
    pitchIndicators = f.select("#pitch-indicators"); // group
    pitchGraph = f.select("#pitch-graph"); // group
    pitchDownMax1 = f.select("#pitch-down-max-1");
    pitchDownMax15 = f.select("#pitch-down-max-15");
    pitchDownMax2 = f.select("#pitch-down-max-2");
    pitchDownMax3 = f.select("#pitch-down-max-3");
    pitchDownMax4 = f.select("#pitch-down-max-4");
    lastPitchDownPosIndicator = f.select("#last-pitch-down-pos-indicator");
    pitchBarIndicator = f.select("#pitch-bar-indicator");
    lastPitchUpPosIndicator = f.select("#last-pitch-up-pos-indicator");
    pitchUpMax1 = f.select("#pitch-up-max-1");
    pitchUpMax15 = f.select("#pitch-up-max-15");
    pitchUpMax2 = f.select("#pitch-up-max-2");
    pitchUpMax3 = f.select("#pitch-up-max-3");
    pitchUpMax4 = f.select("#pitch-up-max-4");
    rollIndicators = f.select("#roll-indicators");
    rollGraph = f.select("#roll-graph");
    rollPortMax1 = f.select("#roll-port-max-1");
    rollPortMax15 = f.select("#roll-port-max-15");
    rollPortMax2 = f.select("#roll-port-max-2");
    rollPortMax3 = f.select("#roll-port-max-3");
    rollPortMax4 = f.select("#roll-port-max-4");
    lastRollPortIndicator = f.select("#last-roll-port-indicator");
    rollBarIndicator = f.select("#roll-bar-indicator");
    lastRollStarboardIndicator = f.select("#last-roll-starboard-indicator");
    rollStarboardMax1 = f.select("#roll-starboard-max-1");
    rollStarboardMax15 = f.select("#roll-starboard-max-15");
    rollStarboardMax2 = f.select("#roll-starboard-max-2");
    rollStarboardMax3 = f.select("#roll-starboard-max-3");
    rollStarboardMax4 = f.select("#roll-starboard-max-4");
    // ---------------------------------------------------
    optionsRight = f.select("#options-right"); // group
    display = f.select("#display");
    onOffKnob = f.select("#on-off-knob"); // group
    onOffKnobIndicator = f.select("#on-off-knob-indicator");
    onOffKnobHighlight = f.select("#on-off-knob-highlight");
    onOffKnobFace = f.select("#on-off-knob-face");
    onOffKnobShadow = f.select("#on-off-knob-shadow");
    buttonsTop = f.select("#buttons-top");
    btnSpareTop = f.select("#btn-spare-top"); // group
    lightSpare = f.select("#light-spare");
    lightOutlineSpareTop = f.select("#light-outline-spare-top");
    gradientSpareTop = f.select("#gradient-spare-top");
    faceSpareTop = f.select("#face-spare-top");
    btnBright = f.select("#btn-bright");
    gradientBright = f.select("#gradient-bright");
    faceBright = f.select("#face-bright");
    btnDim = f.select("#btn-dim");
    gradientDim = f.select("#gradient-dim");
    faceDim = f.select("#face-dim");
    btnMH60R = f.select("#btn-mh60r");
    lightMH60R = f.select("#light-mh60r");
    lightOutlineMH60R = f.select("#light-outline-mh60r");
    gradientMH60R = f.select("#gradient-mh60r");
    faceMH60R = f.select("#face-mh60r");
    btnS70A9 = f.select("#btn-s70a9");
    lightS70A9 = f.select("#light-s70a9");
    lightOutlineS70A9 = f.select("#light-outline-s70a9");
    gradientS70A9 = f.select("#gradient-s70a9");
    faceS70A9 = f.select("#face-s70a9");
    btnMRH90 = f.select("#btn-mrh90");
    lightMRH90 = f.select("#light-mrh90");
    lightOutlineMRH90 = f.select("#light-outline-mrh90");
    gradientMRH90 = f.select("#gradient-mrh90");
    faceMRH90 = f.select("#face-mrh90");

    btnXfer = f.select("#btn-xfer"); // group
    lightXfer = f.select("#light-xfer");
    lightOutlineXfer = f.select("#light-outline-xfer");
    gradientXfer = f.select("#gradient-xfer");
    faceXfer = f.select("#face-xfer");
    btnRecovery = f.select("#btn-recovery"); // group
    lightRecovery = f.select("#light-recovery");
    lightOutlineRecovery = f.select("#light-outline-recovery");
    gradientRecovery = f.select("#gradient-recovery");
    faceRecovery = f.select("#face-recovery");
    btnSpreadFold = f.select("#btn-spread-fold"); // group
    lightSpreadFold = f.select("#light-spread-fold");
    lightOutlineSpreadFold = f.select("#light-outline-spread-fold");
    gradientSpreadFold = f.select("#gradient-spread-fold");
    faceSpreadFold = f.select("#face-spread-fold");
    btnVertrep = f.select("#btn-vertrep"); // group
    lightVertrep = f.select("#light-vertrep");
    lightOutlineVertrep = f.select("#light-outline-vertrep");
    gradientVertrep = f.select("#gradient-vertrep");
    faceVertrep = f.select("#face-vertrep");
    btnLand = f.select("#btn-land"); // group
    lightLand = f.select("#light-land");
    lightOutlineLand = f.select("#light-outline-land");
    gradientLand = f.select("#gradient-land");
    faceLand = f.select("#face-land");
    btnLaunch = f.select("#btn-launch"); // group
    lightLaunch = f.select("#light-launch");
    lightOutlineLaunch = f.select("#light-outline-launch");
    gradientLaunch = f.select("#gradient-launch");
    faceLaunch = f.select("#face-launch");
    btnTaxi = f.select("#btn-taxi"); // group
    lightTaxi = f.select("#light-taxi");
    lightOutlineTaxi = f.select("#light-outline-taxi");
    gradientTaxi = f.select("#gradient-taxi");
    faceTaxi = f.select("#face-taxi");
    btnEngageShutdown = f.select("#btn-engage-shutdown"); // group
    lightEngageShutdown = f.select("#light-engage-shutdown");
    lightOutlineEngageShutdown = f.select("#light-outline-engage-shutdown");
    gradientEngageShutdown = f.select("#gradient-engage-shutdown");
    faceEngageShutdown = f.select("#face-engage-shutdown");
    btnMenu = f.select("#btn-menu"); // group
    lightMenuActiveDisplay = f.select("#light-menu-active-display");
    lightOutlineMenuActiveDisplay = f.select("#light-outline-menu-active-display");
    gradientMenuActiveDisplay = f.select("#gradient-menu-active-display");
    faceMenuActiveDisplay = f.select("#face-menu-active-display");

    btnAircraftShols = f.select("#btn-aircraft-shols");
    lightAircraftShols = f.select("#light-aircraft-shols");
    lightOutlineAircraftShols = f.select("#light-outline-aircraft-shols");
    gradientAircraftShols = f.select("#gradient-aircraft-shols");
    faceAircraftShols = f.select("#face-aircraft-shols");

    buttonsBottom = f.select("#buttons-bottom");
    btnCdf = f.select("#btn-cdf"); // group
    lightCdf = f.select("#light-cdf");
    lightOutlineCdf = f.select("#light-outline-cdf");
    gradientCdf = f.select("#gradient-cdf");
    faceCdf = f.select("#face-cdf");
    btn1 = f.select("#btn-1");
    light1 = f.select("#light-1");
    lightOutline1 = f.select("#light-outline-1");
    gradient1 = f.select("#gradient-1");
    face1 = f.select("#face-1");
    btn2 = f.select("#btn-2");
    light2 = f.select("#light-2");
    lightOutline2 = f.select("#light-outline-2");
    gradient2 = f.select("#gradient-2");
    face2 = f.select("#face-2");
    btn3 = f.select("#btn-3");
    light3 = f.select("#light-3");
    lightOutline3 = f.select("#light-outline-3");
    gradient3 = f.select("#gradient-3");
    face3 = f.select("#face-3");
    btn4 = f.select("#btn-4");
    light4 = f.select("#light-4");
    lightOutline4 = f.select("#light-outline-4");
    gradient4 = f.select("#gradient-4");
    face4 = f.select("#face-4");
    btn5 = f.select("#btn-5");
    light5 = f.select("#light-5");
    lightOutline5 = f.select("#light-outline-5");
    gradient5 = f.select("#gradient-5");
    face5 = f.select("#face-5");
    btn6 = f.select("#btn-6");
    light6 = f.select("#light-6");
    lightOutline6 = f.select("#light-outline-6");
    gradient6 = f.select("#gradient-6");
    face6 = f.select("#face-6");
    btnCda = f.select("#btn-cda");
    lightCda = f.select("#light-cda");
    lightOutlineCda = f.select("#light-outline-cda");
    gradientCda = f.select("#gradient-cda");
    faceCda = f.select("#face-cda");
    buttonsRight = f.select("#buttons-right"); // group
    btnEmergency = f.select("#btn-emergency"); // group
    lightEmergency = f.select("#light-emergency");
    lightOutlineEmergency = f.select("#light-outline-emergency");
    gradientEmergency = f.select("#gradient-emergency");
    faceGradientEmergency = f.select("#face-gradient-emergency");
    btnSpareRight = f.select("#btn-spare-right"); // group
    lightSpareRight = f.select("#light-spare-right");
    lightOutlineSpareRight = f.select("#light-outline-spare-right");
    gradientSpareRight = f.select("#gradient-spare-right");
    faceSpareRight = f.select("#face-spare-right");
    btnHotHeavy = f.select("#btn-hot-heavy"); // group
    lightHotHeavy = f.select("#light-hot-heavy");
    lightOutlineHotHeavy = f.select("#light-outline-hot-heavy");
    gradientHotHeavy = f.select("#gradient-hot-heavy");
    faceHotHeavy = f.select("#face-hot-heavy");
    btnHeavy = f.select("#btn-heavy");
    lightHeavy = f.select("#light-heavy");
    lightOutlineHeavy = f.select("#light-outline-heavy");
    gradientHeavy = f.select("#gradient-heavy");
    faceHeavy = f.select("#face-heavy");
    btnMedium = f.select("#btn-medium");
    lightMedium = f.select("#light-medium");
    lightOutlineMedium = f.select("#light-outline-medium");
    gradientMedium = f.select("#gradient-medium");
    faceMedium = f.select("#face-medium");
    btnLight = f.select("#btn-light"); // group
    lightLight = f.select("#light-light");
    lightOutlineLight = f.select("#light-outline-light");
    gradientLight = f.select("#gradient-light");
    faceLight = f.select("#face-light");
    buttonsLeft = f.select("#buttons-left"); // group
    btnIntoWind = f.select("#btn-into-wind"); // group
    lightIntoWind = f.select("#light-into-wind");
    lightOutlineIntoWind = f.select("#light-outline-into-wind");
    gradientIntoWind = f.select("#gradient-into-wind");
    faceIntoWind = f.select("#face-into-wind");
    btnAft = f.select("#btn-aft"); // group
    lightAft = f.select("#light-aft");
    lightOutlineAft = f.select("#light-outline-aft");
    gradientAft = f.select("gradient-aft");
    faceAft = f.select("#face-aft");
    btnFwd = f.select("#btn-fwd"); // group
    lightFwd = f.select("#light-fwd");
    lightOutlineFwd = f.select("#light-outline-fwd");
    gradientFwd = f.select("#gradient-fwd");
    faceFwd = f.select("#face-fwd");
    btnNight = f.select("#btn-night"); // group
    lightNight = f.select("#light-night");
    lightOutlineNight = f.select("#light-outline-night");
    gradientNight = f.select("#gradient-night");
    faceNight = f.select("#face-night");
    btnDay = f.select("#btn-day"); // group
    lightDay = f.select("#light-day");
    lightOutlineDay = f.select("#light-outline-day");
    gradientDay = f.select("#gradient-day");
    faceDay = f.select("#face-day");
    btnBack = f.select("#btn-back"); // group
    lightBack = f.select("#light-back");
    lightOutlineBack = f.select("#light-outline-back");
    gradientBack = f.select("#gradient-back");
    faceBack = f.select("#face-back");
    wholePanel = f.select("#whole-panel"); // group
    panelLightsTop = f.select("#panel-lights-top");
    onOffLabel = f.select("#on-off-label"); // group
    panelLightsRight = f.select("#panel-lights-right"); // group
    panelLightsLeft = f.select("#panel-lights-left"); // group
    panelLightsBottom = f.select("#panel-lights-bottom"); // group
    backPanel = f.select("#back-panel"); // group
    topInset = f.select("#top-inset");
    bottomInset = f.select("#bottom-inset");
    rightInset = f.select("#right-inset");
    leftInset = f.select("#left-inset");
    outerPanel = f.select("#outer-panel"); // group

    onOffKnob = new OnOffKnob();
    selectedAircraft = "";
    plot = [
        "id900-spots-1-6",
        "id900cda-day-only",
        "id901-fwd-facing-cda",
        "id901-fwd-facing-1-6",
        "id901-aft-facing-2-6",
        "id902",
        "id911-spot-1-light-medium",
        "id911-spot-1-heavy",
        "id911-spot-1-hot-heavy",
        "id921-light-medium",
        "id921-heavy",
        "id921-hot-heavy",
        "id922-light-medium",
        "id922-heavy",
        "id923-light-medium-heavy",
        "id923-hot-heavy",
        "id951-light-medium-heavy",
        "id951-hot-heavy",
        "id952-light-medium",
        "id952-heavy",
        "id991-light-medium-heavy",
        "id991-hot-heavy",
        "id992",
        "id993",
        "id994",
        "id600-spot-cda",
        "id600-spots-1-6",
        "id601",
        "id611",
        "id621-light-medium",
        "id621-heavy",
        "id622-light-medium",
        "id651-light-medium",
        "id651-heavy",
        "id661-light-medium",
        "id701",
        "id721-light-medium"
    ]    
}

const MRH90 = 'MRH90';
const MH60R = 'MH60R';
const S70A9 = 'S70A-9';
const CH47F = 'CH47F';
const ARH_TIGER = 'ARH TIGER';
const FOREIGN = 'FOREIGN';

const ACTIONS = 1;
const WEIGHTS = 2;
const POSITIONS = 3;
const DIRECTIONS = 4;
const TIMES = 5;

// TIMES
 const DAY = 7;
 const NIGHT = 8;

// WIND DIRECTIONS
 const FWD =4;
 const AFT = 5;
 const INTOWIND = 6;

// POSITIONS
 const CDA = 9;
 const POS6 = 10;
 const POS5 = 11;
 const POS4 = 12;
 const POS3 = 13;
 const POS2 = 14;
 const POS1 = 15;
 const CDF = 16;

// ACTIONS
 const ENGAGE = 17;
 const TAXI = 18;
 const LAUNCH = 19;
 const LAND = 20;
 const VERTREP = 21;
 const XFER = 22;
 const EMERGENCY = 23; // DEGRADED
 const RECOVERY = 24;
 const SPREADFOLD = 25;

// WEIGHTS
 const LIGHT = 0;
 const MEDIUM = 1;
 const HEAVY = 2;
 const HOTHEAVY = 3;

 clickFromBtnMH60R = false;

 // for weather indicator
isInsidePolarGraph = true;
isInsidePolygon = false;

var filteredArray = [];
var btnStatus = [
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false, false, false, false, false,
    false, false
];
