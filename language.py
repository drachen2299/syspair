import datetime
from peewee import *

from db import DATABASE

class Language(Model):
    name = CharField()
    type = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE