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

# Route to render api.html template
@app.route("/")
def home():
    return render_template("api.html")

# Route to data to show a sample of the data
@app.route("/data/")
def data():
   
    # write a statement that finds all the items in the db and sets it to a variable
    results = list(collection.find({},{'_id':0}).limit(1000))
    return (jsonify(results))

# Route that will display the visualizations
@app.route("/visualizations/")
def viz():
   
    # write a statement that finds all the items in the db and sets it to a variable
    results = list(collection.find({},{"_id":0}).limit(10000))
    # return the render_template in index.hml file
    return render_template("index.html",html_results=results)

if __name__ == "__main__":
    app.run(debug=True)