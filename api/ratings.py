from peewee import *

from user import User
from language import Language
from country import Country
from db import DATABASE

class Ratings(Model):
    popularity = IntegerField()
    usage = IntegerField()
    market_share = IntegerField()
    expandability = IntegerField()
    pay = IntegerField()
    country_id = ForeignKeyField(Country, backref='countries')
    community = IntegerField()
    loved = IntegerField()
    dreaded = IntegerField()
    wanted = IntegerField()
    user_id = ForeignKeyField(Language, backref='users')
    language_id = ForeignKeyField(Language, backref='languages')

    class Meta:
        database = DATABASE
