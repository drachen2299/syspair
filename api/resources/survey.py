from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from survey import Survey

survey = Blueprint('surveys', __name__, url_prefix='/api/v1/surveys')

#GET all surveys for testing
@survey.route('/', methods= ['GET'])
def get_all_surveys():
    try:
        surveys = [model_to_dict(survey) for survey in Survey]
        return jsonify(surveys), 200
    except DoesNotExist:
        return jsonify(message="Error getting resources"), 500
#GET one survey by id
@survey.route('/<int:id>', methods= ['GET'])
def get_single_survey(id):
    try:
        survey = Survey.get_by_id(id)
        return jsonify(survey), 200
    except:
        return jsonify(message="Resource does not exist!"), 404

#PUT by id
@survey.route('/<int:id>', methods= ['PUT'])
def update_survey(id):
    body = request.get_json()
    # if (survey.id != survey.id):
    #     return jsonify(message="Resource does not exist!"), 404
    (Survey
        .update(**body)
        .where(Survey.id == id)
        .execute())
    return jsonify(model_to_dict(Survey.get_by_id(id))), 200

#POST survey

@survey.route('/', methods=['POST'])
def create_survey():
    body = request.get_json()
    survey = Survey.create(**body)
    survey_dict = model_to_dict(survey)
    return jsonify(survey_dict), 201
    
@survey.route('/<int:id>', methods=['DELETE'])
def delete_survey(id):
    (Survey
        .delete()
        .where(survey.id == id)
        .execute())
    return jsonify(message="survey Survey Deleted!"), 204
