function myDigitalClock() {
    var date = new Date();
    var hours = date.getHours(); //0-23
    var minutes = date.getMinutes(); //0-59
    var seconds = date.getSeconds(); //0-59
    var zone = "AM";

    // Write the code here...

    // Converting hours to 12 hour format
    if (hours >= 12) {
        hours = hours - 12;
        zone = "PM";
    }

    // Adding leading zero
    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    // Displaying the time
    var time = hours + ":" + minutes + ":" + seconds + " " + zone;
    console.log(time);

    // Updating the clock every second
    setTimeout(myDigitalClock, 1000);

    // Adding a zero
    function formatTime(time) {
        return (time < 10 ? "0" : "") + time;
    }
}

myDigitalClock();