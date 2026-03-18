from flask import Flask, request, redirect, render_template, url_for
import os

app = Flask(__name__, static_folder="static")

UPLOAD_FOLDER = "uploaded_content"

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

@app.route("/")

def home_page():
    return render_template("index.html")


@app.route("/login_page.html")
def login_page():
    return render_template("login_page.html")



@app.route('/login', methods=['GET','POST'])
                                         
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if username == "" or password == "":
            return "Invalid login"
        else:
            return redirect("/account_info.html")

    return render_template("login_page.html")

@app.route("/account_info.html")
def account_page():
    return render_template("account_info.html")

@app.route("/create_post.html")
def create_post_page():
    return render_template("create_post.html")

@app.route("/edit_post_with_image.html")
def edit_post_with_page():
    return render_template("edit_post_with_image_post.html")

@app.route("/edit_post_without_image.html")
def edit_post_without_page():
    return render_template("edit_post_without_image_post.html")

@app.route("/message_board.html")
def message_board_page():
    return render_template("message_board.html")

app.run(debug=True)