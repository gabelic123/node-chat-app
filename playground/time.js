const moment = require('moment');

// var date = moment();
// date.add(2, 'year').subtract(10, 'months');
// console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));