from flask import Blueprint, json, jsonify, request
from flask_login.utils import login_required, logout_user
from peewee import DoesNotExist
from flask_login import login_user
from playhouse.shortcuts import model_to_dict

from user import User

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
# @user.route('/<username>', methods=['GET'])
# def get_username(username):
#     try:
#         user = User.get(User.username == username)
#         user_dict = model_to_dict(user)
#         return jsonify(user_dict), 200
#     except DoesNotExist:
#         return jsonify(message="Resource does not exist!"), 404
#PUT by id

@user.route('/sign-up', methods=['POST'])
def create_user():
    body = request.get_json()
    user = User.create(**body)
    user_dict = model_to_dict(user)
    return jsonify(user_dict), 201

@user.route('/login', methods=['POST'])
def create_user():
    body = request.get_json()
    body['username'] = body['username'].lower()
    try:
        user = User.get(User.username == body['username'])
        user_dict = model_to_dict(user)
        login_user()
        return jsonify(user_dict), 201
    except DoesNotExist:
        return jsonify(message="that username does not exist!"), 401

@user.route('/logout')
def logout():
    logout_user()
    return jsonify(message="Logged out!"), 200
    
@user.route('/<int:id>', methods=['DELETE'])
def delete_user(id):
    (User
        .delete()
        .where(User.id == id)
        .execute())
    return jsonify(message="User Survey Deleted!"), 204
