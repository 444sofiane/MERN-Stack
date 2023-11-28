# MERN Stack Workshop: Building a Full-Stack Web App

Welcome to our hands-on workshop where you'll dive into the MERN stack — MongoDB, Express.js, React, and Node.js. Join us as we guide you through the process of creating a powerful and dynamic web application from the ground up. Get ready to explore the fundamentals of each technology and learn how they seamlessly integrate to bring your ideas to life!


Install mongodb :
sudo apt install -y software-properties-common gnupg apt-transport-https ca-certificates
sudo apt install -y mongodb

Start mongo db serv:
cd mongoDB
mkdir /data/db
mongod

Connect to the serv :
New terminal and mongo

Create new database :
use mydatabase

Insert data: 
Create a data.json and fill it :
exemple:
[
  { "name": "Alice", "age": 28, "email": "alice@example.com" },
  { "name": "Bob", "age": 32, "email": "bob@example.com" },
  { "name": "Charlie", "age": 25, "email": "charlie@example.com" }
]

Open terminal and navigate to the dir where the .json is located
mongoimport --db mydatabase --collection users --file data.json --jsonArray
mydatabase: The name of your MongoDB database.
users: The name of the collection where you want to insert the data.
data.json: The path to your data file.
--jsonArray: Specifies that the input file is a JSON array.

Check if data is inserted:
mongo
use mydatabase
db.users.find()


connect to express:
go to an Express dir
npm install mongoose (connect to mydatabase)
npm install express (create app)
npm install ejs (html template to visualise mydatabase)
create app.js
check how to use mongoose, express and ejs
