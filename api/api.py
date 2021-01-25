from flask import Flask
from dotenv import load_dotenv
import json

app = Flask(__name__)

@app.route('/home')
def get_chart_data():
    with open('./data/processors.json', 'r') as jsonFile:
        data = json.load(jsonFile)
  
    return data

@app.route('/cpus')
def get_processors_list():
    with open('./data/processors.json', 'r') as jsonFile:
        data = json.load(jsonFile)
        
    return data