import flask
import sys
from bs4 import BeautifulSoup
from selenium import webdriver

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET'])
def home():
    driver = webdriver.Chrome('/home/kml/Downloads/chromedriver_linux64/chromedriver')
    url = 'https://www.hackerrank.com/' + str(sys.argv[1])
    driver.get(url)
    content = driver.page_source
    soup = BeautifulSoup(content, 'html.parser')
    stars = soup.find_all('svg', class_="badge-star")
    number = len(stars)
    return str(number)


app.run()
