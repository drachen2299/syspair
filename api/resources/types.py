from flask import Blueprint, jsonify, request
from peewee import Context, DoesNotExist
from playhouse.shortcuts import model_to_dict

from type import Type

type = Blueprint('types', __name__, url_prefix='/api/v1/types')

@type.route('/', methods=['GET'])
def get_all_contries():
    try:
        types = [model_to_dict(type) for type in Type]
        return jsonify(types), 200
    except DoesNotExist:
        return jsonify(message='Error getting resources'), 500

@type.route('/', methods=['POST'])
def create_type():
    body = request.get_json()
    type = Type.create(**body)
    type_dict = model_to_dict(type)
    return jsonify(type_dict), 201

    