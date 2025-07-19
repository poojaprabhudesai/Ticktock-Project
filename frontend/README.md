# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)


## Install dependencies
npm install

## Start the development server
npm start

## Run json server
cd frontend
json-server --watch db.json --port 3001

## Tech Stack
 React – Frontend library
 React Router DOM – For client-side routing
 Tailwind CSS – Utility-first styling
 REST API – Used for handling user data and entries
 Mock Data – Used for login authentication (locally or via tools like JSON Server)

## Authentication

The login page checks credentials against mock user data fetched from a REST API endpoint.

Example mock setup: 
 "users": [
    {
      "id": 1,
      "email": "user1@example.com",
      "password": "password123"
    },
]
##  Features
Login authentication (mocked)
Add work entries (project, type, description, hours)
Responsive design across devices
Client-side routing for seamless navigation

## API Notes
API endpoints are REST-based.
Currently, mock data ( via JSON Server) is used for:
/users – for validating login credentials
Future endpoints could include /entries, /projects, etc.

## Time Spent
Initial setup & designing pages- 5–6 hours 
Making the app responsive - 2 hours
Implementing mock REST API for login - 2hours



