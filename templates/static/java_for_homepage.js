document.addEventListener("DOMContentLoaded", function() {

    function change_post() {
        const new_post = document.getElementById("hidden_article");
        const old_post = document.getElementById("post2");

        old_post.style.display = "none";
        new_post.style.display = "inline-flex";
    }

    setTimeout(change_post, 2000);

});