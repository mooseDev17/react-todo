var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current TimeStamp', now.unix());

var timestamp = 1553374433;
var currentMoment = moment.unix(timestamp);
console.log('current moment: ', currentMoment.format('MMM D, YY @ h:mm a'));

// January 3rd, 2016 @ 12:13 AM
console.log('current moment: ', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
