from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from user import User
from language import Language

user = Blueprint('users', __name__, url_prefix='/api/v1/users')

#GET all users for testing
@user.route('/', methods= ['GET'])
def get_all_users():
    try:
        users = [model_to_dict(user) for user in User]
        return jsonify(users), 200
    except DoesNotExist:
        return jsonify(message="Error getting resources"), 500
#GET one user by id
@user.route('/<int:id>', methods= ['GET'])
def get_single_user(id):
    try:
        user = User.get_by_id(id)
        return jsonify(user), 200
    except:
        return jsonify(message="Resource does not exist!"), 404
#GET one user by name
@user.route('/<string:username>', methods=['GET'])
def get_username(username):
    try:
        user = [model_to_dict(username) for username in User]
        return jsonify(user), 200
    except DoesNotExist:
        return jsonify(message="Resource does not exist!"), 404
#PUT by id
@user.route('/<int:id>', methods= ['PUT'])
def update_user(id):
    body = request.get_json()
    if (id != User.id):
        return jsonify(message="Resource does not exist!"), 404
    (User
        .update(**body)
        .where(User.id == id)
        .execute())
    return jsonify(model_to_dict(User.get_by_id(id))), 200

#POST user

@user.route('/', methods=['POST'])
def create_user():
    body = request.get_json()
    user = User.create(**body)
    user_dict = model_to_dict(user)
    return jsonify(user_dict), 201
    