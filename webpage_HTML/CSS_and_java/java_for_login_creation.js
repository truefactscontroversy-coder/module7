const login_button = document.getElementById("login") 


if (login_button){

    login_button.addEventListener("click", goToaccount);
}
function goToaccount() {
        window.open('account_info.html', '_blank');
        window.close('login_page.html');
}

const create_accou = document.getElementById("create_account");

if (create_accou){
    create_accou.addEventListener("click", goToaccount_after_creation);
};

function goToaccount_after_creation(){
    window.location.href = "account_info.html";
}

