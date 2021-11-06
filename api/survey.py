from enum import unique
from peewee import *
import datetime

from language import Language
from user import User
from db import DATABASE

class Survey(Model):
    user_id = ForeignKeyField(Language, backref='users')
    language_id = ForeignKeyField(Language, backref='languages')
    age_range = CharField()
    industry = CharField()
    type_of_dev = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE