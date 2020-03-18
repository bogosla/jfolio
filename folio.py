#!/usr/bin/env python
# encoding: utf-8
"""
folio.py

Created by Author Name on 20-03-17.
Copyright (c) 2020 Copyright Holder. All rights reserved.
"""

from cs50 import SQL
from flask import Flask, render_template, request

app = Flask(__name__)
def db():
    db = SQL('sqlite:///data.db')
    db.execute("""CREATE TABLE IF NOT EXISTS contact
    (id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(25) NOT NULL,
    email VARCHAR(80) NOT NULL,
    msg TEXT )""")
    return db

@app.route('/', methods=['GET', 'POST'])
def index():
    sent = None
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        msg = request.form.get('msg')
        if name and email and msg:
            x = db().execute("""INSERT INTO contact
            (name,email,msg) VALUES(?,?,?)""", (name, email, msg))
            if x:
                sent = True     
        return render_template('folio.html', sent=sent)
    return render_template('folio.html', sent=sent)

@app.route('/admin')
def admin():
    x = db().execute("SELECT * FROM contact")
    
    return render_template('admin.html', has=x)