
const AWS = require('aws-sdk');

console.log("Worker started...");

setInterval(() => {
  console.log("Processing task...");
}, 5000);
