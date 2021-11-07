from peewee import *
import datetime

from db import DATABASE

class User(Model):
    username = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)
    class Meta:
        database = DATABASE
