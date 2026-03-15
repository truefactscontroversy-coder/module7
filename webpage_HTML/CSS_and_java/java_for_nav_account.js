


const create_post_btn = document.getElementById("create_post")

if (create_post_btn){
    document.getElementById("create_post").addEventListener("click", goTocreate_post);
};
function goTocreate_post() {
    window.location.href = "/webpage_HTML/create_post.html";
};


const all_edit_btn = document.querySelectorAll(".edit_post")


if (all_edit_btn) {
    all_edit_btn.forEach( edit_post => {
        edit_post.addEventListener("click", function() {
            indv_post = edit_post.closest("article");
            const if_img = indv_post.querySelector("img") !== null;
        
            if (if_img) {
                goToedit_with_post();
            } else {
                goToedit_without_post();
            }
    
        });
    });
};
function goToedit_with_post() {
    window.location.href = "/webpage_HTML/edit_post_with_image.html";
}
function goToedit_without_post() {
    window.location.href = "/webpage_HTML/edit_post_without_image.html";
}

const all_del_btn = document.querySelectorAll(".delete_post")

if (all_del_btn) {
    all_del_btn.forEach( delete_post => {
        delete_post.addEventListener("click", goToedit_post);
    });
};
function goToedit_post() {
    window.location.href = "/webpage_HTML/delet_post.html";
};