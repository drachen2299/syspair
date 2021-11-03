from enum import unique
from peewee import *
import datetime

from db import DATABASE

class Country(Model):
    name = CharField(unique=True)
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE
