
# Import dependecies
from flask import Flask, render_template, redirect, jsonify
import pymongo
# import json
# from bson import ObjectId

# Create an instance of Flask
app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.cell_towers
collection = db.towers_data

# Create a function to encode the ObjectID
# class JSONEncoder(json.JSONEncoder):
#     def default(self, o):
#         if isinstance(o, ObjectId):
#             return str(o)
#         return json.JSONEncoder.default(self, o)



# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Return available routes
    return (f"Available Routes:<br/><hr>"
        f"To take a look at a sample of the data use this route: <b>/data<br/></b></br>"
        f"To visit our web visualizations use this route: <b>/visualizations</b>"
)
# Route that will show the data sample
@app.route("/data/")
def data():
   
    # write a statement that finds all the items in the db and sets it to a variable
    results = list(collection.find({},{'_id':0}).limit(1000))

    # return a sample of the data
    # return (jsonify(JSONEncoder().encode(results)))
    return (str(results))

# Route that will display the visualizations
@app.route("/visualizations/")
def viz():
   
    # write a statement that finds all the items in the db and sets it to a variable
    results = list(collection.find({},{"_id":0}).limit(10000))
    # return the render_template in index.hml file
    return render_template("index.html",html_results=results)

if __name__ == "__main__":
    app.run(debug=True)