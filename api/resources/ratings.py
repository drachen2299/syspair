from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from ratings import Ratings

rating = Blueprint('ratings', __name__, url_prefix='/api/v1/ratings')

#GET all ratings for testing
@rating.route('/', methods= ['GET'])
def get_all_ratings():
    try:
        ratings = [model_to_dict(rating) for rating in Ratings]
        return jsonify(ratings), 200
    except DoesNotExist:
        return jsonify(message="Error getting resources"), 500
#GET one rating by id
@rating.route('/<int:id>', methods= ['GET'])
def get_single_rating(id):
    try:
        rating = Ratings.get_by_id(id)
        return jsonify(rating), 200
    except:
        return jsonify(message="Resource does not exist!"), 404
#PUT by id
@rating.route('/<int:id>', methods= ['PUT'])
def update_rating(id):
    body = request.get_json()
    if (id != rating.id):
        return jsonify(message="Resource does not exist!"), 404
    (Ratings
        .update(**body)
        .where(Ratings.id == id)
        .execute())
    return jsonify(model_to_dict(Ratings.get_by_id(id))), 200

#POST rating

@rating.route('/', methods=['POST'])
def create_rating():
    body = request.get_json()
    rating = Ratings.create(**body)
    rating_dict = model_to_dict(rating)
    return jsonify(rating_dict), 201

#DELETE rating
@rating.route('/<int:id>', methods=['DELETE'])
def delete_ratings(id):
    (Ratings
            .delete()
            .where(Ratings.id == id)
            .execute())
    return jsonify(message="Resource successfully deleted!"), 204


