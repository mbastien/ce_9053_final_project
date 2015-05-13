Marc Bastien
5/12/15

Final Project for CE 9053 - Front End Development with the MEAN Stack

Project viewable on Heroku at :

https://arcane-oasis-4742.herokuapp.com/

To Run Locally:

Install Node Dependencies

$ npm install

Start Mongo

$ mongod --nojournal

(If running for the first time) Add {username:'prof', password:'p'} to the users collection in the my_world db

$ mongo
MongoDB shell version: 2.6.9
connecting to: test
> use my_world
switched to db my_world
> db.users.save({username:'prof', password:'p'})
WriteResult({ "nInserted" : 1 })

Start the server:
$ ENV=development JWT_SECRET=bar CONN=mongodb://localhost/my_world nodemon server.js

or use gulp:
$ gulp dev:server

Preview should be running here : https://ce-9053-final-project-mbastien.c9.io/

To minify files run:
$ gulp js

To minify files and run server locally type:
$ gulp prod:server

To deploy to Heroku: (already done) instructions here : https://devcenter.heroku.com/articles/getting-started-with-nodejs
$ heroku login

$ heroku create

$ git push heroku master

Heroku wull run the command in the "Procfile".  In this case the command is gulp prod:heroku
ENV, JWT_SECRET, and CONN are stored in my Heroku project.  CONN=mongodb://<username>:<password>@ds061228.mongolab.com:61228/ce_9053_final_project_db

