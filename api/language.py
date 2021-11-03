import datetime
from peewee import *

from type import Type
from db import DATABASE

class Language(Model):
    name = CharField()
    type_id = ForeignKeyField(Type, backref='types')
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE