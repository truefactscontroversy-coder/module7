
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

const error_for_hour = document.getElementById("error_for_hour")

const error_for_min = document.getElementById("error_for_minuite")

const error_for_dur = document.getElementById("error_for_duration")

const error_for_species = document.getElementById("error_for_species")

form_data.addEventListener("submit", (e) =>{
    if (locationSelect.value === '' || locationSelect.value === null || locationSelect.value === "please select a Location") {
        error_for_loction.innerHTML = "Please select a location"
        error_for_loction.style.display = "block";
    } 
    if (species.value === '' || species.value === null || species.value === "please select species of bird") {
        error_for_species.innerHTML = "Please select a species of bird"
        error_for_species.style.display = "block";
    } 
    if (date.value === '' || date.value === null) {
        error_for_date.innerHTML = "please select the day, month and year you observed the bird"
        error_for_date.style.display = "block";
    } 
    e.preventDefault()

    
})
form_data.addEventListener("change", () => {
    error_for_loction.style.display = "none"
    error_for_loction.innerHTML = ""
})

form_data.addEventListener("change", () => {
    error_for_species.style.display = "none"
    error_for_species.innerHTML = ""
})
form_data.addEventListener("change", () => {
    error_for_date.style.display = "none"
    error_for_date.innerHTML = ""
})