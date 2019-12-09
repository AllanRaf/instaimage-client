## About instaimage-client

This project was created using React. It is an app where you can register as a new user, log in and post urls of your favourite images.

## Technologies used

- React
- React-Redux
- Redux middleware

## Installation

The client side should be connected with the [server](https://github.com/AllanRaf/instaimage-server) side. The server needs to be set up for the client to work.

On your terminal run the following (excluding the \$ sign):

1. $ git clone https://github.com/AllanRaf/instaimage-client
2. If you want to make your local server available to the outside world find out what your ip address by typing.
3. $ipconfig getifaddr en0
4. Copy the the ip address which will be something like "http://172.0.0.0" and type the following command replacing <YOUR IP ADDRESS> with your own one.
5. $ export REACT_APP_IMAGE_URL=<YOUR IP ADDRESS>:5000
6. Switch to the project directory instaimage-client
7. $ npm install
8. $ npm start

The app runs on your local host (http://localhost:3000) in the browser.

## Known Issues

When you log in as a user and add an image. The image displays but the username of the user who posted the image is not displayed underneath unless the page is refreshed.
