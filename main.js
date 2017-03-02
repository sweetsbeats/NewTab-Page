window.onload = function () {
    var date = new Date();
    var hour = date.getHours();
    var body = document.body;
    //TODO: pull from seperate day and night pools depending on time of day
    if (hour >= 8 && hour < 18) {
        //DAY POOL
        var files = 2; // <-- THIS IS HOW MANY IMAGES YOU HAVE IN THE DAY FOLDER
        var imgNumber = (Math.floor(Math.random() * files) + 1);
        body.style.backgroundImage = "url(" + "day/" + imgNumber + ".png" + ")";
        body.style.backgroundSize = "100vw 100vh";
    }
    else {
        //NIGHT POOL
        var files = 16; // <-- THIS IS HOW MANY IMAGES YOU HAVE IN THE NIGHT FOLDER
        var imgNumber = (Math.floor(Math.random() * files) + 1);
        body.style.backgroundImage = "url(" + "night/" + imgNumber + ".png" + ")";
        body.style.backgroundSize = "100vw 100vh";
    }
    //TODO: Allow user to move glass pane with arrow keys
};
