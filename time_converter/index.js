let hoursEl = document.getElementById("hoursInput");
let minEl = document.getElementById("minutesInput");
let timeInSecEl = document.getElementById("timeInSeconds");
let ErrMsgEl = document.getElementById("errorMsg");
let convertBtnEl = document.getElementById("convertBtn");

let hoursErrMsg = "Please enter a valid number of hours.";
let minErrMsg = "Please enter a valid number of minutes.";

function displaySec(hourVal, minVal) {
    let secVal = ((hourVal) * 60 + minVal) * 60;
    timeInSecEl.textContent = secVal + "s";
}

function convertToSec() {
    let hoursVal = hoursEl.value;
    let minVal = minEl.value;

    if (hoursVal === "") {
        ErrMsgEl.textContent = hoursErrMsg;
    } else if (minVal === "") {
        ErrMsgEl.textContent = minErrMsg;
    } else {
        let hoursIntegerVal = parseInt(hoursVal);
        let minIntegerVal = parseInt(minVal);
        ErrMsgEl.textContent = ""
        displaySec(hoursIntegerVal, minIntegerVal)
    }
}
hoursEl.addEventListener("click", function(event) {

});
