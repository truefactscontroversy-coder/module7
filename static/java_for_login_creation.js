
const login_button = document.getElementById("login") 



const create_accou = document.getElementById("create_account");

const username_header = document.getElementById("username_header")

const password_header = document.getElementById("password_header")

const form_data = document.getElementById("form_data")

const data_for_account_create = document.getElementById("form_data_account_create")

const username = document.getElementById("username")

const password = document.getElementById("password")

let on = ''

if (form_data) {
    form_data.addEventListener("submit", (e) => {
        if (username.value === '' || username.value === null || username.value === "please enter a username") {
            username_header.innerHTML = "Username field can't be empty, please enter a username"
            username_header.style.border = "solid red";
            on = true
            e.preventDefault()
        } 
        if (password.value === '' || password.value === null || password.value === "please enter a password") {
            password_header.style.border = "solid red";
            password_header.innerHTML = "Password field can't be empty, please enter a password"
            on = true
            e.preventDefault()
        } 
        
    
    });
    
    form_data.addEventListener("change", () => {
        username_header.style.border = "none"
        on = false
        if (username.value !== '' || username.value !== null) {
            username_header.innerHTML = "Please enter username"
        }
        password_header.style.border = "none"
        on = false
        if (password.value !== '' || password.value !== null) {
            password_header.innerHTML = "Please enter password"
        }
    
    })
}

const error_from_backend_login = document.getElementById("invalid_cred_login")

const error_from_backend_create = document.getElementById("invalid_cred_create")


    
if (form_data) {
    form_data.addEventListener("submit", function(e) {
        e.preventDefault()
    
        
        fetch("/login", {
          method: "POST",
          body: new FormData(form_data)
        })
        .then(res => res.json())
        .then(data => {
        if (data.status === "success") {
            window.location.href = data.redirect;
        } 
        if (data.status === "incorrect_Username") {
           e.preventDefault()
           if (on === false) {
               error_from_backend_login.innerHTML = "invalid username";
               error_from_backend_login.style.display = "block"
               form_data.addEventListener("change", function() {
                   error_from_backend_login.style.display = "none"
                })
            }
        }
        if (data.status === "incorrect_Password") {
              e.preventDefault()
                if (on === false) {
                    error_from_backend_login.innerHTML = "invalid password";
                    error_from_backend_login.style.display = "block"        
                    form_data.addEventListener("change", function() {
                        error_from_backend_login.style.display = "none"
                    })
                }
        } else {
            
        }
      })
    
    });
}

if (data_for_account_create) {
    
    data_for_account_create.addEventListener("submit", (e) => {
        if (username.value === '' || username.value === null || username.value === "please enter a username") {
            username_header.innerHTML = "Username field can't be empty, please enter a username"
            username_header.style.border = "solid red";
            on = true
            e.preventDefault()
        } 
        if (password.value === '' || password.value === null || password.value === "please enter a password") {
            password_header.style.border = "solid red";
            password_header.innerHTML = "Password field can't be empty, please enter a password"
            on = true
            e.preventDefault()
        } 
       
    
    });
    
    data_for_account_create.addEventListener("change", () => {
        username_header.style.border = "none"
        on = false
        if (username.value !== '' || username.value !== null) {
            username_header.innerHTML = "Please enter username"
        }
        password_header.style.border = "none"
        on = false
        if (password.value !== '' || password.value !== null) {
            password_header.innerHTML = "Please enter password"
        }
    
    })


    data_for_account_create.addEventListener("submit", function(e) {
        e.preventDefault()
    
        
        fetch("/create_account", {
          method: "POST",
          body: new FormData(data_for_account_create)
        })
        .then(res => res.json())
        .then(data => {
        if (data.status === "success") {
            window.location.href = data.redirect;
        } 
        if (data.status === "tooshort") {
           e.preventDefault()
           if (on === false) {
               error_from_backend_create.innerHTML = "Password is too short, please enter a password longer than 6 characters";
               error_from_backend_create.style.display = "block"
               data_for_account_create.addEventListener("change", function() {
                   error_from_backend_create.style.display = "none"
                })
           } else {
            
           }
        }
        })
    
    });


}

/*
if (login_button){

    login_button.addEventListener("click", goToaccount);
}
function goToaccount() {
        window.open('account_info.html', '_blank');
        window.close('login_page.html');
}
*/

/*
if (create_accou){
    create_accou.addEventListener("click", goToaccount_after_creation);
};
*/
/*function goToaccount_after_creation(){
    window.location.href = "account_info.html";
}
function goToaccount() {
        window.open('account_info.html', '_blank');
        window.close('login_page.html');
};
*/
/*if ((username.value !== '' && username.value !== null) && password.value !== '' && password.value !== null) {
            login_button.addEventListener("submit", goToaccount);
        }*/

/*
function back_end_error(){
    form_data.addEventListener("submit", function(e) {
        error_from_backend.style.display = "block"
    e.preventDefault()
    })

}*/

 /*if ((username.value !== '' && username.value !== null) && password.value !== '' && password.value !== null) {
            login_button.addEventListener("submit", goToaccount);
        }*/