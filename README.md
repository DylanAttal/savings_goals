# Savings Goals

<p align="center">
<img src="client/src/images/savings-goals.gif">
</p>

### See it live

https://savings-goals-app.herokuapp.com/ <br/><br/>
(I deployed to the free version of Heroku. It will take a few seconds to wake up.)

### Summary

The goal of this project was to create a savings goals app for a fictional bank named Acme Bank. I authenticated users through Auth0, using their Google credentials to sign up and log in to the app. Users are able to view, create, update, and delete their savings goals.

This is a Single Page Application with React on the front-end and Rails on the back-end. I used React Router for routing and Axios for API calls. The app has a PostgreSQL database with only two tables: Users and Goals.

I broke each Goal into its own component and passed each Goal its particular information through props after using a GET request on the Savings page to populate the state with an array of all the current user's goals.

Users can then create new goals with a goal name, a target amount, and an amount for money already saved. Users can go on to change that target amount, add money to the saved amount, or delete the goal altogether.

I deployed the app to Heroku.

### Project Goals

- [x] Create a savings goals app
- [x] Users should be authenticated and able to log in and log out
- [x] Users can view, create, update, and delete their savings goals
- [x] Savings goals must have a name, a target savings amount, and the amount currently saved
- [x] Users can add money to the amount currently saved

### Technologies Used

HTML, CSS, JavaScript, React, Axios, React Router, Ruby, Rails, PostgreSQL, JWT, Auth0
