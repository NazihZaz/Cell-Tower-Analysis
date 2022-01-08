# Import dependecies
from flask import Flask, render_template, redirect, jsonify
import pymongo

# Create an instance of Flask
app = Flask(__name__)

# setup mongo connection
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# connect to mongo db and collection
db = client.cell_towers
collection = db.towers_data


# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Return available routes
    return (f"Available Routes:<br/>"
        f"/api/v1.0/data<br/>"
        f"/api/v1.0/visualization"
)


# Route that will trigger the scrape function
@app.route("/data")
def data():
   
    # write a statement that finds all the items in the db and sets it to a variable
    results = list(collection.find()).limit(3)
    # render an index.html template and pass it the data you retrieved from the database
    return (jsonify(results))
   

if __name__ == "__main__":
    app.run(debug=True)