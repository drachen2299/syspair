from enum import unique
from peewee import *
import datetime

from db import DATABASE

class Type(Model):
    name = CharField(unique=True)
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE