#import necessary libraries
from flask import Flask, render_template, redirect
from flask_restful import Resource, Api, reqparse
import os

try:
    from flask_cors import CORS
except ImportError:
    import os
    parentdir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.sys.path.insert(0, parentdir)

    from flask_cors import CORS



#create Flask app instance
app = Flask(__name__)
api = Api(app)

@app.route("/")
# @cross_origin()
def index():
    return render_template("indexTransit.html")

@app.route("/timeSeriesFunding")
def timeSeriesFunding():
    return render_template("timeSeriesFunding.html")

@app.route("/naturalLanguage")
def naturalLanguage():
    return render_template("naturalLanguage.html")

@app.route("/timeSeriesFunding")
def timeSeriesFunding():
    return render_template("timeSeriesFunding.html")

@app.route("/transitAccesibility")
def transitAccesibility():
    return render_template("transitAccesibility.html")

@app.route("/fundingBySource")
def fundingBySource():
    return render_template("fundingBySource.html")

if __name__ == '__main__':
    app.run(debug=True, port = 1123)