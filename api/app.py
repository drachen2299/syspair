from re import DEBUG
from flask import Flask, g
from flask_cors import CORS
import os


from db import DATABASE, initialize
from user import User
from language import Language
from author import Author
from survey import Survey


from resources.languages import language
from resources.users import user
from resources.authors import author
from resources.surveys import survey
DEBUG = True
PORT = 8000

app = Flask(__name__)

app.secret_key = os.environ.get('SECRET') or 'ednededdnededdneddy'

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



@app.route('/')
def index():
    return 'Welcome to Syspair!', 200

app.register_blueprint(user)
app.register_blueprint(language)
app.register_blueprint(author)
app.register_blueprint(survey)
origins=['http://localhost:3000']

if 'DATABASE_URL' in os.environ:
    initialize([User, Language, Author, Survey])
    app.config['SESSION_COOKIE_SECURE'] = True
    app.config['SESSION_COOKIE_HTTPONLY'] = False
    app.config['SESSION_COOKIE_SAMESITE'] = 'None'
    origins.append(os.environ.get('CLIENT_URL'))

CORS(app, origins=origins, supports_credentials=True)

if __name__ == '__main__':
    print(f'App.py is running on port: {PORT}')
    initialize([User, Language, Author, Survey])
    app.run(debug=DEBUG, port=PORT)