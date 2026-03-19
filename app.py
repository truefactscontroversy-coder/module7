from flask import Flask, request, redirect, render_template, url_for, jsonify
from PIL import Image
import os
import csv
from pathlib import Path


app = Flask(__name__, static_folder="static")

UPLOAD_FOLDER = r"templates\uploaded_content\images"

app.config[r"templates\uploaded_content\images"] = UPLOAD_FOLDER



@app.route("/")

def in_home_page():
    return render_template("index.html")


@app.route("/account_creation.html")
def account_creation_page():
    return render_template("account_creation.html")

@app.route('/create_account', methods=['GET','POST'])
def create_account():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        login_cred = []
        login_cred.append(username)
        login_cred.append(password)
        if username != "" and password != "":
            with open(r"templates\uploaded_content\user_data.csv", mode="w" ) as file :
                writer = csv.writer(file)
                writer.writerow(login_cred)

            return redirect("account_info.html")
        else: 
            return "please enter a password"



with open(r"templates\uploaded_content\user_data.csv", mode="r") as file:
    reader = csv.reader(file)

    file_data = file.readline()

file_data = file_data.split(",")
        
USER_NAME = file_data.pop(0)
PASSWORD = file_data.pop(0)
USER_NAME = USER_NAME.strip()
PASSWORD = PASSWORD.strip()


@app.route("/login_page.html")
def login_page():
    return render_template("login_page.html")



@app.route('/login', methods=['GET', 'POST'])
                                         
def login():
    
    username = request.form.get('username', '').strip()
    password = request.form.get('password', '').strip()

    if username == USER_NAME and password == PASSWORD:
        return jsonify ({ 
            "status": "success",
            "redirect": url_for("account_page")
        })
    else:
        return jsonify ({
            "status": "fail"
        })




@app.route("/account_info.html", )
def account_page():
    return render_template("account_info.html")

@app.route("/create_post.html")
def create_post_page():
    return render_template("create_post.html")

@app.route("/edit_post_with_image.html")
def edit_post_with_page():
    return render_template("edit_post_with_image.html")

@app.route("/edit_post_without_image.html")
def edit_post_without_page():
    return render_template("edit_post_without_image.html")

@app.route("/message_board.html")
def message_board_page():
    return render_template("message_board.html")

@app.route("/index.html")
def home_page():
    return render_template("index.html")


@app.route('/create_post', methods=['GET','POST'])

def create_post():
    if request.method == 'POST':
        post_info = []
        location = request.form['Locations']
        date = request.form['date']
        hour = request.form['hour']
        min = request.form['minute']
        dur = request.form['duration_of_observation']
        species = request.form['species']
        image = request.files['image']
        file_pth_for_img = r"C:\Users\ajlxs\OneDrive\Documents\unit_7\module7\templates\uploaded_content\images"
        post_info.append(location)
        post_info.append(date)
        post_info.append(hour)
        post_info.append(min)
        post_info.append(dur)
        post_info.append(species)
        image_path = os.path.join(app.config[r'templates\uploaded_content\images'], image.filename)
        url_for_img = image.save(image_path)
        post_info.append(url_for_img)

        with open(r"templates\uploaded_content\user_data.csv", mode="a" ) as file :
                writer = csv.writer(file)
                writer.writerow(post_info)
        


        return redirect("account_info.html")
    
    return render_template("create_post.html")
    

         

app.run(debug=True)