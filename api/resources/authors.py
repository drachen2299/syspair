from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from author import Author

author = Blueprint('authors', __name__, url_prefix='/api/v1/authors')

#GET all authors for testing
@author.route('/', methods= ['GET'])
def get_all_authors():
    try:
        authors = [model_to_dict(author) for author in Author]
        return jsonify(authors), 200
    except DoesNotExist:
        return jsonify(message="Error getting resources"), 500
#GET one author by id
@author.route('/<int:id>', methods= ['GET'])
def get_single_author(id):
    try:
        author = Author.get_by_id(id)
        return jsonify(author), 200
    except:
        return jsonify(message="Resource does not exist!"), 404
#PUT by id
@author.route('/<int:id>', methods= ['PUT'])
def update_author(id):
    body = request.get_json()
    if (id != author.id):
        return jsonify(message="Resource does not exist!"), 404
    (Author
        .update(**body)
        .where(author.id == id)
        .execute())
    return jsonify(model_to_dict(author.get_by_id(id))), 200

#POST author

@author.route('/', methods=['POST'])
def create_author():
    body = request.get_json()
    author = Author.create(**body)
    author_dict = model_to_dict(author)
    return jsonify(author_dict), 201
    