# README

Link To Live App: [FundIt!](https://fundit-aa-sf-may-19.herokuapp.com/#/login)


FundIt! is a crowd-funding web application heavily based on Kickstarter. Here, innovators can share their work and raise the capital needed to launch their products. Users can back projects based on various reward levels. 

FundIt makes use of a Rails/PostgreSQL backend with React and Redux on the frontend. This single page web application was designed and developed within a two-week time period. I plan to implement a few more features down the line, such as search, category filtering, and implementation of a rich text editor.

## Features
* Implementation of frontend to backend user authentication using BCrypt.
* Form to create projects made through standard React components. No use of any external libraries other than React for components.
* Displaying all pertitnent information regarding a project.
* Users can back projects, create projects, and browse projects.
* Backing a project updates the database and creates an association between a reward, project, and user.

### Functionality of Projects
The main purpose of FundIt! is to create and showcase a project. In order to effectively do this, all appropriate data and associations had to be properly passed from the back-end to the front-end. Projects, rewards, users, and backings were all separate tables that were connected through the use of a relational database. A Project `has_many` rewards, a reward `has_many` backings, and backings `belong_to` a user. The relationships were made by making a backings a joins table, with foreign keys belonging to a reward and backer. 

<p align="center">
  <img width="700" height="400" src="https://i.imgur.com/5Oh2mDc.gif">
</p>

The backend passed up the data while avoiding N+1 queries. This was done by prefetching the required data prior to sending the response to the front-end:

![query](https://i.imgur.com/zfRbAqf.png)

## Technology

### Backend
* Ruby on Rails
* PostgreSQL
* Hosting on Heroku playform
* BCrypt used for password salting and hashing

### Frontend
* React/Redux
* React DOM
* React Router
* jQuery
