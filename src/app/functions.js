// function library
// ==============================================================
// todo: knob rotation animation
function doOnOffKnob(f) {
    var toggleResult = 0,
        position,
        rotate,
        theCx,
        theCy,
        theX,
        theY;

    theCx = svgOnOffKnob.getBBox().cx;
    theCy = svgOnOffKnob.getBBox().cy;

    theX = svgOnOffKnob.getBBox().x;
    theY = svgOnOffKnob.getBBox().y;

    onOffKnob.state = !onOffKnob.state;

    if (onOffKnob.state) {
        $("#on-off-knob").show(); // on knob
        $("#off-knob").hide();
        $("#main-menu").show();
        $("#btn-grp-startup").hide();
    } else {
        $("#on-off-knob").hide();
        $("#off-knob").show();
        $("#main-menu").hide();
        $("#btn-grp-startup").show();
        $("#aircraft-shol-menu").hide();
        $("#active-shol-display").hide();
        doExit();
    }
}

// exit application
async function doExit() {
    console.log('do exit function executing');
    await sleep(5000);
    process.exit(0);
}

// this is the wait function and waits before exiting application
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function hideAllIndicators(f) {
    // reset left indicators ----------------------------------------------
    hideIndicator(f, "#hilight-day", "#opt-day");
    hideIndicator(f, "#hilight-night", "#opt-night");
    hideIndicator(f, "#hilight-fwd", "#opt-fwd");
    hideIndicator(f, "#hilight-aft", "#opt-aft");
    hideIndicator(f, "#hilight-into-wind", "#opt-into-wind");

    // reset top indicators -----------------------------------------------
    hideIndicator(f, "#hilight-engage-shutdown", "#txt-engage");
    hideIndicator(f, "", "#txt-shutdown");
    hideIndicator(f, "#hilight-taxi", "#opt-taxi");
    hideIndicator(f, "#hilight-launch", "#opt-launch");
    hideIndicator(f, "#hilight-land", "#opt-land");
    hideIndicator(f, "#hilight-vertrep", "#opt-vertrep");
    hideIndicator(f, "#hilight-xfer", "#opt-xfer");
    hideIndicator(f, "#hilight-recovery", "#opt-recovery");
    hideIndicator(f, "#hilight-spread-fold", "#txt-spread");
    hideIndicator(f, "", "#txt-fold");

    // reset right  indicators ---------------------------------------------
    hideIndicator(f, "#hilight-light", "#opt-light");
    hideIndicator(f, "#hilight-medium", "#opt-medium");
    hideIndicator(f, "#hilight-heavy", "#opt-heavy");
    hideIndicator(f, "#hilight-hot-heavy", "#opt-hot-heavy");
    hideIndicator(f, "#hilight-emergency", "#opt-emergency");

    // reset bottom indicators --------------------------------------------
    hideIndicator(f, "#hilight-cda", "#opt-cda");
    hideIndicator(f, "#hilight-6", "#opt-6");
    hideIndicator(f, "#hilight-5", "#opt-5");
    hideIndicator(f, "#hilight-4", "#opt-4");
    hideIndicator(f, "#hilight-3", "#opt-3");
    hideIndicator(f, "#hilight-2", "#opt-2");
    hideIndicator(f, "#hilight-1", "#opt-1");
    hideIndicator(f, "#hilight-cdf", "#opt-cdf");
}

function hideAllPlots() {
    for (let x = 0; x < plot.length; x++) {
        $("#" + plot[x]).hide();
    }
}

function showIndicator(f, hilightId, textId) {
    var theHilightId,
        theTextId,
        theTextChildren;
    if (hilightId !== undefined && hilightId !== "") {
        theHilightId = f.paper.select(hilightId);
        theHilightId.attr({
            display: "block",
            visibility: "visible"
        });
    }
    if (textId !== undefined && textId !== "") {
        theTextId = f.paper.select(textId);
        theTextChildren = theTextId.children();
        theTextChildren.forEach((item) => {
            if (item.type === "text" || item.type === "tspan") {
                var grandChildren;
                item.attr("fill", "black");
                grandChildren = item.children();
                grandChildren.forEach((item) => {
                    if (item.type === "text" || item.type === "tspan") {
                        item.attr("fill", "black");
                    }
                });
            }
        });
    }
}

function hideIndicator(f, hilightId, textId) {
    var theHilightId,
        theTextId,
        theTextChildren;
    if (hilightId !== undefined && hilightId !== "") {
        theHilightId = f.paper.select(hilightId);
        theHilightId.attr({
            display: "none",
            visibility: "hidden"
        });
    }
    if (textId !== undefined && textId !== "") {
        theTextId = f.paper.select(textId);
        theTextChildren = theTextId.children();
        theTextChildren.forEach((item) => {
            if (item.type === "text" || item.type === "tspan") {
                var grandChildren;
                item.attr("fill", "white");
                grandChildren = item.children();
                grandChildren.forEach((item) => {
                    if (item.type === "text" || item.type === "tspan") {
                        item.attr("fill", "white");
                    }
                });
            }
        });
    }
}

function goBackToMainMenu(f) {
    // go back to main menu
    $("#aircraft-shol-menu").hide();
    $("#active-shol-display").hide();
    $("#main-menu").show();
    $("#btn-taxi-dummy").hide();
    $("#btn-xfer-dummy").hide();
    doBtnUp(f, "#btn-aircraft-shols");
    doBtnUp(f, "#btn-mh60r");

    hideAllIndicators(f);
    resetPitchRoll();
    hideAllPlots();
    resetBtnStatus();
    $("#opt-aircraft-id").hide();
    $("#lbl-aircraft-id").hide();
    clickFromBtnMH60R = false;
    clickFromBtnS70A9 = false;
}

function doBtnBack(f) {

    $("#active-shol-display").hide();
    $("#aircraft-shol-menu").show();
    $("#btn-spare-top").show();
    $("#btn-xfer").show();
    $("#grp-xfer").show();
    $("#btn-taxi-dummy").hide();
    $("#btn-xfer-dummy").hide();
    $("#btn-recovery").hide();
    $("#btn-spread-fold").hide();
    $("#grp-recovery").hide();
    $("#opt-spread-fold").hide();

    doBtnUp(f, "#btn-aircraft-shols");
    doBtnUp(f, "#btn-mh60r");
    hideAllIndicators(f);
    hideAllPlots();
    resetPitchRoll();
    resetBtnStatus();
    filterByAircraft();
    $("#opt-aircraft-id").hide();
    $("#lbl-aircraft-id").hide();
    clickFromBtnMH60R = false;
    clickFromBtnS70A9 = false;

}

function doBtnAircraftShols(f) {
    if ($("#main-menu").css("display") != "none") {
        $("#main-menu").hide();
        $("#aircraft-shol-menu").show();
        $("#btn-menu").show();
    }
}

function doBtnMRH90(f) {
    $("#aircraft-shol-menu").hide();
    $("#active-shol-display").show();

    selectedAircraft = MRH90;
    optAircraftIndicator.attr({
        text: selectedAircraft
    });

    doBtnUp(f, "#btn-back");
    $("#btn-spare-top").hide();
    $("#btn-xfer").show();
    $("#grp-xfer").show();
    $("#btn-taxi").show();
    $("#grp-taxi").show();

    $("#btn-recovery").show();
    $("#grp-recovery").show();
    $("#btn-spread-fold").hide();
    $("#opt-spread-fold").hide();
    $("#opt-aircraft-id").hide();
}

function doBtnMH60R(f) {

    $("#aircraft-shol-menu").hide();
    $("#active-shol-display").show();

    selectedAircraft = MH60R;
    optAircraftIndicator.attr({
        text: selectedAircraft
    });
    doBtnUp(f, "#btn-back");
    $("#btn-spare-top").hide();
    $("#btn-xfer").hide();
    $("#grp-xfer").hide();
    $("#grp-taxi").hide();
    $("#btn-taxi").hide();
    $("#btn-taxi-dummy").show();
    $("#btn-recovery").show();
    $("#btn-spread-fold").show();
    $("#grp-recovery").show();
    $("#opt-spread-fold").show();
    $("#opt-aircraft-id").hide();

    clickFromBtnMH60R = true;
}

function doBtnS70A9(f) {
    $("#aircraft-shol-menu").hide();
    $("#active-shol-display").show();

    selectedAircraft = S70A9;
    optAircraftIndicator.attr({
        text: selectedAircraft
    });
    doBtnUp(f, "#btn-back");
    $("#btn-spare-top").hide();
    $("#btn-xfer").hide();
    $("#grp-xfer").hide();
    $("#btn-taxi").hide();
    $("#grp-taxi").hide();
    $("#btn-xfer-dummy").show();
    $("#btn-taxi-dummy").show();
    $("#btn-recovery").show();
    $("#grp-recovery").show();

    $("#opt-aircraft-id").hide();
    clickFromBtnS70A9 = true;
}

function doBtnDay(f) {
    if ($("#hilight-day").css("display") != "none") {
        hideIndicator(f, "#hilight-day", "#opt-day");
    } else {
        showIndicator(f, "#hilight-day", "#opt-day");
        hideIndicator(f, "#hilight-night", "#opt-night");
    }
}

function doBtnNight(f) {
    if ($("#hilight-night").css("display") != "none") {
        hideIndicator(f, "#hilight-night", "#opt-night");
    } else {
        showIndicator(f, "#hilight-night", "#opt-night");
        hideIndicator(f, "#hilight-day", "#opt-day");
    }
}

function doBtnFwd(f) {
    if ($("#hilight-fwd").css("display") != "none") {
        hideIndicator(f, "#hilight-fwd", "#opt-fwd");
    } else {
        showIndicator(f, "#hilight-fwd", "#opt-fwd");
        hideIndicator(f, "#hilight-aft", "#opt-aft");
        hideIndicator(f, "#hilight-into-wind", "#opt-into-wind");
    }
}

function doBtnAft(f) {
    if ($("#hilight-aft").css("display") != "none") {
        hideIndicator(f, "#hilight-aft", "#opt-aft");
    } else {
        showIndicator(f, "#hilight-aft", "#opt-aft");
        hideIndicator(f, "#hilight-fwd", "#opt-fwd");
        hideIndicator(f, "#hilight-into-wind", "#opt-into-wind");
    }
}

function doBtnIntoWind(f) {
    if ($("#hilight-into-wind").css("display") != "none") {
        hideIndicator(f, "#hilight-into-wind", "#opt-into-wind");
    } else {
        showIndicator(f, "#hilight-into-wind", "#opt-into-wind");
        hideIndicator(f, "#hilight-fwd", "#opt-fwd");
        hideIndicator(f, "#hilight-aft", "#opt-aft");
    }
}

function doBtnEngageShutdown(f) {
    if ($("#hilight-engage-shutdown").css("display") != "none") {
        hideIndicator(f, "#hilight-engage-shutdown", "#opt-engage-shutdown");
    } else {
        showIndicator(f, "#hilight-engage-shutdown", "#opt-engage-shutdown");
        hideIndicator(f, "#hilight-spread-fold", "#opt-spread-fold");
        hideIndicator(f, "#hilight-recovery", "#opt-recovery");
        hideIndicator(f, "#hilight-taxi", "#opt-taxi");
        hideIndicator(f, "#hilight-launch", "#opt-launch");
        hideIndicator(f, "#hilight-land", "#opt-land");
        hideIndicator(f, "#hilight-vertrep", "#opt-vertrep");
        hideIndicator(f, "#hilight-xfer", "#opt-xfer");
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnSpreadFold(f) {
    if ($("#hilight-spread-fold").css("display") != "none") {
        hideIndicator(f, "#hilight-spread-fold", "#opt-spread-fold");
    } else {
        showIndicator(f, "#hilight-spread-fold", "#opt-spread-fold");
        hideIndicator(f, "#hilight-recovery", "#opt-recovery");
        hideIndicator(f, "#hilight-engage-shutdown", "#opt-engage-shutdown");
        hideIndicator(f, "#hilight-taxi", "#opt-taxi");
        hideIndicator(f, "#hilight-launch", "#opt-launch");
        hideIndicator(f, "#hilight-land", "#opt-land");
        hideIndicator(f, "#hilight-vertrep", "#opt-vertrep");
        hideIndicator(f, "#hilight-xfer", "#opt-xfer");
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnRecovery(f) {
    if ($("#hilight-recovery").css("display") != "none") {
        hideIndicator(f, "#hilight-recovery", "#opt-recovery");
    } else {
        showIndicator(f, "#hilight-recovery", "#opt-recovery");
        hideIndicator(f, "#hilight-spread-fold", "#opt-spread-fold");
        hideIndicator(f, "#hilight-engage-shutdown", "#opt-engage-shutdown");
        hideIndicator(f, "#hilight-taxi", "#opt-taxi");
        hideIndicator(f, "#hilight-launch", "#opt-launch");
        hideIndicator(f, "#hilight-land", "#opt-land");
        hideIndicator(f, "#hilight-vertrep", "#opt-vertrep");
        hideIndicator(f, "#hilight-xfer", "#opt-xfer");
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnTaxi(f) {
    if ($("#hilight-taxi").css("display") != "none") {
        hideIndicator(f, "#hilight-taxi", "#opt-taxi");
    } else {
        showIndicator(f, "#hilight-taxi", "#opt-taxi");
        hideIndicator(f, "#hilight-spread-fold", "#opt-spread-fold");
        hideIndicator(f, "#hilight-recovery", "#opt-recovery");
        hideIndicator(f, "#hilight-engage-shutdown", "#opt-engage-shutdown");
        hideIndicator(f, "#hilight-launch", "#opt-launch");
        hideIndicator(f, "#hilight-land", "#opt-land");
        hideIndicator(f, "#hilight-vertrep", "#opt-vertrep");
        hideIndicator(f, "#hilight-xfer", "#opt-xfer");
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnLaunch(f) {
    if ($("#hilight-launch").css("display") != "none") {
        hideIndicator(f, "#hilight-launch", "#opt-launch");
    } else {
        showIndicator(f, "#hilight-launch", "#opt-launch");
        hideIndicator(f, "#hilight-spread-fold", "#opt-spread-fold");
        hideIndicator(f, "#hilight-recovery", "#opt-recovery");
        hideIndicator(f, "#hilight-engage-shutdown", "#opt-engage-shutdown");
        hideIndicator(f, "#hilight-taxi", "#opt-taxi");
        hideIndicator(f, "#hilight-land", "#opt-land");
        hideIndicator(f, "#hilight-vertrep", "#opt-vertrep");
        hideIndicator(f, "#hilight-xfer", "#opt-xfer");
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnLand(f) {
    if ($("#hilight-land").css("display") != "none") {
        hideIndicator(f, "#hilight-land", "#opt-land");
    } else {
        showIndicator(f, "#hilight-land", "#opt-land");
        hideIndicator(f, "#hilight-spread-fold", "#opt-spread-fold");
        hideIndicator(f, "#hilight-recovery", "#opt-recovery");
        hideIndicator(f, "#hilight-engage-shutdown", "#opt-engage-shutdown");
        hideIndicator(f, "#hilight-taxi", "#opt-taxi");
        hideIndicator(f, "#hilight-launch", "#opt-launch");
        hideIndicator(f, "#hilight-vertrep", "#opt-vertrep");
        hideIndicator(f, "#hilight-xfer", "#opt-xfer");
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnVertrep(f) {
    if ($("#hilight-vertrep").css("display") != "none") {
        hideIndicator(f, "#hilight-vertrep", "#opt-vertrep");
    } else {
        showIndicator(f, "#hilight-vertrep", "#opt-vertrep");
        hideIndicator(f, "#hilight-spread-fold", "#opt-spread-fold");
        hideIndicator(f, "#hilight-recovery", "#opt-recovery");
        hideIndicator(f, "#hilight-engage-shutdown", "#opt-engage-shutdown");
        hideIndicator(f, "#hilight-taxi", "#opt-taxi");
        hideIndicator(f, "#hilight-launch", "#opt-launch");
        hideIndicator(f, "#hilight-land", "#opt-land");
        hideIndicator(f, "#hilight-xfer", "#opt-xfer");
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnXfer(f) {
    if ($("#hilight-xfer").css("display") != "none") {
        hideIndicator(f, "#hilight-xfer", "#opt-xfer");
    } else {
        showIndicator(f, "#hilight-xfer", "#opt-xfer");
        hideIndicator(f, "#hilight-spread-fold", "#opt-spread-fold");
        hideIndicator(f, "#hilight-recovery", "#opt-recovery");
        hideIndicator(f, "#hilight-engage-shutdown", "#opt-engage-shutdown");
        hideIndicator(f, "#hilight-taxi", "#opt-taxi");
        hideIndicator(f, "#hilight-launch", "#opt-launch");
        hideIndicator(f, "#hilight-land", "#opt-land");
        hideIndicator(f, "#hilight-vertrep", "#opt-vertrep");
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnLight(f) {
    if ($("#hilight-light").css("display") != "none") {
        hideIndicator(f, "#hilight-light", "#opt-light");
    } else {
        showIndicator(f, "#hilight-light", "#opt-light");
        hideIndicator(f, "#hilight-medium", "#opt-medium");
        hideIndicator(f, "#hilight-heavy", "#opt-heavy");
        hideIndicator(f, "#hilight-hot-heavy", "#opt-hot-heavy");
        // hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnMedium(f) {
    if ($("#hilight-medium").css("display") != "none") {
        hideIndicator(f, "#hilight-medium", "#opt-medium");
    } else {
        showIndicator(f, "#hilight-medium", "#opt-medium");
        hideIndicator(f, "#hilight-light", "#opt-light");
        hideIndicator(f, "#hilight-heavy", "#opt-heavy");
        hideIndicator(f, "#hilight-hot-heavy", "#opt-hot-heavy");
        // hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnHeavy(f) {
    if ($("#hilight-heavy").css("display") != "none") {
        hideIndicator(f, "#hilight-heavy", "#opt-heavy");
    } else {
        showIndicator(f, "#hilight-heavy", "#opt-heavy");
        hideIndicator(f, "#hilight-light", "#opt-light");
        hideIndicator(f, "#hilight-medium", "#opt-medium");
        hideIndicator(f, "#hilight-hot-heavy", "#opt-hot-heavy");
        // hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnHotHeavy(f) {
    if ($("#hilight-hot-heavy").css("display") != "none") {
        hideIndicator(f, "#hilight-hot-heavy", "#opt-hot-heavy");
    } else {
        showIndicator(f, "#hilight-hot-heavy", "#opt-hot-heavy");
        hideIndicator(f, "#hilight-light", "#opt-light");
        hideIndicator(f, "#hilight-medium", "#opt-medium");
        hideIndicator(f, "#hilight-heavy", "#opt-heavy");
        // hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnEmergency(f) {
    if ($("#hilight-emergency").css("display") != "none") {
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    } else {
        showIndicator(f, "#hilight-emergency", "#opt-emergency");
        hideIndicator(f, "#hilight-recovery", "#opt-recovery");
        hideIndicator(f, "#hilight-xfer", "#opt-xfer");
        hideIndicator(f, "#hilight-engage-shutdown", "#opt-engage-shutdown");
        hideIndicator(f, "#hilight-taxi", "#opt-taxi");
        hideIndicator(f, "#hilight-launch", "#opt-launch");
        hideIndicator(f, "#hilight-land", "#opt-land");
        hideIndicator(f, "#hilight-vertrep", "#opt-vertrep");
    }
}

function doBtnCda(f) {
    if ($("#hilight-cda").css("display") != "none") {
        hideIndicator(f, "#hilight-cda", "#opt-cda");
    } else {
        showIndicator(f, "#hilight-cda", "#opt-cda");
        hideIndicator(f, "#hilight-1", "#opt-1");
        hideIndicator(f, "#hilight-2", "#opt-2");
        hideIndicator(f, "#hilight-3", "#opt-3");
        hideIndicator(f, "#hilight-4", "#opt-4");
        hideIndicator(f, "#hilight-5", "#opt-5");
        hideIndicator(f, "#hilight-6", "#opt-6");
        hideIndicator(f, "#hilight-cdf", "#opt-cdf");
    }
}

function doBtn6(f) {
    if ($("#hilight-6").css("display") != "none") {
        hideIndicator(f, "#hilight-6", "#opt-6");
    } else {
        showIndicator(f, "#hilight-6", "#opt-6");
        hideIndicator(f, "#hilight-1", "#opt-1");
        hideIndicator(f, "#hilight-2", "#opt-2");
        hideIndicator(f, "#hilight-3", "#opt-3");
        hideIndicator(f, "#hilight-4", "#opt-4");
        hideIndicator(f, "#hilight-5", "#opt-5");
        hideIndicator(f, "#hilight-cda", "#opt-cda");
        hideIndicator(f, "#hilight-cdf", "#opt-cdf");
    }
}

function doBtn5(f) {
    if ($("#hilight-5").css("display") != "none") {
        hideIndicator(f, "#hilight-5", "#opt-5");
    } else {
        showIndicator(f, "#hilight-5", "#opt-5");
        hideIndicator(f, "#hilight-1", "#opt-1");
        hideIndicator(f, "#hilight-2", "#opt-2");
        hideIndicator(f, "#hilight-3", "#opt-3");
        hideIndicator(f, "#hilight-4", "#opt-4");
        hideIndicator(f, "#hilight-6", "#opt-6");
        hideIndicator(f, "#hilight-cda", "#opt-cda");
        hideIndicator(f, "#hilight-cdf", "#opt-cdf");
    }
}

function doBtn4(f) {
    if ($("#hilight-4").css("display") != "none") {
        hideIndicator(f, "#hilight-4", "#opt-4");
    } else {
        showIndicator(f, "#hilight-4", "#opt-4");
        hideIndicator(f, "#hilight-1", "#opt-1");
        hideIndicator(f, "#hilight-2", "#opt-2");
        hideIndicator(f, "#hilight-3", "#opt-3");
        hideIndicator(f, "#hilight-5", "#opt-5");
        hideIndicator(f, "#hilight-6", "#opt-6");
        hideIndicator(f, "#hilight-cda", "#opt-cda");
        hideIndicator(f, "#hilight-cdf", "#opt-cdf");
    }
}

function doBtn3(f) {
    if ($("#hilight-3").css("display") != "none") {
        hideIndicator(f, "#hilight-3", "#opt-3");
    } else {
        showIndicator(f, "#hilight-3", "#opt-3");
        hideIndicator(f, "#hilight-1", "#opt-1");
        hideIndicator(f, "#hilight-2", "#opt-2");
        hideIndicator(f, "#hilight-4", "#opt-4");
        hideIndicator(f, "#hilight-5", "#opt-5");
        hideIndicator(f, "#hilight-6", "#opt-6");
        hideIndicator(f, "#hilight-cda", "#opt-cda");
        hideIndicator(f, "#hilight-cdf", "#opt-cdf");
    }
}

function doBtn2(f) {
    if ($("#hilight-2").css("display") != "none") {
        hideIndicator(f, "#hilight-2", "#opt-2");
    } else {
        showIndicator(f, "#hilight-2", "#opt-2");
        hideIndicator(f, "#hilight-1", "#opt-1");
        hideIndicator(f, "#hilight-3", "#opt-3");
        hideIndicator(f, "#hilight-4", "#opt-4");
        hideIndicator(f, "#hilight-5", "#opt-5");
        hideIndicator(f, "#hilight-6", "#opt-6");
        hideIndicator(f, "#hilight-cda", "#opt-cda");
        hideIndicator(f, "#hilight-cdf", "#opt-cdf");
    }
}

function doBtn1(f) {
    if ($("#hilight-1").css("display") != "none") {
        hideIndicator(f, "#hilight-1", "#opt-1");
    } else {
        showIndicator(f, "#hilight-1", "#opt-1");
        hideIndicator(f, "#hilight-2", "#opt-2");
        hideIndicator(f, "#hilight-3", "#opt-3");
        hideIndicator(f, "#hilight-4", "#opt-4");
        hideIndicator(f, "#hilight-5", "#opt-5");
        hideIndicator(f, "#hilight-6", "#opt-6");
        hideIndicator(f, "#hilight-cda", "#opt-cda");
        hideIndicator(f, "#hilight-cdf", "#opt-cdf");
    }
}

function doBtnCdf(f) {
    if ($("#hilight-cdf").css("display") != "none") {
        hideIndicator(f, "#hilight-cdf", "#opt-cdf");
    } else {
        showIndicator(f, "#hilight-cdf", "#opt-cdf");
        hideIndicator(f, "#hilight-2", "#opt-2");
        hideIndicator(f, "#hilight-3", "#opt-3");
        hideIndicator(f, "#hilight-4", "#opt-4");
        hideIndicator(f, "#hilight-5", "#opt-5");
        hideIndicator(f, "#hilight-6", "#opt-6");
        hideIndicator(f, "#hilight-cda", "#opt-cda");
        hideIndicator(f, "#hilight-1", "#opt-1");
    }
}

// binary animation of button down
function doBtnDown(f, btn) {
    let theBtn = f.paper.select(btn);
    let children = theBtn.children();
    let foundGradient;
    let foundFace;

    children.forEach((item) => {
        foundGradient = item.node.id.substr(0, 8);
        foundFace = item.node.id.substr(0, 4);

        if (foundGradient === "gradient") {
            item.attr({
                opacity: 0
            });
        } else if (foundFace === "face") {
            item.attr({
                stroke: "#9a9a9a"
            });
        }
        var grandchildren = item.children();
        grandchildren.forEach((item) => {
            foundGradient = item.node.id.substr(0, 8);
            foundFace = item.node.id.substr(0, 4);

            if (foundGradient === "gradient") {
                item.attr({
                    opacity: 0
                });
            } else if (foundFace === "face") {
                item.attr({
                    stroke: "#9a9a9a"
                });
            }
        });
    });
}

// binary animation of button up
function doBtnUp(f, btn) {
    let theBtn = f.paper.select(btn);
    let children = theBtn.children();
    let foundGradient;
    let foundFace;

    children.forEach((item) => {
        foundGradient = item.node.id.substr(0, 8);
        foundFace = item.node.id.substr(0, 4);
        if (foundGradient === "gradient") {
            item.attr({
                opacity: 0.33
            });
        } else if (foundFace === "face") {
            item.attr({
                stroke: "none"
            });
        }
        var grandchildren = item.children();
        grandchildren.forEach((item) => {
            foundGradient = item.node.id.substr(0, 8);
            foundFace = item.node.id.substr(0, 4);

            if (foundGradient === "gradient") {
                item.attr({
                    opacity: 0.33
                });
            } else if (foundFace === "face") {
                item.attr({
                    stroke: "none"
                });
            }
        });
    });
}

function getObectByIndex(theObject, idx) {
    // this snippet retrieves specific field by index.
    var key = Object.keys(theObject)[idx];
    var value = theObject[key];

    return value;
}

function removeObjectByIndex(theObject, idx) {
    if (idx > -1) {
        theObject.splice(idx, 1);
    }
}

function resetFilter(theFilter, idx) {
    let tmpStatus = btnStatus[idx];

    // resetFilterArray();
    filterByAircraft(selectedAircraft);
    switch (theFilter) {
        case ACTIONS:
            btnStatus[ENGAGE] = false; // Engage
            btnStatus[TAXI] = false; // Taxi
            btnStatus[LAUNCH] = false; // Launch
            btnStatus[LAND] = false; // Land
            btnStatus[VERTREP] = false; // Vertrep
            btnStatus[XFER] = false; // Xfer
            btnStatus[EMERGENCY] = false; // Emergency
            btnStatus[RECOVERY] = false; // Recovery
            btnStatus[SPREADFOLD] = false; // Spread Fold

            for (let x = ENGAGE; x <= SPREADFOLD; x++) { // Engage - SpreadFold
                if (idx === x) {
                    btnStatus[x] = tmpStatus;
                }
            }
            break;
        case WEIGHTS:
            btnStatus[LIGHT] = false;
            btnStatus[MEDIUM] = false;
            btnStatus[HEAVY] = false;
            btnStatus[HOTHEAVY] = false;
            // isLight = false;
            // isMedium = false;
            // isHeavy = false;
            // isHotHeavy = false;

            for (let x = LIGHT; x <= HOTHEAVY; x++) {
                if (x === idx) {
                    btnStatus[x] = tmpStatus;
                }
            }

            break;
        case POSITIONS:
            btnStatus[CDA] = false; // CDA
            btnStatus[POS6] = false; // Pos 6
            btnStatus[POS5] = false; // Pos 5
            btnStatus[POS4] = false; // Pos 4
            btnStatus[POS3] = false; // Pos 3
            btnStatus[POS2] = false; // Pos 2
            btnStatus[POS1] = false; // Pos 1
            btnStatus[CDF] = false; // CDF

            for (let x = CDA; x <= CDF; x++) { // CDA - CDF
                if (x === idx) {
                    btnStatus[x] = tmpStatus;
                }
            }

            break;
        case DIRECTIONS:
            btnStatus[FWD] = false; // Forward
            btnStatus[AFT] = false; // Aft
            btnStatus[INTOWIND] = false; // Into Wind
            // isFwd = false;
            // isAft = false;
            // isIntoWind = false;

            for (let x = FWD; x <= INTOWIND; x++) { // FWD - INTOWIND
                if (x === idx) {
                    btnStatus[x] = tmpStatus;
                }
            }

            break;
        case TIMES:
            btnStatus[DAY] = false; // Day
            btnStatus[NIGHT] = false; // Night

            for (let x = DAY; x <= NIGHT; x++) { // DAY - NIGHT
                if (x === idx) {
                    btnStatus[x] = tmpStatus;
                }
            }
            break;
    }
}

function filterByAircraft(chosenAircraft) {
    filteredArray = [];
    for (let x = 0; x < tblProfile.rows.length; x++) {
        if (tblProfile.rows[x][2] === chosenAircraft) {
            filteredArray.push(tblProfile.rows[x]);
        }
    }
}

function filter() {
    let temp = "";
    let btnCount = 0;

    // scan and store all of the panel indicators which are on
    for (let x = 0; x < btnStatus.length; x++) {
        if (btnStatus[x]) {
            btnCount++;
        }
    }

    // because it resets the filter before each button press, a search has to be done through the whole list of buttons.
    // filter by looping
    let MINOPTIONSIDX = 26;
    let OFFSET = 3;

    for (let optIdx = 0; optIdx < btnStatus.length; optIdx++) {
        for (let x = 0; x < filteredArray.length; x++) {
            let fltr = filteredArray[x][optIdx + OFFSET];
            let btnStat = btnStatus[optIdx];
            let minOptionsChosen = filteredArray[x][MINOPTIONSIDX + OFFSET];

            if (fltr !== '1' && fltr !== '2' && btnStat && btnCount < minOptionsChosen) {
                console.log(filteredArray[x][1]);
                removeObjectByIndex(filteredArray, x);

                x = 0;
            }
        }
    }

    for (let optIdx = 0; optIdx < btnStatus.length; optIdx++) {
        for (let x = 0; x < filteredArray.length; x++) {
            let fltr = filteredArray[x][optIdx + OFFSET];
            let btnStat = btnStatus[optIdx];
            let minOptionsChosen = filteredArray[x][MINOPTIONSIDX + OFFSET];

            // the option buttons start at index 3 that's why there's + 3
            if (fltr !== '1' && fltr !== '2' && btnStat && btnCount < minOptionsChosen) {
                console.log(filteredArray[x][1]);
                removeObjectByIndex(filteredArray, x);
                x = 0;
            }
        }
    }

    let tmpFltr = [];
    let scoredPoints = [];
    let score;
    score = 0;


    for (let x = 0; x < filteredArray.length; x++) {
        for (let y = 0; y < filteredArray[x].length; y++) {
            if (btnStatus[y]) {
                if (filteredArray[x][y + OFFSET] === '0') {
                    score -= 999;

                } else if (filteredArray[x][y + OFFSET] === '1') {
                    score += 1;
                }
            }
        }
        scoredPoints.push({
            'score': score,
            'id': x
        });
        score = 0;
    }

    scoredPoints.sort((a, b) => {
        return b.score - a.score;
    });

    let finalScore = scoredPoints[0].score;
    let finalChoice = filteredArray[scoredPoints[0].id];
    let fltrInt = parseInt(filteredArray[scoredPoints[0].id][MINOPTIONSIDX + OFFSET]);
    if (fltrInt === btnCount && tmpFltr.length === 0 && finalScore >= 0) {
        tmpFltr.push(finalChoice);
    }


    if (tmpFltr !== undefined) {
        filteredArray = tmpFltr;
    }

    // reset all plots to hidden
    hideAllPlots();
    let AIRCRAFTIDIDX = 1;
    let PLOTIDX = 32;
    let PITCHIDX = 30;
    let ROLLIDX = 31;
    // show the matching plot
    if (filteredArray.length === 1) {
        optAircraftIdIndicator.attr({
            text: filteredArray[0][AIRCRAFTIDIDX]
        });
        $("#lbl-aircraft-id").show(); // show aircraft id
        $("#" + filteredArray[0][PLOTIDX]).show(); // show plotted wind data
        let pitch = filteredArray[0][PITCHIDX];
        let roll = filteredArray[0][ROLLIDX];

        // === Show the pitch and roll data ===
        showPitchAndRoll(pitch, roll);
    } else {
        $("#lbl-aircraft-id").hide();
    }

}

function resetFilterArray() {
    filteredArray = [];
    for (let y = 0; y < tblProfile.rows.length; y++) {
        filteredArray.push(tblProfile.rows[y]);
    }
}

function resetBtnStatus() {
    for (let x = 0; x < btnStatus.length; x++) {
        btnStatus[x] = false;
    }
    isDay = false;
    isNight = false;
    isFwd = false;
    isAft = false;
    isIntoWind = false;
    isCda = false;
    is6 = false;
    is5 = false;
    is4 = false;
    is3 = false;
    is2 = false;
    is1 = false;
    isCdf = false;
    isEngage = false;
    isTaxi = false;
    isLaunch = false;
    isLand = false;
    isVertrep = false;
    isXfer = false;
    isLight = false;
    isMedium = false;
    isHeavy = false;
    isHotHeavy = false;
    isEmergency = false;
    isRecovery = false;
    isSpreadFold = false;
}

function showPitchAndRoll(pitch, roll) {
    let pitchDownTag = "#pitch-down-max-";
    let pitchUpTag = "#pitch-up-max-";
    let rollPortTag = "#roll-port-max-";
    let rollStarboardTag = "#roll-starboard-max-";

    resetPitchRoll();
    switch (pitch) {
        case "0":
            pitchDownTag += "0";
            pitchUpTag += "0";
            break;
        case "1":
            pitchDownTag += "1";
            pitchUpTag += "1";
            break;
        case "1.5":
            pitchDownTag += "15";
            pitchUpTag += "15";
            break;
        case "2":
            pitchDownTag += "2";
            pitchUpTag += "2";
            break;
        case "3":
            pitchDownTag += "3";
            pitchUpTag += "3";
            break;
        case "4":
            pitchDownTag += "4";
            pitchUpTag += "4";
            break;
    }

    switch (roll) {
        case "0":
            rollPortTag += "1";
            rollStarboardTag += "1";
            break;
        case "1":
            rollPortTag += "1";
            rollStarboardTag += "1";
            break;
        case "1.5":
            rollPortTag += "15";
            rollStarboardTag += "15";
            break;
        case "2":
            rollPortTag += "2";
            rollStarboardTag += "2";
            break;
        case "3":
            rollPortTag += "3";
            rollStarboardTag += "3";
            break;
        case "4":
            rollPortTag += "4";
            rollStarboardTag += "4";
            break;
        case "5":
            rollPortTag += "5";
            rollStarboardTag += "5";
            break;
    }

    if (pitch !== "0") {
        $(pitchDownTag).show();
        $(pitchUpTag).show();
    }
    if (roll !== "0") {
        $(rollPortTag).show();
        $(rollStarboardTag).show();
    }
}

function resetPitchRoll() {
    resetPitch();
    resetRoll();
}

function resetPitch() {
    let pitchDownTag = "#pitch-down-max-";
    let pitchUpTag = "#pitch-up-max-";

    $(pitchDownTag + "1").hide();
    $(pitchDownTag + "15").hide();
    $(pitchDownTag + "2").hide();
    $(pitchDownTag + "3").hide();
    $(pitchDownTag + "4").hide();
    $(pitchUpTag + "1").hide();
    $(pitchUpTag + "15").hide();
    $(pitchUpTag + "2").hide();
    $(pitchUpTag + "3").hide();
    $(pitchUpTag + "4").hide();
}

function resetRoll() {
    let rollPortTag = "#roll-port-max-";
    let rollStarboardTag = "#roll-starboard-max-";

    $(rollPortTag + "1").hide();
    $(rollPortTag + "15").hide();
    $(rollPortTag + "2").hide();
    $(rollPortTag + "3").hide();
    $(rollPortTag + "4").hide();
    $(rollPortTag + "5").hide();
    $(rollStarboardTag + "1").hide();
    $(rollStarboardTag + "15").hide();
    $(rollStarboardTag + "2").hide();
    $(rollStarboardTag + "3").hide();
    $(rollStarboardTag + "4").hide();
    $(rollStarboardTag + "5").hide();
}

function resetButtonUps() {
    doBtnUp(f, "#btn-day");
}