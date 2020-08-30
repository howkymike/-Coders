import flask
from flask import request
import sys
import requests

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    userID = request.args.get('userID', default = "kamil_wierciak99", type = str)
    headers = {'content-type': 'application/json','user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36', }
    r = requests.get('https://www.hackerrank.com/rest/hackers/' + userID + '/badges', headers=headers)
    jsonRes = r.json()
    badges = 0
    for model in jsonRes["models"]:
        badges += model["stars"]
    print(badges)
    return str(badges)


app.run(host='localhost', port=4444)
