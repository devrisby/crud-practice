# crud-practice

## About
- This project is deisgned for practicing fullstack development and git
- It is based on part 3 in [fullstackopen](https://fullstackopen.com/en/part3)

## Features
- Input form for adding the Movie Title & Release Year of user's favorite movie
- Success notification message on successfully adding moving to user's favorite movies
- Failure notification messsage on invalid input
- Search bar to filter user's favorite movie
- Display all of user's favorite movies or display a default message

## Tech stack
- Node.js
- Express.js
- MongoDB
- React.js

## How to run

**First time setup**
- `cd client`
- `npm i`
- `cd ..`
- `cd server`
- `yarn install`
- Create `.env`
- Copy paste contents from `sample.env` into it
- Replace value for `DEV_MONGO_URI` with your mongodb connection string if not using docker

**Running the frontend**

_must be inside `client` directory_
- If not using application backend, use mock api: `npm run server` 
- Run react: `npm run dev`

**Running the backend**

_must be inside `server` directory_
- If using docker, `docker compose up -d`
  - Check if container is running: `docker ps`
  - Shutdown container `docker compose down` (must be inside `server` directory)
  - Shutdown contianer outside of server directory: `docker container stop <container id>` (replaced `<container id>` with container id)
- Run express: `npm run dev`

## Contributors
- WHOVION
