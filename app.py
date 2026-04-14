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
    
    username = request.form['username']
    password = request.form['password']
    print(password)
    login_cred = []
    login_cred.append(username)
    login_cred.append(password)
    if (len(password) < 6):
        return jsonify ({
            "status": "tooshort"
        })
    else:
        with open(r"templates\uploaded_content\user_data.csv", mode="w" ) as file :
            writer = csv.writer(file)
            writer.writerow(login_cred)
        return jsonify ({ 
            "status": "success", 
            "redirect": url_for("account_page") 
        })
    
        




with open(r"templates\uploaded_content\user_data.csv", mode="r") as file:
    reader = csv.reader(file)

    file_data = file.readline()

file_data = file_data.split(",")
        
USER_NAME = file_data.pop(0)
PASSWORD = file_data.pop(0)
USER_NAME = USER_NAME.strip()
PASSWORD = PASSWORD.strip()

"""USER_NAME = "CTOuser1"
PASSWORD = "BIRDtwo12"""


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
    elif username != USER_NAME:
        return jsonify ({
            "status": "incorrect_Username"
        })
    elif password != PASSWORD:
        return jsonify ({
            "status": "incorrect_Password"
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
   
    post_info = []
    location = request.form.get('Locations')
    date = request.form.get('date')
    hour = request.form.get('hour')
    min = request.form.get('minute')
    dur = request.form.get('duration_of_observation')
    activity = request.form.get('activity')
    species = request.form.get('species')
    comments = request.form.get('comment')

    try:
        image = request.files.get('image')
    except ValueError:
        image = None
    
    post_info.append(location)
    post_info.append(date)
    post_info.append(hour)
    post_info.append(min)
    post_info.append(dur)
    post_info.append(activity)
    post_info.append(species)
    post_info.append(comments)        
    with open(r"module7\templates\uploaded_content\user_data.csv", mode="a", newline="") as file :
            writer = csv.writer(file)
            writer.writerow(post_info)    
    
    file_pth_for_img = r"C:\Users\ajlxs\OneDrive\Documents\unit_7\module7\templates\uploaded_content\images"

    if image is not None and image.filename != '':
        image_path = os.path.join(file_pth_for_img, image.filename)
        url_for_img = image.save(image_path)
        post_info.append(url_for_img)      

    return jsonify ({ 
        "status": "success", 
        "redirect": url_for("account_page") 
    })
    
    
    

         

app.run(debug=True)