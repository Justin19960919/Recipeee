# Recipeee

### Background

This is a full stack web app utilizing the MERN stack. The backend runs a Express server, constructed with MVC architecture, which talks to a remote mongoDB Atlas server. The frontend runs a React.js server which communicates with the backend Express server via services (services folder) as the entry point. The mongoDB UML diagram can be found at: [UML Diagram](https://drive.google.com/file/d/1E2uUDYjA-yFQnmoD5o5SFGSfrTb9b1bv/view)

### Installation
To __download__ the project, simply git clone, or download the .zip file from github.
Once downloaded to your local machine:

To spin up backend/frontend server, go into the backend/frontend folder, and do the following:

1. Download all dependencies:
```
npm install
```
2. Then start server, using:
```
npm start
```

For security purposes, we will not provide mongoDB connection URL, so you will need to either create a local database, or remote one.
The recipes.csv data file will be provided in the repo for you to import to the database.

To import the .csv file into local mongoDB database:
1. Download mongo database tools, with this link [MONGO DATABASE TOOLS](https://www.mongodb.com/try/download/database-tools)
2. Then import csv to database via:
```
mongoimport -d [Database name] -c [Collections name] --type csv --file [locations of csv file] --headerline
```

### Functionality

This website that provides functionality:
- A visitor can register to become an user (NORMAL, PAID USER, ADMIN). Once becoming an user, he/she can login or logout, and access the profile page.
- - A user can see all followed users, and all liked recipes in Profile page.
- A visitor / user can search for recipes via a search bar, and see other ppl's comments, as well as leave comments.
- An admin user can delete any review, a user can delete his/her own review, a user cannot delete other people's reviews.
- A user can follow other users, and visit other user's profile page, displaying only public information. An admin can go to any profile, and see all information.
- A user can star (save) or like a recipe. The starred recipes will show up on the home page if the user is logged in, otherwise default images are displayed. A total of 5 starred recipes by the user will show on the home page.


### Deploy Architecture
We used AWS as our cloud service provider, and used EC2 instances as our servers for both backend and frontend. We also set up load balancers for autoscaling, which will spin up more servers if CPU capacity is more than 75%.
For more complete information about the service architecture and instructions, please refer to this [google-doc](https://docs.google.com/document/d/14JMFLfPNHAKBt3-jvD2Vnw_3QoCJuXeDr8CZL8AVm4c/edit?usp=sharing)








