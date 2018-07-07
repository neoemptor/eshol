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

    btnMenu.mousedown(() => {
        doBtnDown(f, "#btn-menu");
        goBackToMainMenu(f);
        console.log("menu btn down");
    });

    btnMenu.mouseup(() => {
        doBtnUp(f, "#btn-menu");
        console.log("back btn up");
    });

    btnDay.mousedown(() => {
        console.log("day btn down");
        doBtnDown(f, "#btn-day");
        doBtnDay(f);
        resetFilter(TIMES, 7);
        isDay = !isDay;
        btnStatus[7] = isDay;
    });

    btnDay.mouseup(() => {
        doBtnUp(f, "#btn-day");
        filter();
        console.log("day btn up");
    });

    btnNight.mousedown(() => {
        doBtnDown(f, "#btn-night");
        doBtnNight(f);
        resetFilter(TIMES, 8);
        isNight = !isNight;
        btnStatus[8] = isNight;
        console.log("night btn down");
    });

    btnNight.mouseup(() => {
        doBtnUp(f, "#btn-night");
        filter();
        console.log("night btn up");
    });

    btnFwd.mousedown(() => {
        doBtnDown(f, "#btn-fwd");
        doBtnFwd(f);
        resetFilter(DIRECTIONS, 4);
        isFwd = !isFwd;
        btnStatus[4] = isFwd;
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
        resetFilter(DIRECTIONS, 5);
        isAft = !isAft;
        btnStatus[5] = isAft;
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
        resetFilter(DIRECTIONS, 6);
        isIntoWind = !isIntoWind;
        btnStatus[6] = isIntoWind;
        console.log("into wind btn down");
    });

    btnIntoWind.mouseup(() => {
        doBtnUp(f, "#btn-into-wind");
        filter();
        console.log("into wind btn up");
    });

    btnEngageShutdown.mousedown(() => {
        doBtnDown(f, "#btn-engage-shutdown");
        doBtnEngageShutdown(f);
        resetFilter(ACTIONS, 17);
        isEngage = !isEngage;
        btnStatus[17] = isEngage;
        console.log("engage btn down");
    });

    btnEngageShutdown.mouseup(() => {
        doBtnUp(f, "#btn-engage-shutdown");
        filter();
        console.log("engage btn up");
    });

    btnTaxi.mousedown(() => {
        doBtnDown(f, "#btn-taxi");
        doBtnTaxi(f);
        resetFilter(ACTIONS, 18);
        isTaxi = !isTaxi;
        btnStatus[18] = isTaxi;
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
        resetFilter(ACTIONS, 19);
        isLaunch = !isLaunch;
        btnStatus[19] = isLaunch;
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
        resetFilter(ACTIONS, 20);
        isLand = !isLand;
        btnStatus[20] = isLand;
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
        resetFilter(ACTIONS, 21);
        isVertrep = !isVertrep;
        btnStatus[21] = isVertrep;
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
        resetFilter(ACTIONS, 22);
        isXfer = !isXfer;
        btnStatus[22] = isXfer;
        console.log("xfer btn down");
    });

    btnXfer.mouseup(() => {
        doBtnUp(f, "#btn-xfer");
        filter();
        console.log("xfer btn up");
    });

    btnLight.mousedown(() => {
        doBtnDown(f, "#btn-light");
        doBtnLight(f);
        resetFilter(WEIGHTS, 0);
        isLight = !isLight;
        btnStatus[0] = isLight;
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
        resetFilter(WEIGHTS, 1);
        isMedium = !isMedium;
        btnStatus[1] = isMedium;
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
        resetFilter(WEIGHTS, 2);
        isHeavy = !isHeavy;
        btnStatus[2] = isHeavy;
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
        resetFilter(WEIGHTS, 3);
        isHotHeavy = !isHotHeavy;
        btnStatus[3] = isHotHeavy;
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
        resetFilter(WEIGHTS, -1);
        resetFilter(ACTIONS, 23);
        isEmergency = !isEmergency;
        btnStatus[23] = isEmergency;
        console.log("emergency/degraded btn down");
    });

    btnEmergency.mouseup(() => {
        doBtnUp(f, "#btn-emergency");
        filter(); // this is degrade I think todo: check with Andrew.
        console.log("emergency/degraded btn up");
    });

    btnCda.mousedown(() => {
        doBtnDown(f, "#btn-cda");
        doBtnCda(f);
        resetFilter(POSITIONS, 9);
        isCda = !isCda;
        btnStatus[9] = isCda;
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
        resetFilter(POSITIONS, 10);
        is6 = !is6;
        btnStatus[10] = is6;
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
        resetFilter(POSITIONS, 11);
        is5 = !is5;
        btnStatus[11] = is5;
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
        resetFilter(POSITIONS, 12);
        is4 = !is4;
        btnStatus[12] = is4;
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
        resetFilter(POSITIONS, 13);
        is3 = !is3;
        btnStatus[13] = is3;
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
        resetFilter(POSITIONS, 14);
        is2 = !is2;
        btnStatus[14] = is2;
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
        resetFilter(POSITIONS, 15);
        is1 = !is1;
        btnStatus[15] = is1;
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
        resetFilter(POSITIONS, 16);
        isCdf = !isCdf;
        btnStatus[16] = isCdf;
        console.log("cdf btn down");
    });

    btnCdf.mouseup(() => {
        doBtnUp(f, "#btn-cdf");
        filter();
        console.log("cdf btn up");
    });

}