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

var target_mili_sec = new Date("2025-07-01T00:00:00Z").getTime();

window.addEventListener("load", function () {
    setInterval(timer, 1000); // Update every second
});

function timer() {
    var now_mili_sec = new Date().getTime(); // Current time
    var remaining_sec = Math.floor((target_mili_sec - now_mili_sec) / 1000); // Remaining seconds

    var day = Math.floor(remaining_sec / (3600 * 24));
    var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
    var min = Math.floor((remaining_sec % 3600) / 60);
    var sec = Math.floor(remaining_sec % 60);

    console.log(`Days: ${day}, Hours: ${hour}, Minutes: ${min}, Seconds: ${sec}`); // Debugging log

    document.querySelector("#day").innerHTML = day < 10 ? "0" + day : day;
    document.querySelector("#hour").innerHTML = hour < 10 ? "0" + hour : hour;
    document.querySelector("#min").innerHTML = min < 10 ? "0" + min : min;
    document.querySelector("#sec").innerHTML = sec < 10 ? "0" + sec : sec;
}
