from re import DEBUG
from flask import Flask, g
from country import Country
from db import DATABASE, initialize
from user import User
from language import Language
from country import Country
from ratings import Ratings
from type import Type

from resources.languages import language
from resources.ratings import rating
from resources.users import user
from resources.countries import country
from resources.types import type
DEBUG = True
PORT = 8000

app = Flask(__name__)

@app.before_request
def before_request():
    """Connect to the database before each request."""
    g.db = DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response

app.register_blueprint(language)
app.register_blueprint(rating)
app.register_blueprint(user)
app.register_blueprint(country)
app.register_blueprint(type)

@app.route('/')
def index():
    return 'Welcome to Syspair!', 200

if __name__ == '__main__':
    print(f'App.py is running on port: {PORT}')
    initialize([User, Language, Ratings, Country, Type])
    app.run(debug=DEBUG, port=PORT)