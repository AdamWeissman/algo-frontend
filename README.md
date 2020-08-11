## Features
<li>Anonymous user can search "Algorithm Koans" that were created in the past 48 hours.</li>
<li>System is Self Cleaning... deletes anything older than 48 hours.</li>
<li>Anonymous user can also add a koan by selecting one of the predtermined algorithms.</li> 

## Technologies Used
<li>React.js</li>
<li>Redux for state</li>
<li>React Router for the illusion of a multipage app </li>
<li>Rails with Postgres for the backend and data persistence</li>

## Installation

### Backend/API:
<li>Fork, Clone, or Download the backend from github.com/AdamWeissman/algo-backend</li>
<li>Confirm that you have Postgres installed on your machine</li>
<li>From the command line, run bundle install</li>
<li>Also from the command line: create the database by running rails db:create or rails db:setup</li>
<li>Also from the CLI: Create migrations by running rails db:migrate</li>
<li>ALSO: rails db:seed to seed the database with the algorithms</li>
<li>NOTE!! Make sure the puma file in config is altered like so: port ENV.fetch("PORT") { 3001 }</li>
<li>Run "rails s" to generate a live server</li>

### Frontend/Client:
<li>Fork, Clone, or Download the frontend from github.com/AdamWeissman/algo-frontend/</li>
<li>NOTE: Make sure you have NPM installed and all relevant dependencies</li>
<li>cd into the front end</li>
<li>run 'npm start' which will run the front end on localhost:3000 </li>

<br />

# BELOW THIS LINE IS STANDARD CREATE REACT APP DOCUMENTATION...

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
