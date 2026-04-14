


const locationSelect = document.getElementById("Locations")
const date = document.getElementById("date")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const duration = document.getElementById("duration")
const species = document.getElementById("species")
const form_data = document.getElementById("form_data")
const check_yes = document.getElementById("checkboxyes")
const check_no = document.getElementById("checkboxno")
const text_area = document.getElementById("text_area")
const bird_activity = document.getElementById("activity")


const error_for_loction = document.getElementById("error_for_location")

const error_for_date = document.getElementById("error_for_date")

const error_for_time = document.getElementById("error_for_time")

const error_for_species = document.getElementById("error_for_species")

const error_for_image = document.getElementById("for_image")

const rem_no_label = document.getElementById("no_btn")

const image = document.getElementById("image_for_post")

const error_for_comment = document.getElementById("comment_error")

const error_for_activity = document.getElementById("error_for_activity")


if (check_yes) {
    check_yes.addEventListener("click", show_image);
}
/*
if (check_yes && check_no) {
    form_data.addEventListener("submit", (e) =>{
        if (check_yes.checked === false && check_no === false) {
            error_for_image.style.border = "solid";
        } else {
            check_yes.addEventListener("click", show_image);
        };
    e.preventDefault()
});
};
*/

function show_image() {
    if (check_yes.checked){
        image.style.display = "block"
    } else {
    image.style.display = "none"
    }
}



form_data.addEventListener("submit", (e) =>{
    time_error = []
    try {
        if (locationSelect.value === '' || locationSelect.value === null || locationSelect.value === "please select a Location") {
        error_for_loction.innerHTML = "Location cannot be empty, Please select a location";
        error_for_loction.style.display = "block";
        e.preventDefault()

        } 
        if (species.value === '' || species.value === null || species.value === "please select species of bird") {
            error_for_species.innerHTML = "Species cannot be empty, Please select a species of bird";
            error_for_species.style.display = "block";
            e.preventDefault()

        } 
        
        if (bird_activity.value === '' || bird_activity.value === null || bird_activity.value === "please select an activity") {
            error_for_activity.innerHTML = "Activity cannot be empty, Please select the activity you observed the bird doing";
            error_for_activity.style.display = "block";
            e.preventDefault()

        } 


        if (text_area.value.trim() === '' || text_area.value.trim() === null) {
            error_for_comment.innerHTML = "Comment cannot be empty please enter a short comment"
            error_for_comment.style.border = "red solid"
            e.preventDefault()
        }


    } catch (TypeError) {
        
    }
    if (date.value === '' || date.value === null) {
        error_for_date.innerHTML = "Date cannot be empty, please select the day, month and year you observed the bird"
        error_for_date.style.display = "block";
        e.preventDefault()

    } 
    if (hour.value === '' || hour.value === null ) {
        time_error.push ("Hour cannot be empty, please enter the hour you started observed the bird");
        error_for_time.innerHTML = time_error;
        error_for_time.style.display = "block";
        e.preventDefault()

    } 
    if (minute.value === '' || minute.value === null ) {
        time_error.push ("Minute(s) cannot be empty, please enter the minuite you started observed the bird");
        error_for_time.innerHTML = time_error.join("<br> <br>")
        error_for_time.style.display = "block";
        e.preventDefault()

    } 
    if (duration.value === '' || duration.value === null ) {
        time_error.push ("Duration cannot be empty, please enter how long you observed the bird in minutes");
        error_for_time.innerHTML = time_error.join("<br> <br>")
        error_for_time.style.display = "block";
        e.preventDefault()

    } 
    
    if (check_yes && check_no) {
        if (!check_yes.checked && !check_no.checked) {
            error_for_image.style.borderStyle = "solid";
            e.preventDefault()

        }
    
    
    }

    
    
});

form_data.addEventListener("change", (e) => {
    try {
    if (locationSelect.value === '' || locationSelect.value === null || locationSelect.value === "please select a Location") {
        error_for_loction.innerHTML = "Location cannot be empty, Please select a location"
        error_for_loction.style.display = "block";
        e.preventDefault()

    } else {
        error_for_loction.style.display = "none";
        error_for_loction.innerHTML = '';
    }
    if (species.value === '' || species.value === null || species.value === "please select species of bird") {
            error_for_species.innerHTML = "Species cannot be empty, Please select a species of bird";
            error_for_species.style.display = "block";
            e.preventDefault()

    } else {
            error_for_species.style.display = "none";
            error_for_species.innerHTML = '';
    }
    if (bird_activity.value === '' || bird_activity.value === null || bird_activity.value === "please select an activity") {
            error_for_activity.innerHTML = "Activity cannot be empty, Please select the activity you observed the bird doing";
            error_for_activity.style.display = "block";
            e.preventDefault()

        } else {
            error_for_activity.style.display = "none";
        }
    } catch (TypeError) {
    
    }  
    if (date.value === '' || date.value === null) {
        error_for_date.innerHTML = "Date cannot be empty, please select the day, month and year you observed the bird"
        error_for_date.style.display = "block";
        e.preventDefault()

    } else {
        error_for_date.style.display = "none";
        error_for_date.innerHTML = '';
    }
    if (text_area.value.trim() === '' || text_area.value.trim() === null) {
            error_for_comment.style.border = "red solid"
            e.preventDefault()
    } else {
        error_for_comment.innerHTML = "Comment cannot be empty please enter a short comment"
        error_for_comment.style.border = "none"
        e.preventDefault()
    }

});


form_data.addEventListener("input", (e) => {
    time_error = []
    if (hour.value > 24){
        time_error.push ("oh not invalid hour please enter a number between 0-24");
        error_for_time.innerHTML = time_error.join("<br> <br>");
        error_for_time.style.display = "block";
        e.preventDefault()

    } 
    if (hour.value === '' || hour.value === null ) {
        time_error.push ("please enter the hour you started observed the bird"); 
        error_for_time.innerHTML = time_error.join("<br> <br>");
        error_for_time.style.display = "block";
        e.preventDefault()

    } 
    if (minute.value > 59){
        time_error.push ("oops invalid number of minutes please enter a number between 0-59");
        error_for_time.innerHTML = time_error.join("<br> <br>");
        error_for_time.style.display = "block";
        e.preventDefault()

    } 
    if (minute.value === '' || minute.value === null ) {
        time_error.push ("please enter the minuite you started observed the bird");
        error_for_time.innerHTML = time_error.join("<br> <br>");
        error_for_time.style.display = "block";
        e.preventDefault()

    }
    if (duration.value === '' || duration.value === null){
        time_error.push ("please enter how long you observed the bird");
        error_for_time.innerHTML = time_error.join("<br> <br>");
        error_for_time.style.display = "block";
        e.preventDefault()

    }
    else {
        error_for_time.style.display = "none";
        error_for_time.innerHTML = '';
    }
});



if (check_yes && check_no) {
    check_yes.addEventListener("click", function() {
        show_image()
        if (check_yes.checked) {
            error_for_image.style.borderStyle = "none"
            rem_no_label.style.display = "none"
            check_no.style.display = "none"
        } else {
            error_for_image.style.borderStyle = "solid"
            rem_no_label.style.display = "inline"
            check_no.style.display = "inline"
        }
    })
    check_no.addEventListener ("click", function() {
        if (check_no.checked) {
            error_for_image.style.borderStyle = "none"
        } else {
            error_for_image.style.borderStyle = "solid"
        }
    })
}

if (form_data) {
    form_data.addEventListener("submit", function(e) {
        e.preventDefault();
        
        fetch("/create_post", {
          method: "POST",
          body: new FormData(form_data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                window.location.href = data.redirect;
            }
        })
    });
}   