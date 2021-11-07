
import datetime
from peewee import *

from author import Author
from db import DATABASE

class Language(Model):
    name = CharField()
    year_created = IntegerField()
    author_id = ForeignKeyField(Author, backref='authors')
    type = CharField()
    image = CharField()

    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE