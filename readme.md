# Unmind mood app

### Backend setup

- Make sure mongodb is installed e.g `brew install mongo`
- Make sure node.js is installed. I recommend `nvm`
- I'd also recommend yarn, although you can use npm. `brew install yarn`
- `npm i` or `yarn install` in `unmind` directory.

### Frontend setup

- `cd frontend`
- `yarn install`

### Usage and notes

Note: The frontend and the backend aren't hooked up yet, as I ran into some cross-origin stuff and out of time.

You can run the frontend with `yarn start` in the `/frontend` directory and then going to localhost:3006

You can run/look at the backend by running `mongod` in the `unmind` directory, running `yarn start`, and using a client like `Postman` to `GET` and `POST` to `https://localhost:3000/moods`. Screenshot attached for example.
