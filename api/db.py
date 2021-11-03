from peewee import PostgresqlDatabase

DATABASE = PostgresqlDatabase('syspair_db')


def initialize(tables):
    DATABASE.connect()
    DATABASE.create_tables(tables, safe=True)
    print('Tables successfully created!')
    DATABASE.close()