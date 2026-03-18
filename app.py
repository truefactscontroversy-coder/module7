from flask import Flask, request, redirect, render_template, url_for
import os

app = Flask(__name__)

UPLOAD_FOLDER = "uploaded_content"

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

@app.route("/")

def home_page():
    return open("webpage_HTML\index.html").read()
    
@app.route("/login_page.html")
def login_page():
    return open("webpage_HTML\login_page.html")

@app.route("/account_info.html")
def account_page():
    return open("webpage_HTML\account_info.html")


USERNAME = ''
PASSWORD = ''

@app.route('/uploaded_content', methods=['GET', 'POST'])
                                         
def upload():
    file = request.files["form"]
    if (file):
        if (request.method == 'POST'):
            username = request.form['username']
            password = request.form['password']
            if (username != "" and password != ""):
                print("hello")
            else:
                return "Invalid login"

app.run(debug=True)