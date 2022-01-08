# Import dependecies
from flask import Flask, render_template, redirect, jsonify
import pymongo
import json
from bson import ObjectId

# Create an instance of Flask
app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.cell_towers
collection = db.towers_data

# Create a function to encode the ObjectID
class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)



# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Return available routes
    return (f"Available Routes:<br/>"
        f"/data<br/>"
        f"/visualization"
)


# Route that will trigger the scrape function
@app.route("/data")
def data():
   
    # write a statement that finds all the items in the db and sets it to a variable
    results = list(collection.find().limit(100))
    print(results)
    # return a sample of the data
    return (jsonify(JSONEncoder().encode(results)))
   

if __name__ == "__main__":
    app.run(debug=True)