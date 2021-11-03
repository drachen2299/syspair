from peewee import *

from user import User
from language import Language
from country import Country
from db import DATABASE

class Ratings(Model):
    popularity = IntegerField()
    usage = IntegerField()
    pay = IntegerField()
    country_id = ForeignKeyField(Country, backref='countries')
    user_id = ForeignKeyField(Language, backref='users')
    language_id = ForeignKeyField(Language, backref='languages')

    class Meta:
        database = DATABASE
