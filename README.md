Hi all,
HostelManagement is a full stack App with a room recommendation system.
We have used Nodejs to build our backend Api and React for building our frontend. We have also used python to build our recommendation engine.

To run this application.
Makes sure that Nodejs and pyhon3 are installed on your system.

Step 1: clone this repository on you local machine
        Then first run the node server by opening a new terminal at folder where you cloned project.
        move to backend directory: cd hostelManagement/backend/
        install dependencies: npm install
        run server: npm run start
step 2: run the flask server
        Install the required dependencies from pip: flask, flask_cors, pymongo, pandas, numpy, sklearn, dnsfinder.
        cd hostelmanagement/recommendation
        On the terminal, run: set FLASK_APP = app
                              flask run
        The Flask server gets turned on localhost:5000
       

Step 3: run the frontend:
        move to frontend/hostelmanagement/: cd hostelManagement/frontend/hostelmanagement
        install dependencies: npm install
        run frontend: npm run start
App will open on localhost:3000
