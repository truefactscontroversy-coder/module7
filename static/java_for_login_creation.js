
const login_button = document.getElementById("login") 

/*
if (login_button){

    login_button.addEventListener("click", goToaccount);
}
function goToaccount() {
        window.open('account_info.html', '_blank');
        window.close('login_page.html');
}
*/

const create_accou = document.getElementById("create_account");

if (create_accou){
    create_accou.addEventListener("click", goToaccount_after_creation);
};

function goToaccount_after_creation(){
    window.location.href = "account_info.html";
}


const username_header = document.getElementById("username_header")

const password_header = document.getElementById("password_header")

const form_data = document.getElementById("form")

const username = document.getElementById("username")

const password = document.getElementById("password")


form_data.addEventListener("submit", (e) => {
    if (username.value === '' || username.value === null || username.value === "please select enter a username") {
        username_header.style.border = "solid red";
        e.preventDefault()
    } 
    if (password.value === '' || password.value === null || password.value === "please select enter a password") {
        password_header.style.border = "solid red";
        e.preventDefault()
    } 
    /*
    if ((username.value !== '' && username.value !== null) && password.value !== '' && password.value !== null) {
        login_button.addEventListener("submit", goToaccount);
    }*/
});

form_data.addEventListener("change", () => {
    username_header.style.border = "none"
    
})
form_data.addEventListener("change", () => {
    password_header.style.border = "none"
    

})
/*
function goToaccount() {
        window.open('account_info.html', '_blank');
        window.close('login_page.html');
}*/