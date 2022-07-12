from http import client
from flask import Flask,request,jsonify
from flask_cors import CORS
import recc
from pymongo import MongoClient
from pymongo import MongoClient # Database connector
import os
from flask.json import jsonify
import pandas as pd
import json
app = Flask(__name__)
CORS(app)


def get_database():
    CONNECTION_STRING = "mongodb+srv://razzan:aaBYj%40%24d6JWYzqv@cluster0.dx7ix.mongodb.net/test?authSource=admin&replicaSet=atlas-4p3brm-shard-0&readPreference=primary&ssl=true"
    client = MongoClient(CONNECTION_STRING)
    return client['hostelRoomBooking']



@app.route('/hostel', methods=['GET'])
def recommend():
    db = get_database()
    users = db["surveys"]
    rooms = db["rooms"]
    userDetails = users.find()
    df = pd.DataFrame(list(userDetails))
    for user in userDetails:
        df.append(user)
    df.to_csv('hostelData.csv',header=True)
    res = recc.results(request.args.get("usn"))

    return jsonify(res)

if __name__=='__main__':
    app.run(port = 5000, debug = True)
    

    
