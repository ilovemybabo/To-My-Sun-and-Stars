// VARIABLES
const elH = document.querySelectorAll(".timeline li > div");

// START
window.addEventListener("load", init);

function init() {
  setEqualHeights(elH);
}

// SET EQUAL HEIGHTS
function setEqualHeights(el) {
  let counter = 0;
  for (let i = 0; i < el.length; i++) {
    const singleHeight = el[i].offsetHeight;

    if (counter < singleHeight) {
      counter = singleHeight;
    }
  }

  for (let i = 0; i < el.length; i++) {
    el[i].style.height = `${counter}px`;
  }
}

 // Set the target date for the countdown
var target_mili_sec = new Date("Jul 01, 2025 00:00:00").getTime();

// Initialize the timer when the page loads
window.addEventListener("load", function () {
    setInterval(timer, 1000); // Update every second
});

// Timer function to update the countdown
function timer() {
    var now_mili_sec = new Date().getTime(); // Current time
    var remaining_sec = Math.floor((target_mili_sec - now_mili_sec) / 1000); // Remaining seconds

    // Calculate days, hours, minutes, and seconds
    var day = Math.floor(remaining_sec / (3600 * 24));
    var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
    var min = Math.floor((remaining_sec % 3600) / 60);
    var sec = Math.floor(remaining_sec % 60);

    // Update the HTML with the new countdown values
    document.querySelector("#day").innerHTML = day < 10 ? "0" + day : day;
    document.querySelector("#hour").innerHTML = hour < 10 ? "0" + hour : hour;
    document.querySelector("#min").innerHTML = min < 10 ? "0" + min : min;
    document.querySelector("#sec").innerHTML = sec < 10 ? "0" + sec : sec;
