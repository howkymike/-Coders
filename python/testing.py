# Opis: API sciagajace badge od uzytkownika z hackerrank
# Wystartowanie: python testing.py
# URL: localhost:4444/?userID=<USERID>
import flask
from flask import request
import sys
from bs4 import BeautifulSoup
from selenium import webdriver

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    userID = request.args.get('userID', default = "kamil_wierciak99", type = str)
    driver = webdriver.Chrome('/home/kml/Downloads/chromedriver_linux64/chromedriver')
    url = 'https://www.hackerrank.com/' + userID
    driver.get(url)
    content = driver.page_source
    soup = BeautifulSoup(content, 'html.parser')
    stars = soup.find_all('svg', class_="badge-star")
    driver.close()
    number = len(stars)
    return str(number)


app.run(host='localhost', port=4444)
