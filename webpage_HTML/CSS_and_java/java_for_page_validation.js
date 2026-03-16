
console.log("hello")

const locationSelect = document.getElementById("locations")
const date = document.getElementById("date")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const duration = document.getElementById("duration")
const species = document.getElementById("species")
const form_data = document.getElementById("form")
 console.log(date)

const error_for_loction = document.getElementById("error_for_location")

const error_for_date = document.getElementById("error_for_date")

const error_for_time = document.getElementById("error_for_time")
/*
const error_for_time = document.getElementById("error_for_timeuite")

const error_for_dur = document.getElementById("error_for_duration")
*/
const error_for_species = document.getElementById("error_for_species")

form_data.addEventListener("submit", (e) =>{
    time_error = []
    if (locationSelect.value === '' || locationSelect.value === null || locationSelect.value === "please select a Location") {
        error_for_loction.innerHTML = "Please select a location";
        error_for_loction.style.display = "block";
    } 
    if (species.value === '' || species.value === null || species.value === "please select species of bird") {
        error_for_species.innerHTML = "Please select a species of bird";
        error_for_species.style.display = "block";
    } 
    if (date.value === '' || date.value === null) {
        error_for_date.innerHTML = "please select the day, month and year you observed the bird"
        error_for_date.style.display = "block";
    } 
    if (hour.value === '' || hour.value === null ) {
        time_error.push ("please enter the hour you started observed the bird");
        error_for_time.innerHTML = time_error;
        error_for_time.style.display = "block";
    } 
    if (minute.value === '' || minute.value === null ) {
        time_error.push ("please enter the minuite you started observed the bird");
        error_for_time.innerHTML = time_error.join("<br> <br>")
        error_for_time.style.display = "block";
    } 
    if (duration.value === '' || duration.value === null ) {
        time_error.push ("please enter how long you observed the bird in minutes");
        error_for_time.innerHTML = time_error.join("<br> <br>")
        error_for_time.style.display = "block";
    } 
    
    console.log(time_error)
    e.preventDefault()

    
});

form_data.addEventListener("change", () => {
    if (locationSelect.value === '' || locationSelect.value === null || locationSelect.value === "please select a Location") {
        error_for_loction.innerHTML = "Please select a location"
        error_for_loction.style.display = "block";
    } else {
        error_for_loction.style.display = "none";
        error_for_loction.innerHTML = '';
    }
});
form_data.addEventListener("change", () => {
    if (species.value === '' || species.value === null || species.value === "please select species of bird") {
        error_for_species.innerHTML = "Please select a species of bird";
        error_for_species.style.display = "block";
    } else {
        error_for_species.style.display = "none";
        error_for_species.innerHTML = '';
    }
});
form_data.addEventListener("change", () => {
    if (date.value === '' || date.value === null) {
        error_for_date.innerHTML = "please select the day, month and year you observed the bird"
        error_for_date.style.display = "block";
    } else {
        error_for_date.style.display = "none";
        error_for_date.innerHTML = '';
    }
});
form_data.addEventListener("input", () => {
    if (hour.value > 24){
        error_for_time.style.display = "block";
    } 
    if (minute.value > 60){
        error_for_time.style.display = "block";
    }
    if (duration.value === '' || duration.value === null){
        error_for_time.style.display = "block";
    }
    else {
        error_for_time.style.display = "none";
        error_for_time.innerHTML = '';
    }
});