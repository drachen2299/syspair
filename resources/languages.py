from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from language import Language

language = Blueprint('languages', __name__, url_prefix='/api/v1/languages')

#GET all languages for testing
@language.route('/', methods= ['GET'])
def get_all_languages():
    try:
        languages = [model_to_dict(language) for language in Language]
        return jsonify(languages), 200
    except DoesNotExist:
        return jsonify(message="Error getting resources"), 500
#GET one language by id
@language.route('/<int:id>', methods= ['GET'])
def get_single_language(id):
    try:
        language = Language.get_by_id(id)
        return jsonify(language), 200
    except:
        return jsonify(message="Resource does not exist!"), 404
#PUT by id
@language.route('/<int:id>', methods= ['PUT'])
def update_language(id):
    body = request.get_json()
    if (id != Language.id):
        return jsonify(message="Resource does not exist!"), 404
    (Language
        .update(**body)
        .where(language.id == id)
        .execute())
    return jsonify(model_to_dict(Language.get_by_id(id))), 200

#POST language

@language.route('/', methods=['POST'])
def create_language():
    body = request.get_json()
    language = Language.create(**body)
    language_dict = model_to_dict(language)
    return jsonify(language_dict), 201
    