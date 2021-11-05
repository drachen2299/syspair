import datetime
from peewee import *


from db import DATABASE

class Author(Model):
    full_name = CharField()
    year_born = IntegerField()
    nationality = CharField()
    image = CharField()

    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE