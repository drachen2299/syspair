from re import DEBUG
from flask import Flask, g
from flask_cors import CORS


from db import DATABASE, initialize
from user import User
from language import Language


from resources.languages import language
from resources.users import user
DEBUG = True
PORT = 8000

app = Flask(__name__)
CORS(app)
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
app.register_blueprint(user)


@app.route('/')
def index():
    return 'Welcome to Syspair!', 200

if __name__ == '__main__':
    print(f'App.py is running on port: {PORT}')
    initialize([User, Language])
    app.run(debug=DEBUG, port=PORT)