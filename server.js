//reference this article https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
//explores how to handle or use environment variables

//***COMMAND LINE access */
//server.js
// const port = process.env.PORT;
// console.log(`Your port is ${port}`)

//** pulling directly from the .env file*/
//server.js
// console.log(`Your port is ${process.env.PORT}`); //undefined
// const dotenv = require('dotenv');
// dotenv.config();
// console.log(`Your port is ${process.env.PORT}`);//8626

//**using a module to configure all env variables and once then requiring module */
//server.js
const { port } = require('./config');
console.log(`Your port is ${port}`);

