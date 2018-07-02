function initEvents(f) {
    //  back button -------------------------
    // this button is also for selecting MRH90 in the aircraft 
    // shol menu
    btnBack.mousedown(() => {
        doBtnDown(f, "#btn-back");
        doBtnBack(f);
    });

    btnBack.mouseup(() => {
        doBtnUp(f, "#btn-back");
    });

    btnMenu.mousedown(() => {
        doBtnDown(f, "#btn-menu");
        goBackToMainMenu(f);
    });

    btnMenu.mouseup(() => {
        doBtnUp(f, "#btn-menu");
    });

    btnDay.mousedown(() => {
        doBtnDown(f, "#btn-day");
        doBtnDay(f);
        isDay = !isDay;
        btnStatus[7] = isDay;
    });

    btnDay.mouseup(() => {
        doBtnUp(f, "#btn-day");
        filter();
    });

    btnNight.mousedown(() => {
        doBtnDown(f, "#btn-night");
        doBtnNight(f);
        isNight = !isNight;
        btnStatus[8] = isNight;
    });

    btnNight.mouseup(() => {
        doBtnUp(f, "#btn-night");
        filter();
    });

    btnFwd.mousedown(() => {
        doBtnDown(f, "#btn-fwd");
        doBtnFwd(f);
        isFwd = !isFwd;
        btnStatus[4] = isFwd;
    });

    btnFwd.mouseup(() => {
        doBtnUp(f, "#btn-fwd");
        filter();
    });

    btnAft.mousedown(() => {
        doBtnDown(f, "#btn-aft");
        doBtnAft(f);
        isAft = !isAft;
        btnStatus[5] = isAft;
    });

    btnAft.mouseup(() => {
        doBtnUp(f, "#btn-aft");
        filter();
    });

    btnIntoWind.mousedown(() => {
        doBtnDown(f, "#btn-into-wind");
        doBtnIntoWind(f);
        isIntoWind = !isIntoWind;
        btnStatus[6] = isIntoWind;
    });

    btnIntoWind.mouseup(() => {
        doBtnUp(f, "#btn-into-wind");
        filter();
    });

    btnEngageShutdown.mousedown(() => {
        doBtnDown(f, "#btn-engage-shutdown");
        doBtnEngageShutdown(f);
        isEngage = !isEngage;
        btnStatus[17] = isEngage;
    });

    btnEngageShutdown.mouseup(() => {
        doBtnUp(f, "#btn-engage-shutdown");
        filter();
    });

    btnTaxi.mousedown(() => {
        doBtnDown(f, "#btn-taxi");
        doBtnTaxi(f);
        isTaxi = !isTaxi;
        btnStatus[18] = isTaxi;
    });

    btnTaxi.mouseup(() => {
        doBtnUp(f, "#btn-taxi");
        filter();
    });

    btnLaunch.mousedown(() => {
        doBtnDown(f, "#btn-launch");
        doBtnLaunch(f);
        isLaunch = !isLaunch;
        btnStatus[19] = isLaunch;
    });

    btnLaunch.mouseup(() => {
        doBtnUp(f, "#btn-launch");
        filter();
    });

    btnLand.mousedown(() => {
        doBtnDown(f, "#btn-land");
        doBtnLand(f);
        isLand = !isLand;
        btnStatus[20] = isLand;
    });

    btnLand.mouseup(() => {
        doBtnUp(f, "#btn-land");
        filter();
    });

    btnVertrep.mousedown(() => {
        doBtnDown(f, "#btn-vertrep");
        doBtnVertrep(f);
        isVertrep = !isVertrep;
        btnStatus[21] = isVertrep;
    });

    btnVertrep.mouseup(() => {
        doBtnUp(f, "#btn-vertrep");
        filter();
    });

    btnXfer.mousedown(() => {
        doBtnDown(f, "#btn-xfer");
        doBtnXfer(f);
        isXfer = !isXfer;
        btnStatus[22] = isXfer;
    });

    btnXfer.mouseup(() => {
        doBtnUp(f, "#btn-xfer");
        filter();
    });

    btnLight.mousedown(() => {
        doBtnDown(f, "#btn-light");
        doBtnLight(f);
        resetFilter();
        isLight = !isLight;
        btnStatus[0] = isLight;
    });

    btnLight.mouseup(() => {
        doBtnUp(f, "#btn-light");
        filter();

    });

    btnMedium.mousedown(() => {
        doBtnDown(f, "#btn-medium");
        doBtnMedium(f);
        // reset filter
        resetFilter();
        isMedium = !isMedium;
        btnStatus[1] = isMedium;

    });

    btnMedium.mouseup(() => {
        doBtnUp(f, "#btn-medium");
        filter();
    });

    btnHeavy.mousedown(() => {
        doBtnDown(f, "#btn-heavy");
        doBtnHeavy(f);
        isHeavy = !isHeavy;
        btnStatus[2] = isHeavy;
    });

    btnHeavy.mouseup(() => {
        doBtnUp(f, "#btn-heavy");
        // look for all the 2s and 1s
        filter();
    });

    btnHotHeavy.mousedown(() => {
        doBtnDown(f, "#btn-hot-heavy");
        doBtnHotHeavy(f);
        isHotHeavy = !isHotHeavy;
        btnStatus[3] = isHotHeavy;
    });

    btnHotHeavy.mouseup(() => {
        doBtnUp(f, "#btn-hot-heavy");
        filter();
    });

    btnEmergency.mousedown(() => {
        doBtnDown(f, "#btn-emergency");
        doBtnEmergency(f);
        isEmergency = !isEmergency;
        btnStatus[23] = isEmergency;
    });

    btnEmergency.mouseup(() => {
        doBtnUp(f, "#btn-emergency");
        filter(); // this is degrade I think todo: check with Andrew.
    });

    btnCda.mousedown(() => {
        doBtnDown(f, "#btn-cda");
        doBtnCda(f);
        isCda = !isCda;
        btnStatus[9] = isCda;
    });

    btnCda.mouseup(() => {
        doBtnUp(f, "#btn-cda");
        filter();
    });

    btn6.mousedown(() => {
        doBtnDown(f, "#btn-6");
        doBtn6(f);
        is6 = !is6;
        btnStatus[10] = is6;
    });

    btn6.mouseup(() => {
        doBtnUp(f, "#btn-6");
        filter();
    });

    btn5.mousedown(() => {
        doBtnDown(f, "#btn-5");
        doBtn5(f);
        is5 = !is5;
        btnStatus[11] = is5;
    });

    btn5.mouseup(() => {
        doBtnUp(f, "#btn-5");
        filter();
    });

    btn4.mousedown(() => {
        doBtnDown(f, "#btn-4");
        doBtn4(f);
        is4 = !is4;
        btnStatus[12] = is4;
    });

    btn4.mouseup(() => {
        doBtnUp(f, "#btn-4");
        filter();
    });

    btn3.mousedown(() => {
        doBtnDown(f, "#btn-3");
        doBtn3(f);
        is3 = !is3;
        btnStatus[13] = is3;
    });

    btn3.mouseup(() => {
        doBtnUp(f, "#btn-3");
        filter();
    });

    btn2.mousedown(() => {
        doBtnDown(f, "#btn-2");
        doBtn2(f);
        is2 = !is2;
        btnStatus[14] = is2;
    });

    btn2.mouseup(() => {
        doBtnUp(f, "#btn-2");
        filter();
    });

    btn1.mousedown(() => {
        doBtnDown(f, "#btn-1");
        doBtn1(f);
        is1 = !is1;
        btnStatus[15] = is1;
    });

    btn1.mouseup(() => {
        doBtnUp(f, "#btn-1");
        filter();
    });


    btnCdf.mousedown(() => {
        doBtnDown(f, "#btn-cdf");
        doBtnCdf(f);
        isCdf = !isCdf;
        btnStatus[16] = isCdf;
    });

    btnCdf.mouseup(() => {
        doBtnUp(f, "#btn-cdf");
        filter();
    });

}