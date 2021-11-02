from flask import Blueprint, jsonify, request
from peewee import Context, DoesNotExist
from playhouse.shortcuts import model_to_dict

from country import Country

country = Blueprint('countries', __name__, url_prefix='/api/v1/countries')

@country.route('/', methods=['GET'])
def get_all_contries():
    try:
        countries = [model_to_dict(country) for country in Country]
        return jsonify(countries), 200
    except DoesNotExist:
        return jsonify(message='Error getting resources'), 500

@country.route('/', methods=['POST'])
def create_country():
    body = request.get_json()
    country = Country.create(**body)
    country_dict = model_to_dict(country)
    return jsonify(country_dict), 201

    