import datetime
from peewee import *


from db import DATABASE

class Language(Model):
    name = CharField()
    year_created = IntegerField()
    author = CharField()
    type = CharField()
    image = CharField()

    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE