from enum import unique
from peewee import *
import datetime

from language import Language
from country import Country
from db import DATABASE

class User(Model):
    username = CharField(unique=True)
    industry = CharField()
    country_id = ForeignKeyField(Country, backref='countries')
    language_id = ForeignKeyField(Language, backref='languages')
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE
