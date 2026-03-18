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



@app.route('/login_page.html', methods=['GET','POST'])
                                         
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        if username == "" or password == "":
            return "Invalid login"
        else:
                redirect("/account_info.html")

    return render_template("login_page.html")

@app.route("/account_info.html")
def account_page():
    return render_template("account_info.html")


app.run(debug=True)