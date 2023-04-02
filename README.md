# Getting Started with Cleanify

Cleanify is a web application that removes instances of a duplicate character from texts or strings, leaving just one occurrence of the character in the string, to simply put, it is a duplicate character remover. <br/>
Click the link below to go to the live view of cleanify <br/>
[CLEANIFY LIVE PREVIEW](https://cleanify-app.netlify.app/)

## Installation

To install the app, simply clone the repository and run npm install in the project directory:

```bash
git clone https://github.com/babboe1/houseware---frontend-engineering-octernship-babboe1.git
cd cleanify
npm install

```

## Running the App

To run the app locally, use the npm start command:

```bash
npm start
```

This will start the development server and open the app in your default browser at "http://localhost:3000".

## Building the App

To create a production build of the app, use the npm run build command:

```bash
npm run build
```

This will create a build directory containing optimized static assets that can be deployed to a web server.

## Testing the App

```bash
npm test
```

This will run the test suite and output the results to the console.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# The Challenge
## User's expectation
Users should be able to:

Screen 1
- Input a string of text in the space provided
- click the "submit" button when input is validated
- redirect to "/action" page when submit button is clicked

Screen 2
- click on the delete button on the card to remove all other instances of the character on the card
- see the original and cleaned text in the space provided
- click on the "Go Back" button to go to the previous screen
- retain previous result on the page even after reloading the page

Rarity
- if link was copied from second screen and pasted into a browser that has no history with cleanify, users should be redirected to the home screen (screen 1)

## Assumption
- uppper case and lower case of the same character are considered different characters
- white spaces between texts, characters or string are considered as invalid characters, hence will be automatically removed on screen 2
- white space only and empty strings are considered a non-valid entry
- numbers and special character are considered as a valid character


## Contributing

If you would like to contribute to the project, please follow these steps:

-  Fork the repository
-  Create a new branch for your feature or bug fix
-  Write your code and tests
-  Push your changes to your forked repository
-  Submit a pull request to the original repository

## Resources
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
