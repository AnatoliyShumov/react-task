This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

 
 
 ### Test task (Front-end developer)
The main task of this test is to implement house map configurable component.
Need to create React component that displays house map. The map should display the next data:
● image (​images)​
● address (​full_address)​
● price (​price)​
● area (​area)​
Possible option for displaying a house map (Fig. 1):
 The feature of the component should be that the order of displaying elements can be configured using the template. The following block types are defined for the template:

 ● IMAGE - image display
● ADDRESS - address
● PRICE - price
● AREA - area
For example, to display the map as shown in Fig. 1. template is described as follows:
[
{
component: "IMAGE",
field: "​images" },
{
component: "ADDRESS",
field: "full_address" },
{
component: "PRICE",
field: "price", },
{
component: "AREA",
field: "area" }
]​;
You can get house data by calling API GET ​http://demo4452328.mockable.io/properties.​
As example, below are different variants of templates with their displaying:
 1.
[
{
component: "ADDRESS",
field: "full_address" },
{
component: "IMAGE",
field: "​images" },
{
component: "PRICE",
field: "price"

 ]​;
}, {
field: "area" }
component: "AREA",
 2.
[
{
component: "ADDRESS",
field: "full_address" },
{
component: "IMAGE",
field: "​images", children: [
{
component: "PRICE",
field: "price" }
]

 }, {
field: "area" }
]​;
component: "AREA",
 All templates variants can be received by calling API
http://demo4452328.mockable.io/templates
Requirements
● The application should work;
● Use JS(ES6), React (+ redux on your choice);
● axios and/or others on your choice;
● There are no special requirements for application’s user interface (all illustrations
below are schematic), however, functional and easy-to-use interfaces will get higher rates. Adaptability will also be a plus. Using the React UI frameworks is encouraged (Bootstrap, Material UI, etc.).
● Application should work in last two versions of desktop browsers (IE, Chrome, Safari, Firefox).
 
 ● You should provide Git link to your repository with source code for this task.

