function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var ampm = "AM";

    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    if (hour >= 12) {
        ampm = "PM";
    }
    if (hour > 12) {
        hour -= 12;
    }

    var time = hour + ":" + minute + ":" + second + " " + ampm;
    document.getElementById("clock").innerText = time;
}

setInterval(currentTime, 1000);