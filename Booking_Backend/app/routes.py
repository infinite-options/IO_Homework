# app/routes.py

from flask import jsonify
from app import app, mysql
from datetime import timedelta

def serialize_row(row, description):
    result = {}
    for index, col in enumerate(description):
        if isinstance(row[index], timedelta):
            result[col[0]] = str(row[index])
        else:
            result[col[0]] = row[index]
    return result

@app.route('/reservations', methods=['GET'])
def get_reservation():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Reservation")
    rows = cur.fetchall()
    description = cur.description
    cur.close()
    result = [serialize_row(row, description) for row in rows]
    return jsonify(result)

@app.route('/tenants', methods=['GET'])
def get_tenant():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Tenant")
    rows = cur.fetchall()
    description = cur.description
    cur.close()
    result = [serialize_row(row, description) for row in rows]
    return jsonify(result)

@app.route('/issues', methods=['GET'])
def get_issue():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Issue")
    rows = cur.fetchall()
    description = cur.description
    cur.close()
    result = [serialize_row(row, description) for row in rows]
    return jsonify(result)
