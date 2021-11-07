
   
from enum import unique
from peewee import *
import datetime

from language import Language
from db import DATABASE

class User(Model):
    username = CharField(unique=True)
    language_id = ForeignKeyField(Language, backref='languages')
    age_range = CharField()
    industry = CharField()
    type_of_dev = CharField()

    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE