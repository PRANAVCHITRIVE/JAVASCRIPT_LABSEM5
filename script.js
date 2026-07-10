function showEnvironment() {

    console.log("External JavaScript executed");

    let userInfo = {
        Browser: navigator.userAgent,
        Platform: navigator.platform,
        Language: navigator.language,
        ScreenWidth: screen.width,
        ScreenHeight: screen.height,
        OnlineStatus: navigator.onLine
    };


    // Display welcome message
    document.getElementById("welcome").innerHTML =
        "Welcome! Your JavaScript environment has been detected.";


    // Display information on webpage
    document.getElementById("info").innerHTML =
        `
        <b>User Environment Information:</b><br>
        Browser: ${userInfo.Browser}<br>
        Platform: ${userInfo.Platform}<br>
        Language: ${userInfo.Language}<br>
        Screen Size: ${userInfo.ScreenWidth} x ${userInfo.ScreenHeight}<br>
        Online Status: ${userInfo.OnlineStatus}
        `;


    // Console methods demonstration

    console.log("User Environment Data:", userInfo);


    console.table(userInfo);


    console.error("This is a sample error message");


    console.trace("Execution trace from external JavaScript");
}
