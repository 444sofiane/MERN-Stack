# MERN Stack Workshop: Building a Full-Stack Web App

Welcome to our hands-on workshop where you'll dive into the MERN stack — MongoDB, Express.js, React, and Node.js. Join us as we guide you through the process of creating a powerful and dynamic web application from the ground up. Get ready to explore the fundamentals of each technology and learn how they seamlessly integrate to bring your ideas to life!

## MongoDB Setup

1. **Install MongoDB:**
   - Run the following commands to install MongoDB on Ubuntu:
     ```bash
     sudo apt install -y software-properties-common gnupg apt-transport-https ca-certificates
     sudo apt install -y mongodb
     ```

2. **Start MongoDB Server:**
   - Create a directory for MongoDB data:
     ```bash
     cd ~
     mkdir /data/db
     ```
   - Start the MongoDB server:
     ```bash
     mongod
     ```

3. **Connect to MongoDB Server:**
   - Open a new terminal and connect to the MongoDB server:
     ```bash
     mongo
     ```

4. **Create a New Database:**
   - In the MongoDB shell, create a new database (e.g., "mydatabase"):
     ```bash
     use mydatabase
     ```

5. **Insert Data:**
   - Create a `data.json` file with sample data.
     ```json
     [
       { "name": "Alice", "age": 28, "email": "alice@example.com" },
       { "name": "Bob", "age": 32, "email": "bob@example.com" },
       { "name": "Charlie", "age": 25, "email": "charlie@example.com" }
     ]
     ```
   - Use `mongoimport` to insert data into the MongoDB database:
     ```bash
     mongoimport --db mydatabase --collection users --file data.json --jsonArray
     ```

6. **Check if Data is Inserted:**
   - In the MongoDB shell:
     ```bash
     use mydatabase
     db.users.find()
     ```

## Express Setup

1. **Install Dependencies:**
   - Go to your Express project directory.
   - Install necessary dependencies:
     ```bash
     npm install mongoose express ejs
     ```

2. **Create `app.js`:**
   - Create an `app.js` file in your Express project.
   - Set up Mongoose, Express, and EJS in your `app.js` file.

3. **Create views/index.ejs:**

    - Inside your project, create a "views" directory.
    - Create an index.ejs file in the "views" directory with the HTML template.

## Run the Express App

- Start your Express server:

    - bash
    - Copy code
    - node app.js
    - Visit http://localhost:3000 in your browser to see the rendered MongoDB data.