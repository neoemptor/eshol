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
        mainMenu.attr("display", "");
    } else {
        mainMenu.attr("display", "");
        $("#main-menu").hide();
        $("#aircraft-shol-menu").hide();
        $("#active-shol-display").hide();
        $("#lbl-aircraft-id").hide();
        hideAllIndicators(f);
        hideAllPlots();
        resetBtnStatus();
        resetFilterArray();
    }
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
    if ($("#aircraft-shol-menu").css("display") != "none" ||
        $("#active-shol-display").css("display") != "none") {
        $("#aircraft-shol-menu").hide();
        $("#active-shol-display").hide();
        $("#main-menu").show();
        $("#lbl-aircraft-id").hide();
        hideAllIndicators(f);
        hideAllPlots();
        resetBtnStatus();
        resetFilterArray();
    }
}

function doBtnBack(f) {
    // if main menu visible then show aircraft shol menu
    if ($("#main-menu").css("display") != "none") {
        $("#main-menu").hide();
        $("#aircraft-shol-menu").show();
    } else // if aircraft shol select page then selected MRH90
        if (
            $("#aircraft-shol-menu")
                .css("display") != "none") {
            $("#aircraft-shol-menu").hide();
            $("#active-shol-display").show();

            // filter data by MRH90 todo: add multiple aircraft
            selectedAircraft = MRH90;

            optAircraftIndicator.attr({
                text: selectedAircraft
            });
            $("opt-aircraft-indicator").show();
        } else if (
            $("#active-shol-display")
                .css("display") != "none") {
            $("#active-shol-display").hide();
            $("#aircraft-shol-menu").show();
            $("#lbl-aircraft-id").hide();
            hideAllIndicators(f);
            hideAllPlots();
            resetBtnStatus();
            resetFilterArray();
        }
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
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
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
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
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
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
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
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    }
}

function doBtnEmergency(f) {
    if ($("#hilight-emergency").css("display") != "none") {
        hideIndicator(f, "#hilight-emergency", "#opt-emergency");
    } else {
        showIndicator(f, "#hilight-emergency", "#opt-emergency");
        hideIndicator(f, "#hilight-light", "#opt-light");
        hideIndicator(f, "#hilight-medium", "#opt-medium");
        hideIndicator(f, "#hilight-heavy", "#opt-heavy");
        hideIndicator(f, "#hilight-hot-heavy", "#opt-hot-heavy");
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


function doBtnDown(f, btn) {
    var theBtn = f.paper.select(btn);
    var children = theBtn.children();
    children.forEach((item) => {
        if (item.node.id.substr(0, 8) === "gradient") {
            item.attr({
                opacity: 0
            });
        } else if (item.node.id.substr(0, 4) === "face") {
            item.attr({
                stroke: "#9a9a9a"
            });
        }
        var grandchildren = item.children();
        grandchildren.forEach((item) => {
            if (item.node.id.substr(0, 8) === "gradient") {
                item.attr({
                    opacity: 0
                });
            } else if (item.node.id.substr(0, 4) === "face") {
                item.attr({
                    stroke: "#9a9a9a"
                });
            }
        });
    });
}

function doBtnUp(f, btn) {
    var theBtn = f.paper.select(btn);
    var children = theBtn.children();
    children.forEach((item) => {
        if (item.node.id.substr(0, 8) === "gradient") {
            item.attr({
                opacity: 0.33
            });
        } else if (item.node.id.substr(0, 4) === "face") {
            item.attr({
                stroke: "none"
            });
        }
        var grandchildren = item.children();
        grandchildren.forEach((item) => {
            if (item.node.id.substr(0, 8) === "gradient") {
                item.attr({
                    opacity: 0.33
                });
            } else if (item.node.id.substr(0, 4) === "face") {
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

    resetFilterArray();
    switch (theFilter) {
        case ACTIONS:
            btnStatus[17] = false;
            btnStatus[18] = false;
            btnStatus[19] = false;
            btnStatus[20] = false;
            btnStatus[21] = false;
            btnStatus[22] = false;
            btnStatus[23] = false;
            isEngage = false;
            isTaxi = false;
            isLaunch = false;
            isLand = false;
            isVertrep = false;
            isXfer = false;
            isEmergency = false;

            for (let x = 17; x < 24; x++) {
                if (idx === x) {
                    btnStatus[x] = tmpStatus;
                }
            }

            switch (idx) {
                case 17:
                    isEngage = tmpStatus;
                    break;
                case 18:
                    isTaxi = tmpStatus;
                    break;
                case 19:
                    isLaunch = tmpStatus;
                    break;
                case 20:
                    isLand = tmpStatus;
                    break;
                case 21:
                    isVertrep = tmpStatus;
                    break;
                case 22:
                    isXfer = tmpStatus;
                    break;
                case 23:
                    isEmergency = tmpStatus;
                    break;
            }
            break;
        case WEIGHTS:
            btnStatus[0] = false;
            btnStatus[1] = false;
            btnStatus[2] = false;
            btnStatus[3] = false;
            isLight = false;
            isMedium = false;
            isHeavy = false;
            isHotHeavy = false;

            for (let x = 0; x < 4; x++) {
                if (x === idx) {
                    btnStatus[x] = tmpStatus;
                }
            }

            switch (idx) {
                case 0:
                    isLight = tmpStatus;
                    break;
                case 1:
                    isMedium = tmpStatus;
                    break;
                case 2:
                    isHeavy = tmpStatus;
                    break;
                case 3:
                    isHotHeavy = tmpStatus;
                    break;
            }

            break;
        case POSITIONS:
            btnStatus[9] = false;
            btnStatus[10] = false;
            btnStatus[11] = false;
            btnStatus[12] = false;
            btnStatus[13] = false;
            btnStatus[14] = false;
            btnStatus[15] = false;
            btnStatus[16] = false;
            isCda = false;
            is6 = false;
            is5 = false;
            is4 = false;
            is3 = false;
            is2 = false;
            is1 = false;
            isCdf = false;

            for (let x = 9; x < 17; x++) {
                if (x === idx) {
                    btnStatus[x] = tmpStatus;
                }
            }

            switch (idx) {
                case 9:
                    isCda = tmpStatus;
                    break;
                case 10:
                    is6 = tmpStatus;
                    break;
                case 11:
                    is5 = tmpStatus;
                    break;
                case 12:
                    is4 = tmpStatus;
                    break;
                case 13:
                    is3 = tmpStatus;
                    break;
                case 14:
                    is2 = tmpStatus;
                    break;
                case 15:
                    is1 = tmpStatus;
                    break;
                case 16:
                    isCdf = tmpStatus;
                    break;
            }

            break;
        case DIRECTIONS:
            btnStatus[4] = false;
            btnStatus[5] = false;
            btnStatus[6] = false;
            isFwd = false;
            isAft = false;
            isIntoWind = false;

            for (let x = 4; x < 7; x++) {
                if (x === idx) {
                    btnStatus[x] = tmpStatus;
                }
            }

            switch (idx) {
                case 4:
                    isFwd = tmpStatus;
                    break;
                case 5:
                    isAft = tmpStatus;
                    break;
                case 6:
                    isIntoWind = tmpStatus;
                    break;
            }
            break;
        case TIMES:
            btnStatus[7] = false;
            btnStatus[8] = false;
            isDay = false;
            isNight = false;

            for (let x = 7; x < 9; x++) {
                if (x === idx) {
                    btnStatus[x] = tmpStatus;
                }
            }

            switch (idx) {
                case 7:
                    isDay = tmpStatus;
                    break;
                case 8:
                    isNight = tmpStatus;
                    break;
            }
            break;
    }
}

function filter() {
    let temp = "";
    let btnCount = 0;

    for (let x = 0; x < btnStatus.length; x++) {
        if (btnStatus[x]) {
            btnCount++;
        }
    }

    // filter by looping
    for (let optIdx = 0; optIdx < btnStatus.length; optIdx++) {
        for (let x = 0; x < filteredArray.length; x++) {
            let fltr = filteredArray[x][optIdx + 3];
            let btnStat = btnStatus[optIdx];
            let fltrInt = parseInt(filteredArray[x][27]);

            // the option buttons start at index 4 that's why there's + 3
            if (fltr !== '1' && fltr !== '2' && btnStat) { // && fltrInt !== btnCount) {
                // filteredArray.push(tempArray[x]);
                removeObjectByIndex(filteredArray, x);
                x = 0;
            }
        }
    }

    for (let optIdx = 0; optIdx < btnStatus.length; optIdx++) {
        for (let x = 0; x < filteredArray.length; x++) {
            let fltr = filteredArray[x][optIdx + 3];
            let btnStat = btnStatus[optIdx];
            let fltrInt = parseInt(filteredArray[x][27]);

            // the option buttons start at index 4 that's why there's + 3
            if (fltr !== '1' && fltr !== '2' && btnStat) { // && fltrInt !== btnCount) {
                // filteredArray.push(tempArray[x]);
                removeObjectByIndex(filteredArray, x);
                x = 0;
            }
        }
    }

    let tmpFltr = [];
    for (let x = 0; x < filteredArray.length; x++) {
        let fltrInt = parseInt(filteredArray[x][27]);
        if (fltrInt === btnCount && tmpFltr.length === 0) {
            tmpFltr.push(filteredArray[x]);
        }
    }
    if (tmpFltr !== undefined) {
        filteredArray = tmpFltr;
    }

    // reset all plots to hidden
    hideAllPlots();

    // show the matching plot
    if (filteredArray.length === 1) {
        optAircraftIdIndicator.attr({
            text: filteredArray[0][1]
        });
        $("#lbl-aircraft-id").show();
        $("#" + filteredArray[0][30]).show();
        let pitch = filteredArray[0][28];
        let roll = filteredArray[0][29];
        showPitchAndRoll(pitch, roll);
    } else {
        $("#lbl-aircraft-id").hide();
    }

}

function resetFilterArray() {
    // var resetNo = false;
    // for (let x = 0; x < btnStatus.length; x++) {
    //     if (btnStatus[x]) resetNo = true;
    // }
    // if (!resetNo) {
    filteredArray = [];
    for (let y = 0; y < tblProfile.rows.length; y++) {
        filteredArray.push(tblProfile.rows[y]);
    }
    // }
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
}

function showPitchAndRoll(pitch, roll) {
    let pitchDownTag = "#pitch-down-max-";
    let pitchUpTag = "#pitch-up-max-";
    let rollPortTag = "#roll-port-max-";
    let rollStarboardTag = "#roll-starboard-max-";

    switch (pitch) {
        case "1":
            $(pitchDownTag + "15").hide();
            $(pitchDownTag + "2").hide();
            $(pitchDownTag + "3").hide();
            $(pitchDownTag + "4").hide();
            $(pitchUpTag + "15").hide();
            $(pitchUpTag + "2").hide();
            $(pitchUpTag + "3").hide();
            $(pitchUpTag + "4").hide();            
            pitchDownTag += "1";
            pitchUpTag += "1";
            break;
        case "1.5":
            $(pitchDownTag + "1").hide();
            $(pitchDownTag + "2").hide();
            $(pitchDownTag + "3").hide();
            $(pitchDownTag + "4").hide();
            $(pitchUpTag + "1").hide();
            $(pitchUpTag + "2").hide();
            $(pitchUpTag + "3").hide();
            $(pitchUpTag + "4").hide();
            pitchDownTag += "15";
            pitchUpTag += "15";
            break;
        case "2":
            $(pitchDownTag + "15").hide();
            $(pitchDownTag + "1").hide();
            $(pitchDownTag + "3").hide();
            $(pitchDownTag + "4").hide();
            $(pitchUpTag + "15").hide();
            $(pitchUpTag + "1").hide();
            $(pitchUpTag + "3").hide();
            $(pitchUpTag + "4").hide();
            pitchDownTag += "2";
            pitchUpTag += "2";
            break;
        case "3":
            $(pitchDownTag + "15").hide();
            $(pitchDownTag + "2").hide();
            $(pitchDownTag + "1").hide();
            $(pitchDownTag + "4").hide();
            $(pitchUpTag + "15").hide();
            $(pitchUpTag + "2").hide();
            $(pitchUpTag + "1").hide();
            $(pitchUpTag + "4").hide();
            pitchDownTag += "3";
            pitchUpTag += "3";
            break;
        case "4":
            $(pitchDownTag + "15").hide();
            $(pitchDownTag + "2").hide();
            $(pitchDownTag + "3").hide();
            $(pitchDownTag + "1").hide();
            $(pitchUpTag + "15").hide();
            $(pitchUpTag + "2").hide();
            $(pitchUpTag + "3").hide();
            $(pitchUpTag + "1").hide();
            pitchDownTag += "4";
            pitchUpTag += "4";
            break;
    }

    switch (roll) {
        case "1":
            $(rollPortTag + "15").hide();
            $(rollPortTag + "2").hide();
            $(rollPortTag + "3").hide();
            $(rollPortTag + "4").hide();
            $(rollStarboardTag + "15").hide();
            $(rollStarboardTag + "2").hide();
            $(rollStarboardTag + "3").hide();
            $(rollStarboardTag + "4").hide();
            rollPortTag += "1";
            rollStarboardTag += "1";
            break;
        case "1.5":
            $(rollPortTag + "1").hide();
            $(rollPortTag + "2").hide();
            $(rollPortTag + "3").hide();
            $(rollPortTag + "4").hide();
            $(rollStarboardTag + "1").hide();
            $(rollStarboardTag + "2").hide();
            $(rollStarboardTag + "3").hide();
            $(rollStarboardTag + "4").hide();
            rollPortTag += "15";
            rollStarboardTag += "15";
            break;
        case "2":
            $(rollPortTag + "15").hide();
            $(rollPortTag + "1").hide();
            $(rollPortTag + "3").hide();
            $(rollPortTag + "4").hide();
            $(rollStarboardTag + "15").hide();
            $(rollStarboardTag + "1").hide();
            $(rollStarboardTag + "3").hide();
            $(rollStarboardTag + "4").hide();
            rollPortTag += "2";
            rollStarboardTag += "2";
            break;
        case "3":
            $(rollPortTag + "15").hide();
            $(rollPortTag + "2").hide();
            $(rollPortTag + "1").hide();
            $(rollPortTag + "4").hide();
            $(rollStarboardTag + "15").hide();
            $(rollStarboardTag + "2").hide();
            $(rollStarboardTag + "1").hide();
            $(rollStarboardTag + "4").hide();
            rollPortTag += "3";
            rollStarboardTag += "3";
            break;
        case "4":
            $(rollPortTag + "15").hide();
            $(rollPortTag + "2").hide();
            $(rollPortTag + "3").hide();
            $(rollPortTag + "1").hide();
            $(rollStarboardTag + "15").hide();
            $(rollStarboardTag + "2").hide();
            $(rollStarboardTag + "3").hide();
            $(rollStarboardTag + "1").hide();
            rollPortTag += "4";
            rollStarboardTag += "4";
            break;
    }

    $(pitchDownTag).show();
    $(pitchUpTag).show();

    $(rollPortTag).show();
    $(rollStarboardTag).show();

}