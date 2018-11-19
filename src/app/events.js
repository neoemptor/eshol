function initEvents(f) {
    //  back button -------------------------
    // this button is also for selecting MRH90 in the aircraft 
    // shol menu
    btnBack.mousedown(() => {
        doBtnDown(f, "#btn-back");
        doBtnBack(f);
        console.log("back btn down");
    });

    btnBack.mouseup(() => {
        doBtnUp(f, "#btn-back");
        console.log("back btn up");
    });

    btnBright.mousedown(() => {
        doBtnDown(f, "#btn-bright");
        console.log("bright btn down");
        let isVisASholMenu = (aircraftSholMenu.attr("display") != "none");
        let isVisMainMenu = (mainMenu.attr("display") != "none");
        let isVisASholDisplay = (activeSholDisplay.attr("display") != "none");

        if (parseFloat(brightness).toFixed(1) > parseFloat(0.1).toFixed(1)) {
            if (isVisASholDisplay || isVisASholMenu || isVisMainMenu) {
                brightness = parseFloat(brightness).toFixed(1) - parseFloat(0.1).toFixed(1);
                brightnessScreen.attr({
                    opacity: brightness
                });
            }
        }
        console.log("brightness: " + parseFloat(brightness).toFixed(1));
    });

    btnBright.mouseup(() => {
        doBtnUp(f, "#btn-bright");
        console.log("bright btn up");
    });

    btnDim.mousedown(() => {
        doBtnDown(f, "#btn-dim");
        console.log("dim btn down");
        let isVisASholMenu = (aircraftSholMenu.attr("display") != "none");
        let isVisMainMenu = (mainMenu.attr("display") != "none");
        let isVisASholDisplay = (activeSholDisplay.attr("display") != "none");
        let tmpBrt = parseFloat(brightness).toFixed(1);
        if (tmpBrt <= parseFloat(0.9).toFixed(1)) {
            if (isVisASholDisplay || isVisASholMenu || isVisMainMenu) {
                brightness = parseFloat(brightness) + parseFloat(0.1);
                brightnessScreen.attr({
                    opacity: brightness
                });
            }
        }
        console.log("brightness: " + parseFloat(brightness).toFixed(1));
    });

    btnDim.mouseup(() => {
        doBtnUp(f, "#btn-dim");
        console.log("dim btn up");
    });

    btnMenu.mousedown(() => {
        doBtnDown(f, "#btn-menu");
        goBackToMainMenu(f);
        console.log("menu btn down");
    });

    btnMenu.mouseup(() => {
        doBtnUp(f, "#btn-menu");
        $("#btn-menu").hide();
        console.log("back btn up");
    });

    btnAircraftShols.mousedown(() => {
        doBtnDown(f, "#btn-aircraft-shols");
        doBtnAircraftShols(f);
        console.log("aircraft shols btn down");
    });

    btnAircraftShols.mouseup(() => {
        doBtnUp(f, "#btn-aircraft-shols");
        console.log("aircraft shols btn up");
    });

    // ====================== MH60R Events ===============================
    btnMH60R.mousedown(() => {
        doBtnDown(f, "#btn-mh60r");
        doBtnMH60R(f);
        console.log("MH60R button down");
    });

    btnMH60R.mouseup(() => {
        doBtnUp(f, "#btn-mh60r");
        console.log("MH60R btn up");
    });


    // ====================== MRH90 Events ===============================
    btnMRH90.mousedown(() => {
        doBtnDown(f, "#btn-mrh90");
        doBtnMRH90(f);
        console.log("MRH90 button down");
    });

    btnMRH90.mouseup(() => {
        doBtnUp(f, "#btn-mrh90");
        console.log("MRH90 btn up");
    });

    // ====================== S70A9 Events ===============================
    btnS70A9.mousedown(() => {
        doBtnDown(f, "#btn-s70a9");
        doBtnS70A9(f);
        console.log("S70A9 button down");
    });

    btnS70A9.mouseup(() => {
        doBtnUp(f, "#btn-s70a9");
        console.log("S70A9 btn up");
    });

    // ====================== Time Events ===============================

    btnDay.mousedown(() => {
        if (!clickFromBtnMH60R) { // this is to avoid bug which triggers mouse down from other menu.

            doBtnDay(f);
            resetFilter(TIMES, DAY);
            resetPitchRoll();
            btnStatus[DAY] = !btnStatus[DAY]; // isDay;
        }
        console.log("day btn down");
        doBtnDown(f, "#btn-day");
    });

    btnDay.mouseup(() => {
        if (!clickFromBtnMH60R) { // this is to avoid bug which triggers mouse down from other menu.
            doBtnUp(f, "#btn-day");
            filter();
            console.log("day btn up");
        } else {
            clickFromBtnMH60R = false;
        }
    });

    btnNight.mousedown(() => {
        if (!clickFromBtnS70A9) {
            doBtnDown(f, "#btn-night");
            doBtnNight(f);
            resetFilter(TIMES, NIGHT);
            resetPitchRoll();
            // isNight = !isNight;
            btnStatus[NIGHT] = !btnStatus[NIGHT]; //isNight;
            console.log("night btn down");
        }
    });

    btnNight.mouseup(() => {
        if (!clickFromBtnS70A9) {
            doBtnUp(f, "#btn-night");
            filter();
            console.log("night btn up");
        } else {
            clickFromBtnS70A9 = false;
        }
    });

    // ====================== Direction Events ===============================
    btnFwd.mousedown(() => {
        doBtnDown(f, "#btn-fwd");
        doBtnFwd(f);
        resetFilter(DIRECTIONS, FWD);
        resetPitchRoll();
        // isFwd = !isFwd;
        btnStatus[FWD] = !btnStatus[FWD]; //isFwd;
        console.log("fwd btn down");
    });

    btnFwd.mouseup(() => {
        doBtnUp(f, "#btn-fwd");
        filter();
        console.log("fwd btn up");
    });

    btnAft.mousedown(() => {
        doBtnDown(f, "#btn-aft");
        doBtnAft(f);
        resetFilter(DIRECTIONS, AFT);
        resetPitchRoll();
        // isAft = !isAft;
        btnStatus[AFT] = !btnStatus[AFT]; //isAft;
        console.log("aft btn down");
    });

    btnAft.mouseup(() => {
        doBtnUp(f, "#btn-aft");
        filter();
        console.log("back btn up");
    });

    btnIntoWind.mousedown(() => {
        doBtnDown(f, "#btn-into-wind");
        doBtnIntoWind(f);
        resetFilter(DIRECTIONS, INTOWIND);
        resetPitchRoll();
        // isIntoWind = !isIntoWind;
        btnStatus[INTOWIND] = !btnStatus[INTOWIND]; //isIntoWind;
        console.log("into wind btn down");
    });

    btnIntoWind.mouseup(() => {
        doBtnUp(f, "#btn-into-wind");
        filter();
        console.log("into wind btn up");
    });

    // ======================= Action Events =================================
    btnEngageShutdown.mousedown(() => {
        doBtnDown(f, "#btn-engage-shutdown");
        doBtnEngageShutdown(f);
        resetFilter(ACTIONS, ENGAGE);
        resetPitchRoll();
        // isEngage = !isEngage;
        btnStatus[ENGAGE] = !btnStatus[ENGAGE]; //isEngage;
        console.log("engage btn down");
    });

    btnEngageShutdown.mouseup(() => {
        doBtnUp(f, "#btn-engage-shutdown");
        filter();
        console.log("engage btn up");
    });

    btnSpreadFold.mousedown(() => {
        doBtnDown(f, "#btn-spread-fold");
        doBtnSpreadFold(f);
        resetFilter(ACTIONS, SPREADFOLD);
        resetPitchRoll();
        // isSpreadFold = !isSpreadFold;
        btnStatus[SPREADFOLD] = !btnStatus[SPREADFOLD]; //isSpreadFold;
        console.log("spread fold btn down");
    });

    btnSpreadFold.mouseup(() => {
        doBtnUp(f, "#btn-spread-fold");
        filter();
        console.log("spread fold btn up");
    });

    btnRecovery.mousedown(() => {
        doBtnDown(f, "#btn-recovery");
        doBtnRecovery(f);
        resetFilter(ACTIONS, RECOVERY);
        resetPitchRoll();
        // isRecovery = !isRecovery;
        btnStatus[RECOVERY] = !btnStatus[RECOVERY]; //isRecovery;
        console.log("recovery btn down");
    });

    btnRecovery.mouseup(() => {
        doBtnUp(f, "#btn-recovery");
        filter();
        console.log("recovery btn up");
    });

    btnTaxi.mousedown(() => {
        doBtnDown(f, "#btn-taxi");
        doBtnTaxi(f);
        resetFilter(ACTIONS, TAXI);
        resetPitchRoll();
        // isTaxi = !isTaxi;
        btnStatus[TAXI] = !btnStatus[TAXI]; //isTaxi;
        console.log("taxi btn down");
    });

    btnTaxi.mouseup(() => {
        doBtnUp(f, "#btn-taxi");
        filter();
        console.log("taxi btn up");
    });

    btnLaunch.mousedown(() => {
        doBtnDown(f, "#btn-launch");
        doBtnLaunch(f);
        resetFilter(ACTIONS, LAUNCH);
        resetPitchRoll();
        // isLaunch = !isLaunch;
        btnStatus[LAUNCH] = !btnStatus[LAUNCH]; //isLaunch;
        console.log("launch btn down");
    });

    btnLaunch.mouseup(() => {
        doBtnUp(f, "#btn-launch");
        filter();
        console.log("launch btn up");
    });

    btnLand.mousedown(() => {
        doBtnDown(f, "#btn-land");
        doBtnLand(f);
        resetFilter(ACTIONS, LAND);
        resetPitchRoll();
        // isLand = !isLand;
        btnStatus[LAND] = !btnStatus[LAND]; //isLand;
        console.log("land btn up");
    });

    btnLand.mouseup(() => {
        doBtnUp(f, "#btn-land");
        filter();
        console.log("land btn up");
    });

    btnVertrep.mousedown(() => {
        doBtnDown(f, "#btn-vertrep");
        doBtnVertrep(f);
        resetFilter(ACTIONS, VERTREP);
        resetPitchRoll();
        // isVertrep = !isVertrep;
        btnStatus[VERTREP] = !btnStatus[VERTREP]; //isVertrep;
        console.log("vertrep btn down");
    });

    btnVertrep.mouseup(() => {
        doBtnUp(f, "#btn-vertrep");
        filter();
        console.log("vertrep btn up");
    });

    btnXfer.mousedown(() => {
        doBtnDown(f, "#btn-xfer");
        doBtnXfer(f);
        resetFilter(ACTIONS, XFER);
        resetPitchRoll();
        // isXfer = !isXfer;
        btnStatus[XFER] = !btnStatus[XFER]; //isXfer;
        console.log("xfer btn down");
    });

    btnXfer.mouseup(() => {
        doBtnUp(f, "#btn-xfer");
        filter();
        console.log("xfer btn up");
    });

    // ====================== Weight Events ===============================
    btnLight.mousedown(() => {
        doBtnDown(f, "#btn-light");
        doBtnLight(f);
        resetFilter(WEIGHTS, LIGHT);
        resetPitchRoll();
        // isLight = !isLight;
        btnStatus[LIGHT] = !btnStatus[LIGHT]; //isLight;
        console.log("light btn down");
    });

    btnLight.mouseup(() => {
        doBtnUp(f, "#btn-light");
        filter();
        console.log("light btn up");
    });

    btnMedium.mousedown(() => {
        doBtnDown(f, "#btn-medium");
        doBtnMedium(f);
        // reset filter
        resetFilter(WEIGHTS, MEDIUM);
        resetPitchRoll();
        // isMedium = !isMedium;
        btnStatus[MEDIUM] = !btnStatus[MEDIUM]; //isMedium;
        console.log("medium btn down");
    });

    btnMedium.mouseup(() => {
        doBtnUp(f, "#btn-medium");
        filter();
        console.log("medium btn up");
    });

    btnHeavy.mousedown(() => {
        doBtnDown(f, "#btn-heavy");
        doBtnHeavy(f);
        resetFilter(WEIGHTS, HEAVY);
        resetPitchRoll();
        // isHeavy = !isHeavy;
        btnStatus[HEAVY] = !btnStatus[HEAVY]; //isHeavy;
        console.log("heavy btn down");
    });

    btnHeavy.mouseup(() => {
        doBtnUp(f, "#btn-heavy");
        // look for all the 2s and 1s
        filter();
        console.log("heavy btn up");
    });

    btnHotHeavy.mousedown(() => {
        doBtnDown(f, "#btn-hot-heavy");
        doBtnHotHeavy(f);
        resetFilter(WEIGHTS, HOTHEAVY);
        resetPitchRoll();
        // isHotHeavy = !isHotHeavy;
        btnStatus[HOTHEAVY] = !btnStatus[HOTHEAVY]; //isHotHeavy;
        console.log("Hot Heavy btn down");
    });

    btnHotHeavy.mouseup(() => {
        doBtnUp(f, "#btn-hot-heavy");
        filter();
        console.log("Hot Heavy btn up");
    });

    btnEmergency.mousedown(() => {
        doBtnDown(f, "#btn-emergency");
        doBtnEmergency(f);
        // resetFilter(WEIGHTS, -1);
        resetFilter(ACTIONS, EMERGENCY);
        resetPitchRoll();
        // isEmergency = !isEmergency;
        btnStatus[EMERGENCY] = !btnStatus[EMERGENCY]; //isEmergency;
        console.log("emergency/degraded btn down");
    });

    btnEmergency.mouseup(() => {
        doBtnUp(f, "#btn-emergency");
        filter(); // this is degrade I think todo: check with Andrew.
        console.log("emergency/degraded btn up");
    });

    // ====================== Postion Events ===============================
    btnCda.mousedown(() => {
        doBtnDown(f, "#btn-cda");
        doBtnCda(f);
        resetFilter(POSITIONS, CDA);
        resetPitchRoll();
        // isCda = !isCda;
        btnStatus[CDA] = !btnStatus[CDA]; //isCda;
        console.log("cda btn down");
    });

    btnCda.mouseup(() => {
        doBtnUp(f, "#btn-cda");
        filter();
        console.log("cda btn up");
    });

    btn6.mousedown(() => {
        doBtnDown(f, "#btn-6");
        doBtn6(f);
        resetFilter(POSITIONS, POS6);
        resetPitchRoll();
        // is6 = !is6;
        btnStatus[POS6] = !btnStatus[POS6]; //is6;
        console.log("6 btn down");
    });

    btn6.mouseup(() => {
        doBtnUp(f, "#btn-6");
        filter();
        console.log("6 btn up");
    });

    btn5.mousedown(() => {
        doBtnDown(f, "#btn-5");
        doBtn5(f);
        resetFilter(POSITIONS, POS5);
        resetPitchRoll();
        // is5 = !is5;
        btnStatus[POS5] = !btnStatus[POS5]; //is5;
        console.log("5 btn down");
    });

    btn5.mouseup(() => {
        doBtnUp(f, "#btn-5");
        filter();
        console.log("5 btn up");
    });

    btn4.mousedown(() => {
        doBtnDown(f, "#btn-4");
        doBtn4(f);
        resetFilter(POSITIONS, POS4);
        resetPitchRoll();
        // is4 = !is4;
        btnStatus[POS4] = !btnStatus[POS4]; //is4;
        console.log("4 btn down");
    });

    btn4.mouseup(() => {
        doBtnUp(f, "#btn-4");
        filter();
        console.log("4 btn up");
    });

    btn3.mousedown(() => {
        doBtnDown(f, "#btn-3");
        doBtn3(f);
        resetFilter(POSITIONS, POS3);
        resetPitchRoll();
        // is3 = !is3;
        btnStatus[POS3] = !btnStatus[POS3]; //is3;
        console.log("3 btn down");
    });

    btn3.mouseup(() => {
        doBtnUp(f, "#btn-3");
        filter();
        console.log("3 btn up");
    });

    btn2.mousedown(() => {
        doBtnDown(f, "#btn-2");
        doBtn2(f);
        resetFilter(POSITIONS, POS2);
        resetPitchRoll();
        // is2 = !is2;
        btnStatus[POS2] = !btnStatus[POS2]; //is2;
        console.log("2 btn down");
    });

    btn2.mouseup(() => {
        doBtnUp(f, "#btn-2");
        filter();
        console.log("2 btn up");
    });

    btn1.mousedown(() => {
        doBtnDown(f, "#btn-1");
        doBtn1(f);
        resetFilter(POSITIONS, POS1);
        resetPitchRoll();
        // is1 = !is1;
        btnStatus[POS1] = !btnStatus[POS1]; //is1;
        console.log("1 btn down");
    });

    btn1.mouseup(() => {
        doBtnUp(f, "#btn-1");
        filter();
        console.log("1 btn up");
    });

    btnCdf.mousedown(() => {
        doBtnDown(f, "#btn-cdf");
        doBtnCdf(f);
        resetFilter(POSITIONS, CDF);
        resetPitchRoll();
        // isCdf = !isCdf;
        btnStatus[CDF] = !btnStatus[CDF]; //isCdf;
        console.log("cdf btn down");
    });

    btnCdf.mouseup(() => {
        doBtnUp(f, "#btn-cdf");
        filter();
        console.log("cdf btn up");
    });

//     btnPopOut.click(() => {
//         let popOutIcon = $("#pop-out-icon");
//         let settingsPanel = $("#settings-panel");
//         if (popOutToggle === false) {
//             settingsPanel.show();
//             popOutIcon.removeClass("pop-out-icon-rotate-0");
//             popOutIcon.addClass("pop-out-icon-rotate-90");
//             settingsPanel.removeClass("pop-out-close");
//             settingsPanel.addClass("pop-out-open");
//         } else {
//             settingsPanel.hide();
//             popOutIcon.removeClass("pop-out-icon-rotate-90");
//             popOutIcon.addClass("pop-out-icon-rotate-0");
//             settingsPanel.removeClass("pop-out-open");
//             settingsPanel.addClass("pop-out-close");
//             let weatherCond = document.getElementsByName("weather").value;
//             weatherCondition = weatherCond;
//             setWeatherCondition();
//         }
//         popOutToggle = !popOutToggle;
//     });
}
